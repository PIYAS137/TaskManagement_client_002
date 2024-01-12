import { HiArrowTopRightOnSquare, HiOutlineTrash } from "react-icons/hi2";
import { complete, doing, incomplete, todo, underreview } from "../Utils/Constants";
import usePublicAxios from "../Hooks/usePublicAxios";
import useGetAllTask from "../Hooks/useGetAllTask";

const CardOptions = ({ _id }) => {
    const publicAxios = usePublicAxios();
    const [task, refetch] = useGetAllTask()


    const handleClickUpdateStatus = (text) => {
        if (text === incomplete) {
            publicAxios.patch(`/task/${_id}`, { status: incomplete })
                .then(res => {
                    if (res.data.modifiedCount > 0) {
                        refetch() // i dont know why refetch is not working here !!! Yes ! i find out ! Here i should use redux but the issue is, the reorder take the initial value at the render time and refetch update the main source not the all source as reorder data !
                    }
                })
        } else if (text === todo) {
            publicAxios.patch(`/task/${_id}`, { status: todo })
                .then(res => {
                    if (res.data.modifiedCount > 0) {
                        refetch() // i dont know why refetch is not working here !!! Yes ! i find out ! Here i should use redux but the issue is, the reorder take the initial value at the render time and refetch update the main source not the all source as reorder data !
                    }
                })
        } else if (text === doing) {
            publicAxios.patch(`/task/${_id}`, { status: doing })
                .then(res => {
                    if (res.data.modifiedCount > 0) {
                        refetch() // i dont know why refetch is not working here !!! Yes ! i find out ! Here i should use redux but the issue is, the reorder take the initial value at the render time and refetch update the main source not the all source as reorder data !
                    }
                })
        } else if (text === underreview) {
            publicAxios.patch(`/task/${_id}`, { status: underreview })
                .then(res => {
                    if (res.data.modifiedCount > 0) {
                        refetch() // i dont know why refetch is not working here !!! Yes ! i find out ! Here i should use redux but the issue is, the reorder take the initial value at the render time and refetch update the main source not the all source as reorder data !
                    }
                })
        } else if (text === complete) {
            publicAxios.patch(`/task/${_id}`, { status: complete })
                .then(res => {
                    if (res.data.modifiedCount > 0) {
                        refetch() // i dont know why refetch is not working here !!! Yes ! i find out ! Here i should use redux but the issue is, the reorder take the initial value at the render time and refetch update the main source not the all source as reorder data !
                    }
                })
        }
    }

    const handleDelete = () => {
        publicAxios.delete(`/task/${_id}`)
            .then(res => {
                if (res.data.deletedCount) {
                    refetch()
                }
            }).catch(err => {
                console.log(err.message);
            })
    }

    return (
        <div>
            <div className="dropdown dropdown-end dropdown-bottom dropdown-hover">
                <div tabIndex={0} role="button" className="btn hover:bg-transparent border-none bg-transparent m-1">...</div>
                <ul tabIndex={0} className="dropdown-content z-[50] menu p-2 shadow bg-purple-200 rounded-box w-52">
                    <li onClick={() => handleClickUpdateStatus(incomplete)}><a className=" flex justify-between"><span>Incomplete</span> <HiArrowTopRightOnSquare className="text-lg" /></a></li>
                    <li onClick={() => handleClickUpdateStatus(todo)}><a className="flex justify-between"><span>Todo</span> <HiArrowTopRightOnSquare className="text-lg" /></a></li>
                    <li onClick={() => handleClickUpdateStatus(doing)}><a className="flex justify-between"><span>Doing</span> <HiArrowTopRightOnSquare className="text-lg" /></a></li>
                    <li onClick={() => handleClickUpdateStatus(underreview)}><a className="flex justify-between"><span>Under Review</span> <HiArrowTopRightOnSquare className="text-lg" /></a></li>
                    <li onClick={() => handleClickUpdateStatus(complete)}><a className="flex justify-between"><span>Complete</span> <HiArrowTopRightOnSquare className="text-lg" /></a></li>
                    <li onClick={handleDelete}><a className="flex justify-between bg-red-100 hover:bg-red-600 hover:text-white"><span>Delete</span> <HiOutlineTrash className="text-lg" /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default CardOptions