import { Draggable } from "react-beautiful-dnd"

import { FaBuffer } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa6";
import { FaRegComments } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import CardOptions from "./CardOptions";


const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: 'none',
    padding: 16,
    margin: '0 0 8px 0',
    background: isDragging ? 'pink' : '#ffffff',
    ...draggableStyle
})


const Card = ({ prop, i }) => {
    return (
        <Draggable key={i} draggableId={prop?._id.toString()} index={i}>
            {(provided, snapshot) => (
                <div className='rounded-lg' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}>
                    <div className=" flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <img className=" w-8 aspect-square object-cover rounded-full" src="https://i.pinimg.com/564x/30/d3/dc/30d3dcd655b1b5dec38c76787c3d323b.jpg" alt="" />
                            <h1>Client Name</h1>
                        </div>


                        <CardOptions/>



                    </div>
                    <div className=" flex justify-between py-2">
                        <div className=" flex items-center space-x-1">
                            <FaBuffer />
                            <p>{prop.topicName} : {prop.status}</p>
                        </div>
                        <div className=" flex items-center">
                            <button className=" btn btn-sm btn-primary"><FaClipboardList /> view Task</button>
                        </div>
                    </div>
                    <div className=" flex items-center justify-between">
                        <div className=" flex">
                            <img className=" w-8 aspect-square object-cover rounded-full" src="https://i.pinimg.com/564x/30/d3/dc/30d3dcd655b1b5dec38c76787c3d323b.jpg" alt="" />
                            <img className=" w-8 aspect-square object-cover rounded-full" src="https://i.pinimg.com/564x/30/d3/dc/30d3dcd655b1b5dec38c76787c3d323b.jpg" alt="" />
                            <h1 className=" font-semibold w-8 aspect-square bg-slate-200 rounded-full flex items-center justify-center">12+</h1>
                        </div>
                        <div className=" flex space-x-3">
                            <p className=" flex items-center"><FaRegComments /> 15</p>
                            <p className=" flex items-center"><FaLink /> 15</p>
                            <p className=" flex items-center"><FaCalendarDays /> 12-18-2024</p>
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    )
}

export default Card