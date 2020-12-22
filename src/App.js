import React from "react";
import { Grid } from "@material-ui/core";

import DetailsCard from "./components/Details/DetailsCard";
function App() {
  return (
    // Card test
    <div>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4}>
          <DetailsCard title="Income" />
        </Grid>
        <Grid item xs={12} sm={3}></Grid>
        <Grid item xs={12} sm={4}>
          <DetailsCard title="Income" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <DetailsCard title="Expense" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
