import  React, { useState , useEffect } from 'react'
import './App.css';
import './Style.css';
import Mobile from './props';


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
          <div class='Block'>

<p><center>Time : {date.toLocaleTimeString()}</center></p>
<p> <center>Date : {date.toLocaleDateString()}</center></p>
<Mobile />

</div>
      </center>
    )
}

export default DateTime