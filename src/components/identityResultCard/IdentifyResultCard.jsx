import axios from "axios";
import { Link } from "react-router-dom";

function IdentifyResultCard({ plant }) {


  async function addToFavorites(){
    try{
      const data = {
        plant_scientific_name:`${plant.species.scientificName}`,
        plant_common_name:`${plant.species.commonNames}`,
        plant_family: `${plant.species.family.scientificName}`,
        plant_genus:`${plant.species.genus.scientificName}`,
        description:''
      }
      const res = await axios.post('http://localhost:3000/api/favorites',data) 
      console.log('success');
      console.log("resdata",res)

    }catch(error){
      console.error(error);
    }

  }


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

      <button onClick={addToFavorites}>Add to Fav List</button>
      <button onClick={handlePlantDetailbtn}> Check out plant detail</button>
    </div>

  )
}

export default IdentifyResultCard