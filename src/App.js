import React from "react";
import { Switch, Route } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

function App() {
  console.log(generatePalette(seedColors[3]));
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>PALETTE LIST</h1>} />
      <Route
        exact
        path="/palette/:id"
        render={() => <h1>INDIVIDUAL PALETTE</h1>}
      />
    </Switch>

    // <div>
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;
