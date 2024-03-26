import axios from 'axios';
import { useEffect, useState } from 'react';
import './favListItem.css'

function FavListItem({ favPlant, setFavList }) {
    const { _id, notes } = favPlant
    const [editing, setEditing] = useState(false)
    //Create state variables to srore the editedd values of plant info
    const [editedNotes, setEditedNotes] = useState(notes);

    console.log('favPlant',favPlant);
    async function handleDeleteFavItem() {
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


    //function for handle save button
    // async function handleEditFavItem() {
    //     try {
    //         //send PUT request to update the plant information
    //         await axios.put(`http://localhost:3000/api/favorites/${_id}`, { notes: editedNotes })

    //         //update the favorite list state after successful update
    //         setFavList(prevList => prevList.map(plant => {
    //             if (plant._id === _id) {
    //                 return { ...plant, notes: editedNotes };
    //             }
    //             return plant;
    //         }))
    //         //disable editing mode after updating
    //         setEditing(false)
    //         console.log('Plant updated');
    //     } catch (error) {
    //         console.error('Error updating plant:', error);
    //     }
    // }
    async function handleEditFavItem() {
        try {
            await axios.put(`http://localhost:3000/api/favorites/${_id}`, { notes: editedNotes });
            setFavList(prevList => prevList.map(plant => (plant._id === _id ? { ...plant, notes: editedNotes } : plant)));
            setEditing(false);
            console.log('Plant updated');
        } catch (error) {
            console.error('Error updating plant:', error);
        }
    }

    return (
        <div>
            <div className='favListItem-container'>
                <h5>{favPlant.plant_scientific_name}</h5>
                <div className='favListItem-info'>
                    <h6>Common Name:</h6>
                    <p>{favPlant.plant_common_name}</p>
                </div>
                <div className='favListItem-info'>
                    <h6>Family:</h6>
                    <p> {favPlant.plant_family}</p>
                </div>
                <div className='favListItem-info'>
                    <h6>Genus: </h6>
                    <p>
                        {favPlant.plant_genus}
                    </p>

                </div>
                {/* provide input felds for plant notes in edit mode */}
                {editing ? (
                    <input type='text'
                        value={editedNotes}
                        onChange={(e) => setEditedNotes(e.target.value)} />

                ) : (
                    <div className='favListItem-info'>
                        <h6>Notes:</h6>
                        <p>{favPlant.notes}</p>
                    </div>
                )}


                <div className='btn-container'>
                    {/* toggle between edit moode and view mode using the 'editing' state variables*/}

                    {editing ? (
                        <button onClick={handleEditFavItem}>Save</button>
                    ) : (
                        <button onClick={() => setEditing(true)}> Edit Notes</button>
                    )}

                    <button onClick={handleDeleteFavItem}>Delete</button>
                </div>
            </div>



        </div>
    )
}

export default FavListItem