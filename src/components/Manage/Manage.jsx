 
import { useLoaderData } from "react-router-dom";

 
const Manage = () => {
    const manage  = useLoaderData();
    
     const {_id,status, name,userEmail,requestDate,foodId,
      foodStatus} =  manage;

      const handleManage =(id)=>{
        console.log(id);
        fetch(`http://localhost:4000/requests/${id}`, {
          method:"PATCH",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify({foodStatus:'Delivered'})
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
        })
      }
    
    return (
        <div>
           {
            
            manage? <div className="overflow-x-auto mb-16">
              <p className="mt-14 mb-11   text-center text-2xl md:text-5xl lg:text-5xl font-bold">Manage Request </p>
              <p className="border-b-2 mb-10"></p>
            <table className="table">
             
              <thead>
                <tr >
                   
                  <th>Name</th>
                  <th>Email</th>
                  <th>Request Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                
                <tr className="bg-base-200 ">
                  <th className="p-8">{name}</th>
                  <td>{userEmail}</td>
                  <td>{requestDate}</td>
                  
                    {
                     foodStatus == "Delivered"? <td><p className="bg-sky-500 p-2 rounded-full">Delivered</p></td>:
                      <td onClick={()=>handleManage(foodId)} className=" btn bg-red-500 mt-7 md:mt-4 lg:mt-4">{foodStatus}</td>
                    }
                
                </tr>
                
                
              
              </tbody>
            </table>
            </div>
            
            :
            <p className=" h-screen flex justify-center items-center text-center text-6xl font-bold">Food Request Is Not Available </p>
           }
        </div>
    );
};

export default Manage;