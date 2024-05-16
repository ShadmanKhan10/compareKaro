import React from "react";
import HomePage from "./Components/HomePage";
import NotFound from "./Components/NotFound";
import Join from "./Components/Join";
import Items from "./Components/Items";
import SignIn from "./Components/SignIn";
import BecomeASeller from "./Components/BecomeASeller";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<HomePage />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="join" element={<Join />} />
      <Route path="items" element={<Items />} />
      <Route path="become-a-seller" element={<BecomeASeller />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
