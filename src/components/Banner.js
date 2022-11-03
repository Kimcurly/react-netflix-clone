import axios from "../api/axios";
import React, { useState, useEffect } from "react";
import requests from "../api/requests";
import B from "./Banner.styled";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  console.log(requests.fetchNetflixOriginals);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // 현재 상영중인 영화 정보를 가져오기(여러 영화)
    const request = await axios.get(requests.fetchNowPlaying);
    console.log(request);

    // 여러 영화 중 영화 하나의 ID를 가져오기
    const movieId =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;

    // 특정 영화의 더 상세한 정보를 가져오기(비디오 정보도 포함)
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });
    setMovie(movieDetail);
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  console.log("movie", movie);

  if (!isClicked) {
    return (
      <B.Banner
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <B.Contents>
          <B.Title>{movie.title || movie.name || movie.original_name}</B.Title>
          <B.ButtonContainer>
            <B.PlayButton onClick={() => setIsClicked(true)}>Play</B.PlayButton>
            <B.InfoButton>More Information</B.InfoButton>
          </B.ButtonContainer>
          <B.Description>{truncate(movie.overview, 100)}</B.Description>
        </B.Contents>
        <B.FadeBottom />
      </B.Banner>
    );
  } else {
    return (
      <B.VideoMainContainer>
        <B.VideoHomeContainer>
          <B.VideoIframe
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
            title="YouTube video player"
            frameborder="0"
            allow=" autoplay; fullscreen"
            allowfullscreen
          ></B.VideoIframe>
        </B.VideoHomeContainer>
      </B.VideoMainContainer>
    );
  }
};

export default Banner;
