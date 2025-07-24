import "./Hero.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Hero = ({ movies }) => {
  const navigate = useNavigate();

  function reviews(movieId) {
    navigate(`/Reviews/${movieId}`);
  }

  return (
    <div className="movie-carousel-container">
      <Carousel>
        {movies?.map((movie) => {
          let trailerLink = "";
          let backDrop =
            "https://image.tmdb.org/t/p/original/53BC9F2tpZnsGno2cLhzvGprDYS.jpg";

          if (movie.trailerLink) {
            trailerLink = movie.trailerLink.split("=")[1];
          }

          if (movie.backdrops && movie.backdrops[0]) {
            backDrop = movie.backdrops[0];
          }

          return (
            <Paper>
              <div className="movie-card-container">
                <div
                  className="movie-card"
                  style={{
                    "--img": `url(${backDrop})`,
                  }}
                >
                  <div className="movie-detail">
                    <div className="movie-poster">
                      <img src={movie?.poster} alt="" />
                    </div>
                    <div className="movie-title">
                      <h4>{movie?.title}</h4>
                    </div>
                    <div className="movie-buttons-container">
                      <Link to={`/Trailer/${trailerLink}`}>
                        <div className="play-button-icon-container">
                          <FontAwesomeIcon
                            className="play-button-icon"
                            icon={faCirclePlay}
                          />
                        </div>
                      </Link>

                      <div className="movie-review-button-container">
                        <Button
                          variant="info"
                          onClick={() => reviews(movie?.imdbId)}
                        >
                          Reviews
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
