import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [ourClass, setourclass] = useState("");
  const [wordtoggle, setwordtoggle] = useState("Hide");

  const setOnClick = () => {
    if (ourClass == "") {
      setourclass("fade");
    } else {
      setourclass("");
    }

    if (wordtoggle == "show") {
      setwordtoggle("Hide");
    } else {
      setwordtoggle("Show");
    }
  };

  return (
    <div>
      <Alert classdefiner={ourClass}>
        Heyy now you see <strong>Me</strong>
      </Alert>
      {/* <Button onClick={console.log("Heyy")}>Click Me</Button>
      <Button onClick={console.log("Heyy")}>And Mee</Button> */}
      <Button color="btn-secondary" onClick={setOnClick}>
        {wordtoggle}
      </Button>
      <Button color={"btn-success"} onClick={() => console.log("Heyy")}>
        And Mee
      </Button>
    </div>
  );
}

export default App;
