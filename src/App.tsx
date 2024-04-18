import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [visibility, setVisibility] = useState(false);

  return (
    <div>
      {visibility && (
        <Alert onClose={() => setVisibility(false)}>
          Heyy now you see <strong>Me</strong>
        </Alert>
      )}
      {/* <Button onClick={console.log("Heyy")}>Click Me</Button>
      <Button onClick={console.log("Heyy")}>And Mee</Button> */}
      <Button color="btn-secondary" onClick={() => setVisibility(true)}>
        See Alert
      </Button>
      <Button color={"btn-success"} onClick={() => console.log("Heyy")}>
        Ignore me
      </Button>
    </div>
  );
}

export default App;
