import React from "react";
import { Route } from "react-router-dom";

import Header from "./Header";
import Footer from './Footer'
import BoradList from "./board/BoardList";
import ActiveBoard from "./board/ActiveBoard";
import {} from "../assets/css/main.css";

export default function App() {
  return (
    <div>
      <Header />
      <AppBody />
      <Footer />
    </div>
  );
}

const AppBody = () => (
  <section className="conteiner-fluid app-body">
    <Route path="/" exact component={BoradList} />
    <Route path="/board/:id" component={ActiveBoard} />
  </section>
);
