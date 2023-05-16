import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonSpinner } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import '../css/Join.css';
import { useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Step1 from '../components/Step1';
import EmailVerify from '../components/EmailVerify';
import SMSVerify from '../components/SMSVerify';
import FinalStep from '../components/FinalStep';
import SuccessRegister from '../components/SuccessRegister';
import Login from '../components/Login';
import {RootStore} from '../store';
import { Z_ASCII } from 'zlib';
import {
  useParams,
  Link,
  useLocation
} from "react-router-dom";

const Join: React.FC = () => {
  let location = useLocation();

  const locationChecker = () => {
    return (location?.pathname == "/" || location?.pathname == "/join") ?
    true :
    false;
  }

  useEffect(() => {

    // execute only if this is the current page
    if(locationChecker()) {
      console.log("execute join page");
    }

  }, [location]);

  
  const [signup, setSignup] = useState<any>({ 
      first_name: "",
      last_name: "",
      email: "",
      mobile: "",
      dob: "",
      password: "",
      user_id: "",
      number: ""
    });

  const [step, setStep] = useState("initial");

  return (
    <div className="main">
      <div className="join" style={{backgroundImage: `url('assets/img/bg/green_wood.jpg')`}}>

      {
        step == 'signin' &&
        <Login
        signup = {signup}
        setSignup = {setSignup}
        setStep = {setStep}
        />
      }
      {
        step == 'initial' &&
        <Step1
            signup = {signup}
            setSignup = {setSignup}
            setStep = {setStep}
        />
      }
      {
        step == 'emailVerify' &&
        <EmailVerify
            signup = {signup}
            setStep = {setStep}
        />
      }
      {
        step == 'SMSverify' &&
        <SMSVerify
            signup = {signup}
            setStep = {setStep}
        />
      }
      {
        step == 'FinalStep' &&
        <FinalStep
            signup = {signup}
            setSignup = {setSignup}
            setStep = {setStep}
        />
      }
      {
        step == 'SuccessRegister' &&
        <SuccessRegister
            signup = {signup}
            setSignup = {setSignup}
            setStep = {setStep}
        />
      }

        <img className="coming-soon-poster" src="assets/img/bg/coming soon.png" alt="" />
        <img className="house" src="assets/img/bg/houseempty.png" alt="" />
      </div>
    </div>
  );
};

export default Join;
