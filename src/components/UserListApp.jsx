import React from "react";
import { Container, Card, CardBody,Nav } from "react-bootstrap";
import Data from "./Data";

const UserListApp=()=>{
    return (
        <>
        <div>
            <Container className="mt-5 w-75 mx-auto shadow">
                <Nav className="nav navbar navbar-expand-md bg-primary text-white">
                    <ul className="navbar-links">
                        <li><a href="">Devloper List</a></li>
                        <li><a href="">Designer List</a></li>
                        <li><a href="">Total Number of List <span className="bi bi-person"><span className="badge badge-sm bg-danger">{Data.length}</span></span></a></li>
                    </ul>
                </Nav>

                {/* display a dynamic list applied map function */}
                {Data && Data.map((item)=>{
                    return(
                        <>
                        <Card className="p-3 bg-white shadow mt-4">
                            <CardBody className="card_items">
                                <table className="table table-responsive">
                                    <tr>
                                        <td><img src={item.photo} alt="img" className="img-fluid rounded-circle" style={{width:"125px", height:"125px"}}/></td>
                                        <td>Name:- {item.name}</td>
                                        <td>Age:- {item.age}</td>
                                        <td>Phone:- {item.phone}</td>
                                        <td>Salary:- {item.salary}</td>
                                    </tr>
                                </table>
                            </CardBody>
                        </Card>
                    
                        </>
                    )
                })}
            </Container>
        </div>
  
        </>
    )
}
export default UserListApp