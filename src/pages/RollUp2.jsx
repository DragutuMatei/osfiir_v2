import React, {useState, useEffect} from 'react'

function RollUp1() {
    const [link, setLink] = useState("https://www.instagram.com/osfiir")

    useEffect(()=>{
        window.location.href = link;
    }, [])

    return (
    <div>Se incarca redirectul....</div>
  )
}

export default RollUp1