import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  // componentDidMount() 
  const [colorList, setColorList] = useState([]);
  
    axios
      .get("http://localhost:5000/api/colors")
      .then(res => this.setState([res.data.colors]))
      .catch(err => console.log('Nope', err));
  


  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
