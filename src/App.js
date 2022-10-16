import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import Celebrity from "./components/Celebrity";
import Spinner1 from "./components/Spinner";
import Modal1 from "./components/Modal";
import Modal from "react-bootstrap/Modal";
import Pagination1 from "./components/Pagination";

function App() {
  const api = {
    base_url: "https://api.themoviedb.org/3/person",
    key: "5e14f9fffbe0f8a5dfac0a2a45882309",
    image: "http://image.tmdb.org/t/p/w185",
  };

  const [celebrities, setCelebrities] = useState([]);
  const [celebrityInfo, setCelebrityInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPages, setMaxPages] = useState(0);

  //Constants

  const start = (currentPage - 1) * celebrities.length + 1;
  const end = currentPage * celebrities.length;

  const fetchCelebrities = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${api.base_url}/popular?api_key=${api.key}&language=en&page=${currentPage}`
      );
      setCelebrities(res.data.results);
      setMaxPages(res.data.total_pages);
      console.log(res.data.results);
    } catch (err) {
      console.log(err.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };
  useEffect(() => {
    fetchCelebrities();
  }, [currentPage]);

  return (
    <div className="App">
      <div className="wrapper">
        <header>
          <h1>Movie Celebrities</h1>
        </header>
        <div className="pagination-count">
          <Pagination1
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            maxPages={maxPages}
            celebrities={celebrities}
          />
          <div className="page-results">{`Showing ${start} to ${end}`}</div>
        </div>

        <main className="content">
          {loading ? (
            <div className="text-center">
              <Spinner1 />
            </div>
          ) : (
            <ul className="movies">
              {celebrities.map((celebrity) => (
                <Celebrity
                  key={celebrity.id}
                  celebrity={celebrity}
                  setCelebrityInfo={setCelebrityInfo}
                  img={api.image}
                  setModalShow={setModalShow}
                  modalShow={modalShow}
                />
              ))}
            </ul>
          )}
        </main>

        {modalShow && (
          <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modal"
          >
            <Modal1
              celebrityInfo={celebrityInfo}
              setModalShow={setModalShow}
              img={api.image}
            />
          </Modal>
        )}
      </div>
    </div>
  );
}

export default App;
