import { useContext } from "react";
import "./middleBar.scss";
import { StringContent } from "../../App";

const MiddleBar = () => {
  const { setName } = useContext(StringContent);

  return (
    <div className="middle">
      <button onClick={() => setName("beqa")}>change</button>
    </div>
  );
};

export default MiddleBar;
