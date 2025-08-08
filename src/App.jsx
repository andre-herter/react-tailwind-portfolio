import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root/Root";
import Homepage from "./routes/homepage/Homepage";
import Impressum from "./components/impressum/Impressum";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      { path: "impressum", element: <Impressum /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
