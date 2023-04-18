import React,{useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [arrayData, setArrayData] = useState([])
  const [selected, setSelected]= useState([])
  const [sortBy,setSortBy]= useState("")
  const [filterInput,setFilter]= useState("")

  function addPorfolio(data){
    setSelected([...selected, data])
    // addPorfolio()
}

function removeData(deletedItem) {
  setSelected((selected) =>
    selected.filter((stock) => stock.id !== deletedItem.id)
  );
}

const sortedData = arrayData.sort((a,b)=> {
		if(sortBy === "Price")
		{return a.price - b.price}
		
		else if(sortBy === "Alphabetically"){
			//  pigs.sort((a,b)=>{
				return a.name.localeCompare(b.name) 
		}
    
	})

  const filteredData =  sortedData.filter((item)=>{
    return item.type.toLowerCase().includes(filterInput.toLowerCase())
 })
	  




  console.log(selected)
  return (
    <div>
      <SearchBar  setSortBy={setSortBy} setFilter={setFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer arrayData={arrayData} setArrayData={setArrayData} setSelected={setSelected} addPorfolio={addPorfolio} filteredData={filteredData}/>
        </div>
        <div className="col-4">
          <PortfolioContainer setSelected={setSelected} removeData={removeData} selected={selected}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
