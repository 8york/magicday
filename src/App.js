import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

//layouts
import RootLayout from "./layouts/RootLayout";
import CatLayout from "./layouts/CatLayout";

//pages
import Home from "./pages/Home";
import Cat from "./pages/cat/Cat";
import CatStory from "./pages/cat/CatStory";
import Person from "./pages/person/Person";
import PersonStory from "./pages/person/PersonStory";
import Magic from "./pages/magic/Magic";
import Ask from "./pages/ask/Ask";
import Oracle from "./pages/oracle/Oracle";

//styles
import "./App.css";
import PersonLayout from "./layouts/PersonLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="/ask" element={<Ask />} />

      <Route path="oracle" element={<Oracle />} />
      <Route path="/cat" element={<CatLayout />}>
        <Route index element={<Cat />} />
        <Route path="catstory" element={<CatStory />} />
        <Route path="magic" element={<Magic />} />
      </Route>

      <Route path="/human" element={<PersonLayout />}>
        <Route index element={<Person />} />
        <Route path="humanstory" element={<PersonStory />} />
        <Route path="magic" element={<Magic />} />
      </Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
