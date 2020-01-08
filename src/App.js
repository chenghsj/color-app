import React from "react";
import { Switch, Route } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

function App() {
  // console.log(generatePalette(seedColors[3]));

  function findPalette(id) {
    return seedColors.find(palette => {
      return palette.id === id;
    });
  }
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={routeProps => (
          <PaletteList {...routeProps} palettes={seedColors} />
        )}
      />
      <Route
        exact
        path="/palette/:id"
        render={routeProps => (
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        render={() => <h1>SINGLE COLOR PAGE</h1>}
      />
    </Switch>

    // <div>
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;
