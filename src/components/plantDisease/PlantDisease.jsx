import axios from 'axios'
import { useState, useEffect } from 'react'


function PlantDisease() {
    const [plantDiseaseList, setPlantDiseaseList] = useState()

    const API_KEY_PERENUAL = import.meta.env.VITE_API_KEY_PERENUAL
    useEffect(() => {
        async function getPlantDisease() {
            console.log(API_KEY_PERENUAL);
            try {
                const res = await axios({
                    method: 'get',
                    url: `https://perenual.com/api/pest-disease-list`,
                    params: {
                        key: API_KEY_PERENUAL,
                        page: 1
                    }
                })

                console.log('Response:', res.data);
                // Update the state with fetch data
                setPlantDiseaseList(res.data)

                // Handle response data here
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle error
            }
        }

        getPlantDisease()

    }, []) // fetch only once after initial render

    return (
        <div>PlantDiseaseComponent</div>
    )
}

export default PlantDisease