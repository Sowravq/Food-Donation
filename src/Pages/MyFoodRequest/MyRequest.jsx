/* eslint-disable react/prop-types */
import Swal from "sweetalert2";

 
  
 
 const MyRequest = ({req,request,setRequest}) => {
    const {_id, expiredDate,requestDate,donationMoney ,name,location } =req;


    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, cancel it!'
        })

            .then(result => {
                if (result.isConfirmed) {

                    fetch(`http://localhost:4000/requests/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your  request has been cancel .',
                                    'success'
                                )
                                const deleteFood = request?.filter(crt => crt._id !== id);
                                setRequest(deleteFood)
                            }
                        })
                }
            })

    }
  
    return (
        <tbody className=" ">


            <tr>

                <td>
                    <div className="flex items-center space-x-3">
                        <div>
                            <div className="font-bold">{name}</div>
                            <div className="text-sm opacity-50"><span>Location : </span> {location}</div>
                        </div>
                    </div>
                </td>

                <td>{expiredDate}</td>
                <td>
                    <p>{requestDate} </p>

                </td>
                 <td>{donationMoney}</td>
                <th><button onClick={() => handleDelete(_id)} className="btn bg-red-500"> Cancel Request </button></th>
              
                
                
            </tr>


        </tbody>
    );
 };
 
 export default MyRequest;