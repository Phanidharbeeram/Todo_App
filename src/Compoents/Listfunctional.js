import React, { useState } from "react";
import FlipMove from 'react-flip-move'
export default function Listfunctional() {
  const [currentitem, setcurrentitem] = useState({
    text: "",
    key: ""
  });
  const [list, setlist] = useState([]);
  const ChangeHandler = e => {
    setcurrentitem({
      text: e.target.value,
      key: Date.now()
    });
  };
  const addtolist = e => {
    e.preventDefault();
    if (currentitem.text !== "") {
      const newlist = [...list, currentitem];
      console.log(newlist);
      setlist(newlist);
      setcurrentitem({
        text: "",
        key: ""
      });
      //const current = this.state.currentitem;
    }
  };
  const deletefromlist = key => {
    const filtered = list.filter(currentitem => currentitem.key !== key);
    setlist(filtered);
  };
  const edit = (text, key) => {
    list.map(currentitem => {
      if (currentitem.key === key) {
        currentitem.text = text;
      }
      return text;
    });
    setlist([...list]);
  };
  return (
    <div>
      <form onSubmit={addtolist}>
        <input type="text" value={currentitem.text} onChange={ChangeHandler} />
        <button type="submit">Submit</button>
      </form>
      {list.map(currentitem => (
        <FlipMove key={currentitem.key}>
          <li>
            <input
              type="text"
              value={currentitem.text}
              onClick={ChangeHandler}
            />
            <span onClick={() => edit(currentitem)}>edit</span>
            <span onClick={() => deletefromlist(currentitem.key)}>delete</span>
          </li>
        </FlipMove>
      ))}
    </div>
  );
}
