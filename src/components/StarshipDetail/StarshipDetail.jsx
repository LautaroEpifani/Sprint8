import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import desc from "./desc";
import Pilots from "../Pilots/Pilots";
import Films from "../Films/Films";
import { Link } from "react-router-dom";

const StarshipDetail = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();

 

  

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/starships/")
      .then((res) => setData(res.data.results[id]));
  }, []);

  

  

  return (
    <div className="bg-black mt-20 pb-20">
      
      <div className="w-3/5 text-center mx-auto">
        <img
          className="text-center mx-auto"
          src={`/imgStarships/${id}.jpg`}
          alt=""
          width={1000}
        />
        <h1 className="text-white text-4xl my-20 font-star">{data.name}</h1>
        <p className="text-white mb-20 font-chivo">{desc[id].texto}</p>
        <div className="flex justify-between text-white  text-center mx-auto pb-20">
          <div className=" grid grid-cols-1 gap-y-20 font-chivo">
            <p>Model: {data.model}</p>
            <p>Cost in Credits: {data.cost_in_credits}</p>
            <p>Atmosphere speed: {data.max_atmosphering_speed}</p>
            
          </div>
          <div className=" grid grid-cols-1 gap-y-20 font-chivo">
            <p>Manufacturer: {data.manufacturer}</p>
            <p>Length: {data.length}</p>
            <p>Crew: {data.crew}</p>
          </div>
          
        </div>
        <div className="flex gap-10 mb-10">
              <h1 className="font-chivo text-xl text-white">Pilots:</h1>
              <Pilots/>
          </div>
        <div className="flex gap-10 ">
                <h1 className="font-chivo text-xl text-white mb-40">Films:</h1>
              <Films/>
         </div>
           
      </div>
        <Link  to='/'>
            <div className="w-1/6 mx-auto text-center text-gray-400  p-4 bg-neutral-900 font-chivo rounded-lg">
                Back to Home
            </div>
          </Link>
    </div>
  );
};

export default StarshipDetail;
