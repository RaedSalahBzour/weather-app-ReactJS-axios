import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import WeatherCard from "./components/card/WeatherCard";
import Button from "@mui/material/Button";
import axios from "axios";
import "./App.css";
import TempContext from "./contexts/TempContext";
import { useEffect, useState } from "react";
import moment from "moment";
import "moment/min/locales";

import { useTranslation } from "react-i18next";

const theme = createTheme({
  typography: {
    fontFamily: ["Playsans"],
  },
});
let cancel = null;

function App() {
  const [temp, setTemp] = useState({
    num: null,
    description: "",
    min: null,
    max: null,
    icon: null,
  });
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=5ba37f0acd4e396e46f41e0209bb9b94",
        {
          cancelToken: new axios.CancelToken(c => {
            cancel = c;
          }),
        }
      )
      .then(function (response) {
        const tempr = Math.round(response.data.main.temp - 272.15);
        const min = Math.round(response.data.main.temp_min - 272.15);
        const max = Math.round(response.data.main.temp_max - 272.15);
        const description = response.data.weather[0].description;
        const icon = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
        setTemp({ num: tempr, min, max, description, icon });
      })
      .catch(function (error) {
        console.log(error);
      });
    return () => {
      cancel();
    };
  }, []);
  function handleLanguague() {
    if (lang === "ar") {
      i18n.changeLanguage("en");
      moment.locale("en");
      setLang("en");
    } else {
      i18n.changeLanguage("ar");
      moment.locale("ar");
      setLang("ar");
    }
  }
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <TempContext.Provider value={{ temp, lang }}>
          <Container
            fixed
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div dir={lang === "ar" ? "rtl" : "ltr"}>
              <WeatherCard />
              <Button
                style={{ color: "white" }}
                variant="text"
                onClick={handleLanguague}
              >
                {t("Arabic")}
              </Button>
            </div>
          </Container>
        </TempContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
