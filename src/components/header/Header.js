import moment from "moment";
export default function Header() {
  const dateAndTime = moment().format("MMMM Do YYYY, h:mm:ss a");
  return (
    <div
      style={{
        display: "flex",

        alignItems: "flex-start",
        gap: "1rem",
      }}
    >
      <h1 style={{ margin: 0 }}>Jenin</h1>
      <p style={{ alignSelf: "flex-end", margin: 1 }}>{dateAndTime}</p>
    </div>
  );
}
