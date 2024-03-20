import { useState } from "react"

function Identify() {
const [imgUrl, setImgeUrl] = useState()
const [uploadImgUrl, setupLoadImgUrl] = useState()
console.log(import.meta.env.VITE_API_KEY)
  

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
          <input type="text"/>
          <button> Or uplod using imageURL</button>
        </div>
        
</div>
      
  )
  }

export default Identify