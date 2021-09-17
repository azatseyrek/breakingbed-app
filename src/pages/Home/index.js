import React, { useEffect } from "react";
import Masonry from "react-masonry-css";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../components/loading";
import { fetchCharacters } from "../../redux/charactersSlice";

import  styles from './style.css' ;


// import charactersSlice from '../../redux/charactersSlice'

const Home = () => {
  const characters = useSelector((state) => state.characters.items);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const error = useSelector((state) => state.characters.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if(isLoading) {
      return <Loading/>
  };

  if(error) {
      return <div>Error: {error}</div>
  }


  return (
    <div>


      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {characters.map((character) => (
          <div  key={character.char_id}>
            <img alt={character.name} src={character.img} className='character'  />
            <h3>{character.name}</h3>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Home;
