"use client";

import { useState } from "react";
import AddLinkForm from "../components/AddLinkForm";
import LinkCard from "../components/LinkCard";
import FilterBar from "../components/FilterBar";

export default function Home() {
  const [links, setLinks] = useState<any[]>([]);
  const [filter, setFilter] = useState("all");

  const addLink = (link: any) => {
    setLinks([...links, link]);
  };

  const filteredLinks =
    filter === "all"
      ? links
      : links.filter((l) => l.type === filter);

  return (
    <main>
      <h1 className="text-3xl font-bold mb-6">Deadlink Tracker</h1>
      <AddLinkForm addLink={addLink} />
      <FilterBar setFilter={setFilter} />
      <div className="mt-6 space-y-4">
        {filteredLinks.map((link, index) => (
          <LinkCard key={index} link={link} />
        ))}
      </div>
    </main>
  );
}
