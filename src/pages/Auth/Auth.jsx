import React, { useState,useEffect } from "react";
import "./Auth.css";
import Logo from "../../assets/img/logo2.png";
import { logIn, signUp } from "../../actions/AuthActions.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import backgroundLoginDesktop from '../../assets/login/backgroundLoginDesktop.png';
import backgroundLoginMobile from '../../assets/login/backgroundLoginMobile.png';
import backgroundRegisterDesktop from '../../assets/register/backgroundRegisterDesktop.png';

const Auth = () => {

  const initialState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  };
  const loading = useSelector((state) => state.authReducer.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);

  const [data, setData] = useState(initialState);

  const [confirmPass, setConfirmPass] = useState(true);

  // const dispatch = useDispatch()

  // Reset Form
  const resetForm = () => {
    setData(initialState);
    setConfirmPass(confirmPass);
  };

  // handle Change in input
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Form Submission
  const handleSubmit = (e) => {
    setConfirmPass(true);
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data, navigate))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data, navigate));
    }
  };
  // Media Query
  const mediaMatch = window.matchMedia('(max-width: 767px)');
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = e => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });

  
  const styles = {
    container: isRowBased => ({
      backgroundImage: isRowBased ? !isSignUp ? `url(${backgroundLoginMobile})` : '' : ''
      })
    }


  return (
    <div className="Auth" style={{
    }}>
      {/* left side */}

      <div className="BackgroundLeft-login" style={{backgroundImage: `url(${isSignUp ? backgroundRegisterDesktop : backgroundLoginDesktop})` }}>
      </div>

      {/* right form side */}
      
      <div className="bgRegisterMogile" style={{display: isSignUp ?  "flex": "none", 
        backgroundImage: `url(${isSignUp ? backgroundRegisterDesktop : ''})`,

        }}>
      </div>
      <div className={`BackgroundRight-login ${!isSignUp ? 'register' : '' }`} style={styles.container(matches)}>
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h1 className="autTitleh1">
            {isSignUp ? "Descubre lo nuevo" : ""}
          </h1>
          <h3 className="authTitle">
            {isSignUp ? "Únete hoy" : "Iniciar Sesión"}
          </h3>
          {isSignUp && (
            <div className="authInput">
              <input
                required
                type="text"
                placeholder="Ingrese su Nombre"
                className="infoInput"
                name="firstname"
                value={data.firstname}
                onChange={handleChange}
              />
              <input
                required
                type="text"
                placeholder="Ingrese su Apellido"
                className="infoInput"
                name="lastname"
                value={data.lastname}
                onChange={handleChange}
              />
            </div>
          )}

          <div className="authInput"> 
            <input
              required
              type="text"
              placeholder="Usuario"
              className="infoInput"
              name="username"
              value={data.username}
              onChange={handleChange}
            />
          </div>
          <div className="authInput">
            <input
              required
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
            {isSignUp && (
              <input 
                required
                type="password"
                className="infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            )}
          </div>

          <span
            style={{
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
              display: confirmPass ? "none" : "block",
            }}
          >
            *Confirm password is not same
          </span>
          <div className="cta-Wrapper">
            <button
              className="button infoButton"
              type="Submit"
              disabled={loading}
            >
              {loading ? "Loading..." : isSignUp ? "Registrate" : "Iniciar Sesión"}
            </button>
            <span className="text-muted"
              style={{
                fontSize: "12px",
                cursor: "pointer",
                color: isSignUp ? "black" : ""
              }}
              onClick={() => {
                resetForm();
                setIsSignUp((prev) => !prev);
              }}
            >
              {isSignUp
                ? "Iniciar Sesión"
                : "Sign up"}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
