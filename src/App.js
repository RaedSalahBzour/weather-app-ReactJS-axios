import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import WeatherCard from "./components/card/WeatherCard";
import Button from "@mui/material/Button";
import "./App.css";
import TempContext from "./contexts/TempContext";
import { useState } from "react";
import moment from "moment";
import "moment/min/locales";
import { useTranslation } from "react-i18next";

const theme = createTheme({
  typography: {
    fontFamily: ["Playsans"],
  },
});

function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("");

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
        <TempContext.Provider value={{ lang }}>
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
