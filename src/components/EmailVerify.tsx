import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonAvatar, IonGrid, IonRow, IonCol, IonInput, IonSpinner } from '@ionic/react';
import { useState, useEffect } from 'react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { url } from 'inspector';
import {onlyNumbers, ValidateEmail, PasswordValidator} from '../utilities/tools';
import OtpInput from 'react-otp-input';
import {validateEmail} from '../actions/UserAction';
import {useDispatch, useSelector} from 'react-redux';



const EmailVerify: React.FC<any> = ({signup, setStep}) => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [otp, setOtp] = useState('');

    const response = (res:any) => {
        if(res?.status == 200) {

            setLoading(false);
            setError(false);
            setStep("SMSverify");
            
        } else {
            setLoading(false);
            setError(true);
            console.log("response from server", res)
        }
    }

    const buttonEmailVerify = () => {
        const data = {
            "user_id": signup?.user_id,
            "otp": String(otp)
        }
        dispatch(validateEmail(data, response));
    }

    useEffect(()=>{ 
        var length = otp.toString().length;
        if(length == 5)
        {
           setLoading(true);
           buttonEmailVerify();
        }
      }, [otp])
    // const autoSubmit = () => {
    //     console.log("this is the data", otp); 
    //     var length = otp.toString().length;
    //     console.log("total number inputed is:", length);
    // }

      return (
            
            <>
                <div className="join-card verification">
                    <img className="coming-soon-poster-inner" src="assets/img/bg/coming soon.png" alt="" />
                    <div className="inner-wrapper">
                        <img className="logo" src="assets/Logo/v1.png" alt="" />

                        <div className="title">EMAIL VERIFICATION</div>
                        <p className="margin-top-0 margin-bottom-20">Almost done, we need to verify your email address. Kindly enter the otp we sent to your email address.</p>
                        <div className="form-wrapper">

                            <div className="row full-width" style={{justifyContent: "center"}}>
                                {
                                    error &&
                                    <div className="otp-message">Incorrect OTP</div>
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
                                    <IonButton onClick={buttonEmailVerify} className="submit" type="submit" expand="block">
                                        CONTINUE
                                    </IonButton>
                                }
                            </div>
                            
                        </div>
                    </div>
                </div>
            </>
      );
};
  
  export default EmailVerify;