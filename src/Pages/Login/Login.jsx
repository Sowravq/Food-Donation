import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { BsGoogle} from 'react-icons/bs';
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {
    const {logIn,google} = useContext(AuthContext)
    const [show,setShow] = useState(false);
    const location = useLocation();
    const navigate = useNavigate()
    const handleLogin = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        logIn(email,password)
        .then(result=>{
            console.log( result.user);
            navigate(location?.state? location.state:'/')
            toast.success("login successful!", {
                position: "bottom-left"
            })
        })
        .catch(error=>{
            console.log(error);
            toast.error("Something went Wrong", {
                position: "bottom-left"
            })
        })
    }

  const handleGoogle=()=>{
    google()
    .then(result=>{
        console.log(result.user);
        navigate(location?.state? location.state:'/')
        toast.success("login successful!", {
            position: "bottom-left"
        })
    })
    .catch(error=>{
        console.log(error);
        toast.error("Something went Wrong", {
            position: "bottom-left"
        })
    })
  }

    

    return (
        <div className=" lg:p-14 flex flex-col lg:flex-row  gap-6" style={{backgroundImage: 'url(https://i.ibb.co/N71JCfM/b9c8f893c9a782033a01f47e0c0b1d6e.jpg)'}}>
        <div className=" ">
            <img src="https://i.ibb.co/wN8fM6y/login-img.png" alt="" />
        </div>
        <div className=" w-4/5 lg:w-1/3 mx-auto mt-0 md:flex-0 shrink-0">
            <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl">
                    <h5 className="text-3xl">Login with</h5>
                </div>
                <div className="  px-3 -mx-3 sm:px-6 xl:px-12">
                    <div onClick={handleGoogle} className="  max-w-full px-1 ml-auto flex-0">
                        <a className="inline-block w-full px-6 py-3 mb-4 font-bold text-center    uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-3xl text-cyan-500 ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75">
                            <BsGoogle></BsGoogle>
                        </a>
                    </div>
                   
                  
                    <div className="relative w-full max-w-full px-3 mt-2 text-center shrink-0">
                        <p className="z-20 inline px-4 mb-2 font-semibold leading-normal bg-white text-xl text-slate-400">or</p>
                    </div>
                </div>
                <div className="flex-auto p-6">
                    <form onSubmit={handleLogin} role="form text-left">
                         
                        <div className="mb-4">
                            <input aria-describedby="email-addon" name="email" aria-label="Email" placeholder="Email" className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="email" />
                        </div>
                        <div className="mb-4">
                            <input aria-describedby="password-addon" name="password"   placeholder="Password" className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                            type={show?'text':"password"} />
                            <p className="  absolute ml-[220px] md:ml-[520px] lg:ml-[330px] -mt-7" onClick={() => setShow(!show)}>
                                {
                                    !show ? <AiFillEyeInvisible className="text-2xl"></AiFillEyeInvisible> : <AiFillEye className="text-2xl"></AiFillEye>
                                }
                            </p>


                        </div>
                       

                        <div className="text-center">
                        <div className="text-center">
                           <button type="submit" className="btn btn-neutral w-full">Login</button>
                        </div>
                        </div>
                        <p className="mt-4 mb-0 leading-normal text-sm">You have no account? <Link to='/singUp' className="text-sky-500">Sing Up</Link></p>
                        <ToastContainer></ToastContainer>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;