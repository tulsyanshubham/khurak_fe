"use client";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/blogs"); // Call the API route
        const blog = await response.json();
        setBlogs(blog.data);
        console.log(blog)
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {blogs.length > 0 ? <h1>{blogs[0].description}</h1> : <p>Loading...</p>}
    </div>
  );
}
