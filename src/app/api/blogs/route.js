import { prisma } from "@/lib/prisma";

export async function GET(req) {
  try {
    const blog = await prisma.blog.findMany();
    if (!blog || blog.length === 0) {
      return Response.json(
        { success: false, message: "No blogs found", data: null },
        { status: 404 }
      );
    }
    return Response.json(
      { success: true, message: "Blogs retrieved successfully", data: blog },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { success: false, message: "Failed to retrieve blogs", data: null },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    // Parse request body
    const body = await req.json();
    const { title, description, content, src, ctaLink, avatar, name } = body;

    // Validate required fields
    if (!title || !description || !content || !name || !src) {
      return Response.json(
        {
          success: false,
          message: "Missing required fields: title, description, content, and name are mandatory",
          data: null,
        },
        { status: 400 }
      );
    }

    // Create a new blog entry
    const blog = await prisma.blog.create({
      data: {
        title,
        description,
        content,
        src,
        ctaLink: ctaLink || "/",
        avatar: avatar || "dummy",
        name: name || "Khuraak",
      },
    });

    return Response.json(
      { success: true, message: "Blog created successfully", data: blog },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof SyntaxError) {
      return Response.json(
        { success: false, message: "Invalid JSON format in request body", data: null },
        { status: 400 }
      );
    }
    if (error.code === "P2002") {
      // Prisma unique constraint violation
      return Response.json(
        { success: false, message: "A blog with the same title already exists", data: null },
        { status: 409 }
      );
    }
    return Response.json(
      { success: false, message: "Failed to create blog", data: null },
      { status: 500 }
    );
  }
}

export async function PATCH(req) {
  try {
    // Parse request body
    const body = await req.json();
    const { id, title, description, content, src, ctaLink, avatar, name } = body;

    // Validate required fields
    if (!id || (!title && !description && !content && !name)) {
      return Response.json(
        {
          success: false,
          message: "Missing required fields: id is mandatory, title, description, content, and name are optional",
          data: null,
        },
        { status: 400 }
      );
    }

    // Update the blog entry
    const blog = await prisma.blog.update({
      where: { id },
      data: { title, description, content, src, ctaLink, avatar, name },
    });

    return Response.json(
      { success: true, message: "Blog updated successfully", data: blog },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof SyntaxError) {
      return Response.json(
        { success: false, message: "Invalid JSON format in request body", data: null },
        { status: 400 }
      );
    }
    if (error.code === "P2025") {
      // Prisma record not found
      return Response.json(
        { success: false, message: "Blog not found", data: null },
        { status: 404 }
      );
    }
    return Response.json(
      { success: false, message: "Failed to update blog", data: null },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    // Parse request body
    const body = await req.json();
    const { id } = body;

    // Validate required fields
    if (!id) {
      return Response.json(
        {
          success: false,
          message: "ID is missing",
          data: null,
        },
        { status: 400 }
      );
    }

    // Delete the blog entry
    const blog = await prisma.blog.delete({ where: { id } });

    return Response.json(
      { success: true, message: "Blog deleted successfully", data: blog },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof SyntaxError) {
      return Response.json(
        { success: false, message: "Invalid JSON format in request body", data: null },
        { status: 400 }
      );
    }
    if (error.code === "P2025") {
      // Prisma record not found
      return Response.json(
        { success: false, message: "Blog not found", data: null },
        { status: 404 }
      );
    }
    return Response.json(
      { success: false, message: "Failed to delete blog", data: null },
      { status: 500 }
    );
  }
}