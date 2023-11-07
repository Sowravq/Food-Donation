 
const MyFoods = ({food}) => {
    const {name,_id,donarImg,email,foodName,photoUrl
        ,location,foodStatus,foodQuantity,expiredDate,additionalNotes} = food;
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
            <th><button className="btn btn-outline btn-warning">Delate </button></th>
            <th><button className="btn btn-outline btn-info">Update </button></th>
            <th><button className="btn btn-outline btn-success">Manage</button></th>
          </tr>
        
        
        </tbody>
        
    );
};

export default MyFoods;