import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const Films = () => {

     const { id } = useParams();

   const [films, setFilms] = useState([]);
  const [dfilms, setDfilms] = useState([]);
    
  


 useEffect(() => {
      axios
        .get("https://swapi.dev/api/starships/")
        .then((res) => setFilms(res.data.results[id].films));
  }, [id]); 

 useEffect(() => {
    Promise.all(
      films.map((item) =>
        fetch(item)
          .then((res) => res.json())
          .catch((ex) => ex)
      )
    ).then((values) => setDfilms(values));
  }, [films]);

  return (
      <>
     {dfilms.map((f, index) => (
              <div  key={index} className="w-full bg-black">

                  <div className="bg-neutral-900  p-4 text-white text-xl text-left rounded-b-lg">
                    <div className="flex gap-2">
                      <div className="border-b-2 w-10 mb-4"></div>
                      <div className="border-b-2 w-2 mb-4"></div>
                    </div>
                    <h2 className="title">
                      {f.title}
                    </h2>
                  </div>
                </div>
            ))}
    </>
  )
}

export default Films