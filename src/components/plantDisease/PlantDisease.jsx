import axios from 'axios'
import { useState, useEffect } from 'react'
import PlantDiseaseCard from '../plantDieaseCard/PlantDiseaseCard'
import './plantDisease.css'


function PlantDisease() {
    const [plantDiseaseList, setPlantDiseaseList] = useState([])
    const [paginationInfo, setPaginationInfo] = useState(null)

    const API_KEY_PERENUAL = import.meta.env.VITE_API_KEY_PERENUAL

    //set default page number equal to 1
    async function getPlantDisease(pageNumber = 1) {
        console.log('Fetching plant disease data for page:', pageNumber);
        try {
            const res = await axios({
                method: 'get',
                url: `https://perenual.com/api/pest-disease-list`,
                params: {
                    key: API_KEY_PERENUAL,
                    page: pageNumber
                }
            })

            console.log('Response:', res.data);
            // Update the state with fetch data
            setPlantDiseaseList(res.data.data)
            // set pagination info from response data
            setPaginationInfo({
                currentPage: res.data.current_page,
                lastPage: res.data.last_page,
                totalItem: res.data.total
            })

            // Handle response data here
        } catch (error) {
            console.error('Error fetching data:', error);
            // Handle error
        }
    }
    useEffect(() => {
        getPlantDisease()

    }, []) // fetch only once after initial render

    // Function handle page change
    function handlePageChange(pageNumber) {
        console.log('Page changed to:', pageNumber);
        getPlantDisease(pageNumber)
    }
    return (
        <div>
            <h1>Plant Disease List</h1>

            {plantDiseaseList.map((disease, index) => (

                <PlantDiseaseCard disease={disease} key={index} />

            ))}

            {/* pagination */}
            <div className='pagination-container'>
                {paginationInfo && (
                    <div>
                        {/* Perviouse Page */}
                        <button className='pagination-button'
                            disabled={paginationInfo.currentPage === 1}
                            onClick={() => (handlePageChange(paginationInfo.currentPage - 1))}>Pervious Page
                        </button>

                        {/* Pages */}

                        {Array.from({ length: paginationInfo.lastPage }, (_, i) => i + 1).map((page) => (
                            <button className='pagination-button'
                                key={page}
                                disabled={paginationInfo.currentPage === page}
                                onClick={() => handlePageChange(page)}
                            >
                                {page}
                            </button>
                        ))}

                        {/* Next Page */}
                        <button className='pagination-button'
                            disabled={paginationInfo.currentPage === paginationInfo.lastPage}
                            onClick={() => (handlePageChange(paginationInfo.currentPage + 1))}
                        > Next Page
                        </button>
                    </div>
                )}
            </div>

        </div>
    )
}

export default PlantDisease