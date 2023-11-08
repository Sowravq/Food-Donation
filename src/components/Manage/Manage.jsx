import { useLoaderData } from "react-router-dom";

 
const Manage = () => {
    const manage  = useLoaderData();
     const {name,userEmail,requestDate
     } = manage
    return (
        <div>
           {
            manage?<div className="overflow-x-auto">
            <table className="table">
             
              <thead>
                <tr>
                   
                  <th>Name</th>
                  <th>Email</th>
                  <th>Request Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                
                <tr className="bg-base-200">
                  <th>{name}</th>
                  <td>{userEmail}</td>
                  <td>{requestDate}</td>
                  <td>Conform Now</td>
                </tr>
                
                
              
              </tbody>
            </table>
            </div>
            :
            <p>oooo</p>
           }
        </div>
    );
};

export default Manage;