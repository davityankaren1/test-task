import { MainPage } from "./pages/MainPage";
import { Routes, Route } from "react-router-dom";
import { FC } from "react";
import "./App.css";

const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<MainPage />} path="/">
          <Route element={<MainPage />} path="/:id" />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
