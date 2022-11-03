import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { useDebounce } from "../../hooks/useDebounce";
import S from "./SearchPage.styled";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  const searchTerm = query.get("q");
  const debouncedsearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedsearchTerm) {
      fetchSearchMovie(debouncedsearchTerm);
    }
  }, [debouncedsearchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const request = await axios.get(
        `search/multi?include_adult=false&query=${searchTerm}`
      );
      console.log(request);
      setSearchResults(request.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const renderSearchResults = () => {
    return searchResults.length > 0 ? (
      <S.Container>
        {searchResults.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImageUrl =
              "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
            return (
              <S.Movie key={movie.id}>
                <S.MovieColumnPoster onClick={() => navigate(`/${movie.id}`)}>
                  <S.MoviePoster src={movieImageUrl} alt="movie" />
                </S.MovieColumnPoster>
              </S.Movie>
            );
          }
        })}
      </S.Container>
    ) : (
      <S.NoResult>
        <S.NoResultsText>
          <p>
            찾고자하는 검색어"{debouncedsearchTerm}"에 맞는 영화가 없습니다.
          </p>
        </S.NoResultsText>
      </S.NoResult>
    );
  };

  return renderSearchResults();
};

export default SearchPage;
