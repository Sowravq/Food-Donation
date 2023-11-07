import { useContext, useEffect, useState } from "react";
import MyRequest from "./MyRequest";
import { AuthContext } from "../../Provider/AuthProvider";
const MyFoodRequest = () => {
    const { information } = useContext(AuthContext)
    const [request, setRequest] = useState();


    const url = `http://localhost:4000/requests?email=${information.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setRequest(data)


            })
    }, [url])
    return (
        <div className="max-w-7xl mx-auto">
            <p className="text-5xl font-bold text-center mt-16 mb-14">My Food Request</p>

            <div className="overflow-x-auto mt-10">
                <table className="table">

                    <thead>
                        <tr>

                            <th>Donar Information</th>
                            <th>Expired Date</th>
                            <th>Request Date</th>
                            <th>Donation Amount</th>
                            <th></th>
                            
                        </tr>
                    </thead>

                    {
                        request?.map(req => <MyRequest key={req._id} req={req} request={request} setRequest={setRequest}></MyRequest>)
                    }


                </table>
            </div>


        </div>


    );
};

export default MyFoodRequest;