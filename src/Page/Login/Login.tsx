import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';
import UseAuth from '../../Hooks/UseAuth';
import axios from 'axios';
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa';



const SignIn: React.FC<any> = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {signIn, SignInWithGoogle } = UseAuth();
 
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string | null>(null);

  const handleSignin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

    if (!email || !password) {
      Swal.fire('Please provide email and password');
      return;
    }

    signIn(email, password)
      .then((res) => {
        if (res.user) {
                navigate(location?.state ? location.state : '/');
              }
        // const user = { email };
        // axios
        //   .post('https://loclahost/5000/api/v1/jwt', user, {
        //     withCredentials: true,
        //   })
        //   .then((res) => {
        //     if (res.data.success) {
        //       navigate(location?.state ? location.state : '/');
        //     }
        //   });

        event.target.reset();
        setUserEmail(email);
        setUserPassword(password);
        Swal.fire('Login Success');
      })
      .catch((error) => {
        Swal.fire('Error', error.message, 'error');
      });
  };

  const handleGoogleSignIn = () => {
    
    SignInWithGoogle().then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : '/');
      }).catch((error) => {
        console.error(error);
        Swal.fire('Error', error.message, 'error');
    }
    // signinWithGoogle()
    //   .then((result) => {
    //     console.log(result.user);
    //     navigate(location?.state ? location.state : '/');
    //   })
      // .catch((error) => {
      //   console.error(error);
      //   Swal.fire('Error', error.message, 'error');
      );
  };

  return (
    <div className="h-screen items-center flex">
      <div className="hero items-center">
        <div className="flex justify-between">
          <div
            className="hero w-4/6"
            style={{
              backgroundImage: 'url(https://i.ibb.co/XyWpP16/signin-Img.jpg)',
            }}
          >
            <div className="hero-overlay bg-opacity-90"></div>
            <div className="hero-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold leading-tight">
                  Welcome to <br />{' '}
                  <span className="text-pink-400">Hotel Management</span>
                </h1>
                <p className="mb-5 text-pink-300">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsam cumque rerum velit ut iusto veritatis nostrum odio animi
                  minus natus vitae illo sed temporibus dicta eaque maiores
                  quaerat, aspernatur est?
                </p>
                <div className="flex gap-4 text-pink-300 mt-24">
                  <FaFacebook />
                  <FaYoutube />
                  <FaLinkedin />
                  <FaInstagram />
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-2xl w-96">
            <form onSubmit={handleSignin} className="card-body">
              <h1 className="text-pink-400 font-bold">Please Signin Here</h1>
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
                <p
                  onClick={handleGoogleSignIn}
                  className="mb-4 underline cursor-pointer"
                >
                  Sign In with{' '}
                  <span className="text-yellow-600">Google</span>{' '}
                  <span>
                    {' '}
                    <Link
                      className="inline-block ml-2 underline text-pink-400 font-semibold"
                      to="#"
                    >
                      <FcGoogle className="-ml-2" />
                    </Link>
                  </span>
                </p>
                <button className="text-white font-bold btn bg-pink-400">
                  Sign In
                </button>
              </div>
              <p className="mb-4">
                Do not have an account? Please
                <Link
                  className="ml-2 underline text-pink-400 font-semibold"
                  to="/signup"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
