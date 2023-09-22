import './App.css';
import { useState } from 'react';
let galobalId=0;
function App() {
  const [item,setItem]=useState("")
  const [Items,setItems]=useState([])
  function del(id){
       setItems(olditem=>olditem.filter(i=>i.id!==id))
    }
    const additem=()=>{
      // let value=[]
      let dataobj=[...Items,{ITEM:item,id:galobalId++}]
      let value=JSON.stringify(dataobj)
      localStorage.setItem("itemvalue",value)
      // let getvalue=
      // console.log('getvalue',getvalue);
      // const updated=[...Items,getvalue]
      setItems(JSON.parse(localStorage.getItem("itemvalue")))
      setItem("")
    }
    
    //  console.log(Items)
  return (
    <div className="App">
    <div className='GroceryBox'>
        <h1>Grocery Bud</h1>
       <div className='Additem'>
        <input type='text' value={item}  onChange={e=>{setItem(e.target.value)}} />
        <button onClick={additem}>Add Item</button>
       </div>
       {/* <h1>{value}</h1> */}
       <div className='list'>
       {
     Items.map((v, i) => {
        return<div className='item' key={i}> 
         <li>{v.ITEM}</li>
         <button onClick={()=>{del(v.id)}}>del</button>
        </div>;
      })
}

       </div>
       </div>
    </div>
  );
}

export default App;
