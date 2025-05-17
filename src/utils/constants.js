const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
export const HEADER_LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const MAIN_PAGE_BACKGROUND_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_large.jpg";
export const USER_AVATAR =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";
export const TMDB_NOW_PLAYING_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/now_playing?&page=1";
export const TMDB_POPULAR_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/popular?&page=1";
export const TMDB_TOP_RATED_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/top_rated?&page=1";
export const TMDB_UPCOMING_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/upcoming?&page=1";
export const TMDB_TRAILER_URL = "https://api.themoviedb.org/3/movie/";
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
};

export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w200/";

export const supportedLanguages = [
  { identifier: "en", name: "English" },
  { identifier: "hn", name: "Hindi" },
  { identifier: "mal", name: "Malayalam" },
];

export const TMDB_MOVIE_SEARCH_URL =
  "https://api.themoviedb.org/3/search/movie?query=";
