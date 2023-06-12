import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TuitItem from "./tuit-item";
import { findTuitsThunk } from "../services/tuits-thunks";
import { deleteTuitThunk } from "../services/tuits-thunks";
import "./tuit-item.css";
const TuitList = () => {
  const { tuits, loading } = useSelector((state) => state.tuits);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findTuitsThunk());
  }, []);

  return (
    <div className="row">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v6.0.0-beta3/css/all.css"
      />
      <ul style={{ width: "100%", display: "table-cell" }}>
        {loading && <li className="list-group-item">Loading...</li>}

        {tuits.map((tuit, index) => (
          <TuitItem key={tuit._id} tuit={tuit} idx={index} len={tuits.length} />
        ))}
      </ul>
    </div>
  );
};

export default TuitList;
