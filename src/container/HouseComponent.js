import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { nextPage, prevPage } from "../redux/actions/houseActions";

function HouseComponent() {
  const houses = useSelector((state) => state.allHouses.houses);
  const dispatch = useDispatch();
  const pageNumber = useSelector((state) => state.allHouses.pageNumber);

  const pageChanger = async (change) => {
    try {
      let page = 1;
      if (change == "next") page = pageNumber + 1;
      else if (change == "prev" && pageNumber > 1) page = pageNumber - 1;
      else page = pageNumber;
      const response = await axios.get(
        `https://www.anapioficeandfire.com/api/houses/?page=${page}&pageSize=12`
      );
      if (change == "next") dispatch(nextPage(response.data));
      else if (change == "prev" && pageNumber > 1)
        dispatch(prevPage(response.data));
    } catch {
      console.log("ërror");
    }
  };

  const renderList = houses.map((house, index) => {
    const { name, region, coatOfArms, words } = house;
    return (
      <div key={name} className="innercard">
        <Link to={`/houses/${index + 1}`}>
          <div>
            <h2>{name}</h2>
            <h4>Region : {region ? region : "No Information"}</h4>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <>
      <div className="cards">{renderList}</div>

      <div className="compcard">
        <button className="btn" onClick={() => pageChanger("prev")}>
          Previous
        </button>
        <button className="btn" onClick={() => pageChanger("next")}>
          Next
        </button>
      </div>
    </>
  );
}

export default HouseComponent;
