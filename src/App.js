import React, { useEffect, useRef } from "react";
import { Grid } from "@material-ui/core";
import Main from "./components/Main/Main";

import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  ErrorPanel,
} from "@speechly/react-ui";

import { SpeechState, useSpeechContext } from "@speechly/react-client";

import DetailsCard from "./components/Details/DetailsCard";
import useStyles from "./styles";
function App() {
  const classes = useStyles();
  const { speechState } = useSpeechContext();
  const main = useRef(null);

  const executeScroll = () => main.current.scrollIntoView();

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);

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
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <DetailsCard title="Income" />
        </Grid>
        <Grid ref={main} item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <DetailsCard title="Income" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <DetailsCard title="Expense" />
        </Grid>
        <PushToTalkButtonContainer>
          <PushToTalkButton />
        </PushToTalkButtonContainer>
      </Grid>
    </div>
  );
}

export default App;
