import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonAvatar, IonGrid, IonRow, IonCol, IonInput, IonSpinner } from '@ionic/react';
import { useState, useEffect } from 'react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { url } from 'inspector';
import {onlyNumbers, ValidateEmail, PasswordValidator, date_formatter, date_converter, PasswordPreview} from '../utilities/tools';
import OtpInput from 'react-otp-input';
import validator from 'validator';
import {signinUser, isSignedin, tokenResendOTP, signinSocial} from '../actions/UserAction';
import {useDispatch, useSelector} from 'react-redux';
import GoogleSignin from '../components/GoogleSignin';
import FacebookSignin from '../components/FacebookSignin';
import AppleSignin from '../components/AppleSignin';
import {
    useParams,
    Link,
    useLocation
  } from "react-router-dom";



const Signin: React.FC<any> = ({setStep}) => {
    const dispatch = useDispatch();

    // type passwordType = "password" | "text"

    // const [passwordtype, setPasswordType] = useState<passwordType>("text");
    const [passwordtype, setPasswordType] = useState<boolean>(true);
    const [loading, setLoading] = useState(false);
    const [signin, setSignin] = useState<any>({ 
        username: "",
        password: ""
      });
    const [error, setError] = useState<any>({ 
        username: "",
        password: ""
      });

    const [responseError, setResponseError] = useState<any>({ 
        error: false,
        message: ""
      });

    const response = (res:any) => {

        // this is to validate if authorization is correct
        if(res?.auth) {

            // Now, check if the email is verified
            if(res?.data?.verified) {

                // Lastly, check if the date of birth is filled
                if(res?.data?.birth && res?.data?.birth !== "") {
                    setLoading(false);
                    setError(false);
                    setResponseError({error: false, message: ""});
                    localStorage.setItem("user_token", res?.token);
                    window.location.href = "/ManageItem";

                // if DOB not filled
                } else {
                    if(!localStorage.getItem("user_token")) {
                        localStorage.setItem("user_token", res?.token);
                    }
                    setStep("FinalStep");
                }
            // if email is not yet verified
            } else {
                console.log("resp", res)
                if(!localStorage.getItem("user_token")) {
                    localStorage.setItem("user_token", res?.token);
                }
                dispatch(tokenResendOTP(""));
                setStep("emailVerify");

            }
            
        // if some error occured
        } else {
            setLoading(false);
            setError(true);
            setResponseError({error: true, message: res?.message});
        }
    };

    const autoSubmit = (e:any) => {
        if(e.keyCode == 13 && !e.shiftKey) {
            buttonSubmit();
        }
    }

    const buttonSubmit = () => {
        setLoading(true);

        setError({
            ...error,
            username: signin?.username== "" ?  "Required" : !ValidateEmail(signin?.username) ? "invalid email" : "",
            password: signin?.password== "" ?  "Required" : !PasswordValidator(signin?.password) ? "didn't match criteria": "",
        });

        if( 
            (signin?.username== "") ||
            (signin?.password== "")
        ) {
            setTimeout(()=>{
                setLoading(false);
            }, 200);
        } else {
            dispatch(signinUser(signin, response));
        }

    }

    const passwordToggle = () => {
        setPasswordType( passwordtype ? false : true );
    }

    const authSubmit = (token: any, social:any) => {
        const data = {
            token: token
        }
        dispatch(signinSocial(data, social, response));
    }

      return (
            
            <>
                    <div className="join-card verification">
                        <img className="coming-soon-poster-inner" src="assets/img/bg/coming soon.png" alt="" />
                        <div className="inner-wrapper">
                            <img className="logo" src="assets/Logo/v1.png" alt="" />

                            <div className="title">SIGN IN</div>
                            <p className="margin-top-0 margin-bottom-20">Sign in to start your experience in Itematch. </p>
                            <div className="form-wrapper">
                                <div className="row full-width" style={{justifyContent: "center"}}>
                                {
                                    responseError?.error &&
                                    <div className="otp-message">{responseError?.message}</div>
                                }
                                <div className="row full-width">
                                    <IonItem lines="none" className="form">
                                        <div className="required">{error?.username}</div>
                                        {/* <IonLabel position="floating">Email address</IonLabel>
                                        <IonInput onKeyUp={(e)=>{; autoSubmit(e);}} value={signin?.username} onIonChange={ (e) => {setSignin({ ...signin, username: e.detail.value! })} } name="email" placeholder="Email address"></IonInput> */}
                                        <input onKeyUp={(e)=>{; autoSubmit(e);}} className="inputText" value={signin?.username} onChange={ (e) => {setSignin({ ...signin, username: e.target.value })} } type="email" name="Email" placeholder="Email Address" />
                                    </IonItem>
                                </div>
                                <div className="row full-width">
                                    <IonItem lines="none" className="form">
                                        <div className="required req_pass">{error?.password}</div>
                                        {/* <IonLabel position="floating">Password</IonLabel>
                                        <IonInput onKeyUp={(e)=>{; autoSubmit(e);}} value={signin?.password} onIonChange={ (e) => {setSignin({ ...signin, password: e.detail.value! })} } type={passwordtype ? "password" : "text"} name="password" placeholder="Password"></IonInput> */}
                                        <input onKeyUp={(e)=>{; autoSubmit(e);}} className="inputText" value={signin?.password} onChange={ (e) => {setSignin({ ...signin, password: e.target.value })} } type={passwordtype ? "password" : "text"} name="Password" placeholder="Password" />
                                        <div className="viewPassword" onClick={()=>{ passwordToggle(); }}>
                                            <img className="passwordEye" src={`assets/img/icons/${passwordtype ? "p-view.png" : "p-hide.png"}`} alt="" />
                                        </div>
                                    </IonItem>
                                </div>
                                    
                                </div>
                                <div className="buttons margin-top-10">

                                    {
                                        loading &&
                                        <IonButton className="submit" type="button" expand="block">
                                            <IonSpinner name="circular"></IonSpinner>
                                            PROCESSING
                                        </IonButton>
                                    }
                                    {
                                        !loading &&
                                        <IonButton type="submit" onClick={buttonSubmit} className="submit" expand="block">
                                            SIGN IN
                                        </IonButton>
                                    }
                                </div>

                                <div className="divider">
                                <hr />
                                <div className="text">OR CONTINUE WTIH:</div>
                                <hr />
                            </div>

                            <div className="row column-3">
                                <div className="buttons">
                                    {/* <IonButton className="social apple" type="submit" expand="block"><img src="assets/img/logo/Apple_logo_black.png" alt="" />APPLE</IonButton> */}
                                    <AppleSignin
                                        submitAuth = {authSubmit}
                                    />
                                </div>
                                <div className="buttons">
                                    <GoogleSignin
                                        submitAuth = {authSubmit}
                                        Error = {setResponseError}
                                    />
                                    {/* <IonButton className="social google" type="submit" expand="block"><img src="assets/img/logo/google.png" alt="" />GOOGLE</IonButton> */}
                                    
                                </div>
                                <div className="buttons">
                                    <FacebookSignin
                                        submitAuth = {authSubmit}
                                    />
                                    {/* <IonButton className="social facebook" type="submit" expand="block"><img src="assets/img/logo/fb.jpeg" alt="" />FACEBOOK</IonButton> */}
                                </div>
                            </div>

                                <p className="margin-top-20">Don't have an account yet, <a style={{color: "black", fontWeight: "bold", cursor: "pointer"}} onClick={()=> {setStep("initial");}}>Create now</a>. </p>
                                <p><a style={{color: "black", fontWeight: "bold", cursor: "pointer"}} onClick={()=> {window.location.href = "/ForgotPassword";}}>Forgot Password</a></p>
                                
                            </div>
                        </div>
                    </div>
            </>
      );
};
  
  export default Signin;