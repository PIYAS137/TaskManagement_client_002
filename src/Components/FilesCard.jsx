// {
//     name: 'download (5).jpeg',
//     size: 138608,
//     type: 'image/jpeg',
//     userName: 'Piyas Mahamude Alif',
//     userEmail: 'piyas@gmail.com',
//     userImage: 'https://i.pinimg.com/564x/5e/63/df/5e63df647698ed650927e5f072051256.jpg'
//   }

const FilesCard = ({ val }) => {

    console.log(val);

    return (
        <div className=" bg-white min-w-[300px] overflow-hidden rounded-3xl">
            <div className="card min-w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <img className=" w-16 h-16 object-cover rounded-full" src={val.userImage} alt="" />
                    <h2 className="card-title">{val.name}</h2>
                    <p className="text-sm">File Size : {val.size} bytes</p>
                    <p className="text-sm">File Type : {val.type} </p>
                    <p>Uploaded By : {val.userName}</p>
                    <p>Uploaded User Email : {val.userEmail}</p>
                    
                </div>
            </div>

        </div>
    )
}

export default FilesCard