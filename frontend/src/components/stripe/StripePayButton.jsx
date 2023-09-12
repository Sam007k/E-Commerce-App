import React from "react";
import Pay from "./Pay";
import Success from "./Success";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

const StripePayButton = () => {
  return (
    <Router>
      <Routes>
        <Route path="/pay" element={
          <Pay />

        }>
        </Route>
        <Route path="/success" element={<Success />}>
          
        </Route>
      </Routes>
    </Router>
  );
};

export default StripePayButton;
