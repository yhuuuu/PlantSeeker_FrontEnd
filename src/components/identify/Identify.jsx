import { useState } from "react"
import axios from "axios";

function Identify() {
  const [imgUrl, setImgeUrl] = useState('')
  //const [encodedUrl, setEncodedUrl] = useState('');
  //const [uploadImgUrl, setupLoadImgUrl] = useState()

  const API_KEY = import.meta.env.VITE_API_KEY
  console.log('API_KEY:', API_KEY)
  console.log("inputURL:", imgUrl);
  console.log(typeof (imgUrl));

  async function handleSearch() {
    try {
      console.log('imgUrl in handleSearch:', imgUrl);
      const encodedUrl = encodeURIComponent(imgUrl); // Encoding the URL
      // console.log('encodedUrl:', encodedUrl);
      // const res = await axios.get(`https://my-api.plantnet.org/v2/identify/all?api-key=${API_KEY}&images=${encodedUrl}`);

      const res = await axios({
        method: 'get',
        url: `https://my-api.plantnet.org/v2/identify/all`,
        // withCredentials: false,
        params: {
          images: imgUrl,
          'include-related-images': true,
          'no-reject':false,
          'lang': 'en',
          'api-key': API_KEY
        },
      })

      console.log('Response:', res.data);
      // Handle response data here
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error
    }


  }


  const handleInputImgURLChange = (e) => {
    setImgeUrl(e.target.value)
  }



  return (
    <div className="identify-container" >
      <div>
        Query
        Identify / Contribute to Pl@ntNet
        The observation can only have up to 4 pictures of the same plant
        At least one photo of leaf, flower, fruit or bark is required for identification to work
        It is recommended to use images with these dimensions x: 1280px
      </div>

      <div className="input-group mb-3">
        <input type="file" className="form-control" id="inputGroupFile02" />
        <label className="input-group-text" htmlFor="inputGroupFile02">Upload
        </label>
      </div>

      <div>
        <input type="text"
          value={imgUrl}
          onChange={handleInputImgURLChange}
          placeholder="Or uplod using imageURL" />
        <button onClick={handleSearch}> Search Upload URL</button>
      </div>

    </div>

  )
}

export default Identify