"use client";
import React from "react";
import Header from "./components/Header";

const Page: React.FC = () => {
  const handleSearch = (searchTerm: string) => {
    console.log("Search term:", searchTerm);
  };

  return (
    <main>
      <Header title="News Platform" onSearch={handleSearch} />
      <div className="p-4">
        <p>Welcome to the page!</p>
      </div>
    </main>
  );
};

export default Page;
