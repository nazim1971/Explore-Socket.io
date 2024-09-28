import { Link } from 'lucide-react'
import React from 'react'

const Register = () => {
  return (
    <div className="my-20">
           <div className="flex w-full border my-20 max-w-sm mx-auto overflow-hidden  rounded-lg shadow-lg  lg:max-w-4xl">
          
      
          <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
              <div className="flex justify-center mx-auto">
                  <img className="w-auto h-10 sm:h-12" src="https://i.ibb.co/GJg1fYZ/Brain-boost-removebg-preview.png" alt="" />
              </div>
      
              <p className="mt-3 text-xl text-center ">
              Register to Get Started
              </p>
              <form  >
              <div className="mt-4">
                  <label className="block mb-2 text-sm font-medium " >Name</label>
                  <input
                 
                   className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" type="text" />
              </div>
              <div className="mt-4">
                  <label className="block mb-2 text-sm font-medium " >Email Address</label>
                  <input
                 
                   className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" type="email" />
              </div>
              <div className="mt-4">
                  <label className="block mb-2 text-sm font-medium " >Photo</label>
                  <input
                  placeholder="Photo Url"
              
                   className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" type="url" />
              </div>
      
              <div className="mt-4">
                  <div className="flex justify-between">
                      <label className="block mb-2 text-sm font-medium " >Password</label>
                      <a href="#" className="text-xs  hover:underline">Forget Password?</a>
                  </div>
      
                  <div >
                 <div className="flex items-center gap-5">
                 <input 
                 
                   className="block w-full px-4 py-2  border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" 
                   />
                  
                  
                 </div>
                
                  </div>
              </div>
      
              <div className="mt-6 bg-red-400">
                  <button type="submit" className="w-full btn btn-primary px-6 py-3 text-sm font-medium tracking-wide  capitalize transition-colors duration-300 transform  rounded-lg  focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                      Register
                  </button>
              </div>
              </form>
      
              <div className="flex items-center justify-between mt-4">
                  <span className="w-1/5 border-b  md:w-1/4"></span>
      
                  <Link href='/login' className="text-xs  uppercase  hover:underline text-rose-500">or sign in</Link>
      
                  <span className="w-1/5 border-b md:w-1/4"></span>
              </div>
          </div>
          <div className="hidden bg-cover lg:block lg:w-1/2" style={{backgroundImage: 'url(https://i.ibb.co/F4SRb4t/sign-up.jpg)'}} ></div>
      </div>
    </div>
  )
}

export default Register