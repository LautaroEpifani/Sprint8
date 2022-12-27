import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Link } from "react-router-dom";
import Pilots from "../Pilots/Pilots";

const Starships = () => {
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1)
  const pages = [1, 2, 3, 4]
  


  useEffect(() => {
       axios
      .get(`https://swapi.dev/api/starships/?page=${currentPage}`)
      .then((res) => setData(res.data.results).catch((err) => console.log(err)));
      
  }, [currentPage]);

  
   //PAGINATION
   const pag = (page) => {
    let counter = 0
    if(counter < 5) {
      counter = page;
    }
    setCurrentPage(counter)

   }
  

   //INFINITE SCROLL
  

  return (
    
   
        <div className="mt-20">
          
          {data.map((item, index) => (
            <div key={index}>
            <Link  to={`/starships/${index}`}>
            <div className="w-1/2 mx-auto text-gray-400 mt-8 p-8 bg-neutral-900 text-left font-chivo">
              {item.name} - {item.model}
            </div>
            </Link>
            </div>
          ))}
          {pages.map((page, index) => (
              <div key={index} className="inline pages text-gray-400">
                <button className="btn btn-outline mr-10 mt-10 mb-10" onClick={() => pag(page)}>{page}</button>
              </div>

          ))}

          <Link  to='/'>
            <div className="w-1/6 mx-auto text-center text-gray-400  p-4 bg-neutral-900 font-chivo rounded-lg">
                Back to Home
            </div>
          </Link>
          
        </div>
       
       
     
    
  );
};

export default Starships;
