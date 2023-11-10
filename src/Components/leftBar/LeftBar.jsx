import { useContext } from "react";
import "./leftBar.scss";
import { StringContent } from "../../App";

const LeftBar = () => {
  const { name, setName } = useContext(StringContent);

  return (
    <div className="left">
      <div>{name}</div>
      <button onClick={() => setName("gela")}>change Name</button>
    </div>
  );
};

export default LeftBar;
