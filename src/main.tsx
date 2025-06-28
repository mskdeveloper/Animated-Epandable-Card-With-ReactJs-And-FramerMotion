import { createRoot } from "react-dom/client";
import "./index.css";
import AnimatedCard from "./components/animated-card.tsx";

createRoot(document.getElementById("root")!).render(
  <div className="container">
    <AnimatedCard />
  </div>
);
