import React, {useState} from 'react'
import {FcGoogle} from "react-icons/fc"
// import {auth, provider} from "../config/firebase"
// import {
//   signInWithPopup, 
//   signInWithEmailAndPassword, 
//   createUserWithEmailAndPassword, 
//   signOut} from "firebase/auth"
import { useNavigate, Link } from 'react-router-dom'
// import { toast } from 'react-toastify';

const signup = () => {
    const navigate = useNavigate();

    // const signInWithGoogle = async()=>{
    //    const result = await signInWithPopup(auth, provider);
       
    //    console.log(result)
    //    toast.success("Login Successfully", {
    //         icon: "🚀"
    //       });
    //    navigate('/') 
    // }

    const [data, setData] = useState({
      email: '',
      password: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setData({ ...data, [name]: value });
    }; 
    // console.log(data)
    

    const handleSubmit = (e) => {
      e.preventDefault();
  
    //   createUserWithEmailAndPassword(auth, data.email, data.password)
    //     .then((userCredential) => {
    //       const user = userCredential.user;
    //       console.log(user, "authData");
    //       toast.success("Sign up Successfully", {
    //         icon: "🚀"
    //       });
    //       navigate("/")
    //     })
    //     .catch((error) => {
    //       console.log(error.code, error.message);
    //       toast.error("Failed to sign up");
    //     });
    }
    
  return (
    <div className='pb-20 md:pb-28'>
      <h1 className='text-2xl font-bold mb-8 pt-28 md:pt-32 text-center'>Sign Up</h1>
      <div className='flex justify-center items-center'> 
        <div className='border border-[#3938CD] rounded p-6'>

          <p className='text-xl font-bold mb-4'>Sign up to Continue</p>

          <form onSubmit={handleSubmit} className="w-full mt-12">

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                htmlFor="email"
                type="email">
                  Email Address
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" 
                type="text" 
                id="email"
                name="email"
                placeholder="Janedoe@gmail.com"
                value={data.email}
                onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                  Password
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 
                leading-tight focus:outline-none focus:bg-white focus:border-[#3938CD]" 
                type="password" 
                id="password"
                name="password"
                placeholder="**************"
                value={data.password}
                onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="flex gap-x-2 md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="flex justify-center">
                <button type='submit'
                className="shadow bg-[#3938CD] hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
                >Sign Up</button>
              </div>
              
            </div>
            <div className='flex justify-center items-center mt-4'><Link to="/login" className='underline text-[#3938CD]'>Already have an account? sign in</Link></div>
          </form> <br /><br />
            <div className="flex justify-center items-center">
              <button  
              className='flex justify-center items-center gap-x-2 
              cursor-pointer border border-black rounded shadow-2xl hover:p-5 p-4 transition'>
                  <FcGoogle size={30}/>
                  <p>Sign up with Google</p>
              </button>
            </div>

        </div>
      </div>
    </div>
    
  )
}

export default signup