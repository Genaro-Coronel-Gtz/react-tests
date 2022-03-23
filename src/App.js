import { Routes, Route } from "react-router-dom";
import ListMovies from "pages/Movies/List";
import DetailMovie from "pages/Movies/Detail";
import { Stack, Typography } from "@mui/material";

function App() {
  return (
    <>
      <Stack justifyContent="center" alignItems="center" mt={3}>
        <Typography variant="h2"> Heroes App</Typography>
      </Stack>
      <Routes>
        <Route path="/" element={<ListMovies />} />
        <Route path="/detail/:id" element={<DetailMovie />} />
      </Routes>
    </>
  );
}

export default App;
