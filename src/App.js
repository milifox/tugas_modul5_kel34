import './App.css';
import { React} from "react";
import Cardlist from './Component/Cardlist';
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
  return (
          <BrowserRouter>
        <header className="navv">
          <div
            className="title"
            style={{
              position: "relative",
              left: "10%",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            <div
              style={{
                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                transition: "0.3s",
                width: "40%"
              }}
            >
            <h1 className="margin">Tugas Modul 5 Kelompok 34 </h1>
            <h2 onClick={() => alert("Kelompok 34")}>Data Kelompok</h2>
            </div>
          </div>
          </header>
          <Switch>
          <Route path="/" exact component={Cardlist} />
        </Switch>
        </BrowserRouter>
        );
}