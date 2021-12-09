import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectedHouses,
  removeSelectedHouses,
} from "../redux/actions/houseActions";

function HouseDetails() {
  const house = useSelector((state) => state.houses);
  const { name, region, coatOfArms, words } = house;
  console.log(house);
  const { houseId } = useParams();
  const dispatch = useDispatch();

  const fetchHouseDetails = async () => {
    const response = await axios
      .get(`https://www.anapioficeandfire.com/api/houses/${houseId}`)
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(selectedHouses(response.data));
  };

  useEffect(() => {
    if (houseId && houseId !== "") fetchHouseDetails();
    return () => {
      dispatch(removeSelectedHouses());
    };
  }, [houseId]);
  return (
    <div className="cards">
      {Object.keys(house).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="iicard">
          <div className="icard">
            <h1>{name}</h1>
            <br />
            <p>
              <strong>Region :</strong> {region ? region : "No Information"}
            </p>
            <br />
            <p><strong>Coat of Arms : </strong> {coatOfArms ? coatOfArms : "No Information"}</p>
            <br />
            <p><strong>Words : </strong> {words ? words : "No Information"}</p>
          </div>
        </div>
      )}
    </div>
  );
}
export default HouseDetails;
