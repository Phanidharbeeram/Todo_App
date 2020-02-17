import React, { Component } from "react";
import FlipMove from "react-flip-move";
import styles from "./List.module.css";
//import Listitem from './'
export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      currentitem: {
        text: "",
        key: ""
      }
    };
  }
  ChangeHandler = e => {
    this.setState({
      currentitem: {
        text: e.target.value,
        key: Date.now()
      }
    });
  };

  addtolist = e => {
    e.preventDefault();
    if (this.state.currentitem.text !== "") {
      const newlist = [...this.state.list, this.state.currentitem];
      console.log(newlist);
      this.setState({
        list: newlist,
        currentitem: {
          text: "",
          key: ""
        }
      });
    }
  };
  delete = key => {
    // console.log(key);
    const remianlist = this.state.list.filter(
      currentitem => currentitem.key !== key
    );
    this.setState({
      list: remianlist
    });
    //console.log(remianlist);
    //console.log(this.state.list);
  };
  Edit = (text, key) => {
    const list = this.state.list;
    list.map(currentitem => {
      if (currentitem.key === key) {
        currentitem.text = text;
      }
      return currentitem.text;
    });
    this.setState({
      list: list
    });
  };
  render() {
    //const { list, currentitem } = this.state;
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <form onSubmit={this.addtolist}>
          <input
            type="text"
            placeholder="enter ure task"
            value={this.state.currentitem.text}
            onChange={this.ChangeHandler}
          />
          <button type="submit">Submit</button>
        </form>
        {this.state.list.map(currentitem => (
          <div key={currentitem.key}>
            <FlipMove duration={5000} easing="ease-in-out">
              <li>
                <input
                  className={styles.eddd}
                  type="text"
                  value={currentitem.text}
                  onChange={e => this.Edit(e.target.value, currentitem.key)}
                />
                <button onClick={() => this.delete(currentitem.key)}>
                  delete
                </button>
              </li>
            </FlipMove>
          </div>
        ))}
      </div>
    );
  }
}
//  <div>
//       <span>{}</span>
//       <span>
//         <i className="fas fa-trash"></i>
//       </span>
//     </div>
