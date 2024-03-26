
import { useLocation } from 'react-router-dom';
import PlantDetail from '../components/plantDetail/PlantDetail'

function PlantDetailPage() {
   
    const location = useLocation();
    console.log("location",location)
    console.log("locationState",location.state);
    
    // Access the plant object from location state
    const  {plantData}  = location.state; 



    return (
        <div>
            <PlantDetail plantData={plantData}/>
        </div>
    )
}

export default PlantDetailPage