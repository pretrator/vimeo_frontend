import React from 'react'
import Table from 'react-bootstrap/Table'
const Table2=(props)=>{
    return (
        <>
        <Table striped bordered hover>
    <thead>
    <tr>
      <th>Account No</th>
      <th>Date</th>
      <th>Transaction Details</th>
      <th>Value</th>
      <th>Withdrawal AMT</th>
      <th>Deposit AMT</th>
      <th>Balance AMT</th>
    </tr>
  </thead>
  <tbody>
      {
props.data.map((i)=>{
    return (
        <>
        <tr>
      <td>{i["Account No"]}</td>
      <td>{i["Date"]}</td>
      <td>{i["Transaction Details"]}</td>
      <td>{i["Value"]}</td>
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