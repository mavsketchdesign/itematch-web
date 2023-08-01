import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonAvatar, IonGrid, IonRow, IonCol, IonInput, IonSpinner, IonModal } from '@ionic/react';
import { useEffect, useState } from 'react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { url } from 'inspector';
import '../css/LoaderPage.css';




const UploadPage: React.FC<any> = () => {
    


      return (
        <div className="upload_container">
           <div className="gif_wrapper">

                <div className="loadingio-spinner-chunk-22fqygvdk3m">
                    <div className="ldio-jne4uv3mhv8">
                        <div>
                            <div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="upload_text">
                    {/* Creating your Item */}
                    CREATING YOUR ITEM
                </div>

           </div>
        </div>
      );
};
  
  export default UploadPage;