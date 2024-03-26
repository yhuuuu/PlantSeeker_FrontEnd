import { useState, useEffect } from "react"
import axios from "axios";
import IdentifyResult from "../IdentifyResult/IdentifyResult";
import identify_search from "../../images/identifyPage/question.png"
import pageLoader from "../../images/identifyPage/watering-can.gif"


import './identify.css'
function Identify() {
  // search
  const [imgUrl, setImgeUrl] = useState('')
  const [selectedFile, setSelectedFile] = useState()

  // result
  const [searchResults, setSearchResults] = useState([])
  const [uploadSearchResults, setUploadSearchResults] = useState([])

  // excute the corresponding search by search method ("URL"or "Upload")
  const [searchMethod, setSearchMethod] = useState(null)

  const [isLoading, setIsLoading] = useState(false)
  const API_KEY = import.meta.env.VITE_API_KEY

  //----Fetching-----

  // Function to fetch API by image url
  async function handleApiSearchByURL() {
    
    if (!imgUrl) {
      setIsLoading(false)
      alert('Please enter a image URL.')
    } else {
      setIsLoading(true)
      try {
        //console.log('imgUrl in searchByURL:', imgUrl);
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
        //console.log('Response:', res.data);

        // Update the state with fetch data
        setSearchResults(res.data.results)
        // Set loader false
        setIsLoading(false);
        // Store search results in session storage
        sessionStorage.setItem('searchResults', JSON.stringify(res.data.results));

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }

  // Function to fetch API by upload the selected file
  async function handleUpload() {

    if (!selectedFile) {
      alert('No file selected.')
      setIsLoading(false)

    } else {
      setIsLoading(true)
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

        //console.log('data', response.data);

        // set response data from the API
        setUploadSearchResults(response.data.results)
        //set loader false
        setIsLoading(false);
        // Store search results in session storage
        sessionStorage.setItem('searchResults', JSON.stringify(response.data.results));
      } catch (error) {
        console.error('error', error);
      }
    }
  }

  //---Handleing-----
  // Function to handle file selection  currently only accept 1 picture
  const handleFileChange = (e) => {
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

  useEffect(() => {
    // Retrieve previous search results from session storage when component mounts
    const storedResults = sessionStorage.getItem('searchResults');
    if (storedResults) {
      setSearchResults(JSON.parse(storedResults));
      setSearchMethod('URL')
      setUploadSearchResults([]);
    }
  }, []);



  return (
    <div className="identify-container" >

      {/* How to use */}
      <div className="identify-description">
        <h2>How It Works</h2>

        <ul className="text-start">
          <li>
            <strong>Upload Your Picture: </strong>
            Upload an image from your deskstop or image url. (* image must be .jpeg or .png format)
          </li>

          <li>
            <strong>Instant Identification: </strong>
            Our powerful AI technology analyzes the image and provides accurate identification results within seconds.
          </li>

          <li>
            <strong>Explore Plant Details: </strong>
            Dive deeper into the world of plants with comprehensive information including species, common names, scientify name, and more.
          </li>
        </ul>

        {/* Image */}
        <div className="identify-image">
          <img src={identify_search} alt="searching" />
        </div>
      </div>

      {/* Search Options */}
      <div className="identify-search">

        {/* Search by uploading */}
        <div className="input-group mb-3">
          <input type="file" className="form-control" onChange={handleFileChange} />
          <button onClick={() => handleSearch("Upload")} className="input-group-text" > Search Image
          </button>
        </div>

        {/* Search by URL */}
        <div className="input-group mb-3">
          <input class="form-control" type="text"
            value={imgUrl}
            onChange={handleInputImgURLChange}
            placeholder="Upload using image URL" />
          <button className="input-group-text" onClick={() => handleSearch("URL")}> Search  URL</button>
        </div>

        {/* Loader */}
        {/* Display loader when page is loading */}
        {isLoading ?
          <h6 className="loaderText">Loading...
            <img className="pageLoader" src={pageLoader} alt="loader" />
          </h6> : null
        }
      </div>


      <div className="identify-search-result">

        {/* Display search results depent of the search method*/}
        {searchMethod === "Upload" && (
          uploadSearchResults && <IdentifyResult results={uploadSearchResults} />)
        }

        {searchMethod === "URL" && (
          searchResults && <IdentifyResult results={searchResults} />)
        }

      </div>

    </div>

  )
}

export default Identify