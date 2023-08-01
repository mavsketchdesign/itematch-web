import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonAvatar, IonGrid, IonRow, IonCol, IonInput, IonSpinner, IonLoading } from '@ionic/react';
import { useState, useEffect } from 'react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { url } from 'inspector';
import {onlyNumbers, ValidateEmail, PasswordValidator, date_formatter, date_converter, PasswordPreview} from '../utilities/tools';
import OtpInput from 'react-otp-input';
import validator from 'validator';
import {userUpdate, requestPassword, compared_otp, change_password} from '../actions/UserAction';
import {useDispatch, useSelector} from 'react-redux';
import '../css/Join.css';
import {
    useParams,
    Link,
    useLocation
  } from "react-router-dom";



const ForgotPassword: React.FC<any> = () => {


    const [passwordtype, setPasswordType] = useState("password");
    const dispatch = useDispatch();
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [otp, setOtp] = useState('');
    const [requestOTP, setRequestOTP] = useState(false);
    const [error, setError] = useState<any>({ 
        error: false,
        message: ""
      });
    const [email, setEmail] = useState<any>({ 
       email: ""
      });
    const [password, setPassword] = useState<any>({ 
        password: "",
        rePassword: "",
        passwordToken: ""
       });

    const response = (step: number, res:any) => {
        setLoading(false);

        if(res?.status == 200) {

            if(step === 1) {
                setStep(2);
            }
            else if(step === 2) {
                setPassword({...password, passwordToken: res?.code});
                setStep(3);
            }
            else if(step ===3) {
                setStep(4);
            }
           
            
        } else {
            setError({error: true, message: res?.message});
            console.log("response from server", res)
        }
    };


    const buttonSubmit = () => {
        setLoading(true);
        // console.log("this is the data", signup);
        setError({
            ...error,
            email: email?.email== "" ?  "Required" : !ValidateEmail(email?.email) ? "invalid email" : ""
        });

        if(
            (email?.email== "" || !ValidateEmail(email?.email))
        ) {
            setTimeout(()=>{
                setLoading(false);
            }, 200);
        } else {
            const tempData = {
                email: email?.email
            }
            dispatch(requestPassword(tempData, response));
            setTimeout(()=>{
                setLoading(false);
            }, 200);
        }
    }

    const OTPsubmit = () => {
        setLoading(true);

        if(otp.toString().length < 5) {
            setError({
                ...error,
                error: true,
                message: "Please fill all OTP fields"
            });
        }
        else {
            const tempData = {
                "email":email?.email,
                "otp":otp
            }
            dispatch(compared_otp(tempData, response));
        }
    }

    const Passwordsubmit = () => {
        setError({
            ...error,
            password: password?.password== "" ?  "Required" : !PasswordValidator(password?.password) ? "didn't match criteria": "",
            rePassword: password?.rePassword== "" ?  "Required" : !PasswordValidator(password?.rePassword) ? "didn't match criteria": password?.password === password?.rePassword ? "" : "password didn't match",
        });

        if(
            (password?.password== "" || password?.rePassword== "" || !PasswordValidator(password?.password) || !PasswordValidator(password?.rePassword) || password?.password !== password?.rePassword)
        ) {
            setTimeout(()=>{
                setLoading(false);
            }, 200);
        } else {
            const tempData = {
                "code":password?.passwordToken,
                "password":password?.password
            }
            dispatch(change_password(tempData, response));
        }
    }



    const resendOTP = () => {
        setRequestOTP(true);

        // const token = localStorage.getItem("user_token");
        // console.log("this is the token", token);
        
        // dispatch(tokenResendOTP(token));

        setTimeout(()=>{
            setRequestOTP(false);
        }, 60000);
    }

    useEffect(()=>{ 
        var length = otp.toString().length;
        if(length == 5)
        {
           OTPsubmit();

        }
      }, [otp])

    

      return (
            
            <>
            <div className="main">
                <div className="join" style={{backgroundImage: `url('assets/img/bg/green_wood.jpg')`}}>

                    {
                        step == 1 &&
                        <div className="join-card verification">
                            <img className="coming-soon-poster-inner" src="assets/img/bg/coming soon.png" alt="" />
                            <div className="inner-wrapper">
                                <img className="logo" src="assets/Logo/v1.png" alt="" />

                                <div className="title">FORGOT PASSWORD</div>
                                <p className="margin-top-0 margin-bottom-20">Please enter your email address</p>
                                <div className="form-wrapper">
                                    <div className="row full-width" style={{justifyContent: "center"}}>
                                        {
                                            error?.error &&
                                            <div className="otp-message">{error?.message}</div>
                                        }
                                        <IonItem lines="none" className="form">
                                            <div className="required">{error?.email}</div>
                                            {/* <IonLabel position="floating">Email Address</IonLabel>
                                            <IonInput type="text" value={email?.email} placeholder="Enter your email address" onIonChange={ (e) => { setEmail({ ...email, email: e.detail.value! }) } } name="email"></IonInput> */}
                                            <input className="inputText" value={email?.email} onChange={ (e) => { setEmail({ ...email, email: e.target.value }) } } type="email" name="Email" placeholder="Enter your email address" />
                                        </IonItem>
                                        
                                    </div>
                                    
                                    <div className="buttons">

                                        {
                                            loading &&
                                            <IonButton className="submit" type="submit" expand="block">
                                                <IonSpinner name="circular"></IonSpinner>
                                                PROCESSING
                                            </IonButton>
                                        }
                                        {
                                            !loading &&
                                            <IonButton onClick={buttonSubmit} className="submit" type="submit" expand="block">
                                                RESET PASSWORD
                                            </IonButton>
                                        }
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    }

                    {
                        step == 2 &&
                        <div className="join-card verification">
                            <img className="coming-soon-poster-inner" src="assets/img/bg/coming soon.png" alt="" />
                            <div className="inner-wrapper">
                                <img className="logo" src="assets/Logo/v1.png" alt="" />

                                <div className="title">EMAIL VERIFICATION</div>
                                <p className="margin-top-0 margin-bottom-20">We need to verify your email address. Kindly enter the otp we sent to your email address.</p>
                                <div className="form-wrapper">

                                    <div className="row full-width" style={{justifyContent: "center"}}>
                                        {
                                            error?.error &&
                                            <div className="otp-message">{error?.message}</div>
                                        }
                                        
                                        <OtpInput
                                            value={otp}
                                            onChange={otp => {setOtp(otp);}}
                                            numInputs={5}
                                            renderSeparator={<span>-</span>}
                                            renderInput={(props) => <input {...props} />}
                                            shouldAutoFocus={true}
                                            containerStyle="otp-wrapper"
                                            inputStyle="otp-field"
                                        />
                                    </div>

                                    <div className="buttons">

                                        {
                                            loading &&
                                            <IonButton className="submit" type="submit" expand="block">
                                                <IonSpinner name="circular"></IonSpinner>
                                                VERIFYING
                                            </IonButton>
                                        }
                                        {
                                            !loading &&
                                            <IonButton onClick={()=>{}} className="submit" type="submit" expand="block">
                                                VERIFY
                                            </IonButton>
                                        }
                                    </div>
                                    {
                                        !requestOTP &&
                                        <p className="margin-top-20">It may take up to a minute to receive the otp email. Incase you didn't receive it at all, <a style={{color: "black", fontWeight: "bold", cursor: "pointer"}} onClick={()=> {resendOTP();}}>Resend OTP</a>.</p>
                                    }
                                    {
                                        requestOTP &&
                                        <IonLoading isOpen={true} message="OTP email request is processing" duration={3000} />
                                    }
                                    
                                    
                                </div>
                            </div>
                        </div>
                    }

                    {
                        step == 3 &&
                        <div className="join-card verification">
                            <img className="coming-soon-poster-inner" src="assets/img/bg/coming soon.png" alt="" />
                            <div className="inner-wrapper">
                                <img className="logo" src="assets/Logo/v1.png" alt="" />

                                <div className="title">ENTER NEW PASSWORD</div>
                                <p className="margin-top-0 margin-bottom-20">Please enter your new password.</p>
                                <div className="form-wrapper">
                                    <div className="row full-width" style={{justifyContent: "center"}}>

                                        <IonItem lines="none" className="form">
                                            <div className="required">{error?.password}</div>
                                            {/* <IonLabel position="floating">New Password</IonLabel>
                                            <IonInput type="password" value={password?.password} placeholder="New password" onIonChange={ (e) => { setPassword({ ...password, password: e.detail.value! }) } } name="email"></IonInput> 
                                            */}
                                            <input className="inputText" value={password?.password} onChange={ (e) => { setPassword({ ...password, password: e.target.value }) } } type="password" name="NewPassword" placeholder="New password" />
                                        </IonItem>

                                        <IonItem lines="none" className="form">
                                            <div className="required">{error?.rePassword}</div>
                                            {/* <IonLabel position="floating">Re-enter Password</IonLabel>
                                            <IonInput type="password" value={password?.rePassword} placeholder="Re-enter password" onIonChange={ (e) => { setPassword({ ...password, rePassword: e.detail.value! }) } } name="email"></IonInput> */}
                                            <input className="inputText" value={password?.rePassword} onChange={ (e) => { setPassword({ ...password, rePassword: e.target.value }) } } type="password" name="rePassword" placeholder="Re-enter password" />
                                        </IonItem>
                                        
                                    </div>
                                    
                                    <div className="buttons">

                                        {
                                            loading &&
                                            <IonButton className="submit" type="submit" expand="block">
                                                <IonSpinner name="circular"></IonSpinner>
                                                PROCESSING
                                            </IonButton>
                                        }
                                        {
                                            !loading &&
                                            <IonButton onClick={Passwordsubmit} className="submit" type="submit" expand="block">
                                                RESET PASSWORD
                                            </IonButton>
                                        }
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    }

                    {
                        step == 4 &&
                        <div className="join-card welcome">
                            <img className="coming-soon-poster-inner" src="assets/img/bg/coming soon.png" alt="" />
                            <div className="inner-wrapper">
                                <img className="logo" src="assets/Logo/v1.png" alt="" />

                                <div className="title">PASSWORD CHANGED</div>
                                <p className="margin-top-0 margin-bottom-20">You can now use it in your next sign in.</p>

                                <div className="form-wrapper">

                                    <div className="buttons">
                                        {/* <a style={{textDecoration: "none"}} href="https://itematch.com"> */}
                                        <Link className="mini_buttons_link" to={`/`}>
                                            <IonButton style={{letterSpacing: "9px"}} className="submit" type="submit" expand="block">
                                                SIGN IN
                                            </IonButton>
                                        </Link>
                                        {/* </a> */}
                                        
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    }
                    

                </div>
            </div>
            </>
      );
};
  
  export default ForgotPassword;