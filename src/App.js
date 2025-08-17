import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import WeatherCard from "./components/card/WeatherCard";
import Button from "@mui/material/Button";

import "./App.css";
const theme = createTheme({
  typography: {
    fontFamily: ["Playsans"],
  },
});
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
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
          <div>
            <WeatherCard />
            <Button
              style={{ color: "white" }}
              variant="text"
              onClick={() => alert("Clicked!")}
            >
              Arabicy
            </Button>
          </div>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
