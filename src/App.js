import React, { useState } from 'react';
import getdat from "./net/netcall"

function App() {
  const [dat,setdat]=useState("");
  getdat().then(
    (r)=>setdat(r)
  )
  return (<>
  {dat}
  </>);
}

export default App;
