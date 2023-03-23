import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getVisitors } from '../services/VisitorsService';
import "../App.css";

const Visitors = () => {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
   let mounted = true;
   getVisitors()
     .then(data => {
       if(mounted) {
         setVisitors(data)
       }
     })
   return () => mounted = false;
 }, [])

  return(
   <div className="container-fluid side-container">
   <div className="row side-row" >
    <p id="before-table"></p>
        <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
        <thead>
            <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Registration No</th>
            <th>Email</th>
            <th>PhoneNumber</th>
            </tr>
        </thead>
        <tbody>
            {visitors.map((vis) =>
            <tr key={vis.id}>
                <td>{vis.visitorId}</td>
                <td>{vis.FirstName}</td>
                <td>{vis.LastName}</td>
                <td>{vis.RegisterNumber}</td>
                <td>{vis.Email}</td>
                <td>{vis.PhoneNumber}</td>
            </tr>)}
        </tbody>
    </Table>
    </div>
  </div>
  );
};

export default Visitors;