import * as React from 'react';
import AppleLogin, { AppleLoginProps} from 'react-apple-login';




const AppleSignin: React.FC<any> = ({authSubmit}) => {

    const apple_cb = (e:any):void => {
        
        
        authSubmit(e?.authorization?.id_token, "apple");
    }

    return (

        <div id="AppleSignin">
            <AppleLogin  
                clientId={"com.itematch.web"} 
                redirectURI={"https://app.itematch.com/"}   
                responseType={"code"} 
                responseMode={"query"}  
                usePopup={true} 
                callback={apple_cb} 
                designProp={
                    {
                    height: 40,
                    width: 140,
                    color: "none",
                    border: false,
                    type: "continue",
                    border_radius: 10,
                    scale: 2,
                    locale: "en_US", 
                    }
                }
            />
        </div>

    )
}


export default AppleSignin;