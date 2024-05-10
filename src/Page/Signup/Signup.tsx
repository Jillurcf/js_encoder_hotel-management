import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";


import UseAuth from "../../Hooks/UseAuth";
import axios from "axios";
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram,  } from "react-icons/fa";
import Swal from 'sweetalert2';

const Signup: React.FC<any> = () => {
   
            



  const location = useLocation();
  const navigate = useNavigate();
  const { createUser, updateUserProfile, user } = UseAuth();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const role = "user";
    const status = 'varified'
const userInfo = {name, photo, email, password, role, status}
console.log(userInfo);
    console.log(name, photo, email, password);
    if (password.length < 6) {
      new Swal("The password is less than 6 characters");
    }

    if (!/[A-Z]/.test(password)) {
      return new Swal(
        "Password should have one capital letter and one special character"
      );
    } else if (!/[!@#$%^&*]/.test(password)) {
      return new Swal(
        "Password should have one capital letter and one special character"
      );
    }

  //   createUser(email, password)
  //   .then((result) => {
  //     console.log(result);
  //  })
  //   .then((error) => {
  //     console.log(error);
  //   });

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const loggedInuser = result.user;
        console.log(loggedInuser);
        const user = { email };
        // updateUserProfile(user.name, user.photoURL)
        // .then(() => {
        //   axios.post('/api/v1/user', userInfo ).then(res => {
        //     if(res.data){
        //       Swal.fire({
        //         position: "top-end",
        //         icon: "success",
        //         title: "User creatd successfully",
        //         showConfirmButton: false,
        //         timer: 1500,
        //       });
        //       navigate("/");
        //     }
        //   })
        // })
        axios.post("https://money-balance-server.vercel.app/api/v1/jwt", user, {
          withCredentials: true,
        });

        navigate(location?.state ? location?.state : '/')

        updateProfile(result.user, {
          displayName: name,
          photoURL: "https://i.ibb.co/BKnRMYC/Profile-Jillur.png",
        })
          .then(() => console.log("profile updated"))
          .catch();

        const createdAt = result.user?.metadata.creationTime;

        const duser = { email, password, createdAt: createdAt };
        fetch("https://money-balance-server.vercel.app/api/v1/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(duser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              console.log(data);
              console.log("user added to the database");
            }
          });
      })
      .catch((error) => {
        console.error(error);
      });

    e.target.reset();

    // const user = { email, createdAt: createdAt };

    new Swal("Registration SuccessFull");
    navigate(location?.state ? location.state : "/");
  };

  return (
    <div className="hero min-h-screen max-w-screen-xl mx-auto">
     
      <div className="hero-content  text-blue-950">
        <div className="flex">
          {/* register image part start */}
          <div
            className="hero"
            style={{
              backgroundImage: 'url(https://i.ibb.co/yBS2sF6/register-Img.jpg)'
            }}

          >
            
            <div className="hero-overlay bg-opacity-90"></div>
            <div className="hero-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold leading-tight">Welcome to <br /> <span className="text-blue-600">Money Balance</span></h1>
                <p className="mb-5 text-blue-300">
                A daily money balance refers to the amount of money you have at the end of each day, taking into account both income and expenses. It is a snapshot of your financial health on a daily basis, helping you track your spending, monitor your budget, and make informed decisions about your finances.
                </p>
               <div className="flex gap-4 text-blue-300 mt-48">
                <FaFacebook />
                <FaYoutube />
                <FaLinkedin />
                <FaInstagram />
               </div>
              </div>
            </div>
          </div>
         
          <div className=" card flex-shrink-0 shadow-2xl text-blue-950">
            <form onSubmit={handleRegister} className="card-body">
              <h1 className="text-blue-900 font-bold">Please Register Here</h1>
              <div className="form-control">
                <label className="">
                  <span className="">Name</span>{" "}
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="border rounded-md p-2 w-full"
                    required
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="file"
                  name="photo"
                  placeholder="Yout photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <label className="">
                  <input
                    type="checkbox"
                    name=""
                    placeholder=""
                    className=""
                    required
                  />
                  <span className="px-2">
                    I understand agree to the all user agreement and{" "}
                    <a href="">privacy policy</a>
                  </span>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-blue-600 text-white">Register</button>
              </div>
              <p className=" mb-4">
                Already have an account? Please
                <Link
                  className="ml-2 underline text-blue-700 font-semibold"
                  to="/signin"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Signup;