import React from "react";
import ReactDOM from "react-dom";
import CardList from "./components/CardList";
import "../src/App.css";

export const  Home = () => {
    return (
    <div className="my-5">
      <CardList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Home />, rootElement);
