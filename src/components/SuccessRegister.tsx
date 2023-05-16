import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonAvatar, IonGrid, IonRow, IonCol, IonInput, IonSpinner } from '@ionic/react';
import { useState, useEffect } from 'react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { url } from 'inspector';
import {onlyNumbers, ValidateEmail, PasswordValidator} from '../utilities/tools';
import OtpInput from 'react-otp-input';
import {
    useParams,
    Link,
    useLocation
  } from "react-router-dom";



const SuccessRegister: React.FC<any> = ({signup, setSignup, setStep, otpNum}) => {



    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [otp, setOtp] = useState('');

    const buttonSMSVerify = () => {
        console.log("this is the data", otp);

        setTimeout(()=>{
            setLoading(false);
        }, 1000);

        if(parseInt(otpNum)===parseInt(otp))
        {
            setError(false);
            setStep("FinalStep");
        }
        else
        {
            setError(true);
        }
    }

    useEffect(()=>{ 
        var length = otp.toString().length;
        if(length == 4)
        {
           setLoading(true);
           buttonSMSVerify();
        }
      }, [otp])
    // const autoSubmit = () => {
    //     console.log("this is the data", otp); 
    //     var length = otp.toString().length;
    //     console.log("total number inputed is:", length);
    // }

      return (
            
            <>
                <div className="join-card welcome">
                    <img className="coming-soon-poster-inner" src="assets/img/bg/coming soon.png" alt="" />
                    <div className="inner-wrapper">
                        <img className="logo" src="assets/Logo/v1.png" alt="" />

                        <div className="title">THANK YOU</div>
                        <p className="margin-top-0 margin-bottom-20">We welcome you to Itematch. We've sent you an email for the next easy step to make your first awesome experience at Itematch!</p>

                        <p className="margin-top-0 margin-bottom-20">Your one step closer to becoming an early bird owner. Avail it now!</p>
                        <div className="form-wrapper">

                            <div className="buttons">
                                {/* <a style={{textDecoration: "none"}} href="https://itematch.com"> */}
                                <Link className="mini_buttons_link" to={`CreateListing/`}>
                                    <IonButton style={{letterSpacing: "9px"}} className="submit" type="submit" expand="block">
                                        BE AN EARLY BIRD
                                    </IonButton>
                                </Link>
                                {/* </a> */}
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </>
      );
};
  
  export default SuccessRegister;