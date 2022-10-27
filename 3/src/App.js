import  React, { useState , useEffect } from 'react'
import './App.css';
import './Style.css';

export const DateTime = () => {
    var [date,setDate] = useState(new Date());
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    });

    return(
      <center>
        <div class='block'>
            <br/>
            <h1>Time & Date</h1>
            <p><center>Time : {date.toLocaleTimeString()}</center></p>
            <p> <center>Date : {date.toLocaleDateString()}</center></p>
        </div>
      </center>
    )
}

export default DateTime;