import React from 'react'

function FavListItem({favPlant}) {
    console.log('favPlant',favPlant);
  return (
    <div>
        <h5>{favPlant.plant_scientific_name}</h5>
        <div>Common Name: {favPlant.plant_common_name}</div>
        <div>Family: {favPlant.plant_family}</div>
        <div>Genus: {favPlant.genus}</div>
        <hr/>

    
    </div>
  )
}

export default FavListItem