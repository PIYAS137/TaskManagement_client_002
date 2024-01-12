import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { FirebaseAuthContext } from "../Contexts/FirebaseContext"


const PrivateRoutes = ({children}) => {

    const {loader,user} = useContext(FirebaseAuthContext);

    if(loader){
        return(
            <div className=" flex justify-center items-center h-screen w-full">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
    }

  if(user?.email){
    return children
  }


  return <Navigate to={'/login'}/>
}

export default PrivateRoutes