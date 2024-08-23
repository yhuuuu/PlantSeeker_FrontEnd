
# PlantSeeker

Welcome to the PlantSeeker App! This application allows users to identify plants by uploading image or providing image URLs. It leverages powerful AI technology to analyze image and provide accurate identification results. Whether the user is a seasoned botanist or just starting the journey into the world of plants, this app makes it easy to identify and learn about the flora around them.

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

- **Image Upload**: Users can upload images of plants from their desktop.
- **Image URL Search**: Users can search for plant images using URLs.
- **Instant Identification**: The app uses advanced AI technology to analyze images and provide instant identification results.
- **Plant Details**: Users can explore detailed information about identified plants, including species, common names, scientific names, and more.
- **Favorites List**: Users can save their favorite plants to a personalized list for future reference.
- **Educational Resources**: The app provides resources for learning about plant diseases(current feature), gardening tips, and interesting plant facts(later features)

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

#### 1. Integration of Third-Party APIs:
Integrating third-party APIs like Pl@ntNet and Perenual required understanding their documentation, handling authentication, CORS errors and processing API responses effectively. I overcame this challenge by carefully reading the API documentation, testing API requests using tools like Postman and Thunder Client, and implementing the API calls in my project.


#### 2. State Management in React:
 Managing state effectively in a React application, especially handling asynchronous operations like API requests and loading states, was a challenge. I used React hooks like useState and useEffect to manage component state and lifecycle effectively. Additionally, I used conditional rendering to display loading spinners or fetched data based on the application state.

#### 3. Handling Page Navigation and State Preservation: 
Preserving previous search results when navigating back to the search page posed a challenge. I addressed this challenge by storing the search results in session storage when they were fetched and retrieving them when the search page was revisited. By using session storage, I ensured that the previous search results were available even after navigating away from the page.

#### 4. Handling FormData for Image Uploads:
Incorporating FormData to handle image uploads presented its own set of challenges. Understanding how to create and manipulate FormData objects and append files to them was essential for properly sending image data to the server.

#### 5. Combining Object State and FormData:
Combining the use of object state for passing data between routes and FormData for handling image uploads required careful management. Ensuring that the data was correctly formatted and transmitted to the server while maintaining accessibility across components was crucial for a smooth user experience.

#### 5. Error Handling: 
Implementing robust error handling mechanisms for API requests and other asynchronous operations was crucial to provide a smooth user experience. I handled errors by using try-catch blocks and sending appropriate error responses to the client. Additionally, I implemented error logging to track and debug issues effectively.

#### 5.UI/UX Design: 
Designing a user-friendly interface and ensuring a seamless user experience was essential. I focused on creating intuitive user interfaces, providing clear feedback for user actions, and optimizing the application's performance. I used CSS frameworks like Bootstrap and custom styling to enhance the visual appeal of the application.




## Appendix

- **Icon**: https://www.flaticon.com/free-icon/
- **PlantNetAPI**: https://my.plantnet.org/ 
- **Perenual**: https://perenual.com/
- **Huemint**: https://huemint.com/website-2/
- **Save State to LocalStorage & Persist on Refresh with React.js**: https://www.youtube.com/watch?v=rWfhwW9forg&t=2
