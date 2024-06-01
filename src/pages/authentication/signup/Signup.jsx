import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/axios secure/useAxiosSecure";
import useAuth from "../../../hooks/use auth/useAuth";
// import { Helmet } from "react-helmet-async";

const Signup = () => {
  const axiosSecure = useAxiosSecure()
  const {createUser, updateUserProfile} = useAuth()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    const formData ={
      ...data,
      status: "active"
    } 

    console.log(formData);
    createUser(formData.email, formData.password)
    .then(() => {
      updateUserProfile(formData.name, formData.photourl)
      .then(result => {
        console.log(result)
        navigate("/")
      })
    })
    .catch(error =>{
      console.log(error.message)
    })    
  };

  return (
    <div className="grid place-items-center pt-16">
      {/* <Helmet>
      <title>Sign up | Bistro Boss</title>
    </Helmet> */}
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              {...register("name", { required: true })}
              placeholder="name"
              className="input input-bordered"
            />
            {errors.name && (
              <span className="text-red-400">Name field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">PhotoUrl</span>
            </label>
            {/* TODO: change type into url */}
            <input
              type="text"
              name="photourl"
              {...register("photourl", { required: true })}
              placeholder="photo url"
              className="input input-bordered"
            />
            {errors.photourl && (
              <span className="text-red-400">Name field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
              placeholder="email"
              className="input input-bordered"
            />
            {errors.email && (
              <span className="text-red-400">Email field is required</span>
            )}
          </div>

          <div className="from-control">
            <label className="label">
              <span className="label-text">Blood Group+</span>
            </label>
            <select defaultValue="default" {...register("bloodGroup", { required: true })}  className=" w-full input input-bordered" >
            <option   disabled value="default" >
                select your blood type
            </option>
              <option value="o+" >O+</option>
              <option value="o-" >O-</option>
              <option value="a+" >A+</option>
              <option value="a-" >A-</option>
              <option value="b+" >B+</option>
              <option value="b-" >B-</option>
              <option value="ab+" >AB+</option>
              <option value="ab-" >AB-</option>
            </select>
          </div>

          <div className="from-control">
            <label className="label">
              <span className="label-text">District:</span>
            </label>
            <select defaultValue="default" {...register("district", { required: true })}  className=" w-full input input-bordered" >
            <option   disabled value="default" >
                select your district
            </option>
              <option value="bagerhat" >Bagerhat</option>
              <option value="kushtia" >Kushtia</option>
            </select>
          </div>

          <div className="from-control">
            <label className="label">
              <span className="label-text">Blood Group+</span>
            </label>
            <select defaultValue="default" {...register("upazilla", { required: true })}  className=" w-full input input-bordered" >
            <option   disabled value="default" >
                select your upazila
            </option>
              <option value="bagerhatSadar" >Bagerhat Sadar</option>
              <option value="chitalmari" >Chitalmari</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
              })}
              placeholder="password"
              className="input input-bordered"
            />
            {errors.password?.type === "minLength" && (
              <p className="text-red-400">password must be 7 characters</p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-400">
                password must less than 20 characters
              </p>
            )}
            <label className="label"></label>
          </div>

          {/* <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input type="text" name="captcha" ref={captchaRef} placeholder="enter the captcha" className=" input input-bordered" required />
          <label className="label">
          </label>
          <button   onClick={handleCapchaValidate} className="btn btn-xs btn-outline">Validate</button>
        </div> */}

          <p>
            create a new account{" "}
            <Link to="/login" className="text-blue-500 underline">
              here
            </Link>{" "}
          </p>
          <div className="form-control mt-6">
            <input type="submit" className="btn btn-primary" value="Sign Up" />
          </div>
        </form>
        <button className="btn">
          {" "}
          <Link to="/">Go Home</Link>{" "}
        </button>
      </div>
    </div>
  );
};

export default Signup;
