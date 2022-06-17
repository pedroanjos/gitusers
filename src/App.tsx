import "./styles.css";
import { Fragment, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { HomeScreen } from "./components/HomeScreen";
import { UserScreen } from "./components/UserScreen";
import { ErrorScreen } from "./components/ErrorScreen";
import { MenuComponent } from "./components/MenuComponent";

export default function App() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function onKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && search) {
      navigate(`/user/${search}`);
    }
  }

  return (
    <Fragment>
      <MenuComponent search={search} onChange={onChange} onKeyUp={onKeyUp} />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/user/:username" element={<UserScreen />} />
          <Route path="*" element={<ErrorScreen />} />
        </Routes>
      </div>
    </Fragment>
  );
}
