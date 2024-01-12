import { HiArrowTopRightOnSquare, HiOutlineTrash } from "react-icons/hi2";

const CardOptions = () => {



    return (
        <div>
            <div className="dropdown dropdown-end dropdown-bottom dropdown-hover">
                <div tabIndex={0} role="button" className="btn hover:bg-transparent border-none bg-transparent m-1">...</div>
                <ul tabIndex={0} className="dropdown-content z-[50] menu p-2 shadow bg-purple-200 rounded-box w-52">
                    <li><a className=" flex justify-between"><span>Incomplete</span> <HiArrowTopRightOnSquare className="text-lg"/></a></li>
                    <li><a className="flex justify-between"><span>Todo</span> <HiArrowTopRightOnSquare className="text-lg"/></a></li>
                    <li><a className="flex justify-between"><span>Doing</span> <HiArrowTopRightOnSquare className="text-lg"/></a></li>
                    <li><a className="flex justify-between"><span>Under Review</span> <HiArrowTopRightOnSquare className="text-lg"/></a></li>
                    <li><a className="flex justify-between"><span>Complete</span> <HiArrowTopRightOnSquare className="text-lg"/></a></li>
                    <li><a className="flex justify-between bg-red-100 hover:bg-red-600 hover:text-white"><span>Delete</span> <HiOutlineTrash className="text-lg"/></a></li>
                
                </ul>
            </div>
        </div>
    )
}

export default CardOptions