import { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";
import getCurrentDate from "../Utils/GetTimeFunc";
import { incomplete } from "../Utils/Constants";
import { FirebaseAuthContext } from "../Contexts/FirebaseContext";
import usePublicAxios from "../Hooks/usePublicAxios";
import Swal from 'sweetalert2'



const CreateTopic = () => {
    const { user } = useContext(FirebaseAuthContext)
    const [modalStatus, setModalStatus] = useState(false);
    const [text, setText] = useState('');
    // const [file,setFile] =useState('');
    const publicAxios = usePublicAxios()


    const handleSubmitTask = (event) => {
        event.preventDefault();
        const taskInfo = {
            topicName: text,
            date: getCurrentDate(),
            status: incomplete,
            ownerName: user?.displayName,
            ownerEmail: user?.email,
            ownerPhoto: user?.photoURL,
            comments: [],
            files: []
        }
        publicAxios.post('/task', taskInfo)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Successfully Topic Created !",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setModalStatus(false)
                }
            }).catch(err => {
                Swal.fire({
                    position: "top-end",
                    icon: 'error',
                    title: `${err.message}`,
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }

    return (
        <div>
            <div className=" flex justify-end m-3">
                <button onClick={() => setModalStatus(!modalStatus)} className=" btn btn-primary">Create Topic <FaPlus /></button>
            </div>
            {
                modalStatus &&
                <form onSubmit={handleSubmitTask} className="flex-col space-y-5 z-50 absolute left-0 top-0 h-screen w-full bg-[#000000c9] flex justify-center items-center">
                    <HiMiniXMark onClick={() => setModalStatus(false)} className="cursor-pointer text-white absolute left-3 top-3 text-2xl bg-red-600" />
                    <div>
                        <label className="text-white text-sm">Enter topic Name</label>
                        <input onChange={e => setText(e.target.value)} value={text} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    {/* <div className="flex flex-col">
                        <label htmlFor="" className=" text-white">Upload a file </label>
                        <input onChange={e=>setFile(e.target.files[0])} value={file} className="text-white bg-purple-600 rounded-lg max-w-xs" type="file" />
                    </div> */}
                    <button className="btn btn-primary px-7">Upload</button>
                </form>
            }
        </div>
    )
}

export default CreateTopic