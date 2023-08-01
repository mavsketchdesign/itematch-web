import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import '../css/ListingFooter.css';
import {useDispatch, useSelector} from 'react-redux';
import {postHomeListing, postVehicleListing, postItemListing, postFacilityListing} from '../actions/UserAction';
import { useEffect } from 'react';

const ListingFooter: React.FC<any> = ({createListing, step, setStep, paginationButton, upload, setUpload, setError}) => {

    const dispatch = useDispatch();
    const stepsTasker = (task:any) => {
        switch (step) {
            case "category":
                return setStep("subCategory");
            case "subCategory":
                return task == "previous" ? setStep("category") : setStep("title");
            case "title":
                return  (createListing?.category == "home" || createListing?.category == "car") ?
                 task == "previous" ? setStep("subCategory") : setStep("amenity") :
                 task == "previous" ? setStep("subCategory") : setStep("images")
            case "amenity":
                return task == "previous" ? setStep("title") : setStep("images");
            case "images":
                return  (createListing?.category == "home" || createListing?.category == "car") ?
                task == "previous" ? setStep("amenity") : setStep("itemDetails") :
                task == "previous" ? setStep("title") : setStep("itemDetails")
            case "itemDetails":
                return task == "previous" ? setStep("images") : setStep("itemLocation");
            case "itemLocation":
                return task == "previous" ? setStep("itemDetails") : setStep("itemPricing");
            case "itemPricing":
                return task == "previous" ? setStep("itemLocation") : setStep("itemPreview");
            case "itemPreview":
                return task == "previous" ? setStep("itemPricing") : "";
            default:
              return;
          }
    }

    const response = (res:any) => {
        console.log("res", res);
        if(res?.status==200) {
          setTimeout(()=> {
            window.location.href = "/ManageItem";
          }, 500);
        } else {
            setUpload(false);
            setError(true);

        }
    };


    const postItem = () => {
        setUpload(true);
        const formData = new FormData();

        if(createListing?.category_value == "home") {

            // formData.append("images", createListing?.);
            createListing?.images.forEach((data:File) => {
                formData.append("images", data);
            });
            formData.append("category", createListing?.category_value);
            formData.append("sub_category", createListing?.sub_category);
            formData.append("place_type", createListing?.place_type);
            formData.append("location", createListing?.location);
            formData.append("address", createListing?.address);
            formData.append("city", createListing?.city);
            formData.append("country", createListing?.country);
            formData.append("guest_capacity", createListing?.guest_capacity);
            formData.append("bedroom_capacity", createListing?.bedroom_capacity);
            formData.append("description", createListing?.description);
            formData.append("geolocation", JSON.stringify(createListing?.geolocation));
            formData.append("bathroom_capacity", createListing?.bathroom_capacity);
            formData.append("title", createListing?.title);
            formData.append("price", createListing?.price);
            formData.append("rate_type", createListing?.rate_type);
            formData.append("business_type", createListing?.business_type);
            formData.append("amenity", JSON.stringify(createListing?.amenity));

            dispatch(postHomeListing(formData, response));

        }

        else if((createListing?.category_value == "car") || (createListing?.category_value == "bike") ) {

            createListing?.images.forEach((data:File) => {
                formData.append("images", data);
            });
            formData.append("category", createListing?.category_value);
            formData.append("sub_category", createListing?.sub_category);
            formData.append("location", createListing?.location);
            formData.append("address", createListing?.address);
            formData.append("city", createListing?.city);
            formData.append("country", createListing?.country);
            formData.append("description", createListing?.description);
            formData.append("geolocation", JSON.stringify(createListing?.geolocation));
            formData.append("title", createListing?.title);
            formData.append("price", createListing?.price);
            formData.append("rate_type", createListing?.rate_type);
            formData.append("business_type", createListing?.business_type);
            formData.append("amenity", JSON.stringify(createListing?.amenity));

            dispatch(postVehicleListing(formData, response));

            
            
        }
        else if(createListing?.category_value == "facility") {


            createListing?.images.forEach((data:File) => {
                formData.append("images", data);
            });
            formData.append("category", createListing?.category_value);
            formData.append("sub_category", createListing?.sub_category);
            formData.append("place_type", createListing?.place_type);
            formData.append("location", createListing?.location);
            formData.append("address", createListing?.address);
            formData.append("city", createListing?.city);
            formData.append("country", createListing?.country);
            formData.append("description", createListing?.description);
            formData.append("geolocation", JSON.stringify(createListing?.geolocation));
            formData.append("title", createListing?.title);
            formData.append("price", createListing?.price);
            formData.append("rate_type", createListing?.rate_type);
            formData.append("business_type", createListing?.business_type);

            dispatch(postFacilityListing(formData, response));
        }
        else {
            createListing?.images.forEach((data:File) => {
                formData.append("images", data);
            });
            formData.append("category", createListing?.category_value);
            formData.append("sub_category", createListing?.sub_category);
            formData.append("location", createListing?.location);
            formData.append("address", createListing?.address);
            formData.append("city", createListing?.city);
            formData.append("country", createListing?.country);
            formData.append("description", createListing?.description);
            formData.append("geolocation", JSON.stringify(createListing?.geolocation));
            formData.append("title", createListing?.title);
            formData.append("price", createListing?.price);
            formData.append("rate_type", createListing?.rate_type);
            formData.append("business_type", createListing?.business_type);

            dispatch(postItemListing(formData, response));
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
                    paginationButton?.next && step!=="itemPreview" &&
                    <IonButton onClick={()=>{stepsTasker("next")}} className={`setup_button next`} type="submit" expand="block">
                        NEXT
                    </IonButton>
                }

                {
                    // else
                    !paginationButton?.next && step!=="itemPreview" &&
                    <IonButton className="setup_button next disabled" type="submit" expand="block" disabled>
                        NEXT
                    </IonButton>
                }

{
                    // if final preview, show the submit button
                    paginationButton?.next && step=="itemPreview" &&
                    <IonButton onClick={()=>{postItem();}} className="setup_button next" type="submit" expand="block">
                        SUBMIT 
                    </IonButton>
                }
                
            </div>
        </div>
    </>
  );
};

export default ListingFooter;
