import { useContext } from "react";
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { FirebaseAuthContext } from "../../Contexts/FirebaseContext";
import Swal from 'sweetalert2'


const SignUpPage = () => {
  const { Firebase_SignUp_User, Firebase_Update_User } = useContext(FirebaseAuthContext);
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    Firebase_SignUp_User(data.email, data.pass)
      .then(res => {
        console.log(res);
        Firebase_Update_User(data.name, data.photo)
          .then(res => {
            console.log(res);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Successfully Account Create !",
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/')
          })
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
      <h1 className=" text-3xl text-center font-bold">Sign Up Here</h1>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">Name</span>
        </label>
        <input {...register("name", { required: true })} placeholder="Enter your name" className="input input-bordered bg-gray-100" />
        {/* errors will return when field validation fails  */}
        {errors.name && <span className=" text-red-500">This field is required</span>}
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">Phoro URL</span>
        </label>
        <input {...register("photo", { required: true })} placeholder="Enter your photo url" className="input input-bordered bg-gray-100" />
        {/* errors will return when field validation fails  */}
        {errors.photo && <span className=" text-red-500">This field is required</span>}
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">Email</span>
        </label>
        <input {...register("email", { required: true })} placeholder="Enter your email" className="input input-bordered bg-gray-100" />
        {/* errors will return when field validation fails  */}
        {errors.email && <span className=" text-red-500">This field is required</span>}
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">Password</span>
        </label>
        <input {...register("pass", { required: true })} placeholder="Enter your password" className="input input-bordered bg-gray-100" />
        {/* errors will return when field validation fails  */}
        {errors.pass && <span className=" text-red-500">This field is required</span>}
        <label className="label ">
          <p>Already have an account?<Link className=" font-semibold hover:text-blue-300" to={'/login'}> Go Login</Link> </p>
        </label>
      </div>
      <div className="form-control ">
        <button className="btn btn-primary">Sign Up</button>
      </div>
    </form>
  )
}

export default SignUpPage