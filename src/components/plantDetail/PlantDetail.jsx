
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

    <div className="plant-detail-container container">
    <div className="row">
        <div className="col-lg-6">
            <div className="plant-detail-image-container">
                <PlantImgSlide images={images} />
            </div>
        </div>
        <div className="col-lg-6">
            <div className="plant-detail-description">
                <div className="plant-detail-info-container">
                    <div className="plant-detail-info">
                        <h6>Scientific Name:</h6>
                        <p>{species.scientificName}</p>
                    </div>
                    <div className="plant-detail-info">
                        <h6>Common Name:</h6>
                        <p>{species.commonNames[0]}</p>
                    </div>
                    <div className="plant-detail-info">
                        <h6>Family:</h6>
                        <p>{species.family.scientificName}</p>
                    </div>
                    <div className="plant-detail-info">
                        <h6>Genus:</h6>
                        <p>{species.genus.scientificName}</p>
                    </div>
                    <div className="plant-detail-info">
                        <h6>Gbif:</h6>
                        <p>{gbif.id}</p>
                    </div>
                </div>
                <div className="plant-detail-addToFavBtn">
                    <button className='plant-detail-addToFavBtn' onClick={handleClick}>
                        <img src={whishlistIcon} />{isClicked ? 'Added' : ''}
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
    // <div className="plant-detail-container container">
    //   <div className="plant-detail-image-container">
    //     <PlantImgSlide images={images} />
    //   </div>

    //   <div className="plant-detail-description ">
    //     <div className="plant-detail-info-container">
    //       <div className="plant-detail-info">
    //         <h6>Scientific Name:</h6>
    //         <p>{species.scientificName}</p>
    //       </div>
    //       <div className="plant-detail-info">
    //         <h6>Common Name:</h6>
    //         <p>{species.commonNames[0]}</p>
    //       </div>
    //       <div className="plant-detail-info">
    //         <h6>Family:</h6>
    //         <p>{species.family.scientificName}</p>
    //       </div>
    //       <div className="plant-detail-info">
    //         <h6>Genus:</h6>
    //         <p>{species.genus.scientificName}</p>
    //       </div>
    //       <div className="plant-detail-info">
    //         <h6>Gbif:</h6>
    //         <p>{gbif.id}</p>
    //       </div>
    //     </div>

    //     <div className="plant-detail-addToFavBtn">
    //       <button className='plant-detail-addToFavBtn' onClick={handleClick}><img src={whishlistIcon} />{isClicked ? 'Added' : ''}
    //       </button>
    //     </div>
    //   </div>

    // </div>

  )
}

export default PlantDetail