import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonAvatar, IonGrid, IonRow, IonCol, IonInput, IonSpinner, IonTextarea } from '@ionic/react';
import { useState, useEffect, useRef, useMemo} from 'react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { url } from 'inspector';
import {onlyNumbers, ValidateEmail, PasswordValidator, MobileCleaner, MobileCombiner} from '../utilities/tools';
import {initialRegister} from '../actions/UserAction';
import ShowListModal from '../components/ShowListModal';
import {useDispatch, useSelector} from 'react-redux';
import { GoogleMap, Marker, useJsApiLoader} from '@react-google-maps/api'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';




const ListingItemLocation: React.FC<any> = ({itemCategory, createListing, setCreateListing, step}) => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const [count, setCount] = useState(0);

    const { isLoaded } = useJsApiLoader({
        id:"google-map-script",
        //googleMapsApiKey: "AIzaSyCp0-iCX-6L_CO1bO0ES0ryYHZAOxQnmsA"
        googleMapsApiKey: "AIzaSyArqQ0WpTpF45B8m2TKzXl251xZyHAogrM"
    });

    const [pos, setPos] = useState({
        lat: 25.11746599052759,
        lng: 55.39298057556152
        // lat: 90.0000,
        // lng: 135.0000
    });


    useEffect(()=>{
        if(Object.values(createListing?.geolocation).length>0) {
            setPos({
                lat: createListing?.geolocation?.lat,
                lng: createListing?.geolocation?.lng
            });
        }
    },[])

    

    const handleMapClick = (event:any) => {
        setPos({
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
        });

        setCreateListing({...createListing, geolocation: 
            {
                lat: event.latLng.lat(),
                lng: event.latLng.lng()
            }});
    };


    




    const getLocation = () => {
        if (!navigator.geolocation) {
            
        } else {
            navigator.geolocation.getCurrentPosition((myPosition: any)=>{
                setPos({
                lat: myPosition?.coords?.latitude,
                lng: myPosition?.coords?.longitude
                })
            });
            
        }
    }

    useEffect(()=> {
        getLocation();
    },[]);
    

      return (
            
        <>
            <div className="itemDetails_wrapper">
                <div className="itemDetails_inner_wrapper">
                    <div className="itemDetails_scrollable_wrapper">
                        <div className="setup_title margin-bottom-30">
                            <div className="header_text">
                                <img src="assets/Logo/itematching.png" alt="" />
                                <span>Setup</span>
                            </div>
                            <p className="sub_header">
                                ITEM LOCATION
                            </p>
                            <p className="sub_text">
                                Share to users the address of your item.
                            </p>
                        </div>

                        <div className="itemDetails_option_wrapper margin-top-20">
                            <div className="row">
                                <span>Use the map to locate your item.</span>
                            </div>
                            
                            <div className="row map">
                                
                            {
                                isLoaded && 
                                <GoogleMap onClick={handleMapClick} mapContainerStyle={{width: "100%", height: "100%", borderRadius: 15}} center={pos} zoom={8}>
                                    <Marker position={pos} draggable onDragEnd={handleMapClick}/>
                                </GoogleMap>
                            }
                                
                            </div>

                            <div className="row grid margin-top-10">
                                <div>
                                    <span>Country</span>
                                    <IonItem lines="none" className="input">
                                    {/* <select value={createListing?.place_type} onChange={ (e) => {setCreateListing({ ...createListing, place_type: e.target.value }) } } defaultValue={""}>
                                        <option value="" disabled>Item Type</option>
                                        <option value="entire_home">Entire Home</option>
                                        <option value="shared_home">Shared Home</option>
                                    </select> */}
                                    <CountryDropdown
                                        value={
                                            // country
                                            createListing?.country

                                        }
                                        onChange={(val) => {setCountry(val); setCreateListing({...createListing, country: val})  } } />
                                    </IonItem>
                                </div>
                                <div>
                                    <span>City</span>
                                    <IonItem lines="none" className="input">
                                        <RegionDropdown
                                        country={ country ? country : createListing?.country }
                                        value={
                                            // region
                                            createListing?.city
                                        }
                                        onChange={(val) => { setRegion(val); setCreateListing({...createListing, city: val}) } } />
                                    </IonItem>
                                </div>
                            </div>
                            <div className="row grid full-width margin-top-10">
                                <div>
                                    <span>Address</span>
                                    <IonItem lines="none" className="input">
                                        <IonInput value={createListing?.address} onIonChange={ (e) => {setCreateListing({ ...createListing, address: e.detail.value! })} } type="text" placeholder="Enter address"></IonInput>
                                    </IonItem>
                                </div>
                            </div>
                                

                        </div>
                    </div>
                </div>
            </div>
        </>
      );
};
  
  export default ListingItemLocation;