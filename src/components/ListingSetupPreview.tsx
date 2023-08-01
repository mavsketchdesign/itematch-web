import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonAvatar, IonGrid, IonRow, IonCol, IonInput, IonSpinner } from '@ionic/react';
import { useState } from 'react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { url } from 'inspector';
import {onlyNumbers, ValidateEmail, PasswordValidator, MobileCleaner, MobileCombiner} from '../utilities/tools';
import {initialRegister} from '../actions/UserAction';
import ShowListModal from '../components/ShowListModal';
import {useDispatch, useSelector} from 'react-redux';



const ListingCategory: React.FC<any> = ({itemCategory, createListing, setCreateListing, error}) => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [viewModal, setViewModal] = useState({isOpen: false})
    

    
      return (
            
            <>
                <div className="PreviewPrice">
                    <div className="text_col">
                        <div className="text_container">
                            <div className="header_text">
                                <span className="outline">ITEM</span>
                                <span className="bold">REVIEW</span>
                            
                            </div>

                            <p className="med_text margin-bottom-40">
                            Yaay! Just a quick review before submitting your item!
                            </p>

                            {
                                error &&
                                <div className="error">
                                    Opps! Something went wrong while creating your item listing.
                                </div>
                            }
                            

                        </div>
                    </div>

                    <div className="setup_col">
                        <div className="setup_title">
                            <div className="header_text">
                                <img src="assets/Logo/v1-full.png" alt="" />
                                <span>Setup</span>
                            </div>
                            <p className="sub_text">
                                Look if everything is good and click submit.
                            </p>
                        </div>
                        <div className="preview_wrapper">
                           
                           {/* Category */}
                            <div className="row">
                                <div className="preview_title">Category:</div>

                                <div className="category_wrapper">
                                        <div className="category_container">

                                            {
                                                itemCategory && itemCategory.filter((data:any)=>data?.category_value== createListing?.category_value).map((cat: any, index: number) => {
                                                    return (
                                                        <div className={`category_box active`} key={index} style={{backgroundImage: `url('assets/img/bg/${cat?.category_image}')`}}>
                                                            <div className="cat_title_box">
                                                                <img src={`assets/Logo/categories/${cat?.category_text_icon}`} alt="" />
                                                            </div>
                                                            <img className="check" src="assets/img/checked.png" alt="" />
                                                        </div>
                                                    )
                                                })
                                            }
                                            
                                            
                                        </div>
                                </div>
                            </div>

                            {/* Sub-Category */}
                            <div className="row">
                                <div className="preview_title">Sub Category:</div>
                                <div className="div_border">
                                    {
                                        createListing?.sub_category
                                    }
                                </div>
                            </div>

                            {/* Title */}
                            <div className="row">
                                <div className="preview_title">Title:</div>
                                <div className="div_border">
                                    {
                                        createListing?.title
                                    }
                                </div>
                            </div>

                            {/* Description */}
                            <div className="row">
                                <div className="preview_title">Description:</div>
                                <div className="div_border_p">
                                    {
                                        createListing?.description
                                    }
                                </div>
                            </div>

                            {/* Amenities */}
                            <div className="row">
                                <div className="preview_title">Amenities:</div>
                                <div className="grid_wrapper">
                                    {
                                        createListing?.amenity.map((amenity:any, index:number) => {
                                            return(
                                                <div className="div_border" key={index}>
                                                    {amenity?.title}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            {/* Photos */}
                            <div className="row">
                                <div className="preview_title">Photos:</div>
                                <div className="upload_preview_box">
                                    <div className="hero" style={{backgroundImage: `url('${ (createListing?.images && createListing?.images[0]) ? URL.createObjectURL(createListing?.images[0]) : "" }')`}}></div>
            
                                    <div className="image_grid">
                                        <div className="row">
                                            <div className="grid_box">
                                                <div className="image row-big" style={{backgroundImage: `url('${ (createListing?.images && createListing?.images[1]) ? URL.createObjectURL(createListing?.images[1]) : "" }')`}}></div>
                                                <div className="image" style={{backgroundImage: `url('${ (createListing?.images && createListing?.images[2]) ? URL.createObjectURL(createListing?.images[2]) : "" }')`}}></div>
                                                <div className="image" style={{backgroundImage: `url('${ (createListing?.images && createListing?.images[3]) ? URL.createObjectURL(createListing?.images[3]) : "" }')`}}></div>
                                            </div>
                                            <div className="grid_box_big">
                                                <div className="image" style={{backgroundImage: `url('${ (createListing?.images && createListing?.images[4]) ? URL.createObjectURL(createListing?.images[4]) : "" }')`}}></div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            {/* Location */}
                            <div className="row">
                                <div className="preview_title">Location:</div>
                                <div className="div_border_p">
                                        {`${createListing?.address}, ${createListing?.city}, ${createListing?.country}`}
                                </div>
                            </div>

                            {/* Price */}
                            <div className="row">
                                <div className="preview_title">Price:</div>
                                <div className="div_border">
                                        {`$${createListing?.price} / ${createListing?.rate_type}`}
                                </div>
                            </div>

                            {/* Discount */}
                            <div className="row">
                                <div className="preview_title">Discount:</div>
                                <div className="div_border">
                                        {createListing?.discount ? 
                                                `$${createListing?.discount}%`
                                        : 
                                        "None"
                                        }
                                </div>
                            </div>

                            

                        </div>

                            

                            
                    </div>
                </div>
                
            </>
      );
};
  
  export default ListingCategory;