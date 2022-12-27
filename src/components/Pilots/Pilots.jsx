import React, { useEffect, useState } from "react";
import axios from "axios";
import { get } from "react-hook-form";
import { useParams } from "react-router";

const Pilots = () => {

 

  const { id } = useParams();
   const [pilots, setPilots] = useState([]);
  const [dpilots, setDpilots] = useState([]);
  


 useEffect(() => {
      axios
        .get("https://swapi.dev/api/starships/")
        .then((res) => setPilots(res.data.results[id].pilots));
  }, [id]); 

 useEffect(() => {
    Promise.all(
      pilots.map((item) =>
        fetch(item)
          .then((res) => res.json())
          .catch((ex) => ex)
      )
    ).then((values) => setDpilots(values));
  }, [pilots]);

  return( 
    <>
     {dpilots.map((p, index) => (

                <div  key={index} className="w-full bg-black">

                  <div className="bg-neutral-900  p-4 text-white text-xl text-left rounded-b-lg">
                    <div className="flex gap-2">
                      <div className="border-b-2 w-10 mb-4"></div>
                      <div className="border-b-2 w-2 mb-4"></div>
                    </div>
                    <h2 className="title">
                      {p.name}
                    </h2>
                  </div>
                </div>
            ))}
    </>
  )
  
};

export default Pilots;
