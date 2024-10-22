"use client";
import React, { useState } from "react";
import Header from "./components/Header";
import NewsletterRow from "./components/NewsletterRow";

const allNewsletters = Array.from({ length: 20 }).map((_, index) => ({
  id: index,
  title: `Newsletter ${index + 1}`,
  imageUrl: `https://picsum.photos/300/200?random=${index + 1}`,
}));

const Page: React.FC = () => {
  const [filteredNewsletters, setFilteredNewsletters] =
    useState(allNewsletters);

  const handleSearch = (searchTerm: string) => {
    console.log("Search term:", searchTerm);
    const filtered = allNewsletters.filter((newsletter) =>
      newsletter.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredNewsletters(filtered);
  };

  return (
    <main>
      <Header title="News Platform" onSearch={handleSearch} />
      <section className="mt-8">
        <NewsletterRow newsletters={filteredNewsletters} />
      </section>
    </main>
  );
};

export default Page;
