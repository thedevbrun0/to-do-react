import "./Styles/Input.css";
import { useState, useEffect } from "react";
import { ButtonClearAll } from "./ButtonClearAll";
import localforage from "localforage";
import { FaRegTrashCan } from "react-icons/fa6";

const Input = () => {
  const [valueInput, setValueInput] = useState("");
  const [list, setList] = useState([]);
  useEffect(() => {
    localforage
      .setItem("toDoList", list)
      .catch((error) => alert(error.message));
  }, [list]);

  useEffect(() => {
    localforage
      .getItem("toDoList")
      .then((value) => {
        if (value) {
          setList(value);
        }
      })
      .catch((error) => alert(error.message));
  }, []);

  const sendForm = (e) => {
    e.preventDefault();
    if (valueInput.length > 0) {
      setList((prev) => {
        return [
          ...prev,
          {
            id: crypto.randomUUID(),
            value: valueInput.trim(),
            completed: false,
          },
        ];
      });
      setValueInput("");
    }
  };

  const inputValue = (e) => {
    setValueInput(e.target.value.trim());
  };

  const deleteLi = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const removeAll = () => {
    setList([]);
  };

  const handleChecked = (e) => {
    setList(
      list.map((item) => {
        return item.id === e ? { ...item, completed: !item.completed } : item;
      }),
    );
  };

  return (
    <>
      <form onSubmit={sendForm} className="form">
        <input value={valueInput} onChange={inputValue} type="text" autoFocus />
        <button>+</button>
      </form>
      <ul className="todo-list">
        {list.map((item) => {
          return (
            <li
              className={item.completed ? "completed" : "incompleted"}
              key={item.id}
            >
              <input
                checked={item.completed}
                onChange={() => handleChecked(item.id)}
                className="check"
                type="checkbox"
              ></input>
              <span className={item.completed ? "checkedInput" : ""}>
                {item.value}
              </span>
              <button
                onClick={() => {
                  deleteLi(item.id);
                }}
                className="closeButton"
              >
                <FaRegTrashCan />
              </button>
            </li>
          );
        })}
      </ul>
      <div className={list.length > 0 ? "" : "none"}>
        <ButtonClearAll event={removeAll} />
      </div>
    </>
  );
};

export { Input };
