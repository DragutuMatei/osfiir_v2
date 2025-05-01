import React, { useEffect } from 'react'

function Download() {

    useEffect(()=>{
        var link = document.createElement("a");
        link.download = 'bafta';
        link.href = require("../assets/levelup/bafta.png");
        link.click();
        link.remove();
    },[])

  return (
    <>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <a className="button" href={require("../assets/levelup/bafta.png")} download={true}>Daca nu s a downloadad imaginea, apasa aici!</a>
  
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </>)
}

export default Download