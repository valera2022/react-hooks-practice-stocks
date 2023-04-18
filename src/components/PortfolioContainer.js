import React,{useState} from "react";
import Stock from "./Stock";

function PortfolioContainer({selected,setSelected,removeData}) {
  



  return (
    <div >
      <h2>My Portfolio</h2>
      <div onClick={removeData}>
        {
        selected.map((data)=>  <Stock data={data} addPorfolio={removeData}/>)}
      </div>
       
      
    </div>
  );
}

export default PortfolioContainer;
