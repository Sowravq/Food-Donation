import { useLoaderData } from "react-router-dom";



const SingleFood = () => {
    const singleFood = useLoaderData();
    console.log(singleFood);
    const { photoUrl
    } = singleFood;
    return (
        <div className="bg-slate-500   px-6 md:px-10 lg:px-16 py-20">
            <div className="bg-white flex flex-col lg:flex-row gap-10">
                <div className="flex-1 relative bg-lime-600 rounded-br-full -mt-[79px] -ml-[64px]">
                       <img className="rounded-full relative w-[200px] h-[200px] md:w-[400px] md:h-[400px] lg:w-[400px] lg:h-[400px] bg-black p-2 ml-24 md:ml-44 lg:ml-24 mt-44" src={photoUrl} alt="" />
                </div>
                <div className="flex-1 ">
                    <p>ppppppppppppppp</p>
                </div>
            </div>
        </div>
    );
};

export default SingleFood;