import React from 'react';

function Mobile({name1, tool1, model1,model2,model3,name2, tool2,name3, tool3,}) {

    return (
      <div>
        <h1>Mobile</h1>
        <h2>Brand: {name1}.</h2>
        <h2>Model: {model1}.</h2>
        <h2>Price: {tool1}.</h2><br></br>

        <h1>Bike</h1>
        <h2>Hero Splendor: {name2}.</h2>
        <h2>Model: {model1}.</h2>
        <h2>Price: {tool2}.</h2><br></br>

        <h1>Car</h1>
        <h2>Brand: {name3}.</h2>
        <h2>Model: {model1}.</h2>
        <h2>Price: {tool3}.</h2><br></br>
      </div>
      
    );

  }
  
  Mobile.defaultProps = {
    name1: "Vivo",
    model1:"Y15",
    tool1: "12,999",

    name2: "Hero Splendor",
    model2:"Splendor Plus Self Alloy - BS VI",
    tool2: "70,488",

    name3: "Ford",
    model3:"F-150 Lightning",
    tool3: "$39,974",
  }
export default Mobile


// .Block{
//     background-color: black;
//     color: antiquewhite;
//     animation: blink 1s steps(1, end) infinite;
//     -webkit-animation:colorchange 20s infinite alternate;
//   }
  
//   @keyframes blink {
//     0% {
//       opacity: 1;
//       color: blue;
//     }
//     10% {
//         opacity: 0;
//         color: #8e44ad;
//       }
//       20% {
//         opacity: 1;
//         color: #1abc9c;
//       }
      
//       30% {
//         opacity: 0;
//         color: #d35400;
//       }
      
//       40% {
//         opacity: 1;
//         color: blue;
//       }
//     50% {
//         color: #34495e;
//       opacity: 0;
//     }
//     60% {
//         opacity: 1;
//         color: blue;
//       }
      
//       70% {
//         opacity: 0;
//         color: #2980b9;
//       }
//       80% {
//         opacity: 1;
//         color: #f1c40f;
//       }
      
//       90% {
//         opacity: 1;
//         color: #2980b9;
//       }
      
//     100% {
//         color: pink;
//       opacity: 1;
//     }
//   }
  