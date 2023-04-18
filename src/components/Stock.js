import React from "react";

function Stock({data,setSelected,addPorfolio}) {
  function handleStock(e){
    console.log(e.target.value)
    //let newArray = []
    addPorfolio(data)
    // removeData(e.target.value)
    
  }

  
  
   //console.log(data.name)
  return (
    <div>
      <div className="card" onClick={handleStock}>
        <div className="card-body">
          <h5 className="card-title" value={data.name} >{data.name}</h5>
          <p className="card-text">{data.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
