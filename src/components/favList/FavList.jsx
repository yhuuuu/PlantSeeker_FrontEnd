import React from 'react'
import { useState, useEffect } from "react";
import FavListItem from "../../components/favListItem/FavListItem";
import axios from 'axios';
import pageLoader from "../../images/favPage/watering-can.gif"


function FavList() {
  const [favList, setFavList] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    async function getFavList() {
      setIsLoading(true);
      try {
        const res = await axios({
          method: 'get',
          url: `https://plantseeker-backend-1.onrender.com/api/favorites`,

        })

        console.log('Response:', res.data);
        // Update the state with fetch data
        setFavList(res.data)
        setIsLoading(false);

        // Handle response data here
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error
      }
    }

    getFavList()

  }, []) // fetch only once after initial render


  return (
    <div>
      <h2>Favorites List</h2>

      {/* Display loader when page is loading */}
      {isLoading ?
        <h6 className="loaderText">Loading...
          <img className="pageLoader" src={pageLoader} alt="loader" />
        </h6> : null
      }

      {favList.map((favPlant, index) => (
        <FavListItem favPlant={favPlant} key={index} setFavList={setFavList} />
      ))}


    </div>
  )
}
export default FavList