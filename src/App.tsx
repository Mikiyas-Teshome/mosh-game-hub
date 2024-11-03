import { Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav " " main"`,
        lg: `"nav nav" "aside main"`,
      }}>
      <GridItem area={`nav`}>
        <NavBar />
      </GridItem>
      <Stack hideBelow="lg">
        <GridItem area={`aside`} bg={"gold"}>
          Aside
        </GridItem>
      </Stack>
      <GridItem area={`main`} >
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
