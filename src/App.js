import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import AnimeCard from "./components/AnimeCard";

function App() {
  const [animeData, setAnimeData] = useState([]);
  const [animeLength, setAnimeLength] = useState(animeData?.length);
  const [page, setPage] = useState(1);
  const [isNextPage, setIsNextPage] = useState(true);
  useEffect(() => {
    getAnimeData();
  }, [page]);
  const decrementCounter = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const incrementCounter = () => {
    if (isNextPage) {
      setPage(page + 1);
    }
  };
  const getAnimeData = async function () {
    const response = await fetch(
      `https://api.jikan.moe/v4/characters?page=${page}&limit=15&q=&order_by=favorites&sort=desc`
    );
    const data = await response.json();
    setAnimeData(data.data);
    setAnimeLength(data.pagination.items.total);
    setIsNextPage(data.pagination.has_next_page);
  };
  console.log(animeData);
  const newAnimeDataHandler = async function (searchText) {
    // console.log(searchText);
    if (searchText === "" || searchText?.length === 0) getAnimeData();
    const response = await fetch(
      `https://api.jikan.moe/v4/characters?page=0&limit=15&q=${searchText}&order_by=favorites&sort=desc`
    );
    const data = await response.json();
    setAnimeData(data.data);
    setAnimeLength(data.pagination.items.total);
  };

  return (
    <div className="App">
      <Header count={animeLength} updatedAnime={newAnimeDataHandler} />
      <div className="main-container">
        <div className="btn-box">
          <button className="btn" id="back" onClick={decrementCounter}>
            Back
          </button>
          <span className="pageno">{page}</span>
          <button className="btn" onClick={incrementCounter}>
            Next
          </button>
        </div>
        {animeLength === 0 ? (
          <h1 className="text-big">No results found</h1>
        ) : (
          animeData?.map((obj) => {
            return <AnimeCard key={obj.mal_id} {...obj} />;
          })
        )}
      </div>
    </div>
  );
}

export default App;
