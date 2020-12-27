import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";

import useStyles from "./styles";

import Form from "./Form/Form.jsx";
import List from "./List/List";
const Main = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Powered by Speechly " />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance $119
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5rem", marginTop: "200px" }}
        >
          {/* cardInfo */}
          Try saying: Add income for $100 in Category Salary for Monday...
        </Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent className={classes.CardContent}>
        <Grid item xs={12}>
          <List />
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
