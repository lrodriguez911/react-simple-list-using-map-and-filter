import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function MyList(props) {
  const arr = props.data;
  const listItems = arr.filter(a => a%2 ===0).map((val) =>
    <li>{val}</li>
  );
  return <ul>{listItems}</ul>;
}
const arr = [1, 2, 3, 4];
const el = <MyList data={arr} />; 

ReactDOM.render(
  el, 
  document.getElementById('root')
);