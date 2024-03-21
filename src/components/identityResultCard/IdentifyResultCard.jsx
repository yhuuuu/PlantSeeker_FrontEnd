import { Link } from "react-router-dom";

function IdentifyResultCard({ plant }) {
  console.log("plant:", plant);

  function handlePlantDetailbtn() {
    

  }
  return (
    <Link to={`/identify/plants/${plant.gbif.id}`}>
      <div>
        <p>{plant.species.scientificName}</p>
        <p>{plant.species.commonNames[0]}</p>
        <p>{plant.score}</p>
        <div>
          {plant.images.map((image, index) => (
            <img src={`${image.url.s}`} alt="" key={index} />
          ))}
        </div>

        <button>Add to Fav List</button>
        <button onClick={handlePlantDetailbtn}> Check out plant detail</button>
      </div>
    </Link>
  )
}

export default IdentifyResultCard