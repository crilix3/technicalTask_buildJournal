import { Header } from "./shared";
import { Main } from "./screens";
import { useEffect } from "react";
import getRecords from "./api/getRecords";

const App = () => {
  useEffect(() => {
    getRecords(1);
  }, []);
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <Main />
      </div>
    </div>
  );
};
export default App;
