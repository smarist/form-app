import React, {useState} from "react"
import {Link} from 'react-router-dom'
import TextField from '@mui/material/TextField'
import { useDispatch} from "react-redux"
import { generalUpdate } from "../redux/formSlice"

export default function Form1b() {
    const dispatch = useDispatch()
    const [startDateAndTime, setStartDateAndTime] = useState("")
    const [endDateAndTime, setEndDateAndTime] = useState("")
    const [matchLocation, setMatchLocation] = useState("")
    const [comments, setComments] = useState("")
    const [tournamentName, setTournamentName] = useState("")



    function handleNext(){
        dispatch(generalUpdate({startDateAndTime, endDateAndTime, comments, matchLocation, tournamentName}))
    }
    

  return (
    <div>
        <header>
          <div className='btn'>General 2/3</div>
        </header>
        <div className="flex-col p">
            <div className="flex-row md">
                <div className="flex-col form-div max p">
                    
                    <TextField
                        className="width"
                        id="datetime-local"
                        label={"Start Date & Time"}
                        name= "startDateAndTime"
                        type="datetime-local"
                        value={startDateAndTime}
                        onChange={(e)=> setStartDateAndTime(e.target.value)}
                        sx={{ width: 250 }}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />


                    <input 
                        type="text" 
                        placeholder="March Location"
                        className="block width"
                        name= "matchLocation"
                        value= {matchLocation}
                        onChange={(e)=> setMatchLocation(e.target.value)}
                />

                    <input 
                        type="text" 
                        placeholder="Tournament Name"
                        className="block width"
                        name= "tournamentName"
                        value= {tournamentName}
                        onChange={(e)=> setTournamentName(e.target.value)}
                    />
                    
                </div>

                <div className="flex-col form-div p">
                    <TextField
                            className="width"
                            id="datetime-local"
                            label={"End Date & Time"}
                            name= "endDateAndTime"
                            type="datetime-local"
                            value={endDateAndTime}
                            onChange={(e)=> setEndDateAndTime(e.target.value)}
                            sx={{ width: 250 }}
                            InputLabelProps={{
                            shrink: true,
                            }}
                    /> 

                    <textarea
                        placeholder="comments"
                        name= "comments"
                        value= {comments}
                        onChange={(e)=> setComments(e.target.value)}
                        className="width block comments"
                        maxLength={1000}
                    />
                    
                </div>

            </div>

            <div className="filter-btn1">
            <Link to = "/">
                <button 
                className="btn"> Back
                </button>
            </Link>

            <Link to = "/teams">
                <button 
                className="btn" onClick={handleNext}> Next
                </button>
            </Link>
            </div>
        </div>
    </div>
  )
}
