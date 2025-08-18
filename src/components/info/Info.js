import CloudIcon from "@mui/icons-material/Cloud";
import { useContext } from "react";
import TempContext from "../../contexts/TempContext";
import { useTranslation } from "react-i18next";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";

export default function Header() {
  const { t } = useTranslation();
  const { lang } = useContext(TempContext);
  const isLoading = useSelector(state => state.weatherApi.isLoading);
  const result = useSelector(state => state.weatherApi.weather);

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
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
          {isLoading ? (
            <CircularProgress
              dir={lang === "ar" ? "rtl" : "ltr"}
              color="black"
              sx={{ marginLeft: "20px" }}
            />
          ) : (
            ""
          )}
          <h1 style={{ fontSize: "56px", margin: 0, lineHeight: 1 }}>
            {result.temp}
          </h1>
          <img src={result.icon} style={{ height: "60px" }} alt="" />
        </div>
        <p style={{ margin: "4px 0", fontSize: "14px", color: "#555" }}>
          {t(result.description)}
        </p>
        <p style={{ margin: "2px 0", fontSize: "13px", color: "#555" }}>
          {t("min")} : {result.min} | {t("max")} : {result.max}
        </p>
      </div>
      <div>
        <CloudIcon sx={{ fontSize: "175px", color: "#7f7e7eff" }}></CloudIcon>
      </div>
    </div>
  );
}
