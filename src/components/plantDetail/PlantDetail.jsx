
import axios from "axios";
import PlantImgSlide from "../plantImgSlide/PlantImgSlide";
import './plantDetail.css'
import whishlistIcon from '../../images/identifyPage/wishlist.png'
import { useState } from "react";


function PlantDetail({ plantData }) {
  const { images, species, gbif } = plantData
  const [isClicked, setIsClicked] = useState(false)

  async function addToFavorites() {
    try {
      const data = {
        plant_scientific_name: `${plantData.species.scientificName}`,
        plant_common_name: `${plantData.species.commonNames}`,
        plant_family: `${plantData.species.family.scientificName}`,
        plant_genus: `${plantData.species.genus.scientificName}`,
        notes: ''
      }
      const res = await axios.post('https://plantseeker-backend-1.onrender.com/api/favorites', data)
      console.log('success');
      console.log("resdata", res)

    } catch (error) {
      console.error(error);
    }

  }
  function handleClick() {
    setIsClicked(true)
    addToFavorites()
  }


  return (

    <div class="container">
    <div class="row plant-detail-container">
        <div class="col-md-6 plant-detail-image-container">
            <PlantImgSlide images={images} />
        </div>

        <div class="col-md-6 plant-detail-description">
            <div class="plant-detail-info-container">
                <div class="plant-detail-info">
                    <h6>Scientific Name:</h6>
                    <p>{species.scientificName}</p>
                </div>
                <div class="plant-detail-info">
                    <h6>Common Name:</h6>
                    <p>{species.commonNames[0]}</p>
                </div>
                <div class="plant-detail-info">
                    <h6>Family:</h6>
                    <p>{species.family.scientificName}</p>
                </div>
                <div class="plant-detail-info">
                    <h6>Genus:</h6>
                    <p>{species.genus.scientificName}</p>
                </div>
                <div class="plant-detail-info">
                    <h6>Gbif:</h6>
                    <p>{gbif.id}</p>
                </div>
            </div>

            <div class="plant-detail-addToFavBtn">
                <button class="btn btn-primary" onClick={handleClick}>
                    <img src={whishlistIcon} />
                    {isClicked ? 'Added' : 'Add to Favorites'}
                </button>
            </div>
        </div>
    </div>
</div>

  )
}

export default PlantDetail