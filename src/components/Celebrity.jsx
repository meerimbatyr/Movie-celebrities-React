import React from "react";

const Celebrity = ({ celebrity, img, setModalShow, setCelebrityInfo }) => {
  const handleCelebrity = () => {
    setModalShow(true);
    setCelebrityInfo(celebrity);
  };

  return (
    <li className="movie" onClick={() => handleCelebrity()}>
      <img src={`${img}${celebrity.profile_path}`} alt={celebrity.name} />
      <div className="celeb-name">
        <strong>{celebrity.name}</strong>
      </div>
      <div className="celeb-name">
        ,{celebrity.known_for.map((item, i) => item.original_title)}
      </div>
    </li>
  );
};

export default Celebrity;
