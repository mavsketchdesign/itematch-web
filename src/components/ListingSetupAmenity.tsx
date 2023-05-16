import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonAvatar, IonGrid, IonRow, IonCol, IonInput, IonSpinner, IonTextarea } from '@ionic/react';
import { useState, useEffect, useRef, useMemo} from 'react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { url } from 'inspector';
import {onlyNumbers, ValidateEmail, PasswordValidator, MobileCleaner, MobileCombiner} from '../utilities/tools';
import {initialRegister} from '../actions/UserAction';
import ShowListModal from '../components/ShowListModal';
import {useDispatch, useSelector} from 'react-redux';



const ListingAmenity: React.FC<any> = ({itemCategory, createListing, setCreateListing, step}) => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [viewModal, setViewModal] = useState({isOpen: false})
    
    useEffect(() => {
        if(step == "amenity")
        {
            // console.log("itemsList", itemCategory)
            console.log("createList", createListing)
        }
        
      }, [createListing]);
    const amenitySelector = (title:any, group:any) => {
        
        if(createListing?.amenity.filter((data:any)=>data.title == title).length<1) {

            // add
            setCreateListing({...createListing, 
                amenity:[
                    ...createListing.amenity, {
                        title: title,
                        description: "",
                        amenity_group: group,
                    }
                ]})
        }
        else {

            // remove
            setCreateListing({...createListing, 
                amenity:createListing.amenity.filter((data:any)=>data.title != title)
            })
        }
    }

      return (
            
        <>
            <div className="amenity_wrapper">
                <div className="amenity_inner_wrapper">
                    <div className="amenity_scrollable_wrapper">
                        <div className="setup_title margin-bottom-30">
                            <div className="header_text">
                                <img src="assets/Logo/itematching.png" alt="" />
                                <span>Setup</span>
                            </div>
                            <p className="sub_header">
                                AMENITIES
                            </p>
                            <p className="sub_text">
                                let users know what they will be getting from this item.
                            </p>
                        </div>

                        <div className="amenity_option_wrapper margin-top-20">

                            {
                                itemCategory && itemCategory.filter((data:any)=>data?.category_value == createListing?.category_value)?.map((cat: any) => {
                                    return (


                                        cat?.category_amenity && cat?.category_amenity.map((cat_amenity: any, index: number) => {
                                            return (
                                                <div className="option_row" key={index}>
                                                    <div className="group_title">
                                                        <span>{cat_amenity?.amenity_group}</span>
                                                    </div>
                                                    <div className="amenity_grid">
                                                        {
                                                            cat_amenity?.amenity && cat_amenity?.amenity.map((amenity: any, innerIndex: number) => {
                                                                
                                                                return (
                                                                    <div key={innerIndex}>
                                                                        {
                                                                        createListing?.amenity.filter((data:any)=>data.title == amenity.amenity_title).length<1 &&
                                                                            <div className={`option_box`} onClick={()=>{amenitySelector(amenity.amenity_title, cat_amenity?.amenity_group)}} key={innerIndex}>
                                                                                <img className="icon" src={`assets/img/amenity/${cat?.category_value}/${cat_amenity?.amenity_group}/${amenity?.amenity_icon}`} alt="" />
                                                                                <span>{amenity.amenity_title}</span>
                                                                            </div>
                                                                        }
                                                                        {
                                                                        createListing?.amenity.filter((data:any)=>data.title == amenity.amenity_title).length>0 &&
                                                                            <div className={`option_box active`} onClick={()=>{amenitySelector(amenity.amenity_title, cat_amenity?.amenity_group)}} key={innerIndex}>
                                                                                <img className="icon" src={`assets/img/amenity/${cat?.category_value}/${cat_amenity?.amenity_group}/${amenity?.amenity_icon}`} alt="" />
                                                                                <span>{amenity.amenity_title}</span>
                                                                                <img className="check" src="assets/img/checked.png" alt="" />
                                                                            </div>
                                                                        }
                                                                        
                                                                            
                                                                    </div>
                                                                    )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        })
                                        
                
                                    )
                                })
                            }
                                

                        </div>
                    </div>
                </div>
            </div>
        </>
      );
};
  
  export default ListingAmenity;