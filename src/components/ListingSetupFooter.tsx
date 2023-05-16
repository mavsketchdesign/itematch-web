import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import '../css/ListingFooter.css';

const ListingFooter: React.FC<any> = ({createListing, step, setStep, paginationButton}) => {
    
    const stepsTasker = (task:any) => {
        switch (step) {
            case "category":
                return setStep("subCategory");
            case "subCategory":
                return task == "previous" ? setStep("category") : setStep("title");
            case "title":
                return task == "previous" ? setStep("subCategory") : setStep("amenity");
            case "amenity":
                return task == "previous" ? setStep("title") : setStep("images");
            case "images":
                return task == "previous" ? setStep("amenity") : setStep("requirements");
            default:
              return;
          }
    }

  return (
    <>
        <div className="ListingFooter">
            <div className="button_wrapper">
                {
                    // if previous button is allowed to be cliked
                    paginationButton?.previous &&
                    <IonButton onClick={()=>{stepsTasker("previous")}} className="setup_button previous" type="submit" expand="block">
                        PREVIOUS
                    </IonButton>
                }
                {
                    // else
                    !paginationButton?.previous &&
                    <IonButton className="setup_button previous disabled" type="submit" expand="block" disabled>
                        PREVIOUS
                    </IonButton>
                }
                
                {
                    // if next button is allowed to be cliked
                    paginationButton?.next &&
                    <IonButton onClick={()=>{stepsTasker("next")}} className={`setup_button next`} type="submit" expand="block">
                        NEXT
                    </IonButton>
                }

                {
                    // else
                    !paginationButton?.next &&
                    <IonButton className="setup_button next disabled" type="submit" expand="block" disabled>
                        NEXT
                    </IonButton>
                }
                
            </div>
        </div>
    </>
  );
};

export default ListingFooter;
