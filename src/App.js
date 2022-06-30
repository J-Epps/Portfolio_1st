import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

// import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./routes/Home";

export default function App() {
  return (
    <div style={{ color: "silver" }}>
      <Switch>
        <Route>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
