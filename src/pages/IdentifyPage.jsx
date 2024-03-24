import React from 'react'
import Identify from '../components/identify/Identify'

function IdentifyPage() {
  return (
    
    <>
        <div className="home-box-2">
        <div className="home-box-2-left">
          <h5>How It Works</h5>
          <ul className="text-start">
            <li>Upload Your Picture: Take a clear picture of the plant you want to identify or upload an image from your device</li>
            <li>Instant Identification:Our powerful AI technology analyzes the image and provides accurate identification results within seconds.</li>
            <li>Explore Plant Details:  Dive deeper into the world of plants with comprehensive information including species, common names, habitats, and more.</li>
          </ul>
        </div>

        <div className="home-box-2-right">
          <img src={home_searching} alt="" />
        </div>
      </div>
      <Identify/>
    </>
   

  )
}

export default IdentifyPage