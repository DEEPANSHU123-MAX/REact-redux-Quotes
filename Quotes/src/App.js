import React from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddQuote from "./components/AddQuote";
import EditQuote from "./components/EditQuote";


import Card from './components/Card'


const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Route exact path="/" component={() => <Card />} />
      <Route exact path="/add" component={() => <AddQuote />} />
      <Route exact path="/edit/:id" component={() => <EditQuote />} />
    </div>
  );

};
export default App;
