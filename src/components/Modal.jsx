import React from "react";

const Modal1 = ({ setModalShow, celebrityInfo, img }) => {
  console.log(celebrityInfo);
  return (
    <>
      <div>
        <button
          type="button"
          id="modalCloseBtn"
          class="btn btn-warning"
          style={{ float: "right", marginRight: "14px", marginTop: "13px" }}
          onClick={() => setModalShow(false)}
        >
          Close
        </button>
      </div>
      <div className="modal-content">
        <h1 id="celebrity-name">{celebrityInfo.name}</h1>
        <p id="celebrity-profile">
          <img
            src={`${img}${celebrityInfo.profile_path}`}
            alt={celebrityInfo.name}
          />
        </p>
        <p id="celebrity-popularity">
          Popularity: <span>{celebrityInfo.popularity}</span>
        </p>
        <p id="movies-casted-in"> Movies {celebrityInfo.name} played in:</p>
        <div className="known-for-movies">
          {celebrityInfo.known_for.map((movie) => {
            if (movie) {
              return (
                <div className="each-movie">
                  <div className="movie-poster">
                    <img key={movie.id} src={`${img}${movie.poster_path}`} />
                  </div>
                  <p className="each-movie-title">{movie.original_title}</p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Modal1;
