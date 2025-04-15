import React, { useState } from "react";

function CategoryFilter({ categories, onFilter }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleClick(category) {
    setSelectedCategory(category);
    onFilter(category); // Notify parent of the selected category
  }

  return (
    <div>
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? "selected" : ""}
          onClick={() => handleClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;