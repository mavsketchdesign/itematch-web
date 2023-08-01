import { GoogleLogin } from 'react-google-login';

const clientId = "137532011617-7rlishcjnoa43vsndb2n66fr81t93fs8.apps.googleusercontent.com";


const Login: React.FC<any> = ({submitAuth, Error}) => {

    const LoginSuccess = (res:any) => {
        // console.log("success response", res);
        submitAuth(res?.accessToken, "google");
    }
    
    const LoginFailed = (res:any) => {
        // console.log("failed response", res);
        Error({error: true, message: "Something went wrong while signing with Googele, please try again."})
    }

    return (
        <div id ="signInButton">
            <GoogleLogin 
                clientId={clientId}
                buttonText="GOOGLE"
                onSuccess={LoginSuccess}
                onFailure={LoginFailed}
                cookiePolicy={'single_host_origin'}
                // isSignedIn={true}
                
            />

            
        </div>
    )
}


export default Login;