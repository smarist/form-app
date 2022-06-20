import React from "react"
import {useSelector } from "react-redux"
import Moment from "react-moment";

export default function Table() {
  const form = useSelector((state)=> state.form)

  return (
    <div className="tab">
        <table>
        <tr className="tab-head">
          <th>Team 1</th>
          <th>Team 2</th>
          <th>Match Type</th>
          <th>Tournament Name</th>
          <th>Start date & Time</th>
          <th>End date & Time</th>
          <th>Location</th>
          <th>Comments</th>
        </tr>
        <tr className="tab-body">
          <td>{form.teamOneName} ({form.teamOnePosition})</td>
          <td>{form.teamTwoName} ({form.teamTwoPosition})</td>
          <td>{form.matchType}</td>
          <td>{form.tournamentName}</td>
          <td><Moment format="YYYY-MM-DD HH:mm">{form.startDateAndTime}</Moment></td>
          <td><Moment format="YYYY-MM-DD HH:mm">{form.endDateAndTime}</Moment></td>
          <td>{form.matchLocation}</td>
          <td>{form.comments}</td>

        </tr>
      </table>
    </div>
  )
}
