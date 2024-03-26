
# PlantSeeker

Welcome to the PlantSeeker App! This application allows users to identify plants by uploading images or providing image URLs. It leverages powerful AI technology to analyze images and provide accurate identification results. Whether the user is a seasoned botanist or just starting the journey into the world of plants, this app makes it easy to identify and learn about the flora around them.

## Features

- **Image Upload**: Users can upload images of plants from their desktop.
- **Image URL Search**: Users can search for plant images using URLs.
- **Instant Identification**: The app uses advanced AI technology to analyze images and provide instant identification results.
- **Plant Details**: Users can explore detailed information about identified plants, including species, common names, scientific names, and more.
- **Favorites List**: Users can save their favorite plants to a personalized list for future reference.
- **Educational Resources**: The app provides resources for learning about plant diseases(current feature), gardening tips, and interesting plant facts(later features)


## Usage

- To identify a plant, upload an image or provide an image URL.
- Explore detailed information about identified plants.
- Save favorite plants to your personalized list.
## Third-Party API

This project utilizes two third-party APIs to enhance its functionality.

### Pl@ntNet API

- **Description**: Pl@ntNet API is a powerful plant identification tool that leverages advanced AI technology to analyze images of plants and provide accurate identification results.
- **API Key**: To access the Pl@ntNet API, you need to sign up for an account on the [Pl@ntNet website](https://my.plantnet.org/doc) and generate your private API key from the Settings page.
- **Documentation**: Detailed documentation for the Pl@ntNet API can be found [here](https://my.plantnet.org/doc/openapi).

### Perenual API

- **Description**: Perenual API provides a comprehensive list of plant diseases along with detailed information about each disease, including images, explanations, and causes.
- **API Key**: To use the Perenual API, you must sign up for an account on the [Perenual website](https://perenual.com/docs/api) and generate your private API key from the developer page.
- **Documentation**: Explore the documentation for the Perenual API [here](https://www.postman.com/navigation-technologist-14869750/workspace/perenual/collection/22777343-5201deb7-c168-47a5-bc9b-2693c2662f05?action=share&creator=22777343).

## BackEnd API

#### Get all favorites
```http
  GET /api/favorites
```
#### Add a plant to favorites 

```http
  POST /api/favorites
```

#### Update a plant from favorites 

```http
  PUT /api/favorites/:id'
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to update|

#### DELETE a plant from favorites 

```http
  DELETE /api/favorites/:id'
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to delete|


## Technologies Used

- **React**: Frontend framework for building user interfaces.
- **Axios**: HTTP client for making requests to the backend API.
- **MongoDB**: Source-available, cross-platform, document-oriented database program
- **Moongoose**: JavaScript object-oriented programming library that creates a connection between MongoDB and the Node.js
- **Session Storage**: Used for storing previous search results to maintain state across page refreshes.
- **CSS**: Styling the user interface.


## Installation

1. Clone the repository:
```
git clone <https://github.com/yhuuuu/PlantSeeker_FrontEnd>
```

2. Clone the backEnd API
```
git clone <https://github.com/yhuuuu/PlantSeeker_BackEnd>
```

3. Install dependencies:
```
  npm i
```
4. Run the application:
```
FrontEnd - npm run dev
BackEnd - npm start
```

5. Open the app in your browser


## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?
Save the previous search when I go back with the page React
https://stackoverflow.com/questions/68016276/save-the-previous-search-when-i-go-back-with-the-page-react

Expose API key

https://my.plantnet.org/doc


resource
https://www.flaticon.com/free-icon/wishlist_12759936?term=add+to+list&page=2&position=49&origin=search&related_id=12759936

- **CORS**:
- **FormData**:
- **Pass object as a state and use UseLocation to access the new Path route**:
- useLocation(plantdetail page)
-- Session Storage

-Formdata ofr uploading picture 
const formData = new FormData();
      formData.append('images', selectedFile);


{/* Passing the plantData object as state, which contains information about the plant. */}
      <Link
        to={`/identify/plants/${plant.gbif.id}`} 
        state={{ plantData: plant }}
      >
  useNavigate