import { useState } from "react"
import { FaClipboardList } from "react-icons/fa6"
import { HiOutlineXMark } from "react-icons/hi2"
import FilesCard from "./FilesCard"


const ViewFiles = ({prop}) => {
    const [modalStatus, setModalStatus] = useState(false)
    console.log(prop.files);



    return (
        <div>
            <div className=" flex items-center">
                <button onClick={()=>setModalStatus(true)} className=" btn btn-sm btn-primary"><FaClipboardList /> view files</button>
            </div>
            {
                modalStatus &&
                <form className="z-50 absolute left-0 flex justify-center items-center top-0 w-full h-screen bg-[#000000d9]">
                    <HiOutlineXMark onClick={() => setModalStatus(false)} className="cursor-pointer absolute top-3 left-3 text-white bg-red-500 text-2xl" />
                    <div className="flex flex-wrap justify-center items-center gap-3">
                        {
                            prop?.files?.map((one,i)=><FilesCard key={i} val={one}/>)
                        }
                    </div>
                </form>
            }
        </div>
    )
}

export default ViewFiles