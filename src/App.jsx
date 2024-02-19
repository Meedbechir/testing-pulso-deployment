import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Forms from "./pages/Forms";
import Templates from "./layouts/Templates";
import Inscription from "./pages/authentification/Inscription";
import Connexion from "./pages/authentification/Connexion";
import Sondages from "./pages/Sondages";
import Graphique from "./pages/Graphique";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Templates />}>
        <Route index element={<Home />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/sondages" element={<Sondages />} />
        <Route path="/resultats" element={<Graphique />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
