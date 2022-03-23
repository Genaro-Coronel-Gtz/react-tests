import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Grid,
  Typography,
  Skeleton,
} from "@mui/material";
import { getMoviesAction } from "redux/Movies/reducer";

const ListMovies = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await dispatch(getMoviesAction());

      if (response && response.payload) {
        setMovies(response.payload.Search);
      }
    };
    getMovies();
  }, [dispatch]);

  const navigateDetail = (movie) => {
    const id = movie.imdbID;
    navigate(`/detail/${id}`);
  };

  const List = () => {
    return (
      <Grid
        container
        p={10}
        rowSpacing={4}
        columnSpacing={2}
        data-testid="movie-list"
      >
        {movies.map((movie, index) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ maxWidth: 350 }}>
                <CardMedia
                  component="img"
                  height={180}
                  image={movie.Poster}
                  alt={movie.Title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {movie.Year}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {movie.Title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    data-testid={`navigate-to-detail-btn-${movie.imdbID}`}
                    size="small"
                    onClick={() => navigateDetail(movie)}
                  >
                    Detalles
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
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

  return <>{movies.length > 0 ? <List /> : <Loading />}</>;
};

export default ListMovies;
