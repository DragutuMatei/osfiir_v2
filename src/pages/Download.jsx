import React, { useEffect } from 'react'

function Download() {

    useEffect(()=>{
        var link = document.createElement("a");
        link.download = 'name';
        link.href = require("../../assets/levelup/bafta.png");
        link.click();
        link.remove();
    },[])

  return (
    <a href={require("../../assets/levelup/bafta.png")} download={true}>Daca nu s a downloadad imaginea, apasa aici!</a>
  )
}

export default Download