import LeftBar from "./Components/leftBar/LeftBar";
import MiddleBar from "./Components/middleBar/MiddleBar";
import TopBar from "./Components/topBar/TopBar";
import RightBar from "./Components/rightBar/RightBar";
import "./style.scss";
import { createContext, useState } from "react";
export const StringContent = createContext();

function App() {
  const [name, setName] = useState("beqa");

  return (
    <StringContent.Provider value={{ name, setName }}>
      <div className="App">
        <TopBar />
        <div className="content">
          <LeftBar />
          <MiddleBar />
          <RightBar />
        </div>
      </div>
    </StringContent.Provider>
  );
}

export default App;
