import { useState } from "react";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: '"nav nav" "side main"',
        }}
      >
        <GridItem pl="2" bg="orange.300" area={"nav"}>
          Nav
        </GridItem>
        <Show above="lg">
          <GridItem pl="2" bg="pink.300" area={"side"}>
            Side
          </GridItem>
        </Show>
        <GridItem pl="2" bg="green.300" area={"main"}>
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
