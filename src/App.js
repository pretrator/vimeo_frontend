import React, { useState, useEffect } from 'react';
import getdat from "./net/netcall"
import Table2 from "./table"

function App() {
  const [dat,setdat]=useState([]);
  useEffect(
    ()=>{
      getdat().then((r)=>{
        setdat(r)
        console.log(r)
      })
    }
  ,[])
  return (<>
  <Table2 data={dat}/>
  </>);
}

export default App;
