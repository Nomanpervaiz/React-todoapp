import PageLayout from "./components/layout.jsx";
import MyButton from "./components/button.jsx";
import InputField from "./components/input.jsx";
import { useState } from "react";
import {FileDoneOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";

function App() {
  let [todos, setTodos] = useState([]);
  let [values, setValues] = useState("");

  let addTodos = () => {
    setTodos([...todos, { values ,disabled:true}]);
    setValues("");
  };

  let deleteTodo = (i) => {
    let oldTodos = [...todos];
    oldTodos.splice(i, 1);
    setTodos(oldTodos);
  };

  
  let editTodos = (i) => {
    let oldTodos = [...todos];
    oldTodos.splice(i, 1,{values, disabled: false});
    setTodos(oldTodos);
  };

  
  let updateTodos = (i) => {
    let oldTodos = [...todos];
    oldTodos.splice(i, 1,{values, disabled: true});
    setTodos(oldTodos);
  };

  


  return (
    <>
      <PageLayout>
        <div>
          <h1>Todo App</h1>
          <div className="inputAdd">
            <InputField
              placeHolder={"Add Todos"}
              value={values}
              onChange={(e) => setValues(e.target.value)}
            />
            <MyButton
              name="Add Task"
              className="addButton"
              onClick={addTodos}
            />
          </div>
          <div className="listMain scrollbar " id="style-3">
            <ul>

              {todos.length > 0 ? (
                todos.map((val, ind) => (
                  <li key={ind}>
                    <input  defaultValue={val.values} disabled={val.disabled} type="text" />
                    {val .disabled ? 
                    <MyButton
                    className="EditBtn"
                    icon={<EditOutlined className="iconEdit" />}
                    onClick={editTodos}
                    />
                    :
                   < MyButton className="deleteBtn" onClick={updateTodos}   icon={<FileDoneOutlined className="iconEdit" />} />
                  }
                    <MyButton
                      className="deleteBtn"
                      icon={<DeleteOutlined className="iconDelete" />}
                      onClick={deleteTodo}
                    />
                  </li>
                ))
              ) : (
                <li> No todos yet</li>
              )}
            </ul>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
export default App;
