import React from "react";

const AnimeCard = ({ name, favorites, nicknames, images, url }) => {
  return (
    <div className="anime-card">
      <img src={images?.jpg?.image_url} className="anime-img" />
      <div className="anime-info">
        <div className="anime-names">
          <p>{name}</p>
          <div className="anime-nickname">
            <ul className="anime-nicknames">
              {nicknames?.length > 0 ? (
                nicknames?.map((nick, index) => {
                  return (
                    <li key={index} className="nickname">
                      {nick}
                    </li>
                  );
                })
              ) : (
                <li>No Nick Name</li>
              )}
              {}
            </ul>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <img
            className="heart"
            src="https://freepngimg.com/download/heart/36704-5-dark-red-heart-transparent-background.png"
          />
          <p>{favorites}</p>
          <a href={url}>
            <img
              src="https://www.pngkey.com/png/full/103-1039860_jpg-freeuse-library-clipart-arrow-pointing-right-purple.png"
              className="anime-detail"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
