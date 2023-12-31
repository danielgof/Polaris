import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BottomBar from "./components/BottomBar/BottomBar.jsx";
import TopBar from "./components/TopBar/TopBar.jsx";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage.jsx";
import SearchPage from "./pages/SearchPage/SearchPage.jsx";
import MapPage from "./pages/MapPage/MapPage.jsx";
import BuildingMapPage from "./pages/BuildingMapPage/BuildingMapPage.jsx";
import BuildingRoomsPage from "./pages/BuildingRoomsPage/BuildingRoomsPage.jsx";
import RoomPage from "./pages/RoomPage/RoomPage.jsx";
import RoutePage from "./pages/RoutePage/RoutePage.jsx";
import TeamPage from "./pages/TeamPage/TeamPage.jsx";
import { UserContext } from "./utils/UserContext.jsx";
import UserPage from "./pages/UserPage/UserPage.jsx";
import MyBuildingPage from "./pages/MyBuildingsPage/MyBuildingsPage.jsx";
import MyRoomsPage from "./pages/MyRoomsPage/MyRoomsPage.jsx";

function App() {
  const [theme, setTheme] = useState("dark");
  const [isAuth, setAuth] = useState(false);
  const [id, setId] = useState(2);
  const value = { theme, isAuth, setAuth, setTheme, id, setId };

  return (
    <BrowserRouter>
      <UserContext.Provider value={value}>
        <div className="App">
          <TopBar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/building_map/:id?" element={<BuildingMapPage />} />
            <Route path="/building_room/:id?" element={<BuildingRoomsPage />} />
            <Route path="/room/:id?" element={<RoomPage />} />
            <Route path="/route_to/:room?" element={<RoutePage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/profile/:id?" element={<UserPage />} />
            <Route path="/mybuilding" element={<MyBuildingPage />} />
            <Route path="/myroom" element={<MyRoomsPage />} />
          </Routes>
          <BottomBar />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
