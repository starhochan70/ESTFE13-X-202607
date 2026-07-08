import Home from "../routes/Home";
import Auth from "../routes/Auth";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

function Router() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Routes>
        {isLoggedIn ? <Route path="/" element={<Home />}></Route> : <Route path="/" element={<Auth />}></Route>}
      </Routes>
    </>
  );
}

export default Router;
