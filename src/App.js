import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import AllAboutMe from "./components/AllAboutMe/AllAboutMe";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <AllAboutMe />
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
