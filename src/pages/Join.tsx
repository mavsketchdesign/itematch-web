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
import LoaderPage from '../components/LoaderPage';
import {RootStore} from '../store';
import {isSignedin} from '../actions/UserAction';
import { Z_ASCII } from 'zlib';
import {
  useParams,
  Link,
  useLocation
} from "react-router-dom";

const Join: React.FC = () => {

  let location = useLocation();
  const dispatch = useDispatch();
  const locationChecker = () => {
    return (location?.pathname == "/" || location?.pathname == "/join") ?
    true :
    false;
  }

  useEffect(() => {
    // execute only if this is the current page
    if(locationChecker()) {
      dispatch(isSignedin(response));
    }

  }, [location]);

  const response = (res:any) => {
    console.log("res", res);
    if(res?.status==200 && res?.data?.verified) {
      window.location.href = "/ManageItem/";
    } else {
      setTimeout(()=> {
        setLoading(false);
      }, 500);
    }
};


  const [loading, setLoading] = useState(true);
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
  const [step, setStep] = useState("signin");

  return (
    
    <div className="main">
      {
        !loading &&
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
      }

      {
        loading &&
          <LoaderPage />
      }
    </div>
    
  );
};

export default Join;
