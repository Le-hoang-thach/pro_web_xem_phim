import PropTypes from "prop-types";
import { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MovieContext } from "../context/MovieDetailContext";
import "../App.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1200, min: 600 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
  mobile_iphone: {
    breakpoint: { max: 550, min: 0 },
    items: 1,
    
  }
};

const MovieList = ({ title, data }) => {
  const { handleVideoTrailer } = useContext(MovieContext);

  return (
    <div className="my-10 px-4 sm:px-10 max-w-full">
      <h2 className="text-[1rem] md:text-2xl uppercase mb-4">{title}</h2>
      <Carousel
        responsive={responsive}
        draggable={false}
        containerClass="carousel-container"
        itemClass="carousel-item"
      >

        {data?.map((movie) => (
          <>
            <div className="box-films">
              <div className="box-films-child"></div>
                <div
                  key={movie.id}
                  className="rounded-[5%] m-2 bg-cover bg-no-repeat bg-center w-[calc(100%-6%)] h-[calc(100%-4%)] sm:w-[calc(100%-6%)] sm:h-[calc(100%-4%)] absolute hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer"
                  style={{
                    backgroundImage: `url(${import.meta.env.VITE_IMG_URL}${movie.poster_path})`,
                  }}
                  onClick={() => handleVideoTrailer(movie.id)}
                >
                  <div className="rounded-[5%] bg-black w-full h-full opacity-40 absolute top-0 left-0 z-0" />
                    <div className="relative p-4 flex flex-col items-center justify-end h-full">
                      <h3 className="text-sm md:text-md text-white uppercase">
                        {movie.name || movie.title || movie.original_title}
                      </h3>
                    </div>
                </div>
            </div>

          </>

        ))}
      </Carousel>
      {/* <div className="box-films">
        <div className="box-films-child"></div>
        <div className="box-img">
        </div>
      </div> */}
    </div>

  );
};

MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array,
};

export default MovieList;
