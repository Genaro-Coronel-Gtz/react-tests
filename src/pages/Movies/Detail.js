import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Stack,
  Typography,
  Skeleton,
} from "@mui/material";
import { getMovieDetailAction } from "redux/Movies/reducer";

const DetailMovie = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const dispatch = useDispatch();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      const response = await dispatch(getMovieDetailAction(id));
      if (response && response.payload) {
        setMovie(response.payload);
      }
    };
    getMovies();
  }, [dispatch]);

  const navigateDetail = (movie) => {
    navigate(-1);
  };

  const Detail = () => {
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
        data-testid="movie-detail"
        mt={3}
      >
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia component="img" image={movie.Poster} alt={movie.Title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" mt={1}>
              {movie.Year}
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              {movie.Title}
            </Typography>
            <Typography variang="body2" mt={1}>
              Actores: {movie.Actors}
            </Typography>
            <Typography variang="body2" mt={1}>
              Pais: {movie.Country}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => navigateDetail(movie)}>
              Regresar
            </Button>
          </CardActions>
        </Card>
      </Stack>
    );
  };

  const Loading = () => {
    return (
      <div data-testid="movie-loading">
        {" "}
        <Skeleton height={400} />{" "}
      </div>
    );
  };

  return <>{movie ? <Detail /> : <Loading />}</>;
};

export default DetailMovie;
