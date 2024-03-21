import { Link } from "react-router-dom";

function IdentifyResultCard({ plant }) {
  console.log("plant:", plant);

  function handlePlantDetailbtn() {
    // btn direct to the plant detail 
  }
  return (
    <div>
      {/* Passing the plantData object as state, which contains information about the plant. */}
      <Link to={`/identify/plants/${plant.gbif.id}`} state={{ plantData: plant }} >
        <p>{plant.species.scientificName}</p>
        <p>{plant.species.commonNames[0]}</p>
        <p>{plant.score}</p>
        <div>
          {plant.images.map((image, index) => (
            <img src={`${image.url.s}`} alt="" key={index} />
          ))}
        </div>
      </Link>

      <button>Add to Fav List</button>
      <button onClick={handlePlantDetailbtn}> Check out plant detail</button>
    </div>

  )
}

export default IdentifyResultCard