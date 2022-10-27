import React, { useEffect } from 'react';
import axios from 'axios';
import Sidebar from './sidebar';
function Home1(){
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
           .then((data) => data.json())   
    })
    return(
        <> 
        <Sidebar/>
        <div className='home'>  
            <h2>Welcome to admin dashboard</h2>
        </div>
        </>
    )
}
export default Home1;