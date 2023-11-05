import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../config/firebase.config";

const SingUp = () => {
     const {singUp} = useContext(AuthContext);
     const [show,setShow] = useState(false);
     const handleSingUp=(event)=>{
        event.preventDefault()
        const form = event.target ;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const confirmPassword = form.ConfirmPassword.value;
        const checkBox = form.checkBox.checked;
        console.log(name,email,password,photo,confirmPassword);

        if(!checkBox){
            return toast.error("Please accept Theme and Condition!", {
                position: "top-center"
            })
        }

        if (password !== confirmPassword) {
            return toast.error("Password do not match!", {
                position: "top-center"
            })
        }
        if (password.length < 8)
            return toast.error("Type more then 8 characters!", {
                position: "top-center"
            })

        if (! /(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[A-Z])/.test(password)) {
            return toast.error(" Add at least one special character ,number and one upper case word!", {
                position: "top-center"
            })
        }

        singUp(email,password)
        .then(result=>{
           console.log(result.user);
           updateProfile(auth.currentUser, {
            displayName: name,
             photoURL: photo
          }).then(() => {
            console.log('done');
          })
          .catch((error) => {
             console.log(error);
          });
           toast.success("Singup successful!", {
            position: "top-center"
        })
        })
        .catch(error=>{
            console.log(error);
            toast.error("Email-already-in-use", {
                position: "top-center"
            })
        })

     }


     


    return (
        <div className=" lg:p-14 flex flex-col lg:flex-row  gap-6" style={{backgroundImage: 'url(https://i.ibb.co/N71JCfM/b9c8f893c9a782033a01f47e0c0b1d6e.jpg)'}}>
        <div className=" ">
            <img src="https://i.ibb.co/wN8fM6y/login-img.png" alt="" />
        </div>
        <div className=" w-4/5  lg:w-1/3 mx-auto mt-0 md:flex-0 shrink-0">
            <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl">
                    <h5 className="text-3xl">Register Now</h5>
                </div>
                 
                <div className="flex-auto p-6">
                    <form onSubmit={handleSingUp} role="form text-left">
                        <div className="mb-4">
                            <input aria-describedby="email-addon" name="name"  placeholder="Name" className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="text" />
                        </div>
                        <div className="mb-4">
                            <input aria-describedby="email-addon" required name="email"   placeholder="Email" className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="email" />
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
                        <div className="mb-4">
                            <input aria-describedby="password-addon" name="ConfirmPassword"   placeholder="Confirm Password" className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="password" />
                        </div>
                       
                        <div className="mb-4">
                            <input aria-describedby="password-addon" name="photo"   placeholder="Photo URL" className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="text" />
                        </div>
                        <div className="mb-3 flex items-center gap-3">
                            <input type="checkbox" name="checkBox" id="" />
                            <p>I agree the <span className="text-black font-bold">Theme and Condition</span> </p>
                        </div>

                        <div className="text-center">
                           <button type="submit" className="btn btn-neutral w-full">Sing up</button>
                        </div>
                        <p className="mt-4 mb-0 leading-normal text-sm">Already have an account? <Link to='/login' className="text-sky-400">Login</Link> </p>
                        
                        <ToastContainer></ToastContainer>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SingUp;