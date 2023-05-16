import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonAvatar, IonGrid, IonRow, IonCol, IonInput, IonSpinner } from '@ionic/react';
import { useState, useEffect } from 'react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { url } from 'inspector';
import {onlyNumbers, ValidateEmail, PasswordValidator, date_formatter, date_converter} from '../utilities/tools';
import OtpInput from 'react-otp-input';
import validator from 'validator';
import {userUpdate} from '../actions/UserAction';
import {useDispatch, useSelector} from 'react-redux';



const FinalStep: React.FC<any> = ({signup, setSignup, setStep, otpNum}) => {


    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>({ 
        dob: ""
      });
    const [otp, setOtp] = useState('');

    const response = (res:any) => {
        if(res?.status == 200) {
            
            setError(false);
            setStep("SuccessRegister");
            
        } else {
            setError(true);
            console.log("response from server", res)
        }
    };
    const buttonSubmit = () => {
        setLoading(true);
        console.log("this is the data", signup);

        setError({
            ...error,
            dob: signup?.dob== "" ?  "Required" : !validator.isDate(signup?.dob) ? "Date not valid" : "",
        });

        if( 
            signup?.dob== ""
        ) {
            setTimeout(()=>{
                setLoading(false);
            }, 200);
        } else {
            setTimeout(()=>{
                const data = {
                    "user_id": signup?.user_id,
                    "birth": new Date(signup?.dob),
                    "welcome": true
                }
                dispatch(userUpdate(data, response));
            }, 500);
        }

        // setTimeout(()=>{
        //     setLoading(false);
        // }, 1000);

    }

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

                        <div className="title">ALMOST COMPLETE</div>
                        <p className="margin-top-0 margin-bottom-20">Kindly share with us your birthday. We need this to verify if you are eligble to use the platform.</p>
                        <div className="form-wrapper">
                            <div className="row full-width" style={{justifyContent: "center"}}>

                                <IonItem lines="none" className="form">
                                    <div className="required">{error?.dob}</div>
                                    <IonLabel position="floating">Date of Birth</IonLabel>
                                    <IonInput type="date" value={signup?.dob} placeholder="Date of Birth" onIonChange={ (e) => { setSignup({ ...signup, dob: e.detail.value! }) } } name="startDate"></IonInput>
                                </IonItem>
                                
                            </div>
                            <p className="margin-top-20">By clicking the <b>AGREE & SUBMIT</b>, I agree to Itematch's <a target="_blank" href="https://itematch.com/terms">Terms of Service</a> and acknowledge the <a target="_blank" href="https://itematch.com/privacy/">Privacy Policy</a>. </p>
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
                                        AGREE & SUBMIT
                                    </IonButton>
                                }
                            </div>
                            
                        </div>
                    </div>
                </div>
            </>
      );
};
  
  export default FinalStep;