package main

import (
	"fmt"
	"log"
	"os"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

// Blog model
type Blog struct {
	ID          uint      `gorm:"primaryKey;autoIncrement"`
	Title       string    `gorm:"unique;not null"`
	Description string    `gorm:"not null"`
	Content     string    `gorm:"not null"`
	Src         string    `gorm:"not null"`
	CtaLink     string    `gorm:"default:/"`
	Avatar      bool      `gorm:"default:false"`
	Name        string    `gorm:"not null"`
	PostedAt    time.Time `gorm:"autoCreateTime"`
}

var db *gorm.DB
var err error

func initDB() {
	err = godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	dbURI := os.Getenv("DBURI")
	db, err = gorm.Open(postgres.Open(dbURI), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to the database:", err)
	}
	fmt.Println("Successfully connected to the database!")
	err = db.AutoMigrate(&Blog{})
	if err != nil {
		log.Fatal("Failed to migrate database schema:", err)
	}
}

func main() {
	// Initialize database
	initDB()

	// Close database connection when main function exits
	sqlDB, err := db.DB()
	if err != nil {
		log.Fatal("Failed to get database instance:", err)
	}
	defer sqlDB.Close()

	// Create Fiber app
	app := fiber.New()

	// Routes
	app.Get("/blogs", getBlogs)
	app.Post("/blogs", createBlog)
	app.Patch("/blogs", updateBlog)
	app.Delete("/blogs", deleteBlog)

	// Start server
	log.Fatal(app.Listen(":3000"))
}

// Handlers
func getBlogs(c *fiber.Ctx) error {
	var blogs []Blog
	result := db.Order("posted_at desc").Find(&blogs)
	if result.Error != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"success": false,
			"message": "Internal server error",
			"data":    nil,
		})
	}
	if len(blogs) == 0 {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"success": false,
			"message": "No blogs found",
			"data":    nil,
		})
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"success": true,
		"message": "Blogs retrieved successfully",
		"data":    blogs,
	})
}

func createBlog(c *fiber.Ctx) error {
	var body Blog
	if err := c.BodyParser(&body); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"success": false,
			"message": "Invalid JSON format",
			"data":    nil,
		})
	}

	if body.Title == "" || body.Description == "" || body.Content == "" || body.Name == "" || body.Src == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"success": false,
			"message": "Missing required fields",
			"data":    nil,
		})
	}

	// body.CtaLink = "/"
	result := db.Create(&body)
	if result.Error != nil {
		// if dbError, ok := result.Error.(*gorm.Error); ok && dbError.Code == "23505" {
		// 	return c.Status(fiber.StatusConflict).JSON(fiber.Map{
		// 		"success": false,
		// 		"message": "A blog with the same title already exists",
		// 		"data":    nil,
		// 	})
		// }
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"success": false,
			"message": "Failed to create blog",
			"data":    nil,
		})
	}
	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"success": true,
		"message": "Blog created successfully",
		"data":    body,
	})
}

func updateBlog(c *fiber.Ctx) error {
	var body Blog
	if err := c.BodyParser(&body); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"success": false,
			"message": "Invalid JSON format",
			"data":    nil,
		})
	}

	if body.ID == 0 {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"success": false,
			"message": "Missing Id field",
			"data":    nil,
		})
	}

	var blog Blog
	result := db.First(&blog, body.ID)
	if result.Error != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"success": false,
			"message": "Blog not found",
			"data":    nil,
		})
	}

	blog.Title = body.Title
	blog.Description = body.Description
	blog.Content = body.Content
	blog.Src = body.Src
	blog.CtaLink = body.CtaLink
	blog.Avatar = body.Avatar
	blog.Name = body.Name

	if err := db.Save(&blog).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"success": false,
			"message": "Failed to update blog",
			"data":    nil,
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"success": true,
		"message": "Blog updated successfully",
		"data":    blog,
	})
}

func deleteBlog(c *fiber.Ctx) error {
	var body struct {
		ID uint `json:"id"`
	}
	if err := c.BodyParser(&body); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"success": false,
			"message": "Invalid JSON format",
			"data":    nil,
		})
	}

	if body.ID == 0 {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"success": false,
			"message": "ID is missing",
			"data":    nil,
		})
	}

	var blog Blog
	result := db.First(&blog, body.ID)
	if result.Error != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"success": false,
			"message": "Blog not found",
			"data":    nil,
		})
	}

	if err := db.Delete(&blog).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"success": false,
			"message": "Failed to delete blog",
			"data":    nil,
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"success": true,
		"message": "Blog deleted successfully",
		"data":    blog,
	})
}
