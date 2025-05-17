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
    <a align="center" href="https://github.com/roshidhmohammed/youtube_app?tab=readme-ov-file"><strong>Explore the docs »</strong></a>
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
    <li><a href="#advanced-concepts">Advanced Concepts</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

[![Youtube-Frontend-App][product-screenshot]](https://youtube-app-drab.vercel.app/)

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

5. Enter all the credentials in `.env` like below
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
## advanced-concepts


- [x] Integrated search functionality using the debounce technique to provide better UX and reduce the number of API calls.
- [x] Fetched live video chat messages using API polling to get the live data from the server.
- [x] Developed a responsive design to be compatible with multiple screen sizes.
- [x] Created maximum reusable components for the application's maintainability.
- [x] Implemented Redux for global state management and state to be used across multiple components.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- features -->
## features

- [x] View all videos
- [x] Watch detailed video and view the content details
- [x] Show suggested videos
- [x] Display comments on each video watch page
- [x] Live Videos
    - [ ] Watch Detailed Live Videos with live chat



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