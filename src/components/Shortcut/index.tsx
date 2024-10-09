import { useNavigate } from "react-router-dom";
import arrow from "../../assets/chevron-right.svg";
import "./style.css";

interface ShortcutProps {
  icon: string;
  title: string;
  text: string;
  url: string;
}

export function Shortcut({ icon, title, text, url }: ShortcutProps) {
  const navigate = useNavigate();
  return (
    <div
      className="shortcut"
      onClick={() => {
        navigate(url);
      }}
    >
      <div className="groupText">
        <div className="divImage">
          <img src={icon} alt="" />
        </div>
        <div className="divText">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>

      <div className="">
        <img src={arrow} alt="" />
      </div>
    </div>
  );
}
