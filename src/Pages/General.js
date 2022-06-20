import React from "react"
import Form1a from '../Components/Form1a'
import Form1b from '../Components/Form1b'
import { useSelector } from "react-redux"

export default function General () {
  const form = useSelector((state)=> state.form)
  console.log(form.matchType)

  return (
    <div>
        {form.matchType === "friendly"? 
         <Form1a/> :
         <Form1b/>
        }
    </div>
  )
}
