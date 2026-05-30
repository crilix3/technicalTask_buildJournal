import { observer } from "mobx-react-lite";
import Error from "../Error/Error";
import mainStore from "../../stores/mainStore";

const ErrorHandler = observer(() => {
  const handleCloseRecordListError = () => {
    mainStore.setRecordListError("");
  };

  const handleCloseCreateRecordError = () => {
    mainStore.setCreateRecordError("");
  };
  return (
    <>
      {mainStore.recordList.error && <Error message={mainStore.recordList.error} onClose={handleCloseRecordListError} />}

      {mainStore.createRecordError && <Error message={mainStore.createRecordError} onClose={handleCloseCreateRecordError} />}
    </>
  );
});

export default ErrorHandler;
