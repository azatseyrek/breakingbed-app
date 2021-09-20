import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/loading";
import {
  fetchAllQuotes,
  quotesSelector,
  statusSelector,
  errorSelector,
} from "../../redux/quotesSlice";
import Item from "./Item";

const Quotes = () => {
  const dispatch = useDispatch();
  const data = useSelector(quotesSelector);
  const error = useSelector(errorSelector);
  const status = useSelector(statusSelector);

  useEffect(() => {
    dispatch(fetchAllQuotes());
  }, [dispatch]);

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='quote_container'>
      <h1>Quotes</h1>
      {status === "loading" && (
        <div className="load_btn">
          {" "}
          <Loading />{" "}
        </div>
      )}

      {status === "succeeded" &&
        data.map((item) => <Item key={item.quote_id} item={item} />)}
    </div>
  );
};

export default Quotes;
