
import PlantImgSlide from "../plantImgSlide/PlantImgSlide";
import './plantDetail.css'

function PlantDetail({ plantData }) {
  const { images, species, gbif } = plantData


  return (

    <div className="plant-detail-container">
      <div className="plant-detail-image-container">
        <PlantImgSlide images={images} />
      </div>

      <div className="plant-detail-description">
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

    </div>

  )
}

export default PlantDetail