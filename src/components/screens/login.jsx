import Image from "../../assets/images/girlinchair.png";

function login() {
  return (
    <>
    <section className="bg-gray-200 w-full h-screen">
      <div className="  h-full flex  ">
        <div className="w-full flex flex-col items-center mt-[130px] max-xl:mt-[70px] max-md:mt-10 max-sm:mt-9">
          <h1 className="text-[74px] text-center font-bold mb-3 h-[100px] max-xl:text-[50px] max-md:text-[50px] max-md:h-[80px] max-sm:text-[45px] max-sm:h-[80px] font-poppins">Hi there!</h1>
          <span className="text-center text-[14px] leading-[1px] font-poppins text-[#666666] mb-3 max-xl:text-[13px]">welcome back, you have been missed </span>
          <input type="text" className="w-[398px] h-[58px] bborder-l-slate-900 mb-5 mt-10 rounded-lg font-poppins items-center text-ellipsis max-xl:h-[50px] max-xl:w-[350px] max-sm:w-[300px]" placeholder="Your Email" />
          <input type="password" className="w-[398px] h-[58px] border-l-slate-900 rounded-lg items-center font-poppins text-ellipsis max-xl:h-[50px] max-xl:w-[350px] max-sm:w-[300px]" placeholder="Password" />
          <button type="submit" className="w-[402px] h-[61px] bg-[#9381FF] text-white mt-10 rounded-lg  drop-shadow-xl max-xl:w-[200px] max-xl:h-[50px] max-xl:mt-7 lg:w-[150px] max-md:w-[150px] max-md:h-[55px] max-sm:w-[300px] font-poppins">Login</button>
          <a href="" className="text-[17px] font-[400] leading-[25.5px] text-[#AEAEAE] mb-[60px] mt-2 hover:pointer max-xl:text-[14px] max-xl:mb-1 max-md:mb-3 max-md:text-[14px] max-sm:text-[13px] max-sm:mb-4 font-poppins">Recovery password</a>
          <p className="text-[16px] font-[500] font-poppins">Don't have an account?<a href="" className="hover:underline font-poppins"> sign up</a></p>
          <div className="flex justify-evenly w-[251px] mt-4">
            <a href="" className="text-[16px] font-[600] hover:underline font-poppins">Student</a>
            <a href="" className="text-[16px] font-[600] hover:underline font-poppins">Teacher</a>
          </div>  
        </div>
        <div className="w-full max-md:hidden max-sm:hidden">
          <img src={Image} alt="Image" className="w-[680px] h-[720px] mt-[30px] px-6 max-xl:h-[500px] max-xl:w-[500px] max-md:hidden max-sm:hidden"/>
        </div>
      </div>
    </section>
    </>
  )
}

export default login