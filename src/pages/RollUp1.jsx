import React, {useState, useEffect} from 'react'

function RollUp1() {
    const [link, setLink] = useState("https://osfiir.ro/about")

    useEffect(()=>{
        window.location.href = link;
    }, [])

    return (
    <div>Se incarca redirectul....</div>
  )
}

export default RollUp1