import React, { useEffect, useState } from "react";

const Header = (prop) => {
  const [selectedAnime, setSelectedAnime] = useState([]);
  useEffect(() => {
    prop.updatedAnime(selectedAnime);
  }, [selectedAnime]);
  const updateAnimeHandler = (e) => {
    setSelectedAnime(e.target.value);
  };

  return (
    <div className="header">
      <div className="header-info">
        <h1 className="search-text">Search Anime Characters</h1>
        <div className="search-container">
          <input
            onChange={updateAnimeHandler}
            className="search-bar"
            type="text"
          />
          <img
            className="search-icon"
            src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png"
          />
        </div>
        <p style={{ fontSize: "2rem" }}>
          Total {prop.count} matching anime character found
        </p>
      </div>
    </div>
  );
};

export default Header;
