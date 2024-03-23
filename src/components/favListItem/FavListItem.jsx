import axios from 'axios';
import { useEffect, useState } from 'react';

function FavListItem({ favPlant, setFavList }) {
    const { _id, description } = favPlant
    const [editing, setEditing] = useState(false)
    //Create state variables to srore the editedd values of plant info
    const [editedDescription, setEditedDescription] = useState(description);

    async function handleDelteFavItem() {
        try {
            // Send a DELETE request to the backend API, passing the id in the URL
            await axios.delete(`http://localhost:3000/api/favorites/${_id}`)

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

    // async function handleEditFavItem() {
    //     setEditing(true)
    // }

    //function for handle sve button
    async function handleEditFavItem() {
        try {
            //send PUT request to update the plant information
            await axios.put(`http://localhost:3000/api/favorites/${_id}`, editedDescription)

            //update the favorite list state after successful update
            setFavList(prevList => prevList.map(plant => {
                if (plant._id === _id) {
                    return { ...plant, description: editedDescription };
                }
                return plant;
            }))
            //disable editing mode after updating
            setEditing(false)
            console.log('Plant updated');

        } catch (error) {
            console.error('Error updating plant:', error);
        }
    }


    return (
        <div>
            <div className='favListItem-container'>
                <h5>{favPlant.plant_scientific_name}</h5>
                <p>Common Name: {favPlant.plant_common_name}</p>
                <p>Family: {favPlant.plant_family}</p>
                <p>Genus: {favPlant.plant_genus}</p>
                {/* provide input felds for plant description in edit mode */}
                {editing ? (
                    <input type='text'
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)} />

                ) : (
                    <p>Description: {favPlant.description}</p>
                )}

            </div>



            <div className='btn-contianer'>
                {/* toggle between edit moode and view mode using the 'editing' state variables*/}

                {editing ? (
                    <button onClick={handleEditFavItem}>Save</button>
                ): (
                    <button onClick={()=>setEditing(true)}> Edit Description</button>
                    )}

                <button onClick={handleDelteFavItem}>Delete</button>
            </div>
            <hr />
        </div>
    )
}

export default FavListItem