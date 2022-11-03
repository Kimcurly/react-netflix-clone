import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import M from "../../components/MovieModal/MovieModal.styled";

const DetailPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(`/movie/${movieId}`);
      setMovie(request.data);
    };

    fetchData();
  }, [movieId]);

  if (!movie) return <div>...Loading</div>;

  return (
    <section>
      <M.ModalPoster
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="poster"
      />
    </section>
  );
};

export default DetailPage;
