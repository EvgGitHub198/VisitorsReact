import React,{ useEffect, useState }from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import AddVisitorModal from "./AddVisitorModal";
import UpdateVisitorModal from "./UpdateVisitorModal";
import { getVisitors, deleteVisitor } from '../services/VisitorsService';


const Manage = () => {
    const [visitors, setVisitors] = useState([]);
    const [addModalShow, setAddModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [editVisitor, setEditVisitor] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
       let mounted = true;
       if(visitors.length && !isUpdated) {
        return;
        }
       getVisitors()
         .then(data => {
           if(mounted) {
             setVisitors(data);
           }
         })
       return () => {
          mounted = false;
          setIsUpdated(false);
       }
     }, [isUpdated, visitors])

    const handleUpdate = (e, stu) => {
        e.preventDefault();
        setEditModalShow(true);
        setEditVisitor(stu);
    };

    const handleAdd = (e) => {
        e.preventDefault();
        setAddModalShow(true);
    };

    const handleDelete = (e, visitorId) => {
        if(window.confirm('Are you sure ?')){
            e.preventDefault();
            deleteVisitor(visitorId)
            .then((result)=>{
                alert(result);
                setIsUpdated(true);
            },
            (error)=>{
                alert("Failed to Delete Visitor");
            })
        }
    };

    let AddModelClose=()=>setAddModalShow(false);
    let EditModelClose=()=>setEditModalShow(false);
    return(
        <div className="container-fluid side-container">
        <div className="row side-row" >
        <p id="manage"></p>
            <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
                <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Registration No</th>
                  <th>Email</th>
                  <th>PhoneNumber</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>
                  { visitors.map((vis) =>

                  <tr key={vis.id}>
                    <td>{vis.visitorId}</td>
                    <td>{vis.FirstName}</td>
                    <td>{vis.LastName}</td>
                    <td>{vis.RegisterNumber}</td>
                    <td>{vis.Email}</td>
                    <td>{vis.PhoneNumber}</td>
                  <td>

                  <Button className="mr-2" variant="danger"
                    onClick={event => handleDelete(event,vis.visitorId)}>
                        <RiDeleteBin5Line />
                  </Button>
                  <span>&nbsp;&nbsp;&nbsp;</span>
                  <Button className="mr-2"
                    onClick={event => handleUpdate(event,vis)}>
                        <FaEdit />
                  </Button>
                  <UpdateVisitorModal show={editModalShow} visitor={editVisitor} setUpdated={setIsUpdated}
                              onHide={EditModelClose}></UpdateVisitorModal>
                </td>
                </tr>)}
              </tbody>
            </Table>
            <ButtonToolbar>
                <Button variant="primary" onClick={handleAdd}>
                Add Visitor
                </Button>
                <AddVisitorModal show={addModalShow} setUpdated={setIsUpdated}
                onHide={AddModelClose}></AddVisitorModal>
            </ButtonToolbar>
        </div>
        </div>
    );
};

export default Manage;