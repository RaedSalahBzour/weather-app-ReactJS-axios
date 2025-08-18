import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Header from "../header/Header";
import Info from "../info/Info";
import Divider from "@mui/material/Divider";
import { fetchWeather } from "../../features/Api/ApiSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function WeatherCard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);
  return (
    <Card
      sx={{
        minWidth: 375,
        borderRadius: "20px",
        backgroundColor: "rgba(183, 175, 137, 1)",
      }}
      variant="outlined"
    >
      <CardContent sx={{ padding: "16px" }}>
        <Header />
        <Divider
          sx={{ borderBottomWidth: 1.5, borderColor: "#5b5b5bff", my: 0.5 }}
        />
        <Info />
      </CardContent>
    </Card>
  );
}
