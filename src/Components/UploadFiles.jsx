import { useContext, useState } from "react"
import { FaLink } from "react-icons/fa6"
import { HiOutlineXMark } from "react-icons/hi2";
import usePublicAxios from "../Hooks/usePublicAxios";
import { FirebaseAuthContext } from "../Contexts/FirebaseContext";
import useGetAllTask from "../Hooks/useGetAllTask";
import Swal from "sweetalert2";


const UploadFiles = ({prop}) => {

    const {user} = useContext(FirebaseAuthContext);
    const publicAxios = usePublicAxios();
    const [tasks,refetch] = useGetAllTask()
    const [modalStatus,setModalStatus] = useState(false);
    const [file,setFile] = useState('')

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(file);
        const info ={
            name : file.name,
            size : file.size,
            type : file.type,
            userName : user?.displayName,
            userEmail: user?.email,
            userImage: user?.photoURL
        }
        publicAxios.post(`/files/${prop._id}`,info)
        .then(res=>{
            if(res.data.modifiedCount>0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Uploaded !",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  setModalStatus(false)
            }
        }).catch(err=>{
            console.log(err);
        })
    }

    return (
        <div>
            <p onClick={()=>{setModalStatus(true)}} className=" flex cursor-pointer items-center"><FaLink className=" mr-1" /> {prop.files.length}</p>
            {
                modalStatus && 
                <form onSubmit={handleSubmit} className="z-50 absolute left-0 flex justify-center items-center top-0 w-full h-screen bg-[#000000d9]">
                    <HiOutlineXMark onClick={()=>setModalStatus(false)} className="cursor-pointer absolute top-3 left-3 text-white bg-red-500 text-2xl"/>
                    <div className="flex flex-col justify-center items-center">
                        <label htmlFor="" className="mb-2 text-white">Upload a file </label>
                        <input onChange={e=>setFile(e.target.files[0])} className="text-white bg-purple-600 rounded-lg max-w-xs" type="file" />
                    <button className=" btn mt-5 px-10 btn-primary">Upload</button>
                    </div>
                </form>
            }
        </div>
    )
}

export default UploadFiles