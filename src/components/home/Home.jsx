import "./home.css"
function Home() {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-6">Welcome to PlantSeeker!</h1>
        <p className="lead">Discover the beauty of nature with our advanced plant identification tool. Whether you're a seasoned botanist or just starting your journey into the world of plants, our app makes it easy to identify and learn about the flora around you.</p>
        <hr className="my-4" /> How It Works
        <ul>
          <li>Upload Your Picture: Take a clear picture of the plant you want to identify or upload an image from your device</li>
          <li>Instant Identification:Our powerful AI technology analyzes the image and provides accurate identification results within seconds.</li>
          <li>Explore Plant Details:  Dive deeper into the world of plants with comprehensive information including species, common names, habitats, and more.</li>
        </ul>
        <hr className="my-4" /> Features
        <ul>
          <li>Save Favorites: Keep track of your favorite plants by saving them to your personalized list</li>
          <li>Educational Resources: Learn about plant care, gardening tips, and interesting facts to nurture your green thumb.</li>
          <li>Community Interaction: Join a vibrant community of plant enthusiasts to share knowledge, experiences, and beautiful plant photos.</li>
        </ul>
        <hr className="my-4" /> Start Exploring Now
        <p>Get started on your plant identification journey today! Upload your first image and embark on a fascinating botanical adventure.</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Sign Up/Login Button</a>
        {/* 
        [Sign Up/Login Button]
        [Demo Video/Image Showcase]
        [Testimonials/Reviews]
        [Footer with Links to About Us, Privacy Policy, Contact Us, etc.] */}
      </div>
    </div>
  )
}

export default Home