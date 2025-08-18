import moment from "moment";
import { useContext } from "react";
import TempContext from "../../contexts/TempContext";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  const { lang } = useContext(TempContext);
  const dateAndTime = moment().format("MMMM Do YYYY, h:mm:ss a");
  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      style={{
        display: "flex",

        alignItems: "flex-start",
        gap: "1rem",
      }}
    >
      <h1 style={{ margin: 0 }}>{t("Jenin")}</h1>
      <p style={{ alignSelf: "flex-end", margin: 1 }}>{dateAndTime}</p>
    </div>
  );
}
