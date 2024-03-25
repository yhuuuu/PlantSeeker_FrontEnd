import { useState } from "react"
import axios from "axios";
import IdentifyResult from "../IdentifyResult/IdentifyResult";
import identify_search from "../../images/identifyPage/question.png"
import pageLoader from "../../images/identifyPage/watering-can.gif"

import './identify.css'
function Identify() {
  const [imgUrl, setImgeUrl] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [selectedFile, setSelectedFile] = useState()
  const [uploadSearchResults, setUploadSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchMethod, setSearchMethod] = useState(null)
  const API_KEY = import.meta.env.VITE_API_KEY

  // Function to fetch API by image url
  async function handleApiSearchByURL() {
    try {
      setIsLoading(true)
      console.log('imgUrl in searchByURL:', imgUrl);
      const res = await axios({
        method: 'get',
        url: `https://my-api.plantnet.org/v2/identify/all`,
        params: {
          images: imgUrl,
          'include-related-images': true,
          'no-reject': false,
          'lang': 'en',
          'api-key': API_KEY,
        }
      })

      console.log('Response:', res.data);
      // Update the state with fetch data
      setSearchResults(res.data.results)
      setIsLoading(false); //set loader false
      // Handle response data here
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error
    }
  }

  // Function to upload the selected file
  async function handleUpload() {
    setIsLoading(true)
    if (!selectedFile) {
      console.error('No file selected.');
      return;
    }

    const formData = new FormData();
    formData.append('images', selectedFile);

    try {
      const response = await axios({
        method: 'post',
        url: `https://my-api.plantnet.org/v2/identify/all`,


        params: {
          'include-related-images': true,
          'no-reject': false,
          'lang': 'en',
          'api-key': API_KEY,

        },
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data'
        }


      })

      console.log('data', response.data);
      setUploadSearchResults(response.data.results)// Response data from the API
      setIsLoading(false); //set loader false
    } catch (error) {
      console.error('error', error);
    }
  }

  // Function to handle file selection
  function handleFileChange(e) {
    setSelectedFile(e.target.files[0]);
  }

  // Function for handle image URL input change
  const handleInputImgURLChange = (e) => {
    setImgeUrl(e.target.value)
  }

  // Function to set search method and excute the corresponding search
  const handleSearch = (method) => {
    setSearchMethod(method)
    setIsLoading(true)
    method === "URL" ? handleApiSearchByURL() : handleUpload()
  }

  return (
    <div className="identify-container" >

      <div className="identify-description">
        <h4>How It Works</h4>
        <ul className="text-start">
          <li>
            <strong>Upload Your Picture: </strong>
            Upload an image from your deskstop or image url. (* image must be .jpeg or .png format) </li>
          <li>
            <strong>Instant Identification: </strong>
            Our powerful AI technology analyzes the image and provides accurate identification results within seconds.</li>
          <li>
            <strong>Explore Plant Details: </strong>
            Dive deeper into the world of plants with comprehensive information including species, common names, scientify name, and more.</li>
        </ul>

        <div >
          <img src={identify_search} alt="" />
        </div>

      </div>

      <div className="identify-search">
        <div className="input-group mb-3">
          <input type="file" className="form-control" onChange={handleFileChange} />
          <button onClick={() => handleSearch("Upload")} className="input-group-text" > Search Image
          </button>

        </div>

        <div className="input-group mb-3">
          <input class="form-control" type="text"
            value={imgUrl}
            onChange={handleInputImgURLChange}
            placeholder="Upload using image URL" />
          <button className="input-group-text" onClick={() => handleSearch("URL")}> Search  URL</button>

        </div>
        {isLoading ? <h6 className="loaderText">Loading... <img className="pageLoader" src={pageLoader} alt="" /></h6> : null}
      </div>


      <div className="identify-search-result">

        {/* Display search results */}
        {searchMethod === "Upload" && (
          uploadSearchResults && <IdentifyResult results={uploadSearchResults} />)
        }
        {searchMethod === "URL" && <IdentifyResult results={searchResults} />}

      </div>

    </div>

  )
}

export default Identify