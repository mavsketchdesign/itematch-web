import {LoginSocialFacebook} from 'reactjs-social-login';
import {FacebookLoginButton} from 'react-social-login-buttons';

const clientId = "596169125973962";


const FBLogin: React.FC<any> = ({submitAuth}) => {

    const responseFacebook = (response:any) => {
        // console.log("This is the response from fb", response);
        submitAuth(response?.data?.accessToken, "facebook");
      }
    
    const componentClicked = (data: any) => {
        // console.warn("This is the response from fb", data);
    }

    return (

        <div id="FBsignInButton">
            <LoginSocialFacebook
            appId={clientId}
            onResolve={(response:any)=>{ submitAuth(response?.data?.accessToken, "facebook") }}
            onReject={(error:any)=>{ console.log("response", error) }}
            
            >
                <FacebookLoginButton><span>FACEBOOK</span></FacebookLoginButton>
            </LoginSocialFacebook>
        </div>

    )
}


export default FBLogin;