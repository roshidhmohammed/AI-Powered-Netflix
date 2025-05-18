<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>


[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="/public/image.png">
    <img src="/public/image.png" alt="Logo" width="100" height="80">
  </a>
  <h3 align="center">AI-Powered-Netflix</h3>

  <p align="center">
    Covered advanced Frontend/React concepts with stunning UI
    <br />
    <a align="center" href="https://github.com/roshidhmohammed/AI-Powered-Netflix?tab=readme-ov-file#about-the-project"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://ai-powered-netflix-a527.vercel.app/">View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#technologies-used">Technologies Used</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#Key-Features-and-Technical-Highlights">Key Features & Technical Highlights</a></li>
    <li><a href="#Functionality-of-the-application">Interactive Functionality of the Application</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

[![AI-Powered-Netflix][product-screenshot]](https://ai-powered-netflix-a527.vercel.app/)

This project includes a stunning UI of the Netflix application with advanced CSS properties, effective AI utilisation to increase the user experience and high maintainability and readability.



<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Technologies-Used

It lists the frameworks and libraries used to bootstrap this project.

* [![Vite][Vite]][Vite-url]
* [![React][React.js]][React-url]
* [![TailwindCSS][TailwindCSS]][TailwindCSS-url]
* [![React-Icons][React-Icons]][React-Icons-url]
* [![Firebase][Firebase]][Firebase]
* [![TMDB-Database][TMDB-Database]][TMDB-Database]
* [![OPEN-AI][OPEN-AI]][OPEN-AI]
* [![Redux][Redux]][Redux-url]
<!-- * [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![JQuery][JQuery.com]][JQuery-url] -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

These are instructions on how you can run this project locally.

### Prerequisites

* Ensure you have Node.js installed on your local machine. If not,
  follow this documentation as an installation guide: [https://nodejs.org/en/download](https://nodejs.org/en/download) 

* Create a TMDB Database account and feed the API key for further usage.
  Follow this link [https://developer.themoviedb.org/docs/getting-started/](https://developer.themoviedb.org/docs/getting-started/)

* Create an OPEN AI account and feed the API key for further usage.
  Follow this link [https://platform.openai.com/docs/overview/](https://platform.openai.com/docs/overview/)

* Create a Firebase account - create an account, and move to "Go To Console" create a project for the authentication and authorization purpose of this app.
  Follow this link [https://firebase.google.com/docs/](https://firebase.google.com/docs//)


### Installation

_Below are the instructions to run the complete project._

1. Get the API Keys at from OPEN AI, and TMDB Database (Follow the above documentation)
2. Clone the repo
   ```sh
   git clone https://github.com/roshidhmohammed/AI-Powered-Netflix
   ```
3. Install all the NPM packages - used in this app
   ```sh
   npm install
   ```
4. Create a .env file at the root of your project.

5. Fill out all the below credentials in `.env` like below
   ```js
   VITE_TMDB_ACCESS_TOKEN=
   VITE_FIREBASE_API_KEY=
   VITE_FIREBASE_AUTH_DOMAIN=
   VITE_FIREBASE_PROJECT_ID=
   VITE_FIREBASE_STORAGE_BUCKET=
   VITE_FIREBASE_MESSAGING_SENDER_ID=
   VITE_FIREBASE_APP_ID=
   VITE_FIREBASE_MEASUREMENT_ID=
   VITE_OPEN_AI_KEY=
   ```
6. Run command below to start the project
   ```sh
     npm run dev
    ```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Advanced Concepts -->
## Key-Features-and-Technical-Highlights


- [x] Implemented secure authentication using email and password with the Firebase Auth package.
- [x] Applied strong authorization across all pages of the application except the Login and SignUp components to ensure security.
- [x] This app fetches movie data by category (like popular movies, now playing movies, and top rated movies) from the TMDB database using the custom hooks for improved maintainabilty, readability, and to follow DRY principle.
- [x] All categorized movie data is stored in seperate states within the redux store for use across multiple components as needed.
- [x] When a user clicks on a specific movie, they are redirected to a "Watch Movie" page where the movie is displayed using a Youtube iframe with enhanced user controls.
- [x] Users can perform AI-powered movie recommendation searches with custom input using  OPENAI, and the app retrieves suggested movie details from the TMDB database.
- [x] Built reusable components to enhance maintainability and reduce redundancy.
- [x] Secured all credentials like API keys, firebase account details in the .env file.
- [x] Deployed the application on thefree tier of the Vercel platform.
- [x] Designed a responsive UI compatible with multiple screen sizes.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- Functionality-of-the-application -->
## Functionality-of-the-application

- [x] Users can watch top categorized movies on the home page, after successfully signing in.
- [x] Users can ask the AI model for the movie suggestions using the customized keywords (eg: top Indian romantic movies, recently released horror movies, etc.)
- [X] When a user clicks on a specific movie, they are redirected to the "Watch Movie" page in full screen mode with the flexible controls of the movie.



<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing


### Top contributors:

<a href="https://github.com/roshidhmohammed/AI-Powered-Netflix/graphs/contributors">
  <img src="https://github.com/roshidhmohammed/AI-Powered-Netflix/graphs/contributors" alt="contrib.rocks image" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- CONTACT -->
## Contact

Mohammed Roshidh s - [@my_linkedin](https://www.linkedin.com/in/mohammedroshidh-software-engineering) - linkedin

Project Repo Link: [https://github.com/roshidhmohammed/AI-Powered-Netflix](https://github.com/roshidhmohammed/AI-Powered-Netflix)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

This project is built using the following resources.

* [React](https://react.dev/)
* [Vite-build-tool](https://vite.dev/)
* [Firebase](https://firebase.google.com/docs/)
* [TMDB-Database](https://developer.themoviedb.org/docs/getting-started/)
* [OPEN-AI](https://platform.openai.com/docs/overview/)
* [![Redux][Redux]][Redux-url]
* [react-router-dom](https://reactrouter.com/)
* [Redux](https://redux.js.org/)
* [React-Icons](https://react-icons.github.io/react-icons/)
* [tailwindcss](https://tailwindcss.com/)
* [Vercel](https://vercel.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/mohammedroshidh-software-engineering

[product-screenshot]: public/image.png
[Vite]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E
[Vite-url]: https://vite.dev
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://react.dev/
[TailwindCSS]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com
[React-Icons]: https://img.shields.io/badge/React--Icons-20232A?style=for-the-badge&logo=fontawesome&logoColor=white
[React-Icons-url]:https://react-icons.github.io/react-icons
[Firebase]: https://firebase.google.com/docs
[TMDB-Database]: https://developer.themoviedb.org/docs/getting-started
[OPEN-AI]: https://platform.openai.com/docs/overview
[Redux]: https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]:https://redux.js.org/