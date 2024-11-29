"use client";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [blogs, setBlogs] = useState([]);
  const [avtarFile, setAvatarFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    src: "",
    ctaLink: "",
    avatar: "",
    name: "",
  });

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
    <div className="w-full">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
