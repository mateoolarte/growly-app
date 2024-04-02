import { Actions } from "./components/Actions";
import { CardsInfo } from "./components/CardsInfo";
import { Greetings } from "./components/Greetings";
import { Header } from "./components/Header";

import "./dashboard.scss";

export default function Dashboard() {
  return (
    <main className="dashboard">
      <div className="container-box">
        <Header />
        <Greetings />
        <CardsInfo />
        <Actions />
      </div>
    </main>
  );
}
