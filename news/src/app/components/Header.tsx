"use client";
import React from "react";

interface HeaderProps {
  title: string;
  onSearch: (searchTerm: string) => void;
}

const Header: React.FC<HeaderProps> = ({ title, onSearch }) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <h1 className="text-xl">{title}</h1>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="p-2 rounded"
        />
      </form>
    </header>
  );
};

export default Header;
