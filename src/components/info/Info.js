import CloudIcon from "@mui/icons-material/Cloud";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
export default function Header() {
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
            gap: "20px",
            padding: "10px 0px",
            marginBottom: "10px",
          }}
        >
          <h1 style={{ fontSize: "56px", margin: 0, lineHeight: 1 }}>37</h1>
          <ThunderstormIcon sx={{ fontSize: 32, marginTop: "8px" }} />
        </div>
        <p style={{ margin: "4px 0", fontSize: "14px", color: "#555" }}>
          broken clouds
        </p>
        <p style={{ margin: "2px 0", fontSize: "13px", color: "#777" }}>
          min:35 max:37
        </p>
      </div>
      <div>
        <CloudIcon sx={{ fontSize: "175px", color: "#7f7e7eff" }}></CloudIcon>
      </div>
    </div>
  );
}
