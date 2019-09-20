import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from "./utils/axiosWithAuth";

const BubblePage = () => {
  // componentDidMount() 
  const [colorList, setColorList] = useState([]);
  
    axiosWithAuth()
      .get("http://localhost:5000/api/colors")
      .then(res => console.log(res))
      .catch(err => console.log('Nope', err));
  


  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
