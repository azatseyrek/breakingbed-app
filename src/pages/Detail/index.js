import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

import styles from '../Home/style.css'
import Loading from "../../components/loading";


const Detail = () => {
  const [char, setChar] = useState(null);
  const [loading, setLoading] = useState(true)

  const { char_id } = useParams();

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`)
      .then((res) => res.data)
      .then((data) => setChar(data[0]))
      .finally(() => setLoading(false));
  }, [char_id]);

  return (
    <div>
        {
            loading && <Loading/>
        }
      {char && (
        <div>
          <h1 className="char__name">{char.name}</h1>
          <img id="char__img" src={char.img} alt={char.name} />
        </div>
      )}
      <pre>
          {char && <div>{JSON.stringify(char,null,2)}</div>}
      </pre>
    </div>
  );
};

export default Detail;
