import { createContext, useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import YouTube from "react-youtube";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleVideoTrailer = async (movieId) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    };

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        options
      );

      const data = await response.json();
      setTrailerUrl(data.results[0]?.key);
      setIsOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MovieContext.Provider value={{ handleVideoTrailer }}>
      {children}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            zIndex: 9999,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "90vw",
            maxHeight: "80vh",
            width: "80vw",
            height: "auto",
            padding: "0",
            border: "none",
            background: "#000", // Dark background to match video
            overflow: "hidden",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
        contentLabel="Video Trailer"
      >
        {trailerUrl && (
          <div style={{ 
            position: "relative", 
            width: "100%", 
            height: "0", 
            paddingBottom: "56.25%", // 16:9 aspect ratio
            overflow: "hidden",
            margin: "0",
            backgroundColor: "#000" // Ensure the background matches the modal
          }}>
            <YouTube
              videoId={trailerUrl}
              opts={{
                height: "100%",
                width: "100%",
                playerVars: {
                  autoplay: 1,
                },
              }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
                margin: "0",
              }}
            />
          </div>
        )}
      </Modal>
    </MovieContext.Provider>
  );
};

MovieProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MovieProvider, MovieContext };
