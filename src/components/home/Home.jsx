import "./home.css"
import home_Planter from "../../images/homePage/home_plant.png"
function Home() {
  return (

    <div className="jumbotron">

      <div className="home-box-1">
        <div className="home-box-1-left">
          <img src={home_Planter} alt="" />
        </div>

        <div div className="home-box-1-right">
          <h2>Welcome to PlantSeeker!</h2>
          <p className="home-box-1-right-text-1 text-start">
            Discover the beauty of nature with our advanced plant identification tool. Whether you're a seasoned botanist or just starting your journey into the world of plants, our app makes it easy to identify and learn about the flora around you.
          </p>


          <div className="home-box-1-right-text-2">
            <h5>Features</h5>
            <ul className="text-start">
              <li>Instant Identification: Our powerful AI technology analyzes the image and provides accurate identification results within seconds.
              </li>
              <li>Save Favorites: Keep track of your favorite plants by saving them to your personalized list
              </li>
              <li>Educational Resources: Learn about plant diseases, gardening tips, and interesting facts to nurture your green thumb.
              </li>
            </ul>

            <p className="text-start">
              Get started on your plant identification journey today! Upload your first image and embark on a fascinating botanical adventure.
            </p>
            <div className="btn">
              <a className="btn btn-primary btn-lg" href="/identify" role="button">Start Exploring Now</a>
            </div>

          </div>
        </div>
      </div>

      {/* <hr /> */}
      {/* 
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
      </div> */}
      {/* 
      <div className="home-box-2">
        <div className="home-box-2-left">
          <h5>Features</h5>
          <ul className="text-start">
            <li>Save Favorites: Keep track of your favorite plants by saving them to your personalized list</li>
            <li>Educational Resources: Learn about plant diseases, gardening tips, and interesting facts to nurture your green thumb.</li>
            <li>Community Interaction: Join a vibrant community of plant enthusiasts to share knowledge, experiences, and beautiful plant photos.</li>
          </ul>
        </div>
        <div className="home-box-2-right">
          <img src={home_more_plant} alt="" />
        </div>
        <hr /> */}
      {/* </div> */}
    </div>

  )
}

export default Home