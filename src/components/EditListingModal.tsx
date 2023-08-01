import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonAvatar, IonGrid, IonRow, IonCol, IonInput, IonSpinner, IonModal, IonTextarea, useIonToast } from '@ionic/react';
import { useEffect, useState } from 'react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { url } from 'inspector';
import '../css/EditListingModal.css';
import {useDispatch, useSelector} from 'react-redux';
import Dropzone from 'react-dropzone';
import { GoogleMap, Marker, useJsApiLoader} from '@react-google-maps/api'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import {GetViewPortSize, LetterCount, date_valid_formatter, date_converter} from '../utilities/tools';
import {fetchSpecificListing, postHomeListing, postVehicleListing, postItemListing, postFacilityListing, fetchVehicleMake, fetchVehicleModel} from '../actions/UserAction';
import ConfirmModal from '../components/ConfirmModal';
import Vehicle from '../components/Vehicle.json';



const ShowListModal: React.FC<any> = ({isOpen, OnClose, activeEdit, editListing, setEditListing, listingDetails, id}) => {

    const imageMaxSize = 9000000 // bytes
    const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif'
    const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => {return item.trim()});
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const [count, setCount] = useState(0);
    const [allowSubmit, setAllowSubmit] = useState(false);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [activeStatus, setActiveStatus] = useState(editListing?.active_status);
    const [pageResponse, setPageResponse] = useState(true);

    // this variables is for the reusable confirmation modal
    const [viewModalConfirm, setViewModalConfirm] = useState({isOpen: false});
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [subject, setSubject] = useState("");
    const [vehicleMake, setVehicleMake] = useState([]);
    const [vehicleModel, setVehicleModel] = useState([]);


    // data for vehicle brand
    const vehicle_brand = [{
        "name": "AC"
    }, {
        "name": "AC PROPULSION"
    }, {
        "name": "ACURA"
    }, {
        "name": "A.D. TRAMONTANA"
    }, {
        "name": "ALFA ROMEO"
    }, {
        "name": "ALMAC"
    }, {
        "name": "ALTERNATIVE CARS"
    }, {
        "name": "AMUZA"
    }, {
        "name": "ANTEROS"
    }, {
        "name": "ARASH"
    }, {
        "name": "ARIEL"
    }, {
        "name": "ARRINERA"
    }, {
        "name": "ASL"
    }, {
        "name": "ASTERIO"
    }, {
        "name": "ASTON MARTIN"
    }, {
        "name": "AUDI"
    }, {
        "name": "BAC"
    }, {
        "name": "BAJAJ"
    }, {
        "name": "BEIJING AUTOMOBILE WORKS"
    }, {
        "name": "BENTLEY"
    }, {
        "name": "BMW"
    }, {
        "name": "BOLLORÉ"
    }, {
        "name": "BOLWELL"
    }, {
        "name": "BRILLIANCE / HUACHEN"
    }, {
        "name": "BRISTOL"
    }, {
        "name": "BRITISH LEYLAND"
    }, {
        "name": "BRM BUGGY"
    }, {
        "name": "BROOKE"
    }, {
        "name": "BUDDY"
    }, {
        "name": "BUFORI"
    }, {
        "name": "BUGATTI"
    }, {
        "name": "BUICK"
    }, {
        "name": "BYD"
    }, {
        "name": "CADILLAC"
    }, {
        "name": "CAPARO"
    }, {
        "name": "CARBONTECH"
    }, {
        "name": "CARICE"
    }, {
        "name": "CHANG'AN"
    }, {
        "name": "CHANGHE"
    }, {
        "name": "CHERY"
    }, {
        "name": "CHEVROLET"
    }, {
        "name": "CHEVRON"
    }, {
        "name": "CITROËN"
    }, {
        "name": "CHRYSLER"
    }, {
        "name": "COMMUTER CARS"
    }, {
        "name": "CONNAUGHT"
    }, {
        "name": "COVINI"
    }, {
        "name": "DACIA"
    }, {
        "name": "DAIHATSU"
    }, {
        "name": "DATSUN"
    }, {
        "name": "DE LA CHAPELLE"
    }, {
        "name": "DMC"
    }, {
        "name": "DIARDI"
    }, {
        "name": "DODGE"
    }, {
        "name": "DONKERVOORT"
    }, {
        "name": "DONGFENG"
    }, {
        "name": "DONTO"
    }, {
        "name": "DS AUTOMOBILES"
    }, {
        "name": "DYNASTI ELECTRIC CAR CORP."
    }, {
        "name": "E-VADE"
    }, {
        "name": "EFFEDI"
    }, {
        "name": "EGY-TECH ENGINEERING"
    }, {
        "name": "ELECTRIC RACEABOUT"
    }, {
        "name": "ELFIN"
    }, {
        "name": "EMGRAND"
    }, {
        "name": "ENGLON"
    }, {
        "name": "ETERNITI"
    }, {
        "name": "ETOX"
    }, {
        "name": "EQUUS"
    }, {
        "name": "EXAGON"
    }, {
        "name": "FARALLI & MAZZANTI"
    }, {
        "name": "FAW"
    }, {
        "name": "FERRARI"
    }, {
        "name": "FIAT"
    }, {
        "name": "FISKER"
    }, {
        "name": "FODAY"
    }, {
        "name": "FORCE"
    }, {
        "name": "FORD"
    }, {
        "name": "FORD AUSTRALIA"
    }, {
        "name": "FORD GERMANY"
    }, {
        "name": "FORNASARI"
    }, {
        "name": "FRASER"
    }, {
        "name": "GAC GROUP"
    }, {
        "name": "GALPIN"
    }, {
        "name": "GEELY"
    }, {
        "name": "GENESIS"
    }, {
        "name": "GIBBS"
    }, {
        "name": "GILLET"
    }, {
        "name": "GINETTA"
    }, {
        "name": "GMC"
    }, {
        "name": "GONOW"
    }, {
        "name": "GREAT WALL / CHANGCHENG"
    }, {
        "name": "GREENTECH AUTOMOTIVE"
    }, {
        "name": "GRINNALL"
    }, {
        "name": "GTA MOTOR"
    }, {
        "name": "GUMPERT"
    }, {
        "name": "GURGEL"
    }, {
        "name": "HENNESSEY"
    }, {
        "name": "HINDUSTAN"
    }, {
        "name": "HOLDEN"
    }, {
        "name": "HONDA"
    }, {
        "name": "HONGQI"
    }, {
        "name": "HRADYESH"
    }, {
        "name": "HTT TECHNOLOGIES"
    }, {
        "name": "HULME"
    }, {
        "name": "HYUNDAI"
    }, {
        "name": "ICML"
    }, {
        "name": "IFR"
    }, {
        "name": "IRAN KHODRO"
    }, {
        "name": "IKCO"
    }, {
        "name": "IMPERIA"
    }, {
        "name": "INFINITI"
    }, {
        "name": "IVM"
    }, {
        "name": "INVICTA"
    }, {
        "name": "ISDERA"
    }, {
        "name": "ISUZU"
    }, {
        "name": "JAC"
    }, {
        "name": "JAGUAR"
    }, {
        "name": "JEEP"
    }, {
        "name": "JENSEN MOTORS"
    }, {
        "name": "JETCAR"
    }, {
        "name": "JONWAY"
    }, {
        "name": "JOSS"
    }, {
        "name": "KAIPAN"
    }, {
        "name": "KANTANKA"
    }, {
        "name": "KARMA"
    }, {
        "name": "KOENIGSEGG"
    }, {
        "name": "KORRES"
    }, {
        "name": "KIA"
    }, {
        "name": "KIAT"
    }, {
        "name": "KISH KHODRO"
    }, {
        "name": "KTM"
    }, {
        "name": "LADA"
    }, {
        "name": "LAMBORGHINI"
    }, {
        "name": "LANCIA"
    }, {
        "name": "LAND ROVER"
    }, {
        "name": "LANDWIND"
    }, {
        "name": "LARAKI"
    }, {
        "name": "LEBLANC"
    }, {
        "name": "LEITCH"
    }, {
        "name": "LEOPARD"
    }, {
        "name": "LEXUS"
    }, {
        "name": "LI-ION"
    }, {
        "name": "LIFAN"
    }, {
        "name": "LIGHTNING"
    }, {
        "name": "LINCOLN"
    }, {
        "name": "LISTER"
    }, {
        "name": "LOCAL MOTORS"
    }, {
        "name": "LOBINI"
    }, {
        "name": "LOTEC"
    }, {
        "name": "LOTUS CARS"
    }, {
        "name": "LUCRA CARS"
    }, {
        "name": "LUXGEN"
    }, {
        "name": "MAHINDRA"
    }, {
        "name": "MARUSSIA"
    }, {
        "name": "MARUTI SUZUKI"
    }, {
        "name": "MASERATI"
    }, {
        "name": "MASTRETTA"
    }, {
        "name": "MAZDA"
    }, {
        "name": "MCLAREN"
    }, {
        "name": "MERCEDES-BENZ"
    }, {
        "name": "MG"
    }, {
        "name": "MICRO"
    }, {
        "name": "MINI"
    }, {
        "name": "MITSUBISHI"
    }, {
        "name": "MITSUOKA"
    }, {
        "name": "MORGAN"
    }, {
        "name": "MULLEN"
    }, {
        "name": "MYCAR"
    }, {
        "name": "MYVI-PERODUA"
    }, {
        "name": "NISSAN"
    }, {
        "name": "NOBLE"
    }, {
        "name": "NOTA"
    }, {
        "name": "OLDSMOBILE"
    }, {
        "name": "OPEL"
    }, {
        "name": "OPTIMAL ENERGY"
    }, {
        "name": "ORCA"
    }, {
        "name": "OLTCIT"
    }, {
        "name": "PAGANI"
    }, {
        "name": "PANHARD"
    }, {
        "name": "PANOZ"
    }, {
        "name": "PERANA"
    }, {
        "name": "PERODUA"
    }, {
        "name": "PEUGEOT"
    }, {
        "name": "P.G.O."
    }, {
        "name": "POLARSUN"
    }, {
        "name": "PLYMOUTH"
    }, {
        "name": "PORSCHE"
    }, {
        "name": "PROTO"
    }, {
        "name": "OULLIM"
    }, {
        "name": "PROTON"
    }, {
        "name": "PURITALIA"
    }, {
        "name": "QOROS"
    }, {
        "name": "QVALE"
    }, {
        "name": "RADICAL"
    }, {
        "name": "RELIANT"
    }, {
        "name": "RENAULT"
    }, {
        "name": "REVA"
    }, {
        "name": "RIMAC"
    }, {
        "name": "RINSPEED"
    }, {
        "name": "RODING"
    }, {
        "name": "ROEWE"
    }, {
        "name": "ROLLS-ROYCE"
    }, {
        "name": "ROSSIN-BERTIN"
    }, {
        "name": "ROSSION"
    }, {
        "name": "ROVER"
    }, {
        "name": "SAAB"
    }, {
        "name": "SALEEN"
    }, {
        "name": "SAIC-GM-WULING"
    }, {
        "name": "SAIPA"
    }, {
        "name": "SAKER"
    }, {
        "name": "SAMSUNG"
    }, {
        "name": "SAN"
    }, {
        "name": "SBARRO"
    }, {
        "name": "SCION"
    }, {
        "name": "SEAT"
    }, {
        "name": "SHANGHAI MAPLE"
    }, {
        "name": "SIN"
    }, {
        "name": "ŠKODA"
    }, {
        "name": "SMART"
    }, {
        "name": "SPADA VETTURE SPORT"
    }, {
        "name": "SPYKER"
    }, {
        "name": "SSANGYONG"
    }, {
        "name": "SSC NORTH AMERICA"
    }, {
        "name": "STREET & RACING TECHNOLOGY"
    }, {
        "name": "SUBARU"
    }, {
        "name": "SUZUKI"
    }, {
        "name": "TANOM"
    }, {
        "name": "TATA"
    }, {
        "name": "TAURO"
    }, {
        "name": "TAWON CAR"
    }, {
        "name": "TD CARS"
    }, {
        "name": "TESLA"
    }, {
        "name": "THAI RUNG"
    }, {
        "name": "TOYOTA"
    }, {
        "name": "TREKKA"
    }, {
        "name": "TRIDENT"
    }, {
        "name": "TRIUMPH"
    }, {
        "name": "TROLLER"
    }, {
        "name": "TRUMPCHI"
    }, {
        "name": "TUSHEK"
    }, {
        "name": "TVR"
    }, {
        "name": "TVS"
    }, {
        "name": "ULTIMA"
    }, {
        "name": "UMM"
    }, {
        "name": "UEV"
    }, {
        "name": "URI"
    }, {
        "name": "UAZ"
    }, {
        "name": "VAUXHALL MOTORS"
    }, {
        "name": "VECTOR"
    }, {
        "name": "VENCER"
    }, {
        "name": "VENIRAUTO"
    }, {
        "name": "VENTURI"
    }, {
        "name": "VEPR"
    }, {
        "name": "VOLKSWAGEN"
    }, {
        "name": "VOLVO"
    }, {
        "name": "VINFAST"
    }, {
        "name": "W MOTORS"
    }, {
        "name": "WALLYSCAR"
    }, {
        "name": "WESTFIELD"
    }, {
        "name": "WHEEGO"
    }, {
        "name": "WIESMANN"
    }, {
        "name": "XENIA"
    }, {
        "name": "YES!"
    }, {
        "name": "YOUABIAN PUMA"
    }, {
        "name": "ZASTAVA AUTOMOBILES"
    }, {
        "name": "ZENDER CARS"
    }, {
        "name": "ZENOS CARS"
    }, {
        "name": "ZENVO"
    }, {
        "name": "ZIL"
    }, {
        "name": "ZX AUTO"
    }]

    // data for vehicle color
    const color = [
        {
            "aliceblue": "aliceblue",
            "antiquewhite": "antiquewhite",
            "aqua": "aqua",
            "aquamarine": "aquamarine",
            "azure": "azure",
            "beige": "beige",
            "bisque": "bisque",
            "black": "black",
            "blanchedalmond": "blanchedalmond",
            "blue": "blue",
            "blueviolet": "blueviolet",
            "brown": "brown",
            "burlywood": "burlywood",
            "cadetblue": "cadetblue",
            "chartreuse": "chartreuse",
            "chocolate": "chocolate",
            "coral": "coral",
            "cornflowerblue": "cornflowerblue",
            "cornsilk": "cornsilk",
            "crimson": "crimson",
            "cyan": "cyan",
            "darkblue": "darkblue",
            "darkcyan": "darkcyan",
            "darkgoldenrod": "darkgoldenrod",
            "darkgray": "darkgray",
            "darkgreen": "darkgreen",
            "darkgrey": "darkgrey",
            "darkkhaki": "darkkhaki",
            "darkmagenta": "darkmagenta",
            "darkolivegreen": "darkolivegreen",
            "darkorange": "darkorange",
            "darkorchid": "darkorchid",
            "darkred": "darkred",
            "darksalmon": "darksalmon",
            "darkseagreen": "darkseagreen",
            "darkslateblue": "darkslateblue",
            "darkslategray": "darkslategray",
            "darkslategrey": "darkslategrey",
            "darkturquoise": "darkturquoise",
            "darkviolet": "darkviolet",
            "deeppink": "deeppink",
            "deepskyblue": "deepskyblue",
            "dimgray": "dimgray",
            "dimgrey": "dimgrey",
            "dodgerblue": "dodgerblue",
            "firebrick": "firebrick",
            "floralwhite": "floralwhite",
            "forestgreen": "forestgreen",
            "fuchsia": "fuchsia",
            "gainsboro": "gainsboro",
            "ghostwhite": "ghostwhite",
            "gold": "gold",
            "goldenrod": "goldenrod",
            "gray": "gray",
            "green": "green",
            "greenyellow": "greenyellow",
            "grey": "grey",
            "honeydew": "honeydew",
            "hotpink": "hotpink",
            "indianred": "indianred",
            "indigo": "indigo",
            "ivory": "ivory",
            "khaki": "khaki",
            "lavender": "lavender",
            "lavenderblush": "lavenderblush",
            "lawngreen": "lawngreen",
            "lemonchiffon": "lemonchiffon",
            "lightblue": "lightblue",
            "lightcoral": "lightcoral",
            "lightcyan": "lightcyan",
            "lightgoldenrodyellow": "lightgoldenrodyellow",
            "lightgray": "lightgray",
            "lightgreen": "lightgreen",
            "lightgrey": "lightgrey",
            "lightpink": "lightpink",
            "lightsalmon": "lightsalmon",
            "lightseagreen": "lightseagreen",
            "lightskyblue": "lightskyblue",
            "lightslategray": "lightslategray",
            "lightslategrey": "lightslategrey",
            "lightsteelblue": "lightsteelblue",
            "lightyellow": "lightyellow",
            "lime": "lime",
            "limegreen": "limegreen",
            "linen": "linen",
            "magenta": "magenta",
            "maroon": "maroon",
            "mediumaquamarine": "mediumaquamarine",
            "mediumblue": "mediumblue",
            "mediumorchid": "mediumorchid",
            "mediumpurple": "mediumpurple",
            "mediumseagreen": "mediumseagreen",
            "mediumslateblue": "mediumslateblue",
            "mediumspringgreen": "mediumspringgreen",
            "mediumturquoise": "mediumturquoise",
            "mediumvioletred": "mediumvioletred",
            "midnightblue": "midnightblue",
            "mintcream": "mintcream",
            "mistyrose": "mistyrose",
            "moccasin": "moccasin",
            "navajowhite": "navajowhite",
            "navy": "navy",
            "oldlace": "oldlace",
            "olive": "olive",
            "olivedrab": "olivedrab",
            "orange": "orange",
            "orangered": "orangered",
            "orchid": "orchid",
            "palegoldenrod": "palegoldenrod",
            "palegreen": "palegreen",
            "paleturquoise": "paleturquoise",
            "palevioletred": "palevioletred",
            "papayawhip": "papayawhip",
            "peachpuff": "peachpuff",
            "peru": "peru",
            "pink": "pink",
            "plum": "plum",
            "powderblue": "powderblue",
            "purple": "purple",
            "red": "red",
            "rosybrown": "rosybrown",
            "royalblue": "royalblue",
            "saddlebrown": "saddlebrown",
            "salmon": "salmon",
            "sandybrown": "sandybrown",
            "seagreen": "seagreen",
            "seashell": "seashell",
            "sienna": "sienna",
            "silver": "silver",
            "skyblue": "skyblue",
            "slateblue": "slateblue",
            "slategray": "slategray",
            "slategrey": "slategrey",
            "snow": "snow",
            "springgreen": "springgreen",
            "steelblue": "steelblue",
            "tan": "tan",
            "teal": "teal",
            "thistle": "thistle",
            "tomato": "tomato",
            "transparent": "transparent",
            "turquoise": "turquoise",
            "violet": "violet",
            "wheat": "wheat",
            "white": "white",
            "whitesmoke": "whitesmoke",
            "yellow": "yellow",
            "yellowgreen": "yellowgreen",
            "rebeccapurple": "rebeccapurple"
        }
    ]

    // this variable is to create year array from 1960 to current year
    const currentYear = new Date().getFullYear();
    const yearsArray = Array.from({ length: currentYear - 1960 + 1 }, (_, index) => 1960 + index);
    
    // this will update the setactivestatus variable when the editlisting is fully loaded
    useEffect(()=>{
        setActiveStatus(editListing?.active_status);
    },[editListing]);



    // Vehicle brand and model api and responses

    //make
    const vehicleMakeResponse = (res:any) => {
        setVehicleMake(res?.data);
    }

    useEffect(()=>{
        dispatch(fetchVehicleMake(vehicleMakeResponse));
        checkVehicleModel(editListing?.brand);
    },[])
    // model
    const vehicleResponse = (res:any) => {
        setVehicleModel(res?.data?.models);
    }
    const checkVehicleModel = (brand:any) => {
        dispatch(fetchVehicleModel(brand, vehicleResponse));
    }


    // This function is to check if all necessary fields are met before user can submit the edits
    useEffect(() => {
        // execute only if this is the current page
        
            // this if statement is to check if previous and next button is allowed
            if(activeEdit === "sub_category")
            {
                if( editListing?.sub_category !=="" )
                {
                    setAllowSubmit(true);
                }
                else 
                {
                    setAllowSubmit(false)
                }
            }
            else if(activeEdit === "title")
            {
                if( (LetterCount(editListing?.title) >= 5) )
                {
                    setAllowSubmit(true);
                }
                else 
                {
                    setAllowSubmit(false)
                }
            }
            else if(activeEdit === "description")
            {
                if( (LetterCount(editListing?.description) >= 50) )
                {
                    setAllowSubmit(true);
                }
                else 
                {
                    setAllowSubmit(false)
                }
            }
            else if(activeEdit === "amenities")
            {
                if( editListing?.listing_amenity.length>0 )
                {
                    setAllowSubmit(true);
                }
                else 
                {
                    setAllowSubmit(false)
                }
            }
            else if(activeEdit === "photos")
            {
                if( editListing?.ListingImage.length>4 )
                {
                    setAllowSubmit(true);
                }
                else 
                {
                    setAllowSubmit(false)
                }
            }
            else if(activeEdit === "add_info")
            {

                if(editListing?.category == "home")
                {
                    if( editListing?.place_type !== "" &&  editListing?.business_type !== "" &&  editListing?.bedroom_capacity !== "" &&  editListing?.guest_capacity !== "" &&  editListing?.bathroom_capacity !== "")
                    {
                        setAllowSubmit(true);
                    }
                    else 
                    {
                        setAllowSubmit(false)
                    }
                }
                else
                {
                    if(editListing?.business_type !== "")
                    {
                        setAllowSubmit(true);
                    }
                    else 
                    {
                        setAllowSubmit(false)
                    }
                }
                    
            }
            else if(activeEdit === "address")
            {
                if( (editListing?.country!== "" && editListing?.country!== null) && (editListing?.city!== "" && editListing?.city!== null) && editListing?.address!== "" )
                {
                    setAllowSubmit(true);
                }
                else 
                {
                    setAllowSubmit(false)
                }
            }
            else if(activeEdit === "price")
            {
                if( editListing?.price !== "" && editListing?.rate_type != "")
                {
                    setAllowSubmit(true);
                }
                else 
                {
                    setAllowSubmit(false)
                }
            }
            else if(activeEdit === "active_status")
            {
                setAllowSubmit(true);
            }
            else if(activeEdit === "check_in")
            {
                
                setAllowSubmit(true);
                // if( editListing?.price !== "" && editListing?.rate_type != "")
                // {
                //     setAllowSubmit(true);
                // }
                // else 
                // {
                //     setAllowSubmit(false)
                // }
            }
            else if(activeEdit === "check_out")
            {
                
                setAllowSubmit(true);
            }
            else if(activeEdit === "quiet_hour")
            {
                if(editListing?.listing_requirement.filter((data:any) => data?.title === "quiet_hour_start").length > 0 && editListing?.listing_requirement.filter((data:any) => data?.title === "quiet_hour_end").length > 0) 
                {
                    setAllowSubmit(true);
                }
                
            }
            else if(activeEdit === "event_use")
            {
                if(editListing?.listing_requirement.filter((data:any) => data?.title === "event_use").length > 0) 
                {
                    setAllowSubmit(true);
                }
                
            }
            else if(activeEdit === "allow_pets")
            {
                if(editListing?.listing_requirement.filter((data:any) => data?.title === "allow_pets").length > 0) 
                {
                    setAllowSubmit(true);
                }
                
            }
            else if(activeEdit === "cancellation")
            {
                if(editListing?.listing_requirement.filter((data:any) => data?.title === "cancellation").length > 0) 
                {
                    setAllowSubmit(true);
                }
                
            }
            else if(activeEdit === "trip-start")
            {
                if(editListing?.listing_requirement.filter((data:any) => data?.title === "trip-start").length > 0) 
                {
                    setAllowSubmit(true);
                }
                
            }
            else if(activeEdit === "trip-end")
            {
                if(editListing?.listing_requirement.filter((data:any) => data?.title === "trip-end").length > 0) 
                {
                    setAllowSubmit(true);
                }
                
            }
            else if(activeEdit === "pickup-time")
            {
                if(editListing?.listing_requirement.filter((data:any) => data?.title === "pickup-time").length > 0) 
                {
                    setAllowSubmit(true);
                }
                
            }
            else if(activeEdit === "return-time")
            {
                if(editListing?.listing_requirement.filter((data:any) => data?.title === "return-time").length > 0) 
                {
                    setAllowSubmit(true);
                }
                
            }
            else if(activeEdit === "max-travel")
            {
                if(editListing?.listing_requirement.filter((data:any) => data?.title === "max-travel").length > 0 && editListing?.listing_requirement.filter((data:any) => data?.title === "distance_unit").length > 0) 
                {
                    setAllowSubmit(true);
                }
                
            }
            else if(activeEdit === "delivery_pickup")
            {
                if(editListing?.listing_requirement.filter((data:any) => data?.title === "allow_deliver").length > 0 ) 
                {
                    setAllowSubmit(true);
                }
                
            }
            else if(activeEdit === "vehicle_brand_model")
            {
                setAllowSubmit(true);
            }
            else if(activeEdit === "vehicle_info")
            {
                if( editListing?.plate_number !== null && editListing?.entry_date !== null && editListing?.expiry_date !== null) 
                {
                    setAllowSubmit(true);
                }
            }

    }, [activeEdit, editListing]);
    

    // This section is for the toaster if edit is successful or not
    const [present] = useIonToast();
    const sucessToast = (position: 'top' | 'middle' | 'bottom') => {
        present({
        message: "Successfully saved",
        duration: 1500,
        position: position,
        });
    };
    const errorToast = (position: 'top' | 'middle' | 'bottom') => {
        present({
        message: "Did not save properly",
        duration: 1500,
        position: position,
        });
    };

    // this function will get the reponse if the page or user is found
    const PageResponse = (res:any) => {
        if(res) {
            setPageResponse(true);
        } else {
            setPageResponse(false);
        }
    };

    // This function will get the response from the server
    const response = (res:any) => {
        console.log("res", res);
        if(res?.status==200) {
            dispatch(fetchSpecificListing(id, PageResponse));
            setLoading(false);
            OnClose();

            setTimeout(()=> {
                sucessToast("top");
            }, 500);

        } 
        else {
            setLoading(false);
            errorToast("top");
        }
    };
    

    // This function will be triggered once the user clicks the save button
    const submitEdit = () => {
        
        setLoading(true);
        const formData = new FormData();

        if(editListing?.category == "home") {

            formData.append("id", editListing?.id);

            switch (activeEdit) {
                case "sub_category":
                     formData.append("sub_category", editListing?.sub_category);
                     break;
                case "title":
                     formData.append("title", editListing?.title);
                     break;
                case "description":
                     formData.append("description", editListing?.description);
                     break;
                case "amenities":
                     formData.append("amenity", JSON.stringify(editListing?.listing_amenity));
                     break;
                case "photos":
                     editListing?.images.forEach((data:File) => {
                            formData.append("images", data);
                            });
                        break;
                case "add_info":
                            formData.append("place_type", editListing?.place_type);
                            formData.append("guest_capacity", editListing?.guest_capacity);
                            formData.append("bedroom_capacity", editListing?.bedroom_capacity);
                            formData.append("bathroom_capacity", editListing?.bathroom_capacity);
                            formData.append("business_type", editListing?.business_type);
                        break ;
                case "address":
                            formData.append("location", editListing?.location);
                            formData.append("address", editListing?.address);
                            formData.append("city", editListing?.city);
                            formData.append("country", editListing?.country);
                            
                            if(typeof editListing?.geolocation !=="object")
                            {
                                var tempGeo = JSON.parse(editListing?.geolocation);
                                // console.log("this is the data", typeof editListing?.geolocation)
                            }
                            else {
                                var tempGeo = editListing?.geolocation;
                            }
                            formData.append("geolocation", JSON.stringify(tempGeo));
                            
                        break ;
                case "price":
                            formData.append("price", editListing?.price);
                            formData.append("rate_type", editListing?.rate_type);
                        break ;
                case "active_status":
                            console.log("Entered in active status", isConfirmed);
                            // give confirmation if active status is set to deactivated or pause
                            if((activeStatus==="deactivated" || activeStatus==="paused") && !viewModalConfirm?.isOpen)
                            {
                                console.log("open modal")
                                setSubject(activeStatus);
                                setViewModalConfirm({isOpen:true});
                                return;
                            }
                            formData.append("active_status", activeStatus);
                        break ;
                case "check_in":
                case "check_out":
                case "quiet_hour":
                case "event_use":
                case "allow_pets":
                case "cancellation":
                            formData.append("listing_requirement", JSON.stringify(editListing?.listing_requirement));
                            // console.log("this is the data", JSON.stringify(editListing.ListingRequirement));
                        break ;
                default:
                    break
            }
            
            dispatch(postHomeListing(formData, response));

        }
        else if((editListing?.category == "car") || (editListing?.category == "bike") ) {
            formData.append("id", editListing?.id);

            switch (activeEdit) {
                case "sub_category":
                     formData.append("sub_category", editListing?.sub_category);
                     break;
                case "title":
                     formData.append("title", editListing?.title);
                     break;
                case "description":
                     formData.append("description", editListing?.description);
                     break;
                case "amenities":
                     formData.append("amenity", JSON.stringify(editListing?.listing_amenity));
                     break;
                case "photos":
                     editListing?.images.forEach((data:File) => {
                            formData.append("images", data);
                            });
                        break;
                case "add_info":
                            formData.append("place_type", editListing?.place_type);
                            formData.append("guest_capacity", editListing?.guest_capacity);
                            formData.append("bedroom_capacity", editListing?.bedroom_capacity);
                            formData.append("bathroom_capacity", editListing?.bathroom_capacity);
                            formData.append("business_type", editListing?.business_type);
                        break ;
                case "address":
                            formData.append("location", editListing?.location);
                            formData.append("address", editListing?.address);
                            formData.append("city", editListing?.city);
                            formData.append("country", editListing?.country);
                            
                            if(typeof editListing?.geolocation !=="object")
                            {
                                var tempGeo = JSON.parse(editListing?.geolocation);
                                // console.log("this is the data", typeof editListing?.geolocation)
                            }
                            else {
                                var tempGeo = editListing?.geolocation;
                            }
                            formData.append("geolocation", JSON.stringify(tempGeo));
                            
                        break ;
                case "price":
                            formData.append("price", editListing?.price);
                            formData.append("rate_type", editListing?.rate_type);
                        break ;
                case "active_status":
                            console.log("Entered in active status", isConfirmed);
                            // give confirmation if active status is set to deactivated or pause
                            if((activeStatus==="deactivated" || activeStatus==="paused") && !viewModalConfirm?.isOpen)
                            {
                                console.log("open modal")
                                setSubject(activeStatus);
                                setViewModalConfirm({isOpen:true});
                                return;
                            }
                            formData.append("active_status", activeStatus);
                        break ;
                case "vehicle_brand_model":
                            formData.append("brand", editListing?.brand);
                            formData.append("model", editListing?.model);
                            formData.append("model_year", editListing?.model_year);
                            formData.append("wheel_number", editListing?.wheel_number);
                            formData.append("transmission", editListing?.transmission);
                            formData.append("fuel_type", editListing?.fuel_type);
                            formData.append("seat_capacity", editListing?.seat_capacity);
                            formData.append("door_number", editListing?.door_number);
                            formData.append("steering_side", editListing?.steering_side);
                            formData.append("color", editListing?.color);
                        break ;
                case "vehicle_info":
                            formData.append("plate_number", editListing?.plate_number);
                            formData.append("insurance_name", editListing?.insurance_name);
                            formData.append("insurance_package", editListing?.insurance_package);
                            formData.append("entry_date", String(date_valid_formatter(editListing?.entry_date)));
                            formData.append("expiry_date", String(date_valid_formatter(editListing?.expiry_date)));
                        break ;
                case "trip-start":
                case "trip-end":
                case "max-travel":
                case "event_use":
                case "allow_pets":
                case "cancellation":
                case "delivery_pickup":
                            formData.append("listing_requirement", JSON.stringify(editListing?.listing_requirement));
                            // console.log("this is the data", JSON.stringify(editListing.listing_requirement));
                        break ;
                default:
                    break
            }
            
            dispatch(postVehicleListing(formData, response));
        }
        else if(editListing?.category == "facility") {

            formData.append("id", editListing?.id);

            switch (activeEdit) {
                case "sub_category":
                     formData.append("sub_category", editListing?.sub_category);
                     break;
                case "title":
                     formData.append("title", editListing?.title);
                     break;
                case "description":
                     formData.append("description", editListing?.description);
                     break;
                case "amenities":
                     formData.append("amenity", JSON.stringify(editListing?.listing_amenity));
                     break;
                case "photos":
                     editListing?.images.forEach((data:File) => {
                            formData.append("images", data);
                            });
                        break;
                case "add_info":
                            formData.append("place_type", editListing?.place_type);
                            formData.append("guest_capacity", editListing?.guest_capacity);
                            formData.append("bedroom_capacity", editListing?.bedroom_capacity);
                            formData.append("bathroom_capacity", editListing?.bathroom_capacity);
                            formData.append("business_type", editListing?.business_type);
                        break ;
                case "address":
                            formData.append("location", editListing?.location);
                            formData.append("address", editListing?.address);
                            formData.append("city", editListing?.city);
                            formData.append("country", editListing?.country);
                            
                            if(typeof editListing?.geolocation !=="object")
                            {
                                var tempGeo = JSON.parse(editListing?.geolocation);
                                // console.log("this is the data", typeof editListing?.geolocation)
                            }
                            else {
                                var tempGeo = editListing?.geolocation;
                            }
                            formData.append("geolocation", JSON.stringify(tempGeo));
                            
                        break ;
                case "price":
                            formData.append("price", editListing?.price);
                            formData.append("rate_type", editListing?.rate_type);
                        break ;
                case "active_status":
                            console.log("Entered in active status", isConfirmed);
                            // give confirmation if active status is set to deactivated or pause
                            if((activeStatus==="deactivated" || activeStatus==="paused") && !viewModalConfirm?.isOpen)
                            {
                                console.log("open modal")
                                setSubject(activeStatus);
                                setViewModalConfirm({isOpen:true});
                                return;
                            }
                            formData.append("active_status", activeStatus);
                        break ;
                case "check_in":
                case "check_out":
                case "quiet_hour":
                case "event_use":
                case "allow_pets":
                case "cancellation":
                            formData.append("listing_requirement", JSON.stringify(editListing?.listing_requirement));
                            // console.log("this is the data", JSON.stringify(editListing.listing_requirement));
                        break ;
                default:
                    break
            }
            
            dispatch(postFacilityListing(formData, response));

        }
        else {

            formData.append("id", editListing?.id);

            switch (activeEdit) {
                case "sub_category":
                     formData.append("sub_category", editListing?.sub_category);
                     break;
                case "title":
                     formData.append("title", editListing?.title);
                     break;
                case "description":
                     formData.append("description", editListing?.description);
                     break;
                case "amenities":
                     formData.append("amenity", JSON.stringify(editListing?.listing_amenity));
                     break;
                case "photos":
                     editListing?.images.forEach((data:File) => {
                            formData.append("images", data);
                            });
                        break;
                case "add_info":
                            formData.append("place_type", editListing?.place_type);
                            formData.append("guest_capacity", editListing?.guest_capacity);
                            formData.append("bedroom_capacity", editListing?.bedroom_capacity);
                            formData.append("bathroom_capacity", editListing?.bathroom_capacity);
                            formData.append("business_type", editListing?.business_type);
                        break ;
                case "address":
                            formData.append("location", editListing?.location);
                            formData.append("address", editListing?.address);
                            formData.append("city", editListing?.city);
                            formData.append("country", editListing?.country);
                            
                            if(typeof editListing?.geolocation !=="object")
                            {
                                var tempGeo = JSON.parse(editListing?.geolocation);
                                // console.log("this is the data", typeof editListing?.geolocation)
                            }
                            else {
                                var tempGeo = editListing?.geolocation;
                            }
                            formData.append("geolocation", JSON.stringify(tempGeo));
                            
                        break ;
                case "price":
                            formData.append("price", editListing?.price);
                            formData.append("rate_type", editListing?.rate_type);
                        break ;
                case "active_status":
                            console.log("Entered in active status", isConfirmed);
                            // give confirmation if active status is set to deactivated or pause
                            if((activeStatus==="deactivated" || activeStatus==="paused") && !viewModalConfirm?.isOpen)
                            {
                                console.log("open modal")
                                setSubject(activeStatus);
                                setViewModalConfirm({isOpen:true});
                                return;
                            }
                            formData.append("active_status", activeStatus);
                        break ;
                case "pickup-time":
                case "return-time":
                case "delivery_pickup":
                case "cancellation":
                            formData.append("listing_requirement", JSON.stringify(editListing?.listing_requirement));
                            // console.log("this is the data", JSON.stringify(editListing.listing_requirement));
                        break ;
                default:
                    break
            }
            
            dispatch(postItemListing(formData, response));
        }
    
        
    }


    // This function will add or remove an amenity in an item
    const amenitySelector = (title:any, group:any) => {
        
        if(editListing?.listing_amenity.filter((data:any)=>data.title == title).length<1) {

            // add
            setEditListing({...editListing, 
                listing_amenity:[
                    ...editListing.listing_amenity, {
                        title: title,
                        amenity_group: group,
                    }
                ]})
        }
        else {

            // remove
            setEditListing({...editListing, 
                listing_amenity:editListing.listing_amenity.filter((data:any)=>data.title != title)
            })
        }
    }


    // This functions takes care of the images of the item
    const verifyFile = (files:any) => {
        if (files){
                const currentFile = files;
                const currentFileType = currentFile.type
                const currentFileSize = currentFile.size
                if(currentFileSize > imageMaxSize) {
                    console.log("file size big");
                    alert("This file is not allowed. " + currentFileSize + " bytes is too large")
                    return false
                }
                if (!acceptedFileTypesArray.includes(currentFileType)){
                    console.log("file size not allowed");
                    alert("This file is not allowed. Only images are allowed.")
                    return false
                }
            return true;
        }
    }
    const handleOnDrop = (files:File[], rejectedFiles:any) => {

        // if (rejectedFiles && rejectedFiles.length > 0){
        //     verifyFile(rejectedFiles);
        // }
        
        if (files && files.length > 0){
            var isVerified = null;
            files.map(file=>{
                isVerified = verifyFile(file);
            })
            
            console.log(isVerified);
            if(isVerified)
            {
                // setImgSrc((data) => {
                //     return [...data, ...files]
                // });

                setEditListing((prev:any) => {
                    return {
                        ...editListing,
                        ListingImage: [...editListing.ListingImage, ...files]
                    }
                })
            }
            
            
        }
    }
    const deleteImage = (index:number) => {

        setEditListing((data:any) => {

            const new_img = data.ListingImage.filter((data:any, row:any) => {
                return row !== index
            })

            return {
                ...data,
                ListingImage:  new_img
            }
        })
    }


    // This function takes care of the geolocation of the item
    const { isLoaded } = useJsApiLoader({
        id:"google-map-script",
        //googleMapsApiKey: "AIzaSyCp0-iCX-6L_CO1bO0ES0ryYHZAOxQnmsA"
        googleMapsApiKey: "AIzaSyArqQ0WpTpF45B8m2TKzXl251xZyHAogrM"
    });
    const [pos, setPos] = useState({
        lat: 0,
        lng: 0
        // lat: 90.0000,
        // lng: 135.0000
    });
    // converting string to JSON
    useEffect(()=>{  
        if(pos?.lat === 0 && pos?.lng=== 0) 
        {
            try {
                if(Object.values(JSON.parse(editListing?.geolocation)).length>0) {
                    setPos({
                        lat: JSON.parse(editListing?.geolocation)?.lat,
                        lng: JSON.parse(editListing?.geolocation)?.lng
                    });
                }
              } 
            catch (err) {
                // 👇️ This runs
            }
        }
    },[editListing]);

    const handleMapClick = (event:any) => {
        
        setPos({
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
        });

        setEditListing({...editListing, geolocation: 
            {
                lat: event.latLng.lat(),
                lng: event.latLng.lng()
            }
        });
    };


    // This function will edit and ammend all attributes inside Listing requirement
    const ListingRequirementAmmend = (requirement: any, e: any) => {
        if(editListing?.listing_requirement.filter((data:any)=>data?.title === requirement).length>0)
        {
            const dummy_data = {
                ...editListing,
                listing_requirement: [...editListing.listing_requirement.filter((data:any) => data.title !== requirement), {
                    title: requirement,
                    desc: e.target.value 
                }] 
            }
            setEditListing(dummy_data)
        }
        else
        {
            setEditListing({ ...editListing, listing_requirement: [...editListing.listing_requirement, {title: requirement, desc: e.target.value}] })
        }

    }
    const IonicListingRequirementAmmend = (requirement: any, data: any) => {
        if(editListing?.listing_requirement.filter((data:any)=>data?.title === requirement).length>0)
        {
            const dummy_data = {
                ...editListing,
                listing_requirement: [...editListing.listing_requirement.filter((data:any) => data.title !== requirement), {
                    title: requirement,
                    desc: data 
                }] 
            }

            setEditListing(dummy_data)
        }
        else
        {
            setEditListing({ ...editListing, listing_requirement: [...editListing.listing_requirement, {title: requirement, desc: data}] })
        }

    }
    const ListingCancellationAmmend = (value: any) => {
        if(editListing?.listing_requirement.filter((data:any)=>data?.title === "cancellation").length>0)
        {
            const dummy_data = {
                ...editListing,
                listing_requirement: [...editListing.listing_requirement.filter((data:any) => data.title !== "cancellation"), {
                    title: "cancellation",
                    desc: value
                }] 
            }
            setEditListing(dummy_data)
        }
        else
        {
            setEditListing({ ...editListing, listing_requirement: [...editListing.listing_requirement, {title: "cancellation", desc: value}] })
        }

    }


    
      return (
        <>
            <IonModal className={`EditListingModal ${(activeEdit === "sub_category" || activeEdit === "title" || activeEdit === "description" || activeEdit === "price" || activeEdit === "check_in" || activeEdit === "check_out" || activeEdit === "quiet_hour" || activeEdit === "event_use" || activeEdit === "allow_pets" || activeEdit === "trip-start" || activeEdit === "trip-end" || activeEdit === "max-travel" || activeEdit === "pickup-time" || activeEdit === "return-time") ? "med" : "large"}`} isOpen={isOpen} onDidDismiss={OnClose} swipeToClose={true}>
                
                <div className="closeButton" onClick={()=>{OnClose();}}><img src="assets/img/delete.png" alt="" /></div>
                    <IonContent>
                        <div className="setup_title">
                            <div className="header_text">
                                <img src="assets/Logo/listings.png" alt="" />
                                <span>Setup</span>
                            </div>
                            <p className="sub_text">
                                Edit your listing information.
                            </p>
                        </div>

                        <div className="listing_edit_box">
                            <div className="edit_form">

                                {
                                    // sub category
                                    activeEdit === "sub_category" &&
                                    <>
                                        <div className="title">Sub Categogy</div>
                                        <IonItem lines="none" className="sub_category_select margin-top-10">
                                            <select value={editListing?.sub_category} onChange={ (e) => {setEditListing({ ...editListing, sub_category: e.target.value }) } } defaultValue={""}>
                                                <option value="" disabled>Item type:</option>
                                                {/* <option value="44">UK (+44)</option> */}

                                                {
                                                    listingDetails && listingDetails.filter((data:any)=>data?.category_value== editListing?.category).map((cat: any) => {
                                                        return (

                                                            cat?.category_sub_category && cat?.category_sub_category.map((subCat: any, index: number) => {
                                                                return (
                                                                    <option key={index} value={subCat?.sub_category_value}>{subCat?.sub_category_name}</option>
                                                                )
                                                            })
                                                        
                                                        )
                                                    })
                                                }
                                            </select>
                                        </IonItem>
                                    </>
                                }

                                {
                                    //title
                                    activeEdit === "title" &&
                                    <>
                                        <div className="title">Listing Title</div>
                                        <IonItem lines="none" className="form">
                                            <IonLabel position="floating">Title</IonLabel>
                                            <IonInput value={editListing?.title} onIonChange={ (e) => {setEditListing({ ...editListing, title: e.detail.value! })} } name="title" placeholder="What's your item title"></IonInput>
                                        </IonItem>
                                        <div className="description">TITLE: Atleast 5 to 30 characters maximum</div>
                                    </>
                                }

                                {
                                    //description
                                    activeEdit === "description" &&
                                    <>
                                        <div className="title">Listing Description</div>
                                        <IonItem lines="none" className="form textarea">
                                            <IonLabel position="floating">Description</IonLabel>
                                            <IonTextarea value={editListing?.description} onIonChange={ (e) => {setEditListing({ ...editListing, description: e.detail.value! })} }></IonTextarea>
                                        </IonItem>
                                        <div className="description">DESCRIPTION: Atleast 50 to 300 characters maximum</div>
                                    </>
                                }

                                {
                                    //Amenities
                                    activeEdit === "amenities" && (editListing?.category == "home" || editListing?.category == "car") &&
                                    <>
                                        <div className="title">Amenities</div>
                                        <div className="amenity_option_wrapper margin-top-20">

                                            {
                                                listingDetails && listingDetails.filter((data:any)=>data?.category_value == editListing?.category)?.map((cat: any) => {
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
                                                                                        editListing?.listing_amenity.filter((data:any)=>data.title == amenity.amenity_title).length<1 &&
                                                                                            <div className={`option_box`} onClick={()=>{amenitySelector(amenity.amenity_title, cat_amenity?.amenity_group)}} key={innerIndex}>
                                                                                                <img className="icon" src={`assets/img/amenity/${cat?.category_value}/${cat_amenity?.amenity_group}/${amenity?.amenity_icon}`} alt="" />
                                                                                                <span>{amenity.amenity_title}</span>
                                                                                            </div>
                                                                                        }
                                                                                        {
                                                                                        editListing?.listing_amenity.filter((data:any)=>data.title == amenity.amenity_title).length>0 &&
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
                                    </>
                                }

                                {
                                    //Photos
                                    activeEdit === "photos" &&
                                    <>
                                        <div className="title">Listing Photos</div>
                                        <div className="upload_drop_box">

                                            <div className="upload_title"> UPLOAD: (<span className="image_counter">{editListing?.ListingImage.length}</span> / 30 )</div>

                                            <Dropzone onDrop={handleOnDrop}>
                                                {({getRootProps, getInputProps}) => (
                                                    <section>
                                                    <div {...getRootProps()}>
                                                        <input {...getInputProps()} />
                                                        <p>Drag 'n' drop some files here, or click to select files</p>
                                                    </div>
                                                    </section>
                                                )}
                                            </Dropzone>
                                            {
                                            editListing?.ListingImage?.length>0 &&
                                            <div className="image_upload_wrapper">
                                                {
                                                    editListing?.ListingImage?.map((data:any, index:any) => (
                                                        <div className="image_upload_view" key={index}>
                                                            <div className="close" onClick={()=>{deleteImage(index)}}><img src="assets/img/delete.png" alt="" /></div>
                                                            {
                                                                (typeof data?.low_res !== "undefined") ? 
                                                                <img className="images" src={`${ data?.low_res }`} key={index} />
                                                                :
                                                                <img className="images" src={URL.createObjectURL(data)} key={index} />
                                                            }
                                                            
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            }
                                        </div>
                                    </>
                                }

                                {
                                    //Additional Info
                                    activeEdit === "add_info" &&
                                    <>
                                    <div className="title margin-bottom-20">Additional Information</div>
                                    <div className="itemDetails_option_wrapper">

                                        <div className="row margin-top-10">
                                            <span>Business Type</span>
                                            <IonItem lines="none" className="itemDetails_select">
                                                <select value={editListing?.business_type} onChange={ (e) => {setEditListing({ ...editListing, business_type: e.target.value }) } } defaultValue={""}>
                                                    <option value="" disabled>Business Type</option>
                                                    <option value="personal">Personal</option>
                                                    <option value="business">Business</option>
                                                </select>
                                            </IonItem>
                                        </div>

                                        {
                                        (editListing?.category == "home" || editListing?.category == "facility") &&
                                            <div className="row margin-top-10">
                                                <span>Item Type</span>
                                                <IonItem lines="none" className="itemDetails_select">
                                                    <select value={editListing?.place_type} onChange={ (e) => {setEditListing({ ...editListing, place_type: e.target.value }) } } defaultValue={""}>
                                                        <option value="" disabled>Item Type</option>
                                                        <option value="entire">Entire {editListing?.category}</option>
                                                        <option value="shared">Shared {editListing?.category}</option>
                                                    </select>
                                                </IonItem>
                                            </div>
                                        }

                                        {
                                        editListing?.category == "home" &&
                                        <>
                                            
                                            <div className="row margin-top-10">
                                                <span>Bed Capacity</span>
                                                <IonItem lines="none" className="input">
                                                    <IonInput value={editListing?.bedroom_capacity} onIonChange={ (e) => {setEditListing({ ...editListing, bedroom_capacity: e.detail.value! })} } min="0" type="number" placeholder="0"></IonInput>
                                                </IonItem>
                                            </div>

                                            <div className="row margin-top-10">
                                                <span>Guest Capacity</span>
                                                <IonItem lines="none" className="input">
                                                    <IonInput value={editListing?.guest_capacity} onIonChange={ (e) => {setEditListing({ ...editListing, guest_capacity: e.detail.value! })} } min="0" type="number" placeholder="0"></IonInput>
                                                </IonItem>
                                            </div>

                                            <div className="row margin-top-10">
                                                <span>Number of Bathrooms</span>
                                                <IonItem lines="none" className="input">
                                                    <IonInput value={editListing?.bathroom_capacity} onIonChange={ (e) => {setEditListing({ ...editListing, bathroom_capacity: e.detail.value! })} } min="0" type="number" placeholder="0"></IonInput>
                                                </IonItem>
                                            </div>
                                        </>
                                        }

                                    </div>
                                    </>
                                }

                                {
                                    //Address
                                    activeEdit === "address" &&
                                    <>
                                        <div className="title">Listing Address</div>
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
                                                            editListing?.country

                                                        }
                                                        onChange={(val) => {setCountry(val); setEditListing({...editListing, country: val})  } } />
                                                    </IonItem>
                                                </div>
                                                <div>
                                                    <span>City</span>
                                                    <IonItem lines="none" className="input">
                                                        <RegionDropdown
                                                        country={ country ? country : editListing?.country }
                                                        value={
                                                            // region
                                                            editListing?.city
                                                        }
                                                        onChange={(val) => { setRegion(val); setEditListing({...editListing, city: val}) } } />
                                                    </IonItem>
                                                </div>
                                            </div>
                                            <div className="row grid full-width margin-top-10">
                                                <div>
                                                    <span>Address</span>
                                                    <IonItem lines="none" className="input">
                                                        <IonInput value={editListing?.address} onIonChange={ (e) => {setEditListing({ ...editListing, address: e.detail.value! })} } type="text" placeholder="Enter address"></IonInput>
                                                    </IonItem>
                                                </div>
                                            </div>
                                                

                                        </div>
                                    </>
                                }

                                {
                                    //Price
                                    activeEdit === "price" &&
                                    <>
                                        <div className="title">Listing Price & Discounts</div>
                                        <div className="pricing_wrapper">
                                            <div className="row grid margin-top-10">
                                                <div className="grid_inner">
                                                    <span>Price</span>
                                                    <IonItem lines="none" className="input">
                                                        <div className="symbol">$</div>
                                                        <IonInput value={editListing?.price} onIonChange={ (e) => {setEditListing({ ...editListing, price: e.detail.value! })} } min="0" type="number" placeholder="0"></IonInput>
                                                    </IonItem>
                                                </div>
                                                <div className="grid_inner">
                                                    <span></span>
                                                    <IonItem lines="none" className="itemDetails_select">
                                                        <select value={editListing?.rate_type} onChange={ (e) => {setEditListing({ ...editListing, rate_type: e.target.value }) } } defaultValue={""}>
                                                            <option value="" disabled>rate</option>
                                                            <option value="hourly">per hour</option>
                                                            <option value="daily">per day</option>
                                                            <option value="weekly">per week</option>
                                                            <option value="monthly">per month</option>
                                                            <option value="yearly">per year</option>
                                                        </select>
                                                    </IonItem>
                                                </div>
                                            </div>

                                            <div className="row margin-top-30">
                                                <span>Discount</span>
                                                <IonItem lines="none" className="input">
                                                    <div className="symbol">%</div>
                                                    <IonInput value={editListing?.discount} onIonChange={ (e) => {setEditListing({ ...editListing, discount: e.detail.value! })} } min="0" type="number" placeholder="0"></IonInput>
                                                </IonItem>
                                                <div className="small_text">You can skip the discount option, you can always visit your dashboard and add or remove discount option on your item.</div>
                                            </div>
                                        </div>
                                    </>
                                }
                                {
                                    //Active Status
                                    activeEdit === "active_status" &&
                                    <>
                                        <div className="title">listing status </div>
                                        <div className="active_listing_wrapper">

                                            { // if there is missing compliance
                                            editListing?.status !=="approved" &&
                                            <>
                                                <div className="warning">* Please resolve all pending compliance requirements before activating this item.</div>
                                                <div className="active_listing_box inactive ">
                                                    <div className="checkbox_wrapper">
                                                        <div className="checkbox green">
                                                            {
                                                            activeStatus === "active" &&
                                                                <div className="check">
                                                                    <img src="assets/img/icons/checked.png" alt="" />
                                                                </div>
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="listing_info">
                                                        <div className="title">ACTIVE</div>
                                                        <div className="description">This item will be available in the public listing and guest can request to book this item.</div>
                                                    </div>
                                                </div>
                                            </>
                                            }
                                            {// if all missing compliance is cleared
                                            editListing?.status =="approved" &&
                                            <>
                                                <div className="active_listing_box">
                                                    <div className="checkbox_wrapper">
                                                        <div onClick={()=> { setActiveStatus("active") }} className="checkbox green">
                                                            {
                                                            activeStatus === "active" &&
                                                                <div className="check">
                                                                    <img src="assets/img/icons/checked.png" alt="" />
                                                                </div>
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="listing_info">
                                                        <div className="title">ACTIVE</div>
                                                        <div className="description">This item will be available in the public listing and guest can request to book this item.</div>
                                                    </div>
                                                </div>
                                            </>
                                            }
                                            <div className="active_listing_box">
                                                <div className="checkbox_wrapper">
                                                    <div onClick={()=> { setActiveStatus("paused") }} className="checkbox orange">
                                                        {
                                                        activeStatus === "paused" &&
                                                            <div className="check">
                                                                <img src="assets/img/icons/checked.png" alt="" />
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                                <div className="listing_info">
                                                    <div className="title">PAUSE</div>
                                                    <div className="description">This item will not be available temporarily for (1 month) in the public listing and guest wont be able request to book this item for the period of time.</div>
                                                </div>
                                            </div>
                                            <div className="active_listing_box">
                                                <div className="checkbox_wrapper">
                                                    <div onClick={()=> { setActiveStatus("deactivated") }} className="checkbox red">
                                                        {
                                                        activeStatus === "deactivated" &&
                                                            <div className="check">
                                                                <img src="assets/img/icons/checked.png" alt="" />
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                                <div className="listing_info">
                                                    <div className="title">DEACTIVATE</div>
                                                    <div className="description">This item will no longer be available in the public listing and guest can no longer request to book this item.</div>
                                                </div>
                                            </div>


                                        </div>
                                        
                                    </>
                                }

    {
                                // ----------------------- POLICIES SECTION 
    }
                                {
                                    //Check-in
                                    activeEdit === "check_in" &&
                                    <>
                                        <div className="title">Check-in time</div>
                                        <IonItem lines="none" className="sub_category_select margin-top-10">
                                            <select value={editListing?.listing_requirement.find((data:any) => data?.title === "check-in")?.desc} onChange={ (e) => { ListingRequirementAmmend("check-in", e); } } defaultValue={""}>
                                                <option value="" disabled>Check-in time</option>
                                                <option value="12 AM">After 12 AM</option>
                                                <option value="1 AM">After 1 AM</option>
                                                <option value="2 AM">After 2 AM</option>
                                                <option value="3 AM">After 3 AM</option>
                                                <option value="4 AM">After 4 AM</option>
                                                <option value="5 AM">After 5 AM</option>
                                                <option value="6 AM">After 6 AM</option>
                                                <option value="7 AM">After 7 AM</option>
                                                <option value="8 AM">After 8 AM</option>
                                                <option value="9 AM">After 9 AM</option>
                                                <option value="10 AM">After 10 AM</option>
                                                <option value="11 AM">After 11 AM</option>
                                                <option value="12 PM">After 12 PM</option>
                                                <option value="1 PM">After 1 PM</option>
                                                <option value="2 PM">After 2 PM</option>
                                                <option value="3 PM">After 3 PM</option>
                                                <option value="4 PM">After 4 PM</option>
                                                <option value="5 PM">After 5 PM</option>
                                                <option value="6 PM">After 6 PM</option>
                                                <option value="7 PM">After 7 PM</option>
                                                <option value="8 PM">After 8 PM</option>
                                                <option value="9 PM">After 9 PM</option>
                                                <option value="10 PM">After 10 PM</option>
                                                <option value="11 PM">After 11 PM</option>
                                                <option value="12 PM">After 12 PM</option>  
                                            </select>
                                        </IonItem>
                                        <div className="illustration_wrapper">
                                            <img className="illustration" src="assets/img/time.png" alt="" />
                                            <div className="illustration_details">What time do you expect your guest to check-in at your place?</div>
                                        </div>
                                        
                                    </>
                                }

                                {
                                    //Check-out
                                    activeEdit === "check_out" &&
                                    <>
                                        <div className="title">Check-out time</div>
                                        <IonItem lines="none" className="sub_category_select margin-top-10">
                                            <select value={editListing?.listing_requirement.find((data:any) => data?.title === "check-out")?.desc} onChange={ (e) => { ListingRequirementAmmend("check-out", e); } } defaultValue={""}>
                                                <option value="" disabled>Check-out time</option>
                                                <option value="12 AM">Before 12 AM</option>
                                                <option value="1 AM">Before 1 AM</option>
                                                <option value="2 AM">Before 2 AM</option>
                                                <option value="3 AM">Before 3 AM</option>
                                                <option value="4 AM">Before 4 AM</option>
                                                <option value="5 AM">Before 5 AM</option>
                                                <option value="6 AM">Before 6 AM</option>
                                                <option value="7 AM">Before 7 AM</option>
                                                <option value="8 AM">Before 8 AM</option>
                                                <option value="9 AM">Before 9 AM</option>
                                                <option value="10 AM">Before 10 AM</option>
                                                <option value="11 AM">Before 11 AM</option>
                                                <option value="12 PM">Before 12 PM</option>
                                                <option value="1 PM">Before 1 PM</option>
                                                <option value="2 PM">Before 2 PM</option>
                                                <option value="3 PM">Before 3 PM</option>
                                                <option value="4 PM">Before 4 PM</option>
                                                <option value="5 PM">Before 5 PM</option>
                                                <option value="6 PM">Before 6 PM</option>
                                                <option value="7 PM">Before 7 PM</option>
                                                <option value="8 PM">Before 8 PM</option>
                                                <option value="9 PM">Before 9 PM</option>
                                                <option value="10 PM">Before 10 PM</option>
                                                <option value="11 PM">Before 11 PM</option>
                                                <option value="12 PM">Before 12 PM</option>  
                                            </select>
                                        </IonItem>
                                        <div className="illustration_wrapper">
                                            <img className="illustration" src="assets/img/time.png" alt="" />
                                            <div className="illustration_details">What time do you expect your guest to check-out at your place?</div>
                                        </div>
                                        
                                    </>
                                }

                                {
                                    //Trip start
                                    activeEdit === "trip-start" &&
                                    <>
                                        <div className="title">Trip start</div>
                                        <IonItem lines="none" className="sub_category_select margin-top-10">
                                            <select value={editListing?.listing_requirement.find((data:any) => data?.title === "trip-start")?.desc} onChange={ (e) => { ListingRequirementAmmend("trip-start", e); } } defaultValue={""}>
                                                <option value="" disabled>Trip start time</option>
                                                <option value="12 AM">After 12 AM</option>
                                                <option value="1 AM">After 1 AM</option>
                                                <option value="2 AM">After 2 AM</option>
                                                <option value="3 AM">After 3 AM</option>
                                                <option value="4 AM">After 4 AM</option>
                                                <option value="5 AM">After 5 AM</option>
                                                <option value="6 AM">After 6 AM</option>
                                                <option value="7 AM">After 7 AM</option>
                                                <option value="8 AM">After 8 AM</option>
                                                <option value="9 AM">After 9 AM</option>
                                                <option value="10 AM">After 10 AM</option>
                                                <option value="11 AM">After 11 AM</option>
                                                <option value="12 PM">After 12 PM</option>
                                                <option value="1 PM">After 1 PM</option>
                                                <option value="2 PM">After 2 PM</option>
                                                <option value="3 PM">After 3 PM</option>
                                                <option value="4 PM">After 4 PM</option>
                                                <option value="5 PM">After 5 PM</option>
                                                <option value="6 PM">After 6 PM</option>
                                                <option value="7 PM">After 7 PM</option>
                                                <option value="8 PM">After 8 PM</option>
                                                <option value="9 PM">After 9 PM</option>
                                                <option value="10 PM">After 10 PM</option>
                                                <option value="11 PM">After 11 PM</option>
                                                <option value="12 PM">After 12 PM</option>  
                                            </select>
                                        </IonItem>
                                        <div className="illustration_wrapper">
                                            <img className="illustration" src="assets/img/time.png" alt="" />
                                            <div className="illustration_details">What time do you expect the renter to rent your item?</div>
                                        </div>
                                        
                                    </>
                                }

                                {
                                    //Trip end
                                    activeEdit === "trip-end" &&
                                    <>
                                        <div className="title">Trip ends</div>
                                        <IonItem lines="none" className="sub_category_select margin-top-10">
                                            <select value={editListing?.listing_requirement.find((data:any) => data?.title === "trip-end")?.desc} onChange={ (e) => { ListingRequirementAmmend("trip-end", e); } } defaultValue={""}>
                                                <option value="" disabled>Trip end time</option>
                                                <option value="12 AM">Before 12 AM</option>
                                                <option value="1 AM">Before 1 AM</option>
                                                <option value="2 AM">Before 2 AM</option>
                                                <option value="3 AM">Before 3 AM</option>
                                                <option value="4 AM">Before 4 AM</option>
                                                <option value="5 AM">Before 5 AM</option>
                                                <option value="6 AM">Before 6 AM</option>
                                                <option value="7 AM">Before 7 AM</option>
                                                <option value="8 AM">Before 8 AM</option>
                                                <option value="9 AM">Before 9 AM</option>
                                                <option value="10 AM">Before 10 AM</option>
                                                <option value="11 AM">Before 11 AM</option>
                                                <option value="12 PM">Before 12 PM</option>
                                                <option value="1 PM">Before 1 PM</option>
                                                <option value="2 PM">Before 2 PM</option>
                                                <option value="3 PM">Before 3 PM</option>
                                                <option value="4 PM">Before 4 PM</option>
                                                <option value="5 PM">Before 5 PM</option>
                                                <option value="6 PM">Before 6 PM</option>
                                                <option value="7 PM">Before 7 PM</option>
                                                <option value="8 PM">Before 8 PM</option>
                                                <option value="9 PM">Before 9 PM</option>
                                                <option value="10 PM">Before 10 PM</option>
                                                <option value="11 PM">Before 11 PM</option>
                                                <option value="12 PM">Before 12 PM</option>  
                                            </select>
                                        </IonItem>
                                        <div className="illustration_wrapper">
                                            <img className="illustration" src="assets/img/time.png" alt="" />
                                            <div className="illustration_details">What time do you expect your renter to rent at your item?</div>
                                        </div>
                                        
                                    </>
                                }
                                {
                                    //pickup start
                                    activeEdit === "pickup-time" &&
                                    <>
                                        <div className="title">Item pick up time</div>
                                        <IonItem lines="none" className="sub_category_select margin-top-10">
                                            <select value={editListing?.listing_requirement.find((data:any) => data?.title === "pickup-time")?.desc} onChange={ (e) => { ListingRequirementAmmend("pickup-time", e); } } defaultValue={""}>
                                                <option value="" disabled>Pick up time</option>
                                                <option value="12 AM">After 12 AM</option>
                                                <option value="1 AM">After 1 AM</option>
                                                <option value="2 AM">After 2 AM</option>
                                                <option value="3 AM">After 3 AM</option>
                                                <option value="4 AM">After 4 AM</option>
                                                <option value="5 AM">After 5 AM</option>
                                                <option value="6 AM">After 6 AM</option>
                                                <option value="7 AM">After 7 AM</option>
                                                <option value="8 AM">After 8 AM</option>
                                                <option value="9 AM">After 9 AM</option>
                                                <option value="10 AM">After 10 AM</option>
                                                <option value="11 AM">After 11 AM</option>
                                                <option value="12 PM">After 12 PM</option>
                                                <option value="1 PM">After 1 PM</option>
                                                <option value="2 PM">After 2 PM</option>
                                                <option value="3 PM">After 3 PM</option>
                                                <option value="4 PM">After 4 PM</option>
                                                <option value="5 PM">After 5 PM</option>
                                                <option value="6 PM">After 6 PM</option>
                                                <option value="7 PM">After 7 PM</option>
                                                <option value="8 PM">After 8 PM</option>
                                                <option value="9 PM">After 9 PM</option>
                                                <option value="10 PM">After 10 PM</option>
                                                <option value="11 PM">After 11 PM</option>
                                                <option value="12 PM">After 12 PM</option>  
                                            </select>
                                        </IonItem>
                                        <div className="illustration_wrapper">
                                            <img className="illustration" src="assets/img/time.png" alt="" />
                                            <div className="illustration_details">What time do you expect the renter to rent your item?</div>
                                        </div>
                                        
                                    </>
                                }

                                {
                                    //return end
                                    activeEdit === "return-time" &&
                                    <>
                                        <div className="title">Item return time</div>
                                        <IonItem lines="none" className="sub_category_select margin-top-10">
                                            <select value={editListing?.listing_requirement.find((data:any) => data?.title === "return-time")?.desc} onChange={ (e) => { ListingRequirementAmmend("return-time", e); } } defaultValue={""}>
                                                <option value="" disabled>Return time</option>
                                                <option value="12 AM">Before 12 AM</option>
                                                <option value="1 AM">Before 1 AM</option>
                                                <option value="2 AM">Before 2 AM</option>
                                                <option value="3 AM">Before 3 AM</option>
                                                <option value="4 AM">Before 4 AM</option>
                                                <option value="5 AM">Before 5 AM</option>
                                                <option value="6 AM">Before 6 AM</option>
                                                <option value="7 AM">Before 7 AM</option>
                                                <option value="8 AM">Before 8 AM</option>
                                                <option value="9 AM">Before 9 AM</option>
                                                <option value="10 AM">Before 10 AM</option>
                                                <option value="11 AM">Before 11 AM</option>
                                                <option value="12 PM">Before 12 PM</option>
                                                <option value="1 PM">Before 1 PM</option>
                                                <option value="2 PM">Before 2 PM</option>
                                                <option value="3 PM">Before 3 PM</option>
                                                <option value="4 PM">Before 4 PM</option>
                                                <option value="5 PM">Before 5 PM</option>
                                                <option value="6 PM">Before 6 PM</option>
                                                <option value="7 PM">Before 7 PM</option>
                                                <option value="8 PM">Before 8 PM</option>
                                                <option value="9 PM">Before 9 PM</option>
                                                <option value="10 PM">Before 10 PM</option>
                                                <option value="11 PM">Before 11 PM</option>
                                                <option value="12 PM">Before 12 PM</option>  
                                            </select>
                                        </IonItem>
                                        <div className="illustration_wrapper">
                                            <img className="illustration" src="assets/img/time.png" alt="" />
                                            <div className="illustration_details">What time do you expect you renter to rent at your item?</div>
                                        </div>
                                        
                                    </>
                                }
                                {
                                    //Travel Distance
                                    activeEdit === "max-travel" &&
                                    <>
                                        <div className="title">Maximum travel distance / Day</div>
                                        <div className="pricing_wrapper">
                                            <div className="row grid margin-top-10">
                                                <IonItem lines="none" className="sub_category_select margin-top-10">
                                                    <IonInput value={editListing?.listing_requirement?.find((data:any) => data?.title === "max-travel")?.desc} onIonChange={ (e) => {IonicListingRequirementAmmend("max-travel", e.detail.value!)} } min="0" type="number" placeholder="0"></IonInput>
                                                </IonItem>
                                                <IonItem lines="none" className="sub_category_select margin-top-10">
                                                    <select value={editListing?.listing_requirement?.find((data:any) => data?.title === "distance_unit")?.desc} onChange={ (e) => { IonicListingRequirementAmmend("distance_unit", e.target.value); } } defaultValue={""}>
                                                        <option value="" disabled>Unit</option>
                                                        <option value="km">Kilometers (KM)</option>
                                                        <option value="mi">Miles (Mi)</option> 
                                                    </select>
                                                </IonItem>
                                            </div>
                                        </div>
                                        <div className="illustration_wrapper">
                                            <img className="illustration" src="assets/img/travel.png" alt="" />
                                            <div className="illustration_details">Set a maximum travel distance per day</div>
                                        </div>
                                        
                                    </>
                                }
                                {
                                    //Delivery & Pickup
                                    activeEdit === "delivery_pickup" &&
                                    <>
                                        <div className="title margin-bottom-10">Delivery & Pickup</div>
                                        <div className="row margin-top-20">
                                            <span>Do you deliver the item to the renter?</span>
                                            <IonItem lines="none" className="sub_category_select margin-top-10">
                                                <select value={editListing?.listing_requirement.find((data:any) => data?.title === "allow_deliver")?.desc} onChange={ (e) => { ListingRequirementAmmend("allow_deliver", e); } } defaultValue={""}>
                                                    <option value="" disabled>Do you deliver?</option>
                                                    <option value="yes">Yes, I deliver</option>
                                                    <option value="no">No, I don't deliver</option> 
                                                </select>
                                            </IonItem>
                                        </div>

                                        {  
                                        // if delivery is enabled
                                        editListing?.listing_requirement.filter((data:any) => data?.title === "allow_deliver").length > 0 && editListing?.listing_requirement.find((data:any) => data?.title === "allow_deliver")?.desc === "yes" &&
                                        <>
                                            <div className="row margin-top-20">
                                                <span>Are you charging the delivery for free?</span>
                                                <IonItem lines="none" className="sub_category_select margin-top-10">
                                                    <select value={editListing?.listing_requirement.find((data:any) => data?.title === "delivery_charge")?.desc} onChange={ (e) => { ListingRequirementAmmend("delivery_charge", e); } } defaultValue={""}>
                                                        <option value="" disabled>Is it free delivery?</option>
                                                        <option value="free">Yes, it's free</option>
                                                        <option value="paid">No, there is additional charge</option> 
                                                    </select>
                                                </IonItem>
                                            </div>


                                            {
                                                // if delivery has a charged
                                                editListing?.listing_requirement.filter((data:any) => data?.title === "delivery_charge").length > 0 && editListing?.listing_requirement.find((data:any) => data?.title === "delivery_charge")?.desc === "paid" &&
                                                <>
                                                    <div className="row margin-top-20">
                                                        <span>How much are you charging for delivery?</span>
                                                        <IonItem lines="none" className="sub_category_select margin-top-10 input">
                                                            <div className="symbol">$</div>
                                                            <IonInput value={editListing?.listing_requirement?.find((data:any) => data?.title === "delivery_charge_amount")?.desc} onIonChange={ (e) => {IonicListingRequirementAmmend("delivery_charge_amount", e.detail.value!)} } min="0" type="number" placeholder="0"></IonInput>
                                                        </IonItem>
                                                        
                                                    </div>
                                                </>
                                            }

                                            <div className="row margin-top-20">
                                                <span>Maximum milage coverage for delivery</span>
                                                <IonItem lines="none" className="sub_category_select margin-top-10 input">
                                                    <IonInput value={editListing?.listing_requirement?.find((data:any) => data?.title === "delivery_coverage")?.desc} onIonChange={ (e) => {IonicListingRequirementAmmend("delivery_coverage", e.detail.value!)} } min="0" type="number" placeholder="0"></IonInput>
                                                    <div className="symbol">
                                                        {
                                                            editListing?.listing_requirement.filter((data:any) => data?.title === "distance_unit").length > 0 ?
                                                            editListing?.listing_requirement?.find((data:any) => data?.title === "distance_unit")?.desc
                                                            : "km/mi"
                                                        }
                                                    </div>
                                                </IonItem>
                                                
                                            </div>

                                        </>
                                        }


                                        <div className="illustration_wrapper">
                                            <img className="illustration" src="assets/img/delivery.png" alt="" />
                                            <div className="illustration_details">Set your Delivery and pickup location and you can add a charge for it.</div>
                                        </div>
                                        
                                    </>
                                }

                                {
                                    //Quiet Hours Start
                                    activeEdit === "quiet_hour" &&
                                    <>
                                        <div className="title">Quiet Hours</div>
                                        <IonItem lines="none" className="sub_category_select margin-top-10">
                                            <select value={editListing?.ListingRequirement?.find((data:any) => data?.title === "quiet_hour_start")?.desc} onChange={ (e) => { ListingRequirementAmmend("quiet_hour_start", e); } } defaultValue={""}>
                                                <option value="" disabled>Start of quiet time</option>
                                                <option value="12 AM">12 AM</option>
                                                <option value="1 AM">1 AM</option>
                                                <option value="2 AM">2 AM</option>
                                                <option value="3 AM">3 AM</option>
                                                <option value="4 AM">4 AM</option>
                                                <option value="5 AM">5 AM</option>
                                                <option value="6 AM">6 AM</option>
                                                <option value="7 AM">7 AM</option>
                                                <option value="8 AM">8 AM</option>
                                                <option value="9 AM">9 AM</option>
                                                <option value="10 AM">10 AM</option>
                                                <option value="11 AM">11 AM</option>
                                                <option value="12 PM">12 PM</option>
                                                <option value="1 PM">1 PM</option>
                                                <option value="2 PM">2 PM</option>
                                                <option value="3 PM">3 PM</option>
                                                <option value="4 PM">4 PM</option>
                                                <option value="5 PM">5 PM</option>
                                                <option value="6 PM">6 PM</option>
                                                <option value="7 PM">7 PM</option>
                                                <option value="8 PM">8 PM</option>
                                                <option value="9 PM">9 PM</option>
                                                <option value="10 PM">10 PM</option>
                                                <option value="11 PM">11 PM</option>
                                                <option value="12 PM">12 PM</option>  
                                            </select>
                                        </IonItem>
                                        <IonItem lines="none" className="sub_category_select margin-top-10">
                                            <select value={editListing?.ListingRequirement?.find((data:any) => data?.title === "quiet_hour_end")?.desc} onChange={ (e) => { ListingRequirementAmmend("quiet_hour_end", e); } } defaultValue={""}>
                                                <option value="" disabled>End of quiet time</option>
                                                <option value="12 AM">12 AM</option>
                                                <option value="1 AM">1 AM</option>
                                                <option value="2 AM">2 AM</option>
                                                <option value="3 AM">3 AM</option>
                                                <option value="4 AM">4 AM</option>
                                                <option value="5 AM">5 AM</option>
                                                <option value="6 AM">6 AM</option>
                                                <option value="7 AM">7 AM</option>
                                                <option value="8 AM">8 AM</option>
                                                <option value="9 AM">9 AM</option>
                                                <option value="10 AM">10 AM</option>
                                                <option value="11 AM">11 AM</option>
                                                <option value="12 PM">12 PM</option>
                                                <option value="1 PM">1 PM</option>
                                                <option value="2 PM">2 PM</option>
                                                <option value="3 PM">3 PM</option>
                                                <option value="4 PM">4 PM</option>
                                                <option value="5 PM">5 PM</option>
                                                <option value="6 PM">6 PM</option>
                                                <option value="7 PM">7 PM</option>
                                                <option value="8 PM">8 PM</option>
                                                <option value="9 PM">9 PM</option>
                                                <option value="10 PM">10 PM</option>
                                                <option value="11 PM">11 PM</option>
                                                <option value="12 PM">12 PM</option>  
                                            </select>
                                        </IonItem>
                                        <div className="illustration_wrapper">
                                            <img className="illustration" src="assets/img/quiet.png" alt="" />
                                            <div className="illustration_details">Request your guest observe quiet hours</div>
                                        </div>
                                        
                                    </>
                                }
                                {
                                    //Commercial Use
                                    activeEdit === "event_use" &&
                                    <>
                                        <div className="title">Allow commercial use</div>
                                        <IonItem lines="none" className="sub_category_select margin-top-10">
                                            <select value={editListing?.ListingRequirement?.find((data:any) => data?.title === "event_use")?.desc} onChange={ (e) => { ListingRequirementAmmend("event_use", e); } } defaultValue={""}>
                                                <option value="" disabled>Do you allow?</option>
                                                <option value="yes">Yes, I allow</option>
                                                <option value="no">No, I don't allow</option> 
                                            </select>
                                        </IonItem>
                                        <div className="illustration_wrapper">
                                            <img className="illustration" src="assets/img/party.png" alt="" />
                                            <div className="illustration_details">Do you allow your guest to use your place to host an event, or commercial use?</div>
                                        </div>
                                        
                                    </>
                                }

                                {
                                    //Allow pets
                                    activeEdit === "allow_pets" &&
                                    <>
                                        <div className="title">Allow commercial use</div>
                                        <IonItem lines="none" className="sub_category_select margin-top-10">
                                            <select value={editListing?.listing_requirement.find((data:any) => data?.title === "allow_pets")?.desc} onChange={ (e) => { ListingRequirementAmmend("allow_pets", e); } } defaultValue={""}>
                                                <option value="" disabled>Select your options</option>
                                                <option value="yes">Yes, I allow</option>
                                                <option value="service pet">Only service pet is allowed</option>
                                                <option value="no">No, I don't allow</option> 
                                            </select>
                                        </IonItem>
                                        <div className="illustration_wrapper">
                                            <img className="illustration" src="assets/img/pet.png" alt="" />
                                            <div className="illustration_details">Do you allow your guest to bring pets at your place?</div>
                                        </div>
                                        
                                    </>
                                }
                                {
                                    //Vehicle make & model
                                    activeEdit === "vehicle_brand_model" &&
                                    <>
                                        <div className="title margin-bottom-20">Vehicle Specifications</div>
                                        <div className="pricing_wrapper">

                                            <div className="row grid margin-top-10">
                                                <div className="grid_inner">
                                                    <span>Make</span>
                                                    <IonItem lines="none" className="sub_category_select margin-top-10">
                                                        <select value={editListing?.brand} onChange={ (e) => { setEditListing({ ...editListing, brand: e.target.value }); checkVehicleModel(e.target.value); }} defaultValue={""}>
                                                            <option value="" disabled>Vehicle Brand</option>
                                                            {
                                                                vehicleMake && vehicleMake.map((data: any, index: number) => {
                                                                    return (
                                                                        <option key={index} value={data}>{data}</option>
                                                                    )
                                                                })
                                                            }
                                                        </select>
                                                    </IonItem>
                                                </div>
                                                <div className="grid_inner">
                                                    <span>Model</span>
                                                    <IonItem lines="none" className="sub_category_select margin-top-10">
                                                        <select value={editListing?.model} onChange={ (e) => { setEditListing({ ...editListing, model: e.target.value }); } } defaultValue={""}>
                                                            <option value="" disabled>Vehicle Model</option>
                                                            {
                                                                vehicleModel && vehicleModel.map((data: any, index: number) => {
                                                                    return (
                                                                        <option key={index} value={data}>{data}</option>
                                                                    )
                                                                })
                                                            }
                                                        </select>
                                                    </IonItem>
                                                </div>
                                            </div>

                                            <div className="row grid margin-top-10">
                                                <div className="grid_inner">
                                                    <span>Model Year</span>
                                                    <IonItem lines="none" className="sub_category_select margin-top-10">
                                                        <select value={editListing?.model_year} onChange={ (e) => { setEditListing({ ...editListing, model_year: e.target.value }); }} defaultValue={""}>
                                                            <option value="" disabled>Model Year</option>
                                                            {
                                                                yearsArray && yearsArray.map((year: any, index: number) => {
                                                                    return (
                                                                        <option key={index} value={year}>{year}</option>
                                                                    )
                                                                })
                                                            }
                                                        </select>
                                                    </IonItem>
                                                </div>
                                                <div className="grid_inner">
                                                    <span>Wheel Configuration</span>
                                                    <IonItem lines="none" className="sub_category_select margin-top-10">
                                                        <select value={editListing?.wheel_number} onChange={ (e) => { setEditListing({ ...editListing, wheel_number: e.target.value }); } } defaultValue={""}>
                                                            <option value="" disabled>Wheel Configuration</option>
                                                            <option value="2">2 Wheels</option>
                                                            <option value="3">3 Wheels</option>
                                                            <option value="4">4 Wheels</option>
                                                            <option value="6">6 Wheels</option>
                                                            <option value="8">8 Wheels</option>
                                                            <option value="10">10 Wheels</option>
                                                            <option value="12">12 Wheels</option>
                                                            <option value="14">14 Wheels</option>
                                                            <option value="16">16 Wheels</option>
                                                            <option value="18">18 Wheels</option>
                                                            <option value="19">18 plus</option>
                                                        </select>
                                                    </IonItem>
                                                </div>
                                            </div>

                                            <div className="row grid margin-top-10">
                                                <div className="grid_inner">
                                                    <span>Transmission</span>
                                                    <IonItem lines="none" className="sub_category_select margin-top-10">
                                                        <select value={editListing?.transmission} onChange={ (e) => { setEditListing({ ...editListing, transmission: e.target.value }); }} defaultValue={""}>
                                                            <option value="" disabled>Transmission</option>
                                                            <option value="automatic">Automatic</option>
                                                            <option value="manual">Manual</option>
                                                        </select>
                                                    </IonItem>
                                                </div>
                                                <div className="grid_inner">
                                                    <span>Fuel Type</span>
                                                    <IonItem lines="none" className="sub_category_select margin-top-10">
                                                        <select value={editListing?.fuel_type} onChange={ (e) => { setEditListing({ ...editListing, fuel_type: e.target.value }); } } defaultValue={""}>
                                                            <option value="" disabled>Fuel Type</option>
                                                            <option value="gasoline">Gasoline</option>
                                                            <option value="diesel">Diesel</option>
                                                            <option value="electric">Electric</option>
                                                            <option value="hybrid">Hybrid</option>
                                                        </select>
                                                    </IonItem>
                                                </div>
                                            </div>

                                            <div className="row grid margin-top-10">
                                                <div className="grid_inner">
                                                    <span>Seating Capacity</span>
                                                    <IonItem lines="none" className="sub_category_select margin-top-10">
                                                        <select value={editListing?.seat_capacity} onChange={ (e) => { setEditListing({ ...editListing, seat_capacity: e.target.value }); }} defaultValue={""}>
                                                            <option value="" disabled>Seating Capacity</option>
                                                            <option value="1">1 Seater</option>
                                                            <option value="2">2 Seater</option>
                                                            <option value="3">3 Seater</option>
                                                            <option value="4">4 Seater</option>
                                                            <option value="5">5 Seater</option>
                                                            <option value="6">6 Seater</option>
                                                            <option value="7">7 Seater</option>
                                                            <option value="8">8 Seater</option>
                                                            <option value="9">9 Seater</option>
                                                            <option value="10">10 Seater</option>
                                                            <option value="11">11 Seater</option>
                                                            <option value="12">12 Seater</option>
                                                            <option value="12+">12+ Seater</option>
                                                        </select>
                                                    </IonItem>
                                                </div>
                                                <div className="grid_inner">
                                                    <span>Door Count</span>
                                                    <IonItem lines="none" className="sub_category_select margin-top-10">
                                                        <select value={editListing?.door_number} onChange={ (e) => { setEditListing({ ...editListing, door_number: e.target.value }); } } defaultValue={""}>
                                                            <option value="" disabled>Door Count</option>
                                                            <option value="1">1-Door</option>
                                                            <option value="2">2-Doors</option>
                                                            <option value="3">3-Doors</option>
                                                            <option value="4">4-Doors</option>
                                                            <option value="5">5-Doors</option>
                                                            <option value="6">6-Doors</option>
                                                            <option value="2-with-slider">2-Doors with slider(s)</option>
                                                        </select>
                                                    </IonItem>
                                                </div>
                                            </div>

                                            <div className="row grid margin-top-10">
                                                <div className="grid_inner">
                                                    <span>Steering Configuration</span>
                                                    <IonItem lines="none" className="sub_category_select margin-top-10">
                                                        <select value={editListing?.steering_side} onChange={ (e) => { setEditListing({ ...editListing, steering_side: e.target.value }); }} defaultValue={""}>
                                                            <option value="" disabled>Steering Configuration</option>
                                                            <option value="left">Left-Hand Drive (LHD)</option>
                                                            <option value="right">Right-Hand Drive (RHD)</option>
                                                        </select>
                                                    </IonItem>
                                                </div>
                                                <div className="grid_inner">
                                                    <span>Vehicle Color</span>
                                                    <IonItem lines="none" className="sub_category_select margin-top-10">
                                                        <select value={editListing?.color} onChange={ (e) => { setEditListing({ ...editListing, color: e.target.value }); } } defaultValue={""}>
                                                            <option value="" disabled>Vehicle Color</option>
                                                            {
                                                                Object.keys(color[0]).map((data: any, index: number) => {
                                                                    return (
                                                                        <option key={index} value={data}>{data}</option>
                                                                    )
                                                                })
                                                            }
                                                        </select>
                                                    </IonItem>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="illustration_wrapper">
                                            <img className="illustration" src="assets/img/car.png" alt="" />
                                            <div className="illustration_details">Set your vehicle brand & model. This will give more detailed information to the renter.</div>
                                        </div>
                                        
                                    </>
                                }
                                {
                                    //Vehicle info
                                    activeEdit === "vehicle_info" &&
                                    <>
                                        <div className="title margin-bottom-20">Vehicle Information</div>
                                        <div className="pricing_wrapper">

                                        <div className="row grid margin-top-10">
                                                <div className="grid_inner">
                                                    <span>Vehicle Plate Number</span>
                                                    <IonItem lines="none" className="form">
                                                        <IonInput value={editListing?.plate_number} onIonChange={ (e) => {setEditListing({ ...editListing, plate_number: e.detail.value! })} } name="title" placeholder="Vehicle Plate Number"></IonInput>
                                                    </IonItem>
                                                </div>
                                                
                                            </div>

                                            <div className="row grid margin-top-10">
                                                <div className="grid_inner">
                                                    <span>Insurance Provider</span>
                                                    <IonItem lines="none" className="form">
                                                        <IonInput value={editListing?.insurance_name} onIonChange={ (e) => {setEditListing({ ...editListing, insurance_name: e.detail.value! })} } name="title" placeholder="What's your insurance provider"></IonInput>
                                                    </IonItem>
                                                </div>
                                                <div className="grid_inner">
                                                    <span>Insurance Coverage Type</span>
                                                    <IonItem lines="none" className="sub_category_select margin-top-10">
                                                        <select value={editListing?.insurance_package} onChange={ (e) => { setEditListing({ ...editListing, insurance_package: e.target.value }); } } defaultValue={""}>
                                                            <option value="" disabled>Insurance Coverage Type</option>
                                                            <option value="comprehensive">Comprehensive Coverage</option>
                                                            <option value="third-party">Third-Party Coverage</option>
                                                            <option value="others">Others</option>
                                                        </select>
                                                    </IonItem>
                                                </div>
                                            </div>

                                            <div className="row grid margin-top-10">
                                                <div className="grid_inner">
                                                    <span>Insurance registered date</span>
                                                    <IonItem lines="none" className="sub_category_select margin-top-10">
                                                        {/* <input className="inputText" value={editListing?.entry_date} onChange={ (e) => { setEditListing({ ...editListing, entry_date: e.target.value }) } } type="date" name="Birthdate" placeholder="Date of Birth" /> */}
                                                        <IonInput type="date" value={editListing?.entry_date?.split("T")[0]} placeholder="Start Date" onIonChange={ (e) => { setEditListing({ ...editListing, entry_date: e.detail.value! }) } } name="startDate"></IonInput>
                                                        {/* <IonInput type="date" value={date_valid_formatter(editListing?.entry_date)} placeholder="Start Date" onIonChange={ (e) => { setEditListing({ ...editListing, entry_date: date_converter(e.detail.value!) }) } } name="startDate"></IonInput> */}
                                                    </IonItem>
                                                </div>
                                                <div className="grid_inner">
                                                    <span>Insurance expiry date</span>
                                                    <IonItem lines="none" className="sub_category_select margin-top-10">
                                                        {/* <input className="inputText" value={editListing?.expiry_date} onChange={ (e) => { setEditListing({ ...editListing, expiry_date: e.target.value }) } } type="date" name="Birthdate" placeholder="Date of Birth" /> */}
                                                        <IonInput type="date" value={editListing?.expiry_date?.split("T")[0]} placeholder="Start Date" onIonChange={ (e) => { setEditListing({ ...editListing, expiry_date: e.detail.value! }) } } name="startDate"></IonInput>
                                                        {/* <IonInput type="date" value={date_valid_formatter(editListing?.expiry_date)} placeholder="Start Date" onIonChange={ (e) => { setEditListing({ ...editListing, expiry_date: date_converter(e.detail.value!) }) } } name="startDate"></IonInput> */}
                                                    </IonItem>
                                                </div>
                                            </div>


                                        </div>
                                        <div className="illustration_wrapper">
                                            <img className="illustration" src="assets/img/car.png" alt="" />
                                            <div className="illustration_details">Set your vehicle brand & model. This will give more detailed information to the renter.</div>
                                        </div>
                                        
                                    </>
                                }
                                {
                                    //Cancellation Policy
                                    activeEdit === "cancellation" &&
                                    <>
                                        <div className="title">Cancellation Policy</div>
                                        <div className="active_listing_wrapper">

                                            
                                            <div className="active_listing_box">
                                                <div className="checkbox_wrapper">
                                                    <div onClick={()=> { ListingCancellationAmmend("standard") }} className="checkbox green">
                                                        {
                                                        editListing?.listing_requirement.find((data:any) => data?.title === "cancellation")?.desc === "standard" &&
                                                            <div className="check">
                                                                <img src="assets/img/icons/checked.png" alt="" />
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                                <div className="listing_info">
                                                    <div className="title">STANDARD CANCELLATION</div>
                                                    <div className="description">User can cancel until 48 hours before rental start date and time with a full refund, and you will not get any payment. If they cancel after that, you'll be paid for each day they consumed.</div>
                                                </div>
                                            </div>
                                            
                                            <div className="active_listing_box">
                                                <div className="checkbox_wrapper">
                                                    <div onClick={()=> { ListingCancellationAmmend("strict") }} className="checkbox green">
                                                        {
                                                        editListing?.listing_requirement.find((data:any) => data?.title === "cancellation")?.desc === "strict" &&
                                                            <div className="check">
                                                                <img src="assets/img/icons/checked.png" alt="" />
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                                <div className="listing_info">
                                                    <div className="title">STRICT CANCELLATION</div>
                                                    <div className="description">In order for the user to receive a full refund, user must cancel within 48 hours of booking, and the cancellation must occur at least 7 days before rental start date and time. If they cancel the booking between 3 and 7 days before rental start date and time, you’ll be paid 50% (minus the itematch service fee) for the total number of days of booking. If they cancel after that, you’ll be paid 100% (minus the itematch service fee) for the total number of days of booking.</div>
                                                </div>
                                            </div>
                                            <div className="active_listing_box">
                                                <div className="checkbox_wrapper">
                                                    <div onClick={()=> { ListingCancellationAmmend("super strict") }} className="checkbox green">
                                                        {
                                                        editListing?.listing_requirement.find((data:any) => data?.title === "cancellation")?.desc === "super strict" &&
                                                            <div className="check">
                                                                <img src="assets/img/icons/checked.png" alt="" />
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                                <div className="listing_info">
                                                    <div className="title">SUPER STRICT CANCELLATION</div>
                                                    <div className="description">In order for the “User” to receive a full refund, user must cancel within 48 hours of booking, and the cancellation must occur at least 30 days before rental start date and time.</div>
                                                </div>
                                            </div>


                                        </div>
                                        
                                    </>
                                }

                                


                            </div>
                        </div>
                            
                    </IonContent>

                <div className="editListingFooter">
                    {
                        allowSubmit &&
                        <IonButton onClick={()=>{submitEdit();}} className="save_edit" type="submit" expand="block">
                            {
                                loading &&
                                <>
                                    
                                    <IonSpinner name="circular"></IonSpinner> Saving
                                </>
                            }
                            {
                                !loading &&
                                <>
                                    
                                    Save
                                </>
                            }
                            
                        </IonButton>
                    }
                    {
                        !allowSubmit &&
                        <IonButton className="save_edit disabled" type="submit" expand="block" disabled>
                            Save
                        </IonButton>
                    }
                </div>

            </IonModal>

            <ConfirmModal 
                isClose = {()=> { setViewModalConfirm({isOpen:false}); setIsConfirmed(false); setLoading(false) } }
                viewModalConfirm = {viewModalConfirm}
                subject = {subject}
                confirmAction = {() => {setIsConfirmed(true); submitEdit(); setViewModalConfirm({isOpen:false}); }}
            />

        </>
      );
};
  
  export default ShowListModal;