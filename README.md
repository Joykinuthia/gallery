# Darkroom Gallery

A simple image gallery web application built with Node.js, Express, MongoDB, and EJS. Users can upload images, view them in a gallery, and perform update/delete operations.

## Features

- Upload images (JPEG, PNG, GIF) via web form
- View all uploaded images in a responsive gallery
- View single image details (name, size, upload date)
- Update image name
- Delete images
- MongoDB for image metadata storage
- Multer for file uploads
- Materialize CSS for UI styling

## Project Structure

```
_config.js
Jenkinsfile
package.json
server.js
models/
  images.js
public/
  css/
    styles.css
  javascript/
    single.js
routes/
  image.js
  index.js
  upload.js
views/
  index.ejs
  singleImage.ejs
```

- **server.js**: Main Express server setup and route mounting.
- **models/images.js**: Mongoose schema/model for images.
- **routes/**: Express route handlers for gallery, image details, and uploads.
- **public/**: Static assets (CSS, JS, uploaded images).
- **views/**: EJS templates for gallery and single image pages.
- **Jenkinsfile**: CI/CD pipeline for building, testing, and deploying the app.


## Setup Instructions

1. **Clone the repository**
  ```sh
  git clone https://github.com/Joykinuthia/gallery.git
  cd gallery
  ```

2. **Install dependencies**
  ```sh
  npm install
  ```

3. **Configure MongoDB**
  - By default, the app connects to a local MongoDB instance (`mongodb://localhost:27017/darkroom`).
  - For production, update credentials in [`_config.js`](./_config.js).

4. **Run the server locally**
  ```sh
  node server.js
  ```
  The app will be available at [http://localhost:5000](http://localhost:5000).

## Deployment on Render

You can deploy this app on [Render](https://render.com) using the following steps:

1. **Create a new Web Service**
  - Go to your Render dashboard and click "New Web Service".
  - Connect your GitHub repository (`gallery`).
  - Set the build command to:
    ```sh
    npm install
    ```
  - Set the start command to:
    ```sh
    node server.js
    ```
  - Set environment variables for MongoDB connection and any other secrets (e.g., `MONGODB_URI`, etc).

2. **Automatic Deploys**
  - Render will automatically deploy on every push to the selected branch.

3. **Manual Deploys via Jenkins**
  - The `Jenkinsfile` includes a stage to trigger deployment on Render using the Render Deploy API:
    ```sh
    curl -X POST "$RENDER_DEPLOY_URL?key=$RENDER_DEPLOY_KEY"
    ```
  - Set `RENDER_DEPLOY_URL` and `RENDER_DEPLOY_KEY` as Jenkins environment variables.

For more details, see the [Render documentation](https://render.com/docs/deploy-web-services).

## Usage

- **Upload Image**: Use the form on the homepage to upload an image.
- **View Gallery**: Uploaded images appear in the gallery.
- **View Details**: Click an image to view details and update/delete options.
- **Update/Delete**: Use the modal and buttons on the single image page.

## CI/CD

- The [`Jenkinsfile`](./Jenkinsfile) defines pipeline stages:
  - Clone code
  - Install dependencies
  - Build (currently runs `npm run build`, which you may want to define)
  - Test (`npm test`)
  - Deploy to Render via API

## Dependencies

- express
- mongoose
- multer
- ejs
- body-parser
- uuid

See [`package.json`](./package.json) for full list.

## License

ISC

---

**Author:** Joyrose Kinuthia
