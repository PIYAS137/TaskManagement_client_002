import { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Card from './Card';
import { todo, underreview } from '../Utils/Constants';



const getListStyle = (isDraggingOver) => ({
    background: '#e7e7e7',
    padding: 8,
    // width: 250
})



const UnderReview = ({tasks}) => {
    const [datas, setDatas] = useState(tasks)

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    }

    const onDragEnd = (result) => {
        console.log('onDragEnd result:', result);
        if (!result.destination) return;

        const reorderedItems = reorder(datas, result.source.index, result.destination.index);
        console.log('Reordered items:', reorderedItems);

        setDatas(reorderedItems);
        console.log('Updated datas state:', datas);
    };




    return (
        <div className=' bg-slate-100 rounded-lg overflow-hidden pb-10 h-[70%]'>
            <h1 className=' flex justify-around items-center text-center font-black py-1 bg-[#e7e7e7]'><span>Under Review</span> <span className=' bg-gray-300 p-2 rounded-lg'>0</span></h1>
            <div className='h-full w-full overflow-y-scroll'>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId='droppable'>
                        {(provided, snapshot) => {
                            return (
                                <div className='bg-green-300' {...provided.droppableProps} ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
                                    {
                                        datas?.filter(one => one.status === underreview).map((one, i) => (
                                            <Card key={one._id} prop={one} i={i} />
                                        ))
                                    }
                                </div>
                            )
                        }}
                    </Droppable>
                </DragDropContext>
            </div>
        </div>
    )
}

export default UnderReview