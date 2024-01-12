import CompleteSlice from "../../Components/CompleteSlice";
import CreateTopic from "../../Components/CreateTopic";
import DoingSlice from "../../Components/DoingSlice";
import IncompleteSlice from "../../Components/IncompleteSlice"
import TodoSlice from "../../Components/TodoSlice";
import UnderReview from "../../Components/UnderReview";
import useGetAllTask from "../../Hooks/useGetAllTask";


const TasksPage = () => {

    const [tasks, refetch] = useGetAllTask();

    return (
        <div>
            <CreateTopic />
            {
                tasks && // here is an issue, tasks array data need some time to come, and the reorder (dnd func) is depend on it, so i cant send this data as undefined !
                <div className=" grid grid-cols-5 gap-5 mt-3 ">
                    <IncompleteSlice tasks={tasks} />
                    <TodoSlice tasks={tasks}/>
                    <DoingSlice tasks={tasks}/>
                    <UnderReview tasks={tasks}/>
                    <CompleteSlice tasks={tasks}/>
                </div>
            }
        </div>
    )
}

export default TasksPage