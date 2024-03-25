import axios from "axios";
import { useState,useEffect } from "react";
import FavListItem from "../components/favListItem/FavListItem";

function FavListPage() {
  
  const [favList, setFavList] = useState([])

  useEffect(()=>{
    async function getFavList() {
      try {
        const res = await axios({
          method: 'get',
          url: `http://localhost:3000/api/favorites`,
  
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

export default FavListPage