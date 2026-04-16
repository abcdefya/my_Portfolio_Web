# Personal Portfolio Website in React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<img width="1266" alt="Screen Shot 2022-06-19 at 2 18 18 PM" src="https://user-images.githubusercontent.com/50160672/174933373-1ba6cadf-1c9a-48c3-aa58-984d0bd62d82.png">

Built using:

- Front-end library: React
- CSS framework: React-bootstrap
- CSS animations library: Animate.css

In the /personal-portfolio, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Deploy Full-stack on Vercel

This project now supports full-stack deployment on Vercel:

- Frontend: Create React App static build
- Backend API: Vercel Serverless Function at `/api/contact`

### 1) Environment Variables

Set these variables in Vercel Project Settings > Environment Variables:

- `EMAIL_USER`: sender Gmail address
- `EMAIL_PASS`: Gmail app password
- `CONTACT_TO_EMAIL`: destination email to receive contact form submissions

Optional:

- `REACT_APP_API_BASE_URL`: leave empty for Vercel production (defaults to `/api` route behavior)

You can copy from `.env.example` for local reference.

### 2) Local Development

- Frontend: `npm start`
- Local API (legacy Express): `node server.js`

By default:

- Development mode sends contact requests to `http://localhost:5000/contact`
- Production mode sends contact requests to `/api/contact` on the same domain

### 3) Vercel Deployment

1. Push this repository to GitHub.
2. Import the repo into Vercel.
3. Vercel uses `vercel.json`:
	- Build Command: `npm run build`
	- Output Directory: `build`
4. Add environment variables and redeploy.

After deploy, contact form submissions are handled by `api/contact.js`.
