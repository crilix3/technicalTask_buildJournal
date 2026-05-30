import { Header } from "./shared";
import { Main } from "./screens";
import { useEffect } from "react";
import getRecords from "./api/getRecords";
import { observer } from "mobx-react-lite";
import mainStore from "./stores/mainStore";

const App = observer(() => {
  useEffect(() => {
    getRecords();
  }, [mainStore.page]);
  return (
    <div className='wrapper'>
      <div className='container'>
        <Header />
        <Main />
      </div>
    </div>
  );
});
export default App;
