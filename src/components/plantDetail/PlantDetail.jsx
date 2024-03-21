
import PlantImgSlide from "../plantImgSlide/PlantImgSlide";



function PlantDetail({ plantData }) {
  const { images, species, gbif } = plantData


  return (
    <>
      
      <PlantImgSlide images={images}/>
      <div>Scientific Name: {species.scientificName}</div>
      <div>Common Name:{species.commonNames[0]}</div>
      <div>Family:{species.family.scientificName} </div>
      <div>Genus:{species.genus.scientificName}</div>
      <div>Gbif:{gbif.id}</div>

    </>
  )
}

export default PlantDetail