# PlantSeeker

Welcome to the PlantSeeker App! This application empowers users to identify plants by either uploading images or providing image URLs. It leverages advanced AI technology to analyze images and deliver accurate identification results. Whether you are a seasoned botanist or a plant enthusiast starting your journey, PlantSeeker makes it easy to identify and learn about plants around you.

## Features

- **Image Upload:** Upload plant images directly from your desktop.
- **Image URL Search:** Search for plants by providing image URLs.
- **Instant Identification:** Advanced AI technology processes the images instantly.
- **Plant Details:** Explore detailed information including species, common names, and scientific names.
- **Favorites List:** Save your favorite plants for quick access later.
- **Educational Resources:** Learn about plant diseases (current feature), gardening tips, and interesting plant facts (upcoming features).

## Usage

- Upload a plant image or input an image URL to identify a plant.
- View detailed information about the identified plants.
- Add plants to your personalized favorites list for future reference.

## API Key Setup and Configuration

To use PlantSeeker with the integrated third-party APIs, you need to obtain and configure your own API keys.

### Pl@ntNet API

1. **Sign Up:**  
   Visit the [Pl@ntNet developer portal](https://my.plantnet.org/) and create an account.

2. **Generate API Key:**  
   After logging in, go to the API key settings page and generate a private API key.

3. **Configure API Key Settings:**  
   - Enable **"Expose my API key"** to allow the frontend application to access the API.  
   - Add your authorized domains or IP addresses to restrict API key usage and avoid unauthorized requests. This is crucial for testing and deployment to prevent CORS and security issues.

4. **Environment Variable:**  
   Set your API key in local development by creating a `.env` file with the following entry:
VITE_API_KEY=your_actual_plantnet_api_key_here

text
Similarly, configure this environment variable on your hosting/deployment platform.

### Perenual API

- Sign up at [Perenual API website](https://perenual.com/docs/api) to obtain an API key.
- Refer to the [Perenual API documentation](https://www.postman.com/navigation-technologist-14869750/workspace/perenual/collection/22777343-5201deb7-c168-47a5-bc9b-2693c2662f05?action=share&creator=22777343) for detailed use.

---

## Backend API Endpoints

| Endpoint            | Method | Description                     | Parameters                             |
|---------------------|--------|---------------------------------|--------------------------------------|
| `/api/favorites`    | GET    | Retrieve all favorite plants    | None                                 |
| `/api/favorites`    | POST   | Add a new plant to favorites    | JSON body with plant details         |
| `/api/favorites/:id`| PUT    | Update a favorite plant by ID   | `id` (string): Plant ID to update    |
| `/api/favorites/:id`| DELETE | Delete a favorite plant by ID   | `id` (string): Plant ID to delete    |

---

## Technologies Used

- **React:** Frontend UI development.
- **Axios:** HTTP client for API requests.
- **MongoDB:** Document-oriented database.
- **Mongoose:** Object Data Modeling (ODM) for MongoDB and Node.js.
- **Session Storage:** Persist search results across page refreshes.
- **CSS:** Styling and interface design.

---

## Installation

1. Clone the frontend repository:

git clone https://github.com/yhuuuu/PlantSeeker_FrontEnd.git

text

2. Clone the backend repository:

git clone https://github.com/yhuuuu/PlantSeeker_BackEnd.git

text

3. Install dependencies for both frontend and backend:

npm install

text

4. Run the applications:

- Frontend:

  ```
  npm run dev
  ```

- Backend:

  ```
  npm start
  ```

5. Open your browser and visit the frontend app URL (usually `http://localhost:5173`).

---

## Lessons Learned

### 1. Integration of Third-Party APIs

Successfully integrated APIs like Pl@ntNet and Perenual by thoroughly studying their documentation, handling authentication, CORS, and response structures.

### 2. State Management in React

Effectively managed asynchronous API operations with React hooks (`useState`, `useEffect`) and implemented conditional rendering for better UI responsiveness.

### 3. Navigation and State Preservation

Used session storage for persisting search results to enhance user experience when navigating between pages.

### 4. Handling Image Uploads Using FormData

Mastered usage of `FormData` objects for proper image uploads to backend services.

### 5. Combining Object State and FormData

Maintained smooth data flow across components combining React state and FormData handling.

### 6. Robust Error Handling

Implemented comprehensive error handling with try-catch blocks and backend error logging to ensure reliable app performance.

### 7. UI/UX Design Focus

Crafted intuitive user interfaces leveraging Bootstrap and custom CSS to provide a polished and responsive experience.

---

## Appendix

- Icons: [Flaticon](https://www.flaticon.com/free-icon/)
- [PlantNet API](https://my.plantnet.org/)
- [Perenual API](https://perenual.com/)
- [Huemint](https://huemint.com/website-2/)
- React state persistence tutorial: [YouTube](https://www.youtube.com/watch?v=rWfhwW9forg&t=2)

---

Feel free to contribute or report issues for improvements!
