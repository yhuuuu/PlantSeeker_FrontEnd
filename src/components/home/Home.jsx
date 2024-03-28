import "./home.css"
import home_Planter from "../../images/homePage/home_plant.png"
function Home() {
  return (

    <div className="jumbotron">
      <div className="home-box-1">

        {/* Home Box1 LEFT */}
        <div className="home-box-1-left">
          <div className="home-box-img-div">
            <img src={home_Planter} alt="HomePage_img" />
            <a href="https://www.flaticon.com/free-stickers/plant" title="plant stickers">Plant stickers created by Stickers - Flaticon..</a>
          </div>

        </div>

        {/* Home Box1 RIGHT */}
        <div div className="home-box-1-right">

          <h2>Welcome to PlantSeeker!</h2>

          {/* Right section Top textbox */}
          <p className="home-box-1-right-text-1 text-start">
            Explore nature's beauty with our advanced plant identification tool. Whether you're a seasoned botanist or new to plant exploration, our app makes it easy to identify and learn about the flora around you.
          </p>

          {/* Right section Bottom textbox */}
          <div className="home-box-1-right-text-2.1">
            <h5>Features</h5>
            <ul className="text-start">
              <li>Instant Identification: Our powerful AI analyzes images and provides accurate results within seconds.
              </li>
              <li>Save Favorites: Keep track of your preferred plants by adding them to your personalized list.
              </li>
              <li>Educational Resources: Learn about plant diseases, gardening tips, and interesting facts to nurture your green thumb.
              </li>
            </ul>

            <p className="home-box-1-right-text-2.2 text-start">
              Start your plant identification journey today! Upload your first image and dive into a fascinating botanical adventure.
            </p>

            <div className="homePage-btn">
              <a className="btn" href="/identify" role="button">Start Exploring Now</a>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Home