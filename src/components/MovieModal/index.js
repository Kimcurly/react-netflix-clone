import React, { useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import M from "./MovieModal.styled";

const MovieModal = ({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen,
}) => {
  const ref = useRef();
  useOnClickOutside(ref, () => {
    setModalOpen(false);
  });

  return (
    <M.Template>
      <M.WrapperModal>
        <M.Modal ref={ref}>
          <M.CloseModal onClick={() => setModalOpen(false)}></M.CloseModal>
          <M.ModalPoster
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt="modal-poster-img"
          />
          <M.ModalContent>
            <M.ModalDetail>
              <M.ModalUserTaste>98% for you</M.ModalUserTaste>
              &nbsp;
              {release_date ? release_date : first_air_date}
            </M.ModalDetail>
            <M.ModalTitle>{title ? title : name}</M.ModalTitle>
            <M.ModalOverview>평점: {vote_average}</M.ModalOverview>
            <M.ModalOverview>{overview}</M.ModalOverview>
          </M.ModalContent>
        </M.Modal>
      </M.WrapperModal>
    </M.Template>
  );
};

export default MovieModal;
