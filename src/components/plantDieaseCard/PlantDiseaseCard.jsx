import React from 'react'

function PlantDiseaseCard({ disease }) {
    const { common_name, images, description } = disease
    // Check if images array exists and has at least one element
    const imageUrl = images && images.length > 0 ? images[0].thumbnail : null;
    return (
        <div className='plantDisease-card'>
            <h5>{common_name}</h5>
            <img src={imageUrl} alt={common_name} />

            {description.map((des, index) => (
                <div key={index}>
                    <h6>{des.subtitle}</h6>,
                    <p>{des.description}</p>
                </div>
            ))}

        </div>
    )
}

export default PlantDiseaseCard