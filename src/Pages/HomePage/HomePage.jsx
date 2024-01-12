import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";


const HomePage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row justify-between items-center -mt-16">
        <div className=" flex justify-center items-center h-full w-full">
        <h1 className="text-3xl font-semibold text-center">Welcome to Task Mangement Website !</h1>
        </div>
        <div className=" flex flex-col justify-center items-center h-full w-full">
            <h1 className="flex items-center text-3xl">Go to <span className=" font-bold text-primary">Task Page</span> <Link to={'/tasks'}><HiArrowRight className=" hover:scale-150 cursor-pointer mt-2 ml-3"/></Link></h1>
            <p className=" text-xs mt-3 text-blue-600">(Private Route) You have to log in before navigating!</p>
        </div>
    </div>
  )
}

export default HomePage