import React, { useEffect, useState } from "react";
import { Stack, Box, Grid, Typography, Skeleton } from "@mui/material";
import axios from "axios";

const ListPokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((res) => {
        setPokemons(res.data.results);
      })
      .catch((error) => {
        console.log(" error fetching pokemon data");
        // console.log(error);
      });
  }, []);

  const List = () => {
    return (
      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        data-testid="pokemon-list"
      >
        {pokemons.map((pokemon, index) => {
          return (
            <Grid item xs={4} md={3} key={index}>
              <Box
                component="button"
                sx={{ border: "1px dashed info" }}
                key={index}
              >
                <Stack dircetion="row">
                  <Typography fontSize={20} color="green">
                    {pokemon.name}
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    );
  };

  const Loading = () => {
    return (
      <div data-testid="pokemon-loading">
        {" "}
        <Skeleton height={400} />{" "}
      </div>
    );
  };

  return <>{pokemons.length > 0 ? <List /> : <Loading />}</>;
};

export default ListPokemons;
