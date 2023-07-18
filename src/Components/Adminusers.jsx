import React, { useContext } from "react";
import { context } from "../Store/Context";
import Card from "react-bootstrap/Card";
import SidebarBox from "./SidebarBox";

const Adminusers = () => {
  const { signin } = useContext(context);
  console.log (signin)

  return (

    <div className="container" style={{display:"flex"}}>

        <div className="sidebar">
              <SidebarBox/>

        </div>



    <div className="cardss" style={{display:"flex",justifyContent:"center",flexWrap:"wrap" ,height:"100vh",overflow:"scroll"}}>
            
        {signin.map((user)=>(

      <Card className="text-center " style={{marginTop:"10px"}}>
        <Card.Header>User</Card.Header>
        <Card.Body>
          <Card.Title>Name:{user.name}</Card.Title>
          <Card.Text>
            Email:{user.email}
          </Card.Text>
          <Card.Text>
           Phonenumber: {user.phonenumber}
          </Card.Text>
          
        </Card.Body>
        <Card.Footer className="text-muted">{user.id} days ago</Card.Footer>
      </Card>
        ))

        }
    </div>
    </div>


  );
};

export default Adminusers;
