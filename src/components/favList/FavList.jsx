import React from 'react'
import { useState,useEffect } from "react";
import FavListItem from "../../components/favListItem/FavListItem";
import axios from 'axios';


function FavList() {
    const [favList, setFavList] = useState([])

    useEffect(()=>{
      async function getFavList() {
        try {
          const res = await axios({
            method: 'get',
            url: `https://plantseeker-backend-1.onrender.com/api/favorites`,
    
          })
    
          console.log('Response:', res.data);
          // Update the state with fetch data
          setFavList(res.data)
    
          // Handle response data here
        } catch (error) {
          console.error('Error fetching data:', error);
          // Handle error
        }
      }
      
       getFavList()
  
    },[]) // fetch only once after initial render
   
  
    return (
      <div>
        <h2>Favorites List</h2>
        {favList.map((favPlant, index) => (
          <FavListItem favPlant={favPlant} key={index} setFavList={setFavList} />
        ))}
  
  
      </div>
    )
  }
export default FavList