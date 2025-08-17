import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Header from "../header/Header";
import Info from "../info/Info";
import Divider from "@mui/material/Divider";

export default function WeatherCard() {
  return (
    <Card
      sx={{
        minWidth: 375,
        borderRadius: "20px",
        backgroundColor: "rgba(222, 222, 222, 1)",
      }}
      variant="outlined"
    >
      <CardContent sx={{ padding: "16px" }}>
        <Header />
        <Divider
          sx={{ borderBottomWidth: 1.5, borderColor: "#aaaaaaff", my: 0.5 }}
        />
        <Info />
      </CardContent>
    </Card>
  );
}
