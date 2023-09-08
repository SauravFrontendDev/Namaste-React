// const heading = React.createElement(
//   "h2",
//   {},
//   "I have created an h2 tag using React Library"
// );
const para = React.createElement(
  "p",
  { id: "para" },
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(para);
