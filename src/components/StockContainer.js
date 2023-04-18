import React,{useEffect} from "react";
import Stock from "./Stock";

function StockContainer({arrayData,setArrayData,setSelected, addPorfolio,filteredData}) {
  useEffect(()=>{
    fetch(" http://localhost:3001/stocks")
    .then(r=> r.json())
  .then(data=>setArrayData(data))
  },[])

  //console.log(arrayData)
  return (
    <div>
      <h2>Stocks</h2>
      {filteredData.map((data)=> <Stock data={data} setSelected={setSelected} addPorfolio={addPorfolio}/>)}
    </div>
  );
}

export default StockContainer;
