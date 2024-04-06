import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import whishlistIcon from "../../images/identifyPage/wishlist.png"
import detailIcon from "../../images/identifyPage/clipboard.png"
import './identifyResultCard.css'

function IdentifyResultCard({ plant }) {

  const [isClicked, setIsClicked] = useState(false);

  const navigate = useNavigate();

  //FUnction to add to favfoties list
  async function addToFavorites() {
    try {
      const data = {
        plant_scientific_name: `${plant.species.scientificName}`,
        plant_common_name: `${plant.species.commonNames}`,
        plant_family: `${plant.species.family.scientificName}`,
        plant_genus: `${plant.species.genus.scientificName}`,
        notes: ''
      }
      const res = await axios.post('https://plantseeker-backend-1.onrender.com/api/favorites', data)
      console.log('add to fav success');


    } catch (error) {
      console.error(error);
    }

  }

  function handleClick() {
    setIsClicked(true)
    addToFavorites()
  }

  return (
    <div className="plantReuslt-container">

      {/* Passing the plantData object as state, which contains information about the plant. */}
      <Link
        to={`/identify/plants/${plant.gbif.id}`}
        state={{ plantData: plant }}
      >
        <h5>{plant.species.scientificName}</h5>
        <h6>{plant.species.commonNames[0]}</h6>
        <h6> Match Rate: {(plant.score * 100).toFixed(2)}%</h6>

        <div className="plant-image-conatiner">
          {plant.images.map((image, index) => (
            <img className="plantReuslt-image" src={`${image.url.s}`} alt="" key={index} />
          ))}
        </div>
      </Link>

      <div className="plantReuslt-btn-container">

        {/* Add to fav btn */}
        <button onClick={handleClick}>
          <img src={whishlistIcon} />
          {isClicked ? 'Added' : 'Add to Favorites List'}
        </button>

        {/* Detail btn */}
        <button onClick={() => navigate(`/identify/plants/${plant.gbif.id}`, { state: { plantData: plant } })}>
          <img src={detailIcon} />
          Check Out Plant Detail
        </button>
      </div>
      
    </div>

  )
}

export default IdentifyResultCard