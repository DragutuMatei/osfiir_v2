import React, {useState, useEffect} from 'react'

function RollUp1() {
    const [link, setLink] = useState("https://osfiir.ro/about")

    useEffect(()=>{
        window.location.href = link;
    }, [])

    return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Se incarca redirectul....</h1>
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
      
    </div>
  )
}

export default RollUp1