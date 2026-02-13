"use client";

import { useState } from "react";

export default function AddLinkForm({ addLink }: any) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [type, setType] = useState("Internship");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addLink({ title, url, type });
    setTitle("");
    setUrl("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        className="border p-2 w-full"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        className="border p-2 w-full"
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <select
        className="border p-2 w-full"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option>Internship</option>
        <option>Hackathon</option>
        <option>Scholarship</option>
        <option>Job</option>
      </select>
      <button className="bg-black text-white px-4 py-2">
        Add Link
      </button>
    </form>
  );
}
