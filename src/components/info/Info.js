import CloudIcon from "@mui/icons-material/Cloud";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import { useContext } from "react";
import TempContext from "../../contexts/TempContext";
export default function Header() {
  const temp = useContext(TempContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0px 10px",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0px",
            padding: "10px 0px",
            marginBottom: "10px",
          }}
        >
          <h1 style={{ fontSize: "56px", margin: 0, lineHeight: 1 }}>
            {temp.num}
          </h1>
          <img src={temp.icon} style={{ height: "60px" }} />
        </div>
        <p style={{ margin: "4px 0", fontSize: "14px", color: "#555" }}>
          {temp.description}
        </p>
        <p style={{ margin: "2px 0", fontSize: "13px", color: "#555" }}>
          min:{temp.min} max:{temp.max}
        </p>
      </div>
      <div>
        <CloudIcon sx={{ fontSize: "175px", color: "#7f7e7eff" }}></CloudIcon>
      </div>
    </div>
  );
}
