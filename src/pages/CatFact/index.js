import React, { useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";
import axios from "axios";

const CatFact = () => {
  const [fact, setCatFact] = useState(null);

  useEffect(() => {
    const fetchCatFact = () => {
      axios
        .get("https://catfact.ninja/fact")
        .then((res) => {
          setCatFact(res.data.fact);
        })
        .catch((error) => {
          console.log(" error in fetch cat fact data ");
          // console.log(error);
        });
    };

    fetchCatFact();
  }, []);

  const Fact = () => {
    return (
      <div
        style={{
          backgroundColor: "grey",
          padding: 5,
          marginTop: 40,
        }}
        sx={{ height: 400 }}
      >
        <Stack dircetion="row" data-testid="cat-fact">
          <h4> Cat Fact</h4>
          <Typography fontSize={20} color="orange">
            {fact}
          </Typography>
        </Stack>
      </div>
    );
  };

  return <>{fact !== null && <Fact />}</>;
};

export default CatFact;
