/* eslint-disable react/prop-types */
import Swal from "sweetalert2";


const MyFoods = ({ food, foods, setFoods }) => {
    const { name, _id, donarImg, email, foodName, photoUrl
        , location, foodStatus, foodQuantity, expiredDate, additionalNotes } = food;


    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })

            .then(result => {
                if (result.isConfirmed) {

                    fetch(`http://localhost:4000/foods/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                )
                                const deleteFood = foods?.filter(crt => crt._id !== id);
                                setFoods(deleteFood)
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
                        <div className="avatar">
                            <div className="mask mask-squircle w-28 h-28">
                                <img src={photoUrl} />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{foodName}</div>
                            <div className="text-sm opacity-50">{location}</div>
                        </div>
                    </div>
                </td>

                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={donarImg} />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                            <div className="text-sm opacity-50">{email}</div>
                        </div>
                    </div>
                </td>

                <td>{expiredDate}</td>
                <th>
                    <p>{foodQuantity}</p>

                </th>
                <th><button onClick={() => handleDelete(_id)} className="btn btn-outline btn-warning">Delate </button></th>
                <th><button className="btn btn-outline btn-info">Update </button></th>
                <th><button className="btn btn-outline btn-success">Manage</button></th>
            </tr>


        </tbody>

    );
};

export default MyFoods;