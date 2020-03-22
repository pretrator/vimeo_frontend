import React from 'react'
import Table from 'react-bootstrap/Table'
const Table2=(props)=>{
    return (
        <>
        <Table striped bordered hover>
    <thead>
    <tr>
      
      <th onClick={(e)=>{props.sorter("id","val")}}>Serial No</th>
      <th>Account No</th>
      <th onClick={(e)=>props.sorter("Date","dat")}>Date</th>
      <th onClick={(e)=>props.sorter("Transaction Details","val")}>Transaction Details</th>
      <th onClick={(e)=>props.sorter("Value Date","dat")}>Value Date</th>
      <th onClick={(e)=>props.sorter("Withdrawal AMT","val")}>Withdrawal AMT</th>
      <th onClick={(e)=>props.sorter("Deposit AMT","val")}>Deposit AMT</th>
      <th onClick={(e)=>{props.sorter("Balance AMT","val")}}>Balance AMT</th>
    </tr>
  </thead>
  <tbody>
      {
props.data.map((i)=>{
    return (
        <>
        <tr>
      <td>{i["id"]}</td>
      <td>{i["Account No"]}</td>
      <td>{i["Date"]}</td>
      <td>{i["Transaction Details"]}</td>
      <td>{i["Value Date"]}</td>
      <td>{i["Withdrawal AMT"]}</td>
      <td>{i["Deposit AMT"]}</td>
      <td>{i["Balance AMT"]}</td>
    </tr>
        </>
    )
})
}
  </tbody>
</Table>
        </>
    )
}
export default Table2