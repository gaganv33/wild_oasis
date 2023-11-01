function Login(){
   return (
      <div className="w-full h-screen flex items-center justify-center"> 
         <div className="w-full sm:w-[40rem] px-2 py-3 sm:px-4 sm:py-4 bg-stone-100 rounded-lg shadow-lg
            text-center sm:text-lg font-semibold flex flex-col gap-10 items-center">
            <h1 className="text-2xl tracking-wide">Login</h1>
            <div className="flex flex-col gap-3 sm:grid sm:grid-cols-[1fr_2fr] items-center align-middle w-full">
               <label>Username</label>
               <input type="text" placeholder="Username"
               className="px-2 py-1 sm:px-4 sm:py-3 rounded-lg w-full focus:outline-none focus:ring
               focus:ring-stone-400 focus:ring-offset-1"
               />
            </div>
            <div className="flex flex-col gap-3 sm:grid sm:grid-cols-[1fr_2fr] align-middle items-center w-full">
               <label>Password</label>
               <input type="text" placeholder="Password" 
               className="px-2 py-1 sm:px-4 sm:py-3 rounded-lg w-full focus:outline-none focus:ring
                focus:ring-stone-400 focus:ring-offset-1"
               />
            </div>
            <button className="px-2 py-1 sm:px-4 sm:py-3 rounded-lg bg-stone-300 w-fit focus:outline-none 
            focus:ring focus:ring-stone-400 focus:ring-offset-1">
               Login
            </button>
         </div>
      </div>
   );
}

export default Login;
