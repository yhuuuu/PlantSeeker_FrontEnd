import axios from 'axios';

function FavListItem({ favPlant, setFavList }) {
    const { _id } = favPlant

    async function handleDelteFavItem() {
        try {
            // Send a DELETE request to the backend API, passing the id in the URL
            const res = await axios.delete(`http://localhost:3000/api/favorites/${_id}`)

            // Update the favorite list state after successful deletion
            setFavList(prevList => {
                // Filter out the deleted item from the previous list
                return prevList.filter(plant => plant._id !== _id);
            });
            console.log('Plant removed');

        } catch (error) {
            console.error('Error fetching data:', error);

        }
    }

    return (
        <div>
            <div className='favListItem-container'>
                <h5>{favPlant.plant_scientific_name}</h5>
                <p>Common Name: {favPlant.plant_common_name}</p>
                <p>Family: {favPlant.plant_family}</p>
                <p>Genus: {favPlant.plant_genus}</p>
                <p>Description: {favPlant.description}</p>

            </div>

            <div className='btn-contianer'>
                <button>Edit</button>
                <button onClick={handleDelteFavItem}>Delete</button>
            </div>
            <hr />
        </div>
    )
}

export default FavListItem