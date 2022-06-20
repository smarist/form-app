import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice({
    name: "form",
    initialState: {
        matchType: "",
        startDateAndTime: "",
        endDateAndTime: "",
        matchLocation: "",
        comments: "",
        tournamentName: "",
        teamOneName: "",
        teamTwoName: "",
        teamOnePosition: "",
        teamTwoPosition: "" 
    },
    reducers: {
        typeUpdate: (state, action) => {
            state.matchType = action.payload.matchType
        },

        generalUpdate: (state, action) => {
           state.startDateAndTime = action.payload.startDateAndTime
           state.endDateAndTime = action.payload.endDateAndTime
           state.matchLocation = action.payload.matchLocation
           state.comments = action.payload.comments
           state.tournamentName = action.payload.tournamentName
          
        },

        teamsUpdate: (state, action) => {
            state.teamOneName = action.payload.teamOneName
            state.teamTwoName = action.payload.teamTwoName
            state.teamOnePosition = action.payload.teamOnePosition
            state.teamTwoPosition = action.payload.teamTwoPosition
        }
    }
})

export const {typeUpdate, generalUpdate, teamsUpdate} = formSlice.actions
export default formSlice.reducer