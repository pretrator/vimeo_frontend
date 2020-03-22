import React, { useState, useEffect } from 'react';
import getdat from "./net/netcall"
import Table2 from "./table"
import "./App.css"
import {datecompare,valcompare} from './sorter'
import ReactPaginate from 'react-paginate';

function App() {
  const [dat,setdat]=useState([]);
  const [select,setselect]=useState([]);
  const [error,seterr]=useState(null);
  const itemsperpage=10
  useEffect(
    ()=>{
      getdat().then((r)=>{
        setdat(r)
      }).catch(()=>{
        seterr("<h1>This page may not work when opened on https:// please open the same with http://</h1>")
      })
    }
  ,[])


  const sorter=(col,type)=>{
    console.log(col,type)
    if(type==="dat") setdat(dat.concat().sort(datecompare(col)))
    else if(type==="val") setdat(dat.concat().sort(valcompare(col)))
  }

  // const handlePageClick=data=>{
  //   let d=data.selected
  //   let z=d*10
  //   setshowdat(dat.slice(z,z+10))
  // }
 
  return (<>
  {console.log("Rendering")}
  <h1> Vimeo FullStack Challenge</h1>
  <h4> Click on headings to sort</h4>
  <h4>For eg <strong>Date</strong> and others to sort with respect to Date column</h4>
  <Table2 data={dat.slice(select*itemsperpage,select*itemsperpage+itemsperpage)} sorter={sorter}/>
  {error}
  <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={Math.ceil(dat.length/10)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={(data)=>setselect(data.selected)}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
  <h4>No Sorting on Transaction Detail</h4>
  </>);
}

export default App;
