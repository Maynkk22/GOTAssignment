import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setHouses } from "../redux/actions/houseActions";
import HouseComponent from "./HouseComponent";

function HouseListing() {
  const houses = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchHouses = async () => {
    const response = await axios
      .get("https://www.anapioficeandfire.com/api/houses?pageSize=12")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setHouses(response.data));
  };

  useEffect(() => {
    fetchHouses();
  }, []);

  console.log("Houses: ", houses);
  return (
    <div>
      <HouseComponent />
    </div>
  );
}

export default HouseListing;
