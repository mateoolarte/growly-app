import { Actions } from "./components/Actions";
import { CardsInfo } from "./components/CardsInfo";
import { Footer } from "./components/Footer";
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
        <Footer />
      </div>
    </main>
  );
}
