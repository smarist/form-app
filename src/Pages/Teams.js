import React, {useState} from "react"
import {Link} from "react-router-dom"
import { useDispatch} from "react-redux"
import {teamsUpdate} from "../redux/formSlice"


export default function Teams() {
    const dispatch = useDispatch()
    const [teamOneName, setTeamOneName] = useState("")
    const [teamTwoName, setTeamTwoName] = useState("")
    const [teamOnePosition, setTeamOnePosition] = useState("")
    const [teamTwoPosition, setTeamTwoPosition] = useState("")

    function handleNext(){
        dispatch(teamsUpdate({teamOneName, teamTwoName, teamOnePosition, teamTwoPosition}))
    }
    

    
  return (
    <div>
        <header>
          <div className='btn'>Teams 3/3</div>
        </header>
        <div className="flex-col">
            <div className="flex-row box1">
                <input 
                    type="text" 
                    placeholder="Team one name"
                    className="form--input"
                    name= "teamOneName"
                    value={teamOneName}
                    onChange={(e)=> setTeamOneName(e.target.value)}
                />

                <select
                   name="teamOnePosition"
                   value={teamOnePosition}
                   onChange={(e)=> setTeamOnePosition(e.target.value)}
                   className="teams"
                >
                    <option value="" disabled hidden>Home or Away</option>
                    <option value="Home" disabled={teamTwoPosition === "Home"}>Home</option>
                    <option value="Away" disabled={teamTwoPosition === "Away"}>Away</option>
                </select>
            </div>

            <div className="line">
                <div className="left">

                </div>
                <div className="vs">
                    VS
                </div>

                <div className="right">

                </div>
            </div>
            

            <div className="flex-row box2">
                <input 
                    type="text" 
                    placeholder="Team two name"
                    className="form--input"
                    name= "teamTwoName"
                    value={teamTwoName}
                    onChange={(e)=> setTeamTwoName(e.target.value)}                />

                <select
                 name= "teamTwoPosition"
                 value={teamTwoPosition}
                 onChange={(e)=> setTeamTwoPosition(e.target.value)}
                 className="teams"
                >
                    <option value="" disabled hidden>Home or Away</option>
                    <option value="Home" disabled={teamOnePosition === "Home"}>Home</option>
                    <option value="Away" disabled={teamOnePosition === "Away"}>Away</option>
                </select>
            </div>

            <div className="filter-btn1 mt">
            <Link to = "/general">
                <button 
                className="btn"> Back
                </button>
            </Link>

            <Link to = "/data">
                <button 
                className="btn" onClick={handleNext}> Submit
                </button>
            </Link>
            </div>
        </div>
    </div>
  )
}
