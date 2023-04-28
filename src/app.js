import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Feed from "./components/Feed.jsx";

function App() {
  const [feed, setFeed] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [originalFeed, setOriginalFeed] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/feed")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFeed(data);
        setOriginalFeed(data);
      });
  }, []);
  
  const handleSearch = (searchText) => {
    setSearchText(searchText);
  
    if (!originalFeed) {
      return;
    }
  
    if (searchText) {
      const filteredFeed = originalFeed.filter(
        (item) =>
          (item?.author?.displayName &&
            item.author.displayName.toLowerCase().includes(searchText.toLowerCase())) ||
          (item.body && item.body.toLowerCase().includes(searchText.toLowerCase()))
      );
      setFeed(filteredFeed);
    } else {
      setFeed(originalFeed);
    }
  };  

  const handleSort = (sortType) => {
    const sortedFeed = [...feed].sort((a, b) => {
      if (sortType === "title") {
        return a.title.localeCompare(b.title);
      } else if (sortType === "date") {
        return new Date(b.date) - new Date(a.date);
      }
    });
    setFeed(sortedFeed);
  };

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <Feed feed={feed} handleSort={handleSort} />
    </div>
  );
}

export default App;