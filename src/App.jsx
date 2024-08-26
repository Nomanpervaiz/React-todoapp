import PageLayout from "./components/layout.jsx";
import MyButton from "./components/button.jsx";
import InputField from "./components/input.jsx";
import { useState } from "react";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';


function App() {
  let [todos, setTodos] = useState([]);
  let [values, setValues] = useState("");

  let addTodos = () => {
    setTodos([...todos, { values }]);
    setValues("")
    
  };


  let deleteTodo = (i) => {
    let oldTodos = [...todos]
    oldTodos.splice(i,1)
 setTodos(oldTodos)
    
  };





  const isWebkit = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    return /webkit/.test(userAgent);
  };


  
  
  return (
    <>
      <PageLayout>
        <div >
          <h1>Todo App</h1>
          <div className="inputAdd">
            <InputField
              placeHolder={"Add Todos"}
              value={values} 
              onChange={(e) => setValues(e.target.value)}
            />
            <MyButton name="Add Task" className="addButton" onClick={addTodos} />
          </div>
          <div className="listMain scrollbar " id="style-3">
          <ul>
            {todos.length > 0 ? (
              todos.map((val, ind) => (
                <li key={ind}>
                  <input  value={val.values} disabled />
                  {/* <MyButton  className="EditBtn" icon={<EditOutlined className="iconEdit" />} onClick={editTodos} /> */}
                  <MyButton className="deleteBtn"  icon={<DeleteOutlined className="iconDelete" />}  onClick={deleteTodo} />
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

