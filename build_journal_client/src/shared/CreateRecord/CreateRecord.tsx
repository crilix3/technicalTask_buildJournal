import { observer } from "mobx-react-lite";
import style from "./CreateRecord.module.css";
import { MdClose } from "react-icons/md";
import mainStore from "../../stores/mainStore";
import createNewRecord from "../../api/createNewRecord";
import updateRecord from "../../api/updateRecord";

const CreateRecord = observer(() => {
  console.log(mainStore.roleIdValue);

  return (
    <div className={style.createRecord}>
      <div className={style.createRecord_container}>
        <div className={style.createRecord_body}>
          <div className={style.createRecord_body_content}>
            <div className={style.createRecord_heder}>
              {mainStore.createRecordIsActive === "create" ? <h1>Создать новую запись</h1> : null}
              {mainStore.createRecordIsActive === "update" ? <h1>Обновить запись</h1> : null}
              <button
                className={style.close}
                onClick={() => {
                  mainStore.setUpdateValues(null);
                  mainStore.setCreateRecordIsActive(null);
                }}
              >
                <MdClose />
              </button>
            </div>
            <div className={style.createRecord_content}>
              <div>
                <div className={style.title_select}>Выберите специальность</div>
                <div className={style.select}>
                  <select name='role' id='' value={mainStore.roleIdValue} onChange={(e) => mainStore.setRoleIdValue(Number(e.target.value))}>
                    <option value={0}>Специальность</option>
                    {mainStore.roleList.data &&
                      mainStore.roleList.data.roleList.map((el) => (
                        <option key={el.id} value={el.id}>
                          {el.value}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div>
                <div className={style.title_select}>Выберите работника</div>
                <div className={style.select}>
                  <select name='role' id='' value={mainStore.employerIdValue} onChange={(e) => mainStore.setEmployerIdValue(Number(e.target.value))}>
                    <option value={0}>Работник</option>
                    {mainStore.employesList.data &&
                      mainStore.employesList.data.employesList.map((el) => (
                        <option key={el.id} value={el.id}>
                          {`${el.surname} ${el.name} ${el.middlename}`}`
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div>
                <div className={style.title_select}>Выберите вид работ</div>
                <div className={style.select}>
                  <select name='role' id='' value={mainStore.workViewId} onChange={(e) => mainStore.setWorkViewId(Number(e.target.value))}>
                    <option value={0}>Вид работ</option>
                    {mainStore.workViewList.data &&
                      mainStore.workViewList.data.workViewList.map((el) => (
                        <option key={el.id} value={el.id}>
                          {el.value}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              {/* <div>
                <div className={style.title_select}>Выберите категорию работы</div>
                <div className={style.select}>
                  <select name='role' id='' value={mainStore.categoryOfWorkId} onChange={(e) => mainStore.setCategoryOfWorkId(Number(e.target.value))}>
                    <option value={0}>Категория работ</option>
                    {mainStore.categorieOfWorkList.data && mainStore.categorieOfWorkList.data.catOfWork.map((el) => <option value={el.id}>{el.value}</option>)}
                  </select>
                </div>
              </div> */}
              <div>
                <div className={style.title_select}>Введите объем выполненой работы</div>
                <div className={style.select}>
                  <input type='text' placeholder='Введите число' value={mainStore.unitValue} onChange={(e) => mainStore.setUnitValue(Number(e.target.value))} />
                  <select name='role' id='' value={mainStore.unitIdValue} onChange={(e) => mainStore.setUnitIdValue(Number(e.target.value))}>
                    <option value={0}>Единица измерения</option>
                    {mainStore.unitTypesList.data &&
                      mainStore.unitTypesList.data.unitTypesList.map((el) => (
                        <option key={el.id} value={el.id}>
                          {el.value}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div>
                <textarea placeholder='Добавьте коментарий' className={style.comment_area} value={mainStore.comment} onChange={(e) => mainStore.setComment(e.target.value)} name='coment' maxLength={250} id=''></textarea>
              </div>
            </div>
            <div className={style.createRecord_footer}>
              {mainStore.createRecordIsActive === "create" ? (
                <button
                  className={style.createNewRecord}
                  onClick={() => {
                    createNewRecord();
                  }}
                >
                  Создать
                </button>
              ) : null}
              {mainStore.createRecordIsActive === "update" ? (
                <button
                  className={style.createNewRecord}
                  onClick={() => {
                    updateRecord();
                  }}
                >
                  Обновить
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CreateRecord;
