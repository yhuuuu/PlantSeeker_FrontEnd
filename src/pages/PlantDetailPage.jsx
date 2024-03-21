
import { useLocation } from 'react-router-dom';
import PlantDetail from '../components/plantDetail/PlantDetail'

function PlantDetailPage() {
   
    // const{plantData} = useLocation()
    const location = useLocation();
    console.log("location",location)
    console.log("locationState",location.state);
    //const  {plantData}  = location.state; // Access the plant object from location state


    //console.log("Plant data:", plantData);

    //console.log(id);
    return (
        <div>
            <PlantDetail />
        </div>
    )
}

export default PlantDetailPage