import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './identifyResultCard.css'

function IdentifyResultCard({ plant }) {
  const navigate = useNavigate(); // Move useNavigate hook to the top level


  async function addToFavorites() {
    try {
      const data = {
        plant_scientific_name: `${plant.species.scientificName}`,
        plant_common_name: `${plant.species.commonNames}`,
        plant_family: `${plant.species.family.scientificName}`,
        plant_genus: `${plant.species.genus.scientificName}`,
        description: ''
      }
      const res = await axios.post('http://localhost:3000/api/favorites', data)
      console.log('success');
      console.log("resdata", res)

    } catch (error) {
      console.error(error);
    }

  }


  // function handlePlantDetailbtn() {
  //   const navigate = useNavigate()
  //   navigate(`/identify/plants/${plant.gbif.id}`, { state: { plantData: plant } })

  // }
  return (
    <div className="plant-container">
      {/* Passing the plantData object as state, which contains information about the plant. */}
      <Link to={`/identify/plants/${plant.gbif.id}`} state={{ plant }} >
        <h5>{plant.species.scientificName}</h5>
        <h6>{plant.species.commonNames[0]}</h6>
        <h6> Match Rate: {(plant.score * 100).toFixed(2)}%</h6>
        <div className="plant-image-conatiner">
          {plant.images.map((image, index) => (
            <img className="plant-image" src={`${image.url.s}`} alt="" key={index} />
          ))}
        </div>
      </Link>

      <div className="btn-container ">
        <button onClick={addToFavorites}>Add to Favorites List</button>
        {/* <button onClick={handlePlantDetailbtn}> Check Out Plant Detail</button> */}
        <button onClick={() => navigate(`/identify/plants/${plant.gbif.id}`, { state: { plantData: plant } })}>Check Out Plant Detail</button>
      </div>

    </div>

  )
}

export default IdentifyResultCard