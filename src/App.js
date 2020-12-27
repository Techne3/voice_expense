import React from "react";
import { Grid } from "@material-ui/core";
import Main from "./components/Main/Main";

import DetailsCard from "./components/Details/DetailsCard";
import useStyles from "./styles";
function App() {
  const classes = useStyles();
  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4}>
          <DetailsCard title="Income" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4}>
          <DetailsCard title="Expense" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
