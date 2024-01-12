import { useContext } from "react";
import { useForm } from "react-hook-form"
import { FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseAuthContext } from "../../Contexts/FirebaseContext";
import Swal from "sweetalert2";

const LoginPage = () => {

  const { Firebase_Login_User, Firebase_Google_Login} = useContext(FirebaseAuthContext);
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data);
    Firebase_Login_User(data.email,data.pass)
    .then(res=>{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully Account Create !",
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/')
    }).catch(err=>{
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `${err.message}`,
        showConfirmButton: false,
        timer: 1500
      });
    })
  }
  
  // Firebase login
  const handleGoogleLogin = () =>{
    Firebase_Google_Login()
    .then(res=>{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully Account Create !",
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/')
    }).catch(err=>{
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `${err.message}`,
        showConfirmButton: false,
        timer: 1500
      });
    })
  }





  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card-body max-w-xl mx-auto">
      <h1 className=" text-3xl text-center font-bold">Login Here</h1>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">Email</span>
        </label>
        <input {...register("email", { required: true })} placeholder="Enter your email" className="input input-bordered bg-gray-100"/>
        {/* errors will return when field validation fails  */}
        {errors.email && <span className=" text-red-500">This field is required</span>}
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">Password</span>
        </label>
        <input {...register("pass", { required: true })} placeholder="Enter your password" className="input input-bordered bg-gray-100"/>
      {/* errors will return when field validation fails  */}
      {errors.pass && <span className=" text-red-500">This field is required</span>}
        <label className="label ">
          <p>Dont have an account? <Link className=" font-semibold" to={'/signup'}>Go to Signup</Link></p>
        </label>
      </div>
      <div className="form-control ">
        <button className="btn btn-primary">Login</button>
        <button onClick={handleGoogleLogin} className="btn btn-success mt-3 text-white"><FaGoogle/> Login With Google</button>
      </div>
    </form>
  )
}

export default LoginPage