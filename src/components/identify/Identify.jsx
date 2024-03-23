import { useState } from "react"
import axios from "axios";
import IdentifyResult from "../IdentifyResult/IdentifyResult";
FormData

function Identify() {
  const [imgUrl, setImgeUrl] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [selectedFile, setSelectedFile] = useState()
  const [uploadSearchResults, setUploadSearchResults] = useState([])

  const API_KEY = import.meta.env.VITE_API_KEY

  async function handleApiSearchByURL() {
    try {
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

      // Handle response data here
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error
    }
  }

  // Function to upload the selected file
  async function handleUpload() {
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
    } catch (error) {
      console.error('error', error);
    }
  }



  // Function to handle file selection
  function handleFileChange(e) {
    setSelectedFile(e.target.files[0]);
  }


  const handleInputImgURLChange = (e) => {
    setImgeUrl(e.target.value)
  }



  return (
    <div className="identify-container" >
      

      <div className="input-group mb-3">
        <input type="file" className="form-control" id="inputGroupFile02" onChange={handleFileChange} />
        <button onClick={handleUpload} className="input-group-text" htmlFor="inputGroupFile02">Upload
        </button>

      </div>

      <div>
        <input type="text"
          value={imgUrl}
          onChange={handleInputImgURLChange}
          placeholder="Or uplod using imageURL" />
        <button onClick={handleApiSearchByURL}> Search Upload URL</button>

        {/* Conditionally render the SearchResult component if searchResult is not null */}
       
      </div>
      {/* Conditionally render the SearchResult component if searchResult is not null */}
      {uploadSearchResults && <IdentifyResult results={uploadSearchResults} />}
      {searchResults && <IdentifyResult results={searchResults} />}
    </div>

  )
}

export default Identify