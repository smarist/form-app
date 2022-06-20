import React, {useState} from "react"
import {Link} from "react-router-dom"
import { useDispatch} from "react-redux"
import { typeUpdate } from "../redux/formSlice"

export default function Filter() {
  const dispatch = useDispatch()
  const [matchType, setMatchType] = useState("")

 console.log(matchType)

 function handleNext(){
  dispatch(typeUpdate({matchType}))
 }

  return (
    <div>
      <div className="pt">
        <select 
        value={matchType}
        onChange={(e)=> setMatchType(e.target.value)}
        placeholder= "Match Type"
        >
            <option value="" disabled hidden className="first">Match Type</option>
            <option value="friendly">Friendly</option>
            <option value="tournament">Tournament</option>
        </select>
      </div>


      <div className="filter-btn">
        <Link to="/general"> <button className="btn" disabled={!matchType} onClick={handleNext}>Next</button></Link>
       
      </div>
    </div>
  )
}
