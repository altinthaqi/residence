import axios from "axios";
import Menu from "./layout/Menu";
import Homepage from "./pages/Homepage";

const apiPath = "http://localhost/residence/src/apis/hello.php";
function App() {
  return (
    <>
      <Menu />
      <Homepage />
    </>
  );
}

export default App;
