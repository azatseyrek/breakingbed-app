import React, { useEffect } from "react";
import Masonry from "react-masonry-css";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../components/loading";
import { fetchCharacters } from "../../redux/charactersSlice";

import { Link } from "react-router-dom";

import styles from "./style.css";

// import charactersSlice from '../../redux/charactersSlice'

const Home = () => {
  const characters = useSelector((state) => state.characters.items);
  const status = useSelector((state) => state.characters.status);
  const error = useSelector((state) => state.characters.error);
  const nextPage = useSelector((state) => state.characters.page);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCharacters());
    }
  }, [dispatch, status]);

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {characters.map((character) => (
          <div key={character.char_id}>
            <Link to={`/char/${character.char_id}`}>
              <img
                alt={character.name}
                src={character.img}
                className="character"
              />
              <h3>{character.name}</h3>
            </Link>
          </div>
        ))}
      </Masonry>
      <div className="load_btn">
        {status === "loading" && <Loading />}

        {hasNextPage && status !== "loading" && (
          <button onClick={() => dispatch(fetchCharacters(nextPage))}>
            Load More ({nextPage})
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
