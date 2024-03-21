
import { useParams } from 'react-router-dom';
import PlantDetail from '../components/plantDetail/PlantDetail'

function PlantDetailPage() {
 let {id} = useParams()

 //console.log(id);
  return (
    <div>
        <PlantDetail/>
    </div>
  )
}

export default PlantDetailPage