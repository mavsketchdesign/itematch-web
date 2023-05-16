import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonAvatar, IonGrid, IonRow, IonCol, IonInput, IonSpinner } from '@ionic/react';
import { useState, useEffect } from 'react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { url } from 'inspector';
import {onlyNumbers, ValidateEmail, PasswordValidator, date_formatter, date_converter} from '../utilities/tools';
import OtpInput from 'react-otp-input';
import validator from 'validator';
import {signinUser} from '../actions/UserAction';
import {useDispatch, useSelector} from 'react-redux';



const Signin: React.FC<any> = ({setStep}) => {


    const dispatch = useDispatch();
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
        if(res?.status == 200) {
            setLoading(false);
            setError(false);
            setResponseError({error: false, message: ""});
            // setStep("SuccessRegister");
            
        } else {
            setLoading(false);
            setError(true);
            setResponseError({error: true, message: res?.message});
            console.log("response from server", res)
        }
    };
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
                                    <div className="required">{error?.email}</div>
                                    <IonLabel position="floating">Email address</IonLabel>
                                    <IonInput value={signin?.username} onIonChange={ (e) => {setSignin({ ...signin, username: e.detail.value! })} } name="email" placeholder="Email address"></IonInput>
                                </IonItem>
                            </div>
                            <div className="row full-width">
                                <IonItem lines="none" className="form">
                                    <div className="required">{error?.password}</div>
                                    <IonLabel position="floating">Password</IonLabel>
                                    <IonInput value={signin?.password} onIonChange={ (e) => {setSignin({ ...signin, password: e.detail.value! })} } type="password" name="password" placeholder="Password"></IonInput>
                                </IonItem>
                            </div>
                                
                            </div>
                            <div className="buttons margin-top-10">

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
                                        SIGN IN
                                    </IonButton>
                                }
                            </div>
                            <p className="margin-top-20">Don't have an account yet, <a style={{color: "black", fontWeight: "bold", cursor: "pointer"}} onClick={()=> {setStep("initial");}}>Create now</a>. </p>
                            
                        </div>
                    </div>
                </div>
            </>
      );
};
  
  export default Signin;