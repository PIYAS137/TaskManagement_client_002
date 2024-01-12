import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Card from './Card';

const arr = [
    {
        id: 1,
        data: '1111111'
    },
    {
        id: 2,
        data: '2222222'
    },
    {
        id: 3,
        data: '33333333'
    },
    {
        id: 4,
        data: '44444444'
    },
    {
        id: 5,
        data: '55555555'
    },
    {
        id: 6,
        data: '666666666'
    }
]

const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? '#e7e7e7' : '#e7e7e7',
    padding: 8,
    // width: 250
})


const IncompleteSlice = () => {
    const [datas, setDatas] = useState(arr)

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
        <div className=' bg-slate-100 rounded-lg overflow-hidden'>
            <h1 className=' flex justify-around items-center text-center font-black py-1 bg-[#e7e7e7]'><span>Incomplete</span> <span className=' bg-gray-300 p-2 rounded-lg'>0</span></h1>
            <div className=' max-h-[80%] w-full overflow-y-scroll'>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId='droppable'>
                        {(provided, snapshot) => {
                            return (
                                <div className='bg-green-300' {...provided.droppableProps} ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
                                    {
                                        datas.map((one, i) => (
                                            <Card key={one.id} prop={one} i={i}/>
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

export default IncompleteSlice