import React from "react";
import styles from "../Home/style.css";

const Item = ({ item }) => {
  return <div className='all__quotes'> <q className= 'queto'>{item.quote}</q> <strong>{item.author}</strong> </div>;
};

export default Item;
