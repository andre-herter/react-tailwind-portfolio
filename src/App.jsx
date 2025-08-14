import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./routes/root/Root";
import Homepage from "./routes/homepage/Homepage";
import Impressum from "./components/impressum/Impressum";

function App() {
  return (
    <BrowserRouter basename="/react-tailwind-portfolio">
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Homepage />} />
          <Route path="impressum" element={<Impressum />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
