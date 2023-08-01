import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ListingSetupCategory from '../components/ListingSetupCategory';
import ListingSetupSubCat from '../components/ListingSetupSubCat';
import ListingSetupTitle from '../components/ListingSetupTitle';
import ListingSetupAmenity from '../components/ListingSetupAmenity';
import ListingSetupItemDetails from '../components/ListingSetupItemDetails';
import ListingSetupItemLocation from '../components/ListingSetupItemLocation';
import ListingSetupPricing from '../components/ListingSetupPricing';
import ListingSetupPreview from '../components/ListingSetupPreview';
import ListingSetupImages from '../components/ListingSetupImages';
import Header from '../components/Header';
import ListingSetupFooter from '../components/ListingSetupFooter';
import LoaderPage from '../components/LoaderPage';
import UploadPage from '../components/UploadPage';
import { useState, useEffect, useRef} from 'react';
import {GetViewPortSize, LetterCount} from '../utilities/tools';
import {isSignedin} from '../actions/UserAction';
import '../css/CreateListing.css';
import {useDispatch, useSelector} from 'react-redux';
import {
    useParams,
    Link,
    useLocation
  } from "react-router-dom";

const CreateListing: React.FC = () => {

let location = useLocation();
const dispatch = useDispatch();

const locationChecker = () => {
    return ((location?.pathname == "/CreateListing/") || (location?.pathname == "/CreateListing") || (location?.pathname == "/owner/") || (location?.pathname == "/owner")) ?
    true :
    false;
};
const [loading, setLoading] = useState(true);
const [upload, setUpload] = useState(false);
const [error, setError] = useState(false);

  useEffect(() => {
    // execute only if this is the current page
    if(locationChecker()) {
      dispatch(isSignedin(response));
    }

  }, [location]);

  const response = (res:any) => {
    console.log("res", res);
    if(res?.status==200) {
      setTimeout(()=> {
        setLoading(false);
      }, 500);
    } else {
        window.location.href = "/";
    }
};



    
const itemCategoriesList = 
[
    {
        "category_code": 1001,
        "category_name": "home",
        "category_value": "home",
        "category_image": "home.jpg",
        "category_icon": "",
        "category_text_icon": "home.png",
        "category_description": "",
        "category_sub_category": [
            {
                "sub_category_code": 9001,
                "sub_category_name": "Apartments",
                "sub_category_value": "Apartment",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "A multi-unit building with individual living spaces for tenants."
            },
            {
                "sub_category_code": 9002,
                "sub_category_name": "Houses",
                "sub_category_value": "House",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "A single-family dwelling, often with a yard or outdoor space."
            },
            {
                "sub_category_code": 9003,
                "sub_category_name": "Townhouse",
                "sub_category_value": "Townhouse",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "A multi-level attached dwelling with shared walls."
            },
            {
                "sub_category_code": 9004,
                "sub_category_name": "Condo",
                "sub_category_value": "Condo",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "A type of apartment where individuals own their unit and share common areas."
            },
            {
                "sub_category_code": 9005,
                "sub_category_name": "Duplexe",
                "sub_category_value": "Duplexe",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "A two-unit building with separate entrances for each unit."
            },
            {
                "sub_category_code": 9006,
                "sub_category_name": "Studio",
                "sub_category_value": "Studio",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "A small apartment with a combined living and sleeping area."
            },
            {
                "sub_category_code": 9007,
                "sub_category_name": "Loft",
                "sub_category_value": "Loft",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "A large open space that has been converted into a living area."
            },
            {
                "sub_category_code": 9008,
                "sub_category_name": "Villa",
                "sub_category_value": "Villa",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "A luxurious and spacious home often located in a resort or vacation area."
            },
            {
                "sub_category_code": 9009,
                "sub_category_name": "Mobile",
                "sub_category_value": "Mobile",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "A dwelling that can be moved from one location to another."
            },
            {
                "sub_category_code": 9010,
                "sub_category_name": "Co-Living Space",
                "sub_category_value": "Co-Living",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Shared living spaces where tenants have their own bedroom but share common areas like kitchens and living rooms."
            },
            {
                "sub_category_code": 9011,
                "sub_category_name": "Basement",
                "sub_category_value": "Basement",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "A living space located below the main floor of a house."
            },
            {
                "sub_category_code": 9012,
                "sub_category_name": "Cottage",
                "sub_category_value": "Cottage",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "A small, cozy dwelling often located in a rural or vacation area."
            },
            {
                "sub_category_code": 9013,
                "sub_category_name": "Bungalow",
                "sub_category_value": "Bungalow",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "A single-story home with a low-pitched roof and a wide front porch."
            },
            {
                "sub_category_code": 9014,
                "sub_category_name": "Penthouse",
                "sub_category_value": "Penthouse",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "An apartment located on the top floor of a high-rise building with a luxurious design and amenities."
            },
            {
                "sub_category_code": 9015,
                "sub_category_name": "Tiny home",
                "sub_category_value": "Tiny_home",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "A compact living space, usually under 500 square feet, often used as a sustainable and minimalist housing option."
            },
            {
                "sub_category_code": 9016,
                "sub_category_name": "Yurt",
                "sub_category_value": "Yurt",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "A circular tent-like structure, traditionally used by nomads, that has become a popular eco-friendly and alternative living space."
            },
            {
                "sub_category_code": 9017,
                "sub_category_name": "Treehouse",
                "sub_category_value": "Treehouse",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "A small dwelling constructed in trees, often used as a unique and adventurous housing option."
            },
            {
                "sub_category_code": 9018,
                "sub_category_name": "Houseboat",
                "sub_category_value": "Houseboat",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "A floating home that can be moored or moved along waterways."
            },
            {
                "sub_category_code": 9019,
                "sub_category_name": "Farmhouse",
                "sub_category_value": "Farmhouse",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "A traditional home located on a farm, often featuring large outdoor spaces and rustic design elements."
            },
            {
                "sub_category_code": 9020,
                "sub_category_name": "Mansion",
                "sub_category_value": "Mansion",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "A large and luxurious home with extensive living spaces, often used for events or as vacation rentals."
            },
            {
                "sub_category_code": 9021,
                "sub_category_name": "Carriage house",
                "sub_category_value": "Carriage-house",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "A small detached dwelling, originally designed to store horse-drawn carriages, that has been converted into a living space."
            },
            {
                "sub_category_code": 9022,
                "sub_category_name": "Floating home",
                "sub_category_value": "Floating-home",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "A dwelling that is permanently moored in water, often featuring unique architecture and design elements."
            },
            {
                "sub_category_code": 9023,
                "sub_category_name": "Igloo",
                "sub_category_value": "Igloo",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "A dome-shaped structure made of snow or ice, traditionally used by Inuit communities, that has become a popular and unique housing option."
            },
            {
                "sub_category_code": 9024,
                "sub_category_name": "Container home",
                "sub_category_value": "Container-home",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "A dwelling made from shipping containers, often used as an affordable and sustainable housing option."
            }
        ],
        "category_amenity": [
            {
                "amenity_group": "house",
                "amenity": [
                    {
                        "amenity_title": "wifi",
                        "amenity_icon": "wifi.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "gym",
                        "amenity_icon": "gym.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "air condition",
                        "amenity_icon": "air_condition.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "heater",
                        "amenity_icon": "heater.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "smoke alarm",
                        "amenity_icon": "smoke_alarm.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "fire extinguisher",
                        "amenity_icon": "fire_extinguisher.png",
                        "amenity_description": "",
                    }
                ]
            },
            {
                "amenity_group": "entertainment",
                "amenity": [
                    {
                        "amenity_title": "netflix",
                        "amenity_icon": "netflix.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "apple tv",
                        "amenity_icon": "apple_tv.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "spotify",
                        "amenity_icon": "spotify.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "smart tv",
                        "amenity_icon": "smart_tv.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "tv",
                        "amenity_icon": "tv.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "table tennis",
                        "amenity_icon": "table_tennis.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "air hockey",
                        "amenity_icon": "air_hockey.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "piano",
                        "amenity_icon": "piano.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "billiard",
                        "amenity_icon": "billiard.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "chess board",
                        "amenity_icon": "chess_board.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "video games",
                        "amenity_icon": "video_games.png",
                        "amenity_description": "",
                    }
                    
                ]
            },
            {
                "amenity_group": "laundry",
                "amenity": [
                    {
                        "amenity_title": "washing machine",
                        "amenity_icon": "washing_machine.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "iron",
                        "amenity_icon": "iron.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "hunger",
                        "amenity_icon": "hunger.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "bedsheet",
                        "amenity_icon": "bedsheet.png",
                        "amenity_description": "",
                    }
                    
                    
                ]
            },
            {
                "amenity_group": "outdoor",
                "amenity": [
                    {
                        "amenity_title": "outdoor parking",
                        "amenity_icon": "outdoor_parking.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "valet parking",
                        "amenity_icon": "valet_parking.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "garage parking",
                        "amenity_icon": "garage_parking.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "indoor parking",
                        "amenity_icon": "indoor_parking.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "griller",
                        "amenity_icon": "griller.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "swimming pool",
                        "amenity_icon": "swimming_pool.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "pool bar",
                        "amenity_icon": "pool_bar.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "bonfire",
                        "amenity_icon": "bonfire.png",
                        "amenity_description": "",
                    }
                    
                    
                ]
            },
            {
                "amenity_group": "bathroom",
                "amenity": [
                    {
                        "amenity_title": "steam",
                        "amenity_icon": "steam.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "bathtub",
                        "amenity_icon": "bathtub.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "spa",
                        "amenity_icon": "spa.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "bathtub with shower",
                        "amenity_icon": "bathtub_with_shower.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "jacuzzi",
                        "amenity_icon": "jacuzzi.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "sauna",
                        "amenity_icon": "sauna.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "shower",
                        "amenity_icon": "shower.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "bidet",
                        "amenity_icon": "bidet.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "toilet paper",
                        "amenity_icon": "toilet_paper.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "toilet bowl",
                        "amenity_icon": "toilet_bowl.png",
                        "amenity_description": "",
                    }
                    
                    
                ]
            },
            {
                "amenity_group": "kitchen",
                "amenity": [
                    {
                        "amenity_title": "oven",
                        "amenity_icon": "oven.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "tableware",
                        "amenity_icon": "tableware.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "electric teapot",
                        "amenity_icon": "electric_teapot.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "kitchen room",
                        "amenity_icon": "kitchen_room.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "fridge",
                        "amenity_icon": "fridge.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "cooker",
                        "amenity_icon": "cooker.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "microwave",
                        "amenity_icon": "microwave.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "toaster",
                        "amenity_icon": "toaster.png",
                        "amenity_description": "",
                    }
                ]
            },
            {
                "amenity_group": "bedroom",
                "amenity": [
                    {
                        "amenity_title": "queen bed",
                        "amenity_icon": "queen_bed.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "single bed",
                        "amenity_icon": "single_bed.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "double bed",
                        "amenity_icon": "double_bed.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "king bed",
                        "amenity_icon": "king_bed.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "extra bed",
                        "amenity_icon": "extra_bed.png",
                        "amenity_description": "",
                    }
                ]
            }
        ]
    },
    {
        "category_code": 1002,
        "category_name": "cars",
        "category_value": "car",
        "category_image": "volk.jpg",
        "category_icon": "",
        "category_text_icon": "car.png",
        "category_description": "",
        "category_sub_category": [
            {
                "sub_category_code": 10001,
                "sub_category_name": "Economy Cars",
                "sub_category_value": "Economy",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These are small cars that are fuel-efficient and affordable."
            },
            {
                "sub_category_code": 10002,
                "sub_category_name": "Compact",
                "sub_category_value": "Compact",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These cars are slightly larger than economy cars and offer a bit more space and comfort."
            },
            {
                "sub_category_code": 10003,
                "sub_category_name": "Mid-Size",
                "sub_category_value": "Mid-Size",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These cars offer more space than compact cars and are ideal for longer trips or for families."
            },
            {
                "sub_category_code": 10004,
                "sub_category_name": "Full-Size",
                "sub_category_value": "Full-Size",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These cars are larger than mid-size cars and offer plenty of space for passengers and luggage."
            },
            {
                "sub_category_code": 10005,
                "sub_category_name": "Luxury",
                "sub_category_value": "Luxury",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These cars are high-end vehicles that offer superior comfort, performance, and features."
            },
            {
                "sub_category_code": 10006,
                "sub_category_name": "Sport",
                "sub_category_value": "Sport",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These are high-performance cars that are designed for speed and handling."
            },
            {
                "sub_category_code": 10007,
                "sub_category_name": "SUV",
                "sub_category_value": "SUV",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These are larger vehicles that offer more space and versatility, making them a popular choice for families and outdoor enthusiasts."
            },
            {
                "sub_category_code": 10008,
                "sub_category_name": "Van",
                "sub_category_value": "Van",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These are larger vehicles that can accommodate a larger number of passengers or cargo, making them a great choice for group travel or for transporting goods."
            },
            {
                "sub_category_code": 10009,
                "sub_category_name": "Convertible",
                "sub_category_value": "Convertible",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These are cars with a retractable roof that offer an open-air driving experience."
            },
            {
                "sub_category_code": 10010,
                "sub_category_name": "Electric",
                "sub_category_value": "Electric",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These cars run on electricity and are environmentally friendly."
            },
            {
                "sub_category_code": 10011,
                "sub_category_name": "Hybrid",
                "sub_category_value": "Hybrid",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These cars combine an electric motor with a traditional gasoline engine to offer better fuel efficiency."
            },
            {
                "sub_category_code": 10012,
                "sub_category_name": "Truck",
                "sub_category_value": "Truck",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These are larger vehicles that can be rented for moving or transporting goods."
            },
            {
                "sub_category_code": 10013,
                "sub_category_name": "Minivan",
                "sub_category_value": "Minivan",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These are larger vehicles that can accommodate a large number of passengers and offer plenty of space for luggage or cargo."
            },
            {
                "sub_category_code": 10014,
                "sub_category_name": "4x4 Off-Road",
                "sub_category_value": "4x4-Off-Road",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These are rugged vehicles that are designed for off-road adventures and are popular for camping, hiking, and outdoor activities."
            },
            {
                "sub_category_code": 10015,
                "sub_category_name": "Exotic",
                "sub_category_value": "Exotic",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These are high-end, luxury vehicles that are rare and expensive to own, making them a popular choice for special occasions or events."
            },
            {
                "sub_category_code": 10016,
                "sub_category_name": "Commercial",
                "sub_category_value": "Commercial",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These are vehicles designed for commercial use, such as delivery vans, box trucks, and cargo vans."
            },
            {
                "sub_category_code": 10017,
                "sub_category_name": "Classic",
                "sub_category_value": "Classic",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These are vintage cars that are rare and have historical significance, making them a popular choice for weddings, photo shoots, and special events."
            },
            {
                "sub_category_code": 10018,
                "sub_category_name": "Armored",
                "sub_category_value": "Armored",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These are specially designed vehicles that are equipped with advanced security features and are popular for VIP transportation or high-risk situations."
            },
            {
                "sub_category_code": 10019,
                "sub_category_name": "Camper",
                "sub_category_value": "Camper",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These are larger vehicles that are designed for camping and road trips, offering both living and driving space."
            },
            {
                "sub_category_code": 10020,
                "sub_category_name": "Trailer / RV",
                "sub_category_value": "Trailer/RV",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These are self-contained vehicles that can be rented for longer trips, providing both transportation and living space for travelers."
            }
        ],
        "category_amenity": [
            {
                "amenity_group": "features",
                "amenity": [
                    {
                        "amenity_title": "heated seat",
                        "amenity_icon": "heated_seat.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "roof box",
                        "amenity_icon": "car_roof_box.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "auto high beam",
                        "amenity_icon": "auto_high_beam.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "convertible roof",
                        "amenity_icon": "convertible_roof.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "eco driving",
                        "amenity_icon": "eco_driving.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "airbag",
                        "amenity_icon": "airbag.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "traction control",
                        "amenity_icon": "traction_control.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "parking assist",
                        "amenity_icon": "parking_assist.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "hill descent control",
                        "amenity_icon": "hill_descent_control.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "window defogger",
                        "amenity_icon": "rear_window_defogger.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "cruise control",
                        "amenity_icon": "cruise_control.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "rain & light sensor",
                        "amenity_icon": "rain_&_light_sensor.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "tools",
                        "amenity_icon": "tools.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "AWD",
                        "amenity_icon": "awd.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "4WD",
                        "amenity_icon": "4wd.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "auto door lock",
                        "amenity_icon": "auto_door_lock.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "air condition",
                        "amenity_icon": "air_condition.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "keyless entry",
                        "amenity_icon": "keyless_entry.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "remote control",
                        "amenity_icon": "remote_control.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "radio player",
                        "amenity_icon": "radio_player.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "extra tire",
                        "amenity_icon": "extra_tire.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "touchscreen display",
                        "amenity_icon": "touchscreen_display.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "tire pressure sensor",
                        "amenity_icon": "tire_pressure_sensor.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "bluetooth connection",
                        "amenity_icon": "audio_bluetooth_connection.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "advance audio system",
                        "amenity_icon": "advance_audio_system.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "blind spot monitoring",
                        "amenity_icon": "blind_spot_monitoring.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "rear screen display",
                        "amenity_icon": "rear_touchscreen_display.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "Sunroof / moonroof",
                        "amenity_icon": "Sunroof_moonroof.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "Leather upholstery",
                        "amenity_icon": "Leather_upholstery.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "wifi hotspot",
                        "amenity_icon": "wifi_hotspot.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "adaptive suspension",
                        "amenity_icon": "adaptive_suspension.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "remote start",
                        "amenity_icon": "remote_start.png",
                        "amenity_description": "",
                    }
                ]
            },
            {
                "amenity_group": "services",
                "amenity": [
                    {
                        "amenity_title": "carwash service",
                        "amenity_icon": "newly_carwashed_car.png",
                        "amenity_description": "",
                    },
                    {
                        "amenity_title": "car insurance",
                        "amenity_icon": "car_insurance.png",
                        "amenity_description": "",
                    }
                ]
            }
            
        ]
    },
    {
        "category_code": 1003,
        "category_name": "bikes",
        "category_value": "bike",
        "category_image": "bike.jpg",
        "category_icon": "",
        "category_text_icon": "bike.png",
        "category_description": "",
        "category_sub_category": [
            {
                "sub_category_code": 11001,
                "sub_category_name": "Cruiser Motorcycle",
                "sub_category_value": "Cruiser-motorcycle",
                "sub_category_type": "motor",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These motorcycles are designed for comfortable long-distance rides and have a relaxed seating position."
            },
            {
                "sub_category_code": 11002,
                "sub_category_name": "Touring Motorcycle",
                "sub_category_value": "Touring-motorcycle",
                "sub_category_type": "motor",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These motorcycles are designed for extended trips and have additional features such as luggage capacity and wind protection."
            },
            {
                "sub_category_code": 11003,
                "sub_category_name": "Sport Motorcycle",
                "sub_category_value": "Sport-motorcycle",
                "sub_category_type": "motor",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These motorcycles are designed for speed and performance, and are popular for racing and track days."
            },
            {
                "sub_category_code": 11004,
                "sub_category_name": "Dual-Sport Motorcycle",
                "sub_category_value": "Dual-Sport-motorcycle",
                "sub_category_type": "motor",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These motorcycles are designed for both on-road and off-road use and are popular for adventure riding."
            },
            {
                "sub_category_code": 11005,
                "sub_category_name": "Standard Motorcycle",
                "sub_category_value": "Standard-motorcycle",
                "sub_category_type": "motor",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These motorcycles are versatile and practical, and are a good choice for beginners or for everyday commuting."
            },
            {
                "sub_category_code": 11006,
                "sub_category_name": "Scooter Motorcycle",
                "sub_category_value": "Scooter-motorcycle",
                "sub_category_type": "motor",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These are smaller motorcycles that have an automatic transmission, making them easy to ride and maneuver in urban areas."
            },
            {
                "sub_category_code": 11007,
                "sub_category_name": "Dirt Bike",
                "sub_category_value": "Dirt-motorcycle",
                "sub_category_type": "motor",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These motorcycles are designed for off-road use and are popular for motocross and trail riding."
            },
            {
                "sub_category_code": 11008,
                "sub_category_name": "Supermoto Motorcycle",
                "sub_category_value": "Supermoto-motorcycle",
                "sub_category_type": "motor",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These motorcycles combine the features of off-road and road bikes, and are designed for use on both paved and unpaved surfaces."
            },
            {
                "sub_category_code": 11009,
                "sub_category_name": "Vintage Motorcycle",
                "sub_category_value": "Vintage-motorcycle",
                "sub_category_type": "motor",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These motorcycles are classic and retro models that are popular for their style and nostalgia."
            },
            {
                "sub_category_code": 11010,
                "sub_category_name": "Electric Motorcycle",
                "sub_category_value": "Electric-motorcycle",
                "sub_category_type": "motor",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These motorcycles run on electricity and are environmentally friendly, making them a popular choice for urban riding."
            },
            {
                "sub_category_code": 11011,
                "sub_category_name": "Chopper Motorcycle",
                "sub_category_value": "Chopper-motorcycle",
                "sub_category_type": "motor",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These motorcycles have an exaggerated, custom look with a long front end and high handlebars."
            },
            {
                "sub_category_code": 11012,
                "sub_category_name": "Bobber Motorcycle",
                "sub_category_value": "Bobber-motorcycle",
                "sub_category_type": "motor",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These motorcycles have a stripped-down, minimalist style and are popular for their classic look."
            },
            {
                "sub_category_code": 11013,
                "sub_category_name": "Three-wheelers Motorcycle",
                "sub_category_value": "Three-wheelers-motorcycle",
                "sub_category_type": "motor",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These are motorcycles that have three wheels, and offer more stability and balance than traditional motorcycles."
            },
            {
                "sub_category_code": 11014,
                "sub_category_name": "Road Bicycle",
                "sub_category_value": "Road-motorcycle",
                "sub_category_type": "bicycle",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These bicycles are designed for speed and efficiency on paved roads, and have narrow tires and a lightweight frame."
            },
            {
                "sub_category_code": 11015,
                "sub_category_name": "Mountain Bicycle",
                "sub_category_value": "Mountain-motorcycle",
                "sub_category_type": "bicycle",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These bicycles are designed for off-road use, and have wide tires and a sturdy frame with suspension."
            },
            {
                "sub_category_code": 11016,
                "sub_category_name": "Hybrid Bicycle",
                "sub_category_value": "Hybrid-motorcycle",
                "sub_category_type": "bicycle",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These bicycles are a cross between road bikes and mountain bikes, and are designed for use on both paved and unpaved surfaces."
            },
            {
                "sub_category_code": 11017,
                "sub_category_name": "Electric Bicycle",
                "sub_category_value": "Electric-motorcycle",
                "sub_category_type": "bicycle",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These bicycles have an electric motor that provides additional power, making them a good choice for longer rides or for riders with physical limitations."
            },
            {
                "sub_category_code": 11018,
                "sub_category_name": "City Bicycle",
                "sub_category_value": "City-motorcycle",
                "sub_category_type": "bicycle",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These bicycles are designed for urban riding, and have features such as fenders, a rear rack, and lights."
            },
            {
                "sub_category_code": 11019,
                "sub_category_name": "Folding Bicycle",
                "sub_category_value": "Folding-motorcycle",
                "sub_category_type": "bicycle",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These bicycles can be folded for easy storage and transport, making them a good choice for commuters or travelers."
            },
            {
                "sub_category_code": 11020,
                "sub_category_name": "Tandem Bicycle",
                "sub_category_value": "Tandem-motorcycle",
                "sub_category_type": "bicycle",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These bicycles have two seats and are designed for two riders to ride together, and are a fun choice for couples or friends."
            },
            {
                "sub_category_code": 11021,
                "sub_category_name": "Recumbent Bicycle",
                "sub_category_value": "Recumbent-motorcycle",
                "sub_category_type": "bicycle",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These bicycles have a reclined seating position, which can be more comfortable for some riders."
            },
            {
                "sub_category_code": 11022,
                "sub_category_name": "Cargo Bicycle",
                "sub_category_value": "Cargo-motorcycle",
                "sub_category_type": "bicycle",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These bicycles have a cargo area, such as a basket or a rack, and are designed for transporting goods or equipment."
            }
        ]
    },
    {
        "category_code": 1004,
        "category_name": "cameras",
        "category_value": "camera",
        "category_image": "camera.jpg",
        "category_icon": "",
        "category_text_icon": "camera.png",
        "category_description": "",
        "category_sub_category": [
            {
                "sub_category_code": 12001,
                "sub_category_name": "DSLR",
                "sub_category_value": "DSLR",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These cameras are popular among professional and amateur photographers and offer high-quality images and the ability to interchange lenses."
            },
            {
                "sub_category_code": 12002,
                "sub_category_name": "Mirrorless",
                "sub_category_value": "Mirrorless",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These cameras have a smaller, lighter body than DSLR cameras, and offer similar image quality and the ability to interchange lenses."
            },
            {
                "sub_category_code": 12003,
                "sub_category_name": "Compact",
                "sub_category_value": "Compact",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These cameras are smaller and more portable than DSLR and mirrorless cameras, and are a good choice for casual or travel photography."
            },
            {
                "sub_category_code": 12004,
                "sub_category_name": "Action",
                "sub_category_value": "Action",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These cameras are designed for capturing action footage, such as sports and adventure activities, and are typically small and waterproof."
            },
            {
                "sub_category_code": 12005,
                "sub_category_name": "Medium Format",
                "sub_category_value": "Medium-Format",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These cameras offer higher image quality and larger sensors than DSLR and mirrorless cameras, and are popular among professional photographers for studio and portrait work."
            },
            {
                "sub_category_code": 12006,
                "sub_category_name": "Film",
                "sub_category_value": "Film",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These cameras use traditional film to capture images and are popular among photographers who prefer the unique look and feel of film photography."
            },
            {
                "sub_category_code": 12007,
                "sub_category_name": "Instant",
                "sub_category_value": "Instant",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These cameras produce instant prints of the images they capture, and are popular for events and parties."
            },
            {
                "sub_category_code": 12008,
                "sub_category_name": "Drone",
                "sub_category_value": "Drone",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These cameras are mounted on drones and offer a unique perspective for aerial photography and videography."
            },
            {
                "sub_category_code": 12009,
                "sub_category_name": "360",
                "sub_category_value": "360",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These cameras capture 360-degree images and videos, offering a unique immersive experience for viewers."
            },
            {
                "sub_category_code": 12010,
                "sub_category_name": "Point-and-Shoot Cameras",
                "sub_category_value": "Point-and-Shoot-Cameras",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These cameras are designed for easy and quick use, and typically have fixed lenses and automatic settings."
            },
            {
                "sub_category_code": 12011,
                "sub_category_name": "Bridge Cameras",
                "sub_category_value": "Bridge",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These cameras are a cross between DSLR and compact cameras, and offer more advanced features than compact cameras while being easier to use than DSLRs."
            },
            {
                "sub_category_code": 12012,
                "sub_category_name": "Underwater Cameras",
                "sub_category_value": "Underwater Camera",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These cameras are waterproof and are designed for use in underwater environments, such as for snorkeling or scuba diving."
            },
            {
                "sub_category_code": 12013,
                "sub_category_name": "Professional Video Cameras",
                "sub_category_value": "Professional-Video-Cameras",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These cameras are designed for high-quality video production, and offer advanced features such as interchangeable lenses and external audio inputs."
            },
            {
                "sub_category_code": 12014,
                "sub_category_name": "Security Cameras",
                "sub_category_value": "Security",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These cameras are designed for surveillance and security purposes, and are a popular choice for businesses and homeowners."
            },
            {
                "sub_category_code": 12015,
                "sub_category_name": "Webcam",
                "sub_category_value": "Webcam",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These cameras are designed for video conferencing and online streaming, and are a popular choice for remote work and virtual events."
            },
            {
                "sub_category_code": 12016,
                "sub_category_name": "Astro-photography Cameras",
                "sub_category_value": "Astro-photography",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These cameras are designed specifically for capturing images of the night sky, with features such as high sensitivity and low noise."
            },
            {
                "sub_category_code": 12017,
                "sub_category_name": "Pinhole Cameras",
                "sub_category_value": "Pinhole-Camera",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These cameras use a small aperture instead of a lens to capture images, resulting in a unique and dreamlike quality to the photographs."
            },
            {
                "sub_category_code": 12018,
                "sub_category_name": "Thermal Cameras",
                "sub_category_value": "Thermal",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These cameras capture thermal images, showing the distribution of heat in a scene, and are commonly used in industries such as building inspections and security."
            },
            {
                "sub_category_code": 12019,
                "sub_category_name": "Time-Lapse Cameras",
                "sub_category_value": "Time-Lapse",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These cameras are designed to capture a series of images over an extended period of time, which can be combined to create a time-lapse video."
            },
            {
                "sub_category_code": 12020,
                "sub_category_name": "Large Format Cameras",
                "sub_category_value": "Large_Format",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These cameras use large film sheets and offer high resolution and image quality, making them popular among fine art photographers."
            },
            {
                "sub_category_code": 12021,
                "sub_category_name": "3D Cameras",
                "sub_category_value": "3D",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These cameras capture images that can be viewed in 3D, creating a sense of depth and dimensionality."
            }
            
        ]
    },
    {
        "category_code": 1006,
        "category_name": "games",
        "category_value": "game",
        "category_image": "games.jpg",
        "category_icon": "",
        "category_text_icon": "game.png",
        "category_description": "",
        "category_sub_category": [
            {
                "sub_category_code": 14001,
                "sub_category_name": "Video",
                "sub_category_value": "Video",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These can include consoles, games, and accessories for popular gaming systems like PlayStation, Xbox, and Nintendo."
            },
            {
                "sub_category_code": 14002,
                "sub_category_name": "Board",
                "sub_category_value": "Board",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These can include classic games like Monopoly, Chess, and Scrabble, as well as newer and more niche games."
            },
            {
                "sub_category_code": 14003,
                "sub_category_name": "Paintball",
                "sub_category_value": "Paintball",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This game involves teams competing against each other to eliminate opponents by tagging them with paint-filled pellets. Rentable equipment can include paintball guns, protective gear such as masks and pads, and paintball pellets."
            },
            {
                "sub_category_code": 14004,
                "sub_category_name": "Airsoft",
                "sub_category_value": "Airsoft",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This game is similar to paintball, but instead uses plastic pellets as ammunition. Rentable equipment can include airsoft guns, protective gear, and pellets."
            },
            {
                "sub_category_code": 14005,
                "sub_category_name": "Party",
                "sub_category_value": "Party",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These can include games that are designed for larger groups, like Cards Against Humanity, Pictionary, and Trivia games."
            },
            {
                "sub_category_code": 14006,
                "sub_category_name": "Outdoor",
                "sub_category_value": "Outdoor",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These can include games like Bocce Ball, Croquet, and Cornhole that are played outdoors and require a larger playing area."
            },
            {
                "sub_category_code": 14007,
                "sub_category_name": "Tabletop",
                "sub_category_value": "Tabletop",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These can include games like Poker, Blackjack, and Roulette, as well as tabletop versions of arcade games like Air Hockey and Foosball."
            },
            {
                "sub_category_code": 14008,
                "sub_category_name": "Arcade",
                "sub_category_value": "Arcade",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These can include classic arcade games like Pac-Man and Space Invaders, as well as newer games like Dance Dance Revolution and Guitar Hero."
            },
            {
                "sub_category_code": 14009,
                "sub_category_name": "Virtual Reality",
                "sub_category_value": "Virtual_Reality",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These can include VR games and experiences that allow players to immerse themselves in a virtual world."
            },
            {
                "sub_category_code": 14010,
                "sub_category_name": "Escape Room",
                "sub_category_value": "Escape_Room",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These can include escape room kits that allow players to solve puzzles and clues to escape a virtual or real-life room."
            },
            {
                "sub_category_code": 14011,
                "sub_category_name": "Sports",
                "sub_category_value": "Sports",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These can include games like golf simulators, basketball arcade games, and other sports-themed games."
            },
            {
                "sub_category_code": 14012,
                "sub_category_name": "Casino",
                "sub_category_value": "Casino",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These can include tables, chips, and other equipment for casino-style games like Blackjack, Roulette, and Craps."
            },
            {
                "sub_category_code": 14013,
                "sub_category_name": "Karaoke",
                "sub_category_value": "Karaoke",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These allow users to sing along to their favorite songs and can come with microphones and song libraries."
            },
            {
                "sub_category_code": 14014,
                "sub_category_name": "Pinball Machine",
                "sub_category_value": "Pinball_Machine",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These classic arcade games are popular among collectors and enthusiasts and can be rented for personal or business use."
            },
            {
                "sub_category_code": 14015,
                "sub_category_name": "Photo Booth",
                "sub_category_value": "Photo_Booth",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These allow users to take fun photos with different backgrounds and props and can be a great addition to weddings, parties, and other events."
            },
            {
                "sub_category_code": 14016,
                "sub_category_name": "Casino Night",
                "sub_category_value": "Casino_Night",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These are events where casino-style games are set up and guests can play for prizes or fun."
            },
            {
                "sub_category_code": 14017,
                "sub_category_name": "Video Game Truck",
                "sub_category_value": "Video_Game_Truck",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These are mobile video game setups that can be rented for parties and events."
            },
            {
                "sub_category_code": 14018,
                "sub_category_name": "Laser Tag",
                "sub_category_value": "Laser_Tag",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This game uses laser guns and targets to simulate a battle, and can be rented for parties or team-building events."
            },
            {
                "sub_category_code": 14019,
                "sub_category_name": "Giant Games",
                "sub_category_value": "Giant_Games",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These can include oversized versions of classic games like Jenga, Connect Four, and Chess, and can be a fun addition to outdoor events."
            },
            {
                "sub_category_code": 14020,
                "sub_category_name": "Interactive",
                "sub_category_value": "Interactive",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These can include games that are controlled by motion or voice, like Wii Sports or Kinect Adventures."
            },
            {
                "sub_category_code": 14021,
                "sub_category_name": "Karaoke",
                "sub_category_value": "Karaoke",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These allow users to sing along to their favorite songs and can come with microphones and song libraries."
            },
            {
                "sub_category_code": 14022,
                "sub_category_name": "Educational",
                "sub_category_value": "Educational",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These can include games that are designed to teach specific skills or subjects, like language learning games or math games."
            },
            {
                "sub_category_code": 14023,
                "sub_category_name": "Retro",
                "sub_category_value": "Retro",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These can include classic video games from the 80s and 90s, like Pac-Man, Donkey Kong, and Super Mario Bros."
            },
            {
                "sub_category_code": 14024,
                "sub_category_name": "Racing Simulator",
                "sub_category_value": "Racing_Simulator",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These simulate the experience of driving a race car and can come with steering wheels, pedals, and monitors."
            },
            {
                "sub_category_code": 14025,
                "sub_category_name": "Shooting Simulator",
                "sub_category_value": "Shooting_Simulator",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These simulate shooting games and can come with guns, screens, and targets."
            },
            {
                "sub_category_code": 14026,
                "sub_category_name": "Puzzle",
                "sub_category_value": "Puzzle",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These can include physical puzzles like Rubik's Cubes or 3D puzzles, as well as electronic puzzle games like Sudoku or Crossword puzzles."
            },
            {
                "sub_category_code": 14027,
                "sub_category_name": "Carnival",
                "sub_category_value": "Carnival",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These can include games like ring toss, balloon darts, and skee ball, and can be a fun addition to fairs, festivals, and other events."
            },
            {
                "sub_category_code": 14028,
                "sub_category_name": "Mind Game",
                "sub_category_value": "Mind_Game",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These can include strategy games like Chess, Checkers, and Go, as well as puzzle games like Sudoku and Crossword puzzles."
            },
            {
                "sub_category_code": 14029,
                "sub_category_name": "Trampoline Park",
                "sub_category_value": "Trampoline_Park",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These are indoor facilities with trampolines and other attractions like foam pits and dodgeball arenas."
            },
            {
                "sub_category_code": 14030,
                "sub_category_name": "Water Sports ",
                "sub_category_value": "Water Sports ",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "These can include games like water balloon toss, squirt gun fights, and other water-based activities."
            }
        ]
    },
    {
        "category_code": 1007,
        "category_name": "sports",
        "category_value": "sport",
        "category_image": "sports.jpg",
        "category_icon": "",
        "category_text_icon": "sport.png",
        "category_description": "",
        "category_sub_category": [
            {
                "sub_category_code": 15001,
                "sub_category_name": "Golf",
                "sub_category_value": "Golf",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include golf clubs, golf bags, and golf carts."
            },
            {
                "sub_category_code": 15002,
                "sub_category_name": "Tennis",
                "sub_category_value": "Tennis",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include tennis rackets, balls, and nets."
            },
            {
                "sub_category_code": 15003,
                "sub_category_name": "Baseball and Softball",
                "sub_category_value": "Baseball_Softball",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include bats, gloves, balls, and protective gear like helmets and pads."
            },
            {
                "sub_category_code": 15004,
                "sub_category_name": "Basketball",
                "sub_category_value": "Basketball",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include basketballs, hoops, and nets."
            },
            {
                "sub_category_code": 15005,
                "sub_category_name": "Volleyball",
                "sub_category_value": "Volleyball",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include volleyballs, nets, and poles."
            },
            {
                "sub_category_code": 15006,
                "sub_category_name": "Football",
                "sub_category_value": "Football",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include footballs, helmets, pads, and other protective gear."
            },
            {
                "sub_category_code": 15007,
                "sub_category_name": "Soccer",
                "sub_category_value": "Soccer",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include soccer balls, nets, and cones."
            },
            {
                "sub_category_code": 15008,
                "sub_category_name": "Golf",
                "sub_category_value": "Golf",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include golf clubs, golf bags, and golf carts."
            },
            {
                "sub_category_code": 15009,
                "sub_category_name": "Swimming and Diving",
                "sub_category_value": "Swimming_Diving",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include swimwear, goggles, swim caps, and diving boards."
            },
            {
                "sub_category_code": 15010,
                "sub_category_name": "Ski and Snowboarding",
                "sub_category_value": "Ski_Snowboarding",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include skis, snowboards, boots, and poles."
            },
            {
                "sub_category_code": 15011,
                "sub_category_name": "Water Sports",
                "sub_category_value": "Water_Sports",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include kayaks, canoes, paddleboards, and life jackets."
            },
            {
                "sub_category_code": 15012,
                "sub_category_name": "Cycling",
                "sub_category_value": "Cycling",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include bicycles, helmets, and bike locks."
            },
            {
                "sub_category_code": 15013,
                "sub_category_name": "Golf",
                "sub_category_value": "Golf",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include golf clubs, golf bags, and golf carts."
            },
            {
                "sub_category_code": 15014,
                "sub_category_name": "Running",
                "sub_category_value": "Running",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include running shoes, clothing, and accessories like water bottles and armbands."
            },
            {
                "sub_category_code": 15015,
                "sub_category_name": "Fitness",
                "sub_category_value": "Fitness",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include weights, exercise machines, and workout accessories like yoga mats and resistance bands."
            },
            {
                "sub_category_code": 15016,
                "sub_category_name": "Camping",
                "sub_category_value": "Camping",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include tents, sleeping bags, camping stoves, and backpacks."
            },
            {
                "sub_category_code": 15017,
                "sub_category_name": "Running",
                "sub_category_value": "Running",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include running shoes, clothing, and accessories like water bottles and armbands."
            },
            {
                "sub_category_code": 15018,
                "sub_category_name": "Hunting",
                "sub_category_value": "Hunting",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include guns, bows, and arrows, as well as camouflage clothing and hunting blinds."
            },
            {
                "sub_category_code": 15019,
                "sub_category_name": "Sports Training",
                "sub_category_value": "Sports_Training",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include Pitching machines, agility and speed training equipment, strength and jump training equipment, training mats, football blocking dummies, goalie training equipment, basketball training equipment."
            }
        ]
    },
    {
        "category_code": 1008,
        "category_name": "facility",
        "category_value": "facility",
        "category_image": "basketball.jpg",
        "category_icon": "",
        "category_text_icon": "facility.png",
        "category_description": "",
        "category_sub_category": [
            {
                "sub_category_code": 16001,
                "sub_category_name": "Event Spaces",
                "sub_category_value": "Event_Space",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include banquet halls, conference rooms, ballrooms, and other spaces designed for meetings, conferences, and other events."
            },
            {
                "sub_category_code": 16002,
                "sub_category_name": "Sports",
                "sub_category_value": "Sports",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include stadiums, arenas, gymnasiums, and other facilities designed for sports events and activities."
            },
            {
                "sub_category_code": 16003,
                "sub_category_name": "Recreational",
                "sub_category_value": "Recreational",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include swimming pools, tennis courts, basketball courts, and other facilities designed for recreational activities."
            },
            {
                "sub_category_code": 16004,
                "sub_category_name": "Performance",
                "sub_category_value": "Performance",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include theaters, auditoriums, concert halls, and other spaces designed for performances."
            },
            {
                "sub_category_code": 16005,
                "sub_category_name": "Outdoor",
                "sub_category_value": "Outdoor",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include parks, gardens, and other outdoor spaces designed for events and activities."
            },
            {
                "sub_category_code": 16006,
                "sub_category_name": "Educational",
                "sub_category_value": "Educational",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include classrooms, lecture halls, and other facilities designed for educational events and activities."
            },
            {
                "sub_category_code": 16007,
                "sub_category_name": "Community Center",
                "sub_category_value": "Community_Center",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include centers designed for community events, such as town halls, senior centers, and community centers."
            },
            {
                "sub_category_code": 16008,
                "sub_category_name": "Party and Wedding Venue",
                "sub_category_value": "Party_Wedding_Venue",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include venues designed for weddings, receptions, and other parties and celebrations."
            },
            {
                "sub_category_code": 16009,
                "sub_category_name": "Business Space",
                "sub_category_value": "Business_Space",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include office spaces, co-working spaces, and other facilities designed for business events and activities."
            },
            {
                "sub_category_code": 16010,
                "sub_category_name": "Film and Photography Studio",
                "sub_category_value": "Film_Photography_Studio",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include studios designed for film and photography shoots, such as green screen studios, sound stages, and photo studios."
            },
            {
                "sub_category_code": 16011,
                "sub_category_name": "Cooking and Catering ",
                "sub_category_value": "Cooking_Catering ",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include commercial kitchens, cooking studios, and catering facilities designed for events and activities that involve food and beverages."
            },
            {
                "sub_category_code": 16012,
                "sub_category_name": "Virtual Meeting Space",
                "sub_category_value": "Virtual Meeting Space",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "With the rise of remote work and virtual events, virtual meeting spaces are becoming more popular. These can include virtual event platforms, video conferencing software, and other virtual meeting and event spaces."
            },
            {
                "sub_category_code": 16013,
                "sub_category_name": "Creative Space",
                "sub_category_value": "Creative_Space",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include spaces designed for creative activities, such as art studios, writing spaces, and music studios."
            },
            {
                "sub_category_code": 16014,
                "sub_category_name": "Health and Wellness",
                "sub_category_value": "Health_Wellness",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include yoga studios, fitness centers, and other facilities designed for health and wellness activities."
            },
            {
                "sub_category_code": 16015,
                "sub_category_name": "Industrial Space",
                "sub_category_value": "Industrial_Space",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include warehouses, manufacturing facilities, and other industrial spaces designed for production and other industrial activities."
            },
            {
                "sub_category_code": 16016,
                "sub_category_name": "Retail Space",
                "sub_category_value": "Retail_Space",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include retail stores, pop-up shops, and other spaces designed for retail activities."
            },
            {
                "sub_category_code": 16017,
                "sub_category_name": "Parking Garage",
                "sub_category_value": "Parking Garage",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Parking garages can be rented for short-term or long-term parking needs. They can be particularly useful for events, conventions, and busy areas where parking is limited."
            },
            {
                "sub_category_code": 16018,
                "sub_category_name": "Storage Unit",
                "sub_category_value": "Storage_Unit",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Storage units can be rented to store belongings, such as furniture, seasonal items, and personal belongings. They come in various sizes and can be rented on a short-term or long-term basis."
            },
            {
                "sub_category_code": 16019,
                "sub_category_name": "Workshop",
                "sub_category_value": "Workshop",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Workshops can be rented for a variety of purposes, such as woodworking, metalworking, and automotive repair. They can be particularly useful for people who don't have the space or equipment at home to carry out these activities."
            },
            {
                "sub_category_code": 16020,
                "sub_category_name": "Studio",
                "sub_category_value": "Studio",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Studios can be rented for a variety of creative purposes, such as painting, sculpting, and ceramics. They can also be used for music rehearsals or other artistic pursuits."
            },
            {
                "sub_category_code": 16021,
                "sub_category_name": "Pop-up Shop",
                "sub_category_value": "Pop-up_Shop",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Pop-up shops are temporary retail spaces that can be rented for a short period of time, such as a few days or weeks. They are particularly useful for testing out new products or brands, or for seasonal retail events."
            },
            {
                "sub_category_code": 16022,
                "sub_category_name": "Co-working Space",
                "sub_category_value": "Co-working_Space",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Co-working spaces are shared office spaces that can be rented on a short-term or long-term basis. They are particularly useful for freelancers, entrepreneurs, and small businesses that need a professional work environment."
            }
        ]
    },
    {
        "category_code": 1009,
        "category_name": "builders",
        "category_value": "builder",
        "category_image": "builder.jpg",
        "category_icon": "",
        "category_text_icon": "builder.png",
        "category_description": "",
        "category_sub_category": [
            {
                "sub_category_code": 17001,
                "sub_category_name": "Excavator",
                "sub_category_value": "Excavator",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Excavators are heavy equipment used for digging and moving large quantities of earth, soil, and debris. They are commonly used in construction and excavation projects."
            },
            {
                "sub_category_code": 17002,
                "sub_category_name": "Bulldozer",
                "sub_category_value": "Bulldozer",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Bulldozers are heavy equipment used for pushing and moving large quantities of earth and debris. They are commonly used in construction and demolition projects."
            },
            {
                "sub_category_code": 17003,
                "sub_category_name": "Backhoe",
                "sub_category_value": "Backhoe",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Backhoes are heavy equipment used for digging and moving large quantities of earth, soil, and debris. They are commonly used in construction, excavation, and landscaping projects."
            },
            {
                "sub_category_code": 17004,
                "sub_category_name": "Loader",
                "sub_category_value": "Loader",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Loaders are heavy equipment used for moving and transporting large quantities of materials, such as soil, gravel, and debris. They are commonly used in construction and mining projects."
            },
            {
                "sub_category_code": 17005,
                "sub_category_name": "Crane",
                "sub_category_value": "Crane",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Cranes are heavy equipment used for lifting and moving heavy objects, such as construction materials and equipment. They are commonly used in construction and industrial projects."
            },
            {
                "sub_category_code": 17006,
                "sub_category_name": "Forklift",
                "sub_category_value": "Forklift",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Forklifts are heavy equipment used for lifting and moving heavy objects, such as pallets and containers. They are commonly used in warehouse and manufacturing settings."
            },
            {
                "sub_category_code": 17007,
                "sub_category_name": "Dump Truck",
                "sub_category_value": "Dump_Truck",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Dump trucks are heavy equipment used for transporting large quantities of materials, such as soil, gravel, and debris. They are commonly used in construction and mining projects."
            },
            {
                "sub_category_code": 17008,
                "sub_category_name": "Concrete Mixer",
                "sub_category_value": "Concrete_Mixer",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Concrete mixers are heavy equipment used for mixing and pouring concrete. They are commonly used in construction projects."
            },
            {
                "sub_category_code": 17009,
                "sub_category_name": "Paver",
                "sub_category_value": "Paver",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Pavers are heavy equipment used for laying and smoothing surfaces, such as roads, sidewalks, and parking lots. They are commonly used in construction and paving projects."
            },
            {
                "sub_category_code": 17010,
                "sub_category_name": "Compactor",
                "sub_category_value": "Compactor",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Compactors are heavy equipment used for compacting materials, such as soil, gravel, and asphalt. They are commonly used in construction and road building projects."
            },
            {
                "sub_category_code": 17011,
                "sub_category_name": "Trencher",
                "sub_category_value": "Trencher",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Trenchers are heavy equipment used for digging trenches, typically for utility lines, irrigation systems, or drainage systems. They are commonly used in construction and landscaping projects."
            },
            {
                "sub_category_code": 17012,
                "sub_category_name": "Roller",
                "sub_category_value": "Roller",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Rollers are heavy equipment used for compacting materials, such as soil, gravel, and asphalt. They are commonly used in road building and construction projects."
            },
            {
                "sub_category_code": 17013,
                "sub_category_name": "Scraper",
                "sub_category_value": "Scraper",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Scrapers are heavy equipment used for moving and leveling large quantities of earth, soil, and debris. They are commonly used in construction and mining projects."
            },
            {
                "sub_category_code": 17014,
                "sub_category_name": "Dozer Rake",
                "sub_category_value": "Dozer_Rake",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Dozer rakes are heavy equipment attachments used for clearing vegetation and debris from construction sites. They are commonly used in land clearing and site preparation projects."
            },
            {
                "sub_category_code": 17015,
                "sub_category_name": "Auger",
                "sub_category_value": "Auger",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Augers are heavy equipment attachments used for drilling holes in the ground. They are commonly used in construction and agricultural projects."
            },
            {
                "sub_category_code": 17016,
                "sub_category_name": "Grapple",
                "sub_category_value": "Grapple",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Grapples are heavy equipment attachments used for moving and transporting large objects, such as logs and debris. They are commonly used in forestry and construction projects."
            },
            {
                "sub_category_code": 17017,
                "sub_category_name": "Articulated Truck",
                "sub_category_value": "Articulated Truck",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Articulated trucks are heavy equipment used for transporting heavy loads, such as construction materials and equipment. They are commonly used in construction and mining projects."
            },
            {
                "sub_category_code": 17018,
                "sub_category_name": "Loader with Attachments",
                "sub_category_value": "Loader_Attachments",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Loaders with attachments are heavy equipment used for moving and transporting materials, as well as performing other functions, such as digging, grading, and leveling. They are commonly used in construction and landscaping projects."
            }
        ]
    },
    {
        "category_code": 1010,
        "category_name": "music",
        "category_value": "music",
        "category_image": "music.jpg",
        "category_icon": "",
        "category_text_icon": "music.png",
        "category_description": "",
        "category_sub_category": [
            {
                "sub_category_code": 18001,
                "sub_category_name": "Guitars",
                "sub_category_value": "Guitar",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Guitars can be rented in various styles, such as acoustic, electric, and bass guitars. They can be rented for personal use or for performances."
            },
            {
                "sub_category_code": 18002,
                "sub_category_name": "Drum",
                "sub_category_value": "Drum",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Drum sets can be rented in different configurations, including full kits, snare drums, cymbals, and percussion instruments. They can be rented for personal use, performances, or recording sessions."
            },
            {
                "sub_category_code": 18003,
                "sub_category_name": "Keyboard and piano",
                "sub_category_value": "Keyboard_piano",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Keyboards and pianos can be rented for use at home or for performances. They include digital pianos, synthesizers, organs, and other keyboard instruments."
            },
            {
                "sub_category_code": 18004,
                "sub_category_name": "Brass",
                "sub_category_value": "Brass",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Brass instruments can be rented for use in orchestras, bands, or for personal practice. They include trumpets, trombones, French horns, tubas, and other brass instruments."
            },
            {
                "sub_category_code": 18005,
                "sub_category_name": "Woodwind",
                "sub_category_value": "Woodwind",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Woodwind instruments can be rented for use in orchestras, bands, or for personal practice. They include flutes, clarinets, saxophones, oboes, and bassoons."
            },
            {
                "sub_category_code": 18006,
                "sub_category_name": "String",
                "sub_category_value": "String",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "String instruments can be rented for personal use or for performances. They include violins, violas, cellos, double basses, and other stringed instruments."
            },
            {
                "sub_category_code": 18007,
                "sub_category_name": "Amplifier",
                "sub_category_value": "Amplifier",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Amplifiers are used to amplify and enhance the sound of electric guitars or basses. They can be rented in different sizes and types, including combo amps, stack amps, and bass amps."
            },
            {
                "sub_category_code": 18008,
                "sub_category_name": "PA system",
                "sub_category_value": "PA_system",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "PA systems are necessary for live performances or events where a sound system is needed. They include speakers, mixers, microphones, and other equipment needed to amplify and enhance the sound quality."
            },
            {
                "sub_category_code": 18009,
                "sub_category_name": "Synthesizers and digital audio workstations (DAWs)",
                "sub_category_value": "DAWs",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Synthesizers and DAWs are used to create electronic music and sound effects. They can be rented for home or studio recording sessions, or for live performances."
            },
            {
                "sub_category_code": 18010,
                "sub_category_name": "DJ",
                "sub_category_value": "DJ",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "DJ equipment includes turntables, mixers, controllers, and speakers used by disc jockeys to create and mix music. This equipment is commonly rented for parties, weddings, and other events where music is needed."
            },
            {
                "sub_category_code": 18011,
                "sub_category_name": "Effects pedal",
                "sub_category_value": "Effects_pedal",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Effects pedals are used to create various sounds and effects on electric guitars and basses. They can be rented for use in recording sessions or live performances."
            },
            {
                "sub_category_code": 18012,
                "sub_category_name": "Harps, accordions, and other specialty instrument",
                "sub_category_value": "Harps_accordions_other_instrument",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Specialty instruments such as harps, accordions, and other rare instruments can also be rented for performances or personal use."
            },
            {
                "sub_category_code": 18013,
                "sub_category_name": "Percussion",
                "sub_category_value": "Percussion",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "In addition to drum sets, percussion instruments can be rented for use in performances or for personal practice. These include instruments such as congas, bongos, djembes, maracas, and tambourines."
            },
            {
                "sub_category_code": 18014,
                "sub_category_name": "Orchestral",
                "sub_category_value": "Orchestral",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Orchestral"
            },
            {
                "sub_category_code": 18015,
                "sub_category_name": "Folk",
                "sub_category_value": "Folk",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Folk instruments can be rented for personal use or for performances. These include instruments such as the banjo, mandolin, ukulele, dulcimer, and fiddle."
            },
            {
                "sub_category_code": 18016,
                "sub_category_name": "Brass and woodwind accessories",
                "sub_category_value": "Brass_woodwind_accessories",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "In addition to renting brass and woodwind instruments, accessories such as reeds, mouthpieces, and cleaning kits can also be rented."
            },
            {
                "sub_category_code": 18017,
                "sub_category_name": "Guitar and bass accessories",
                "sub_category_value": "Guitar_bass_accessories",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "In addition to renting guitars and basses, accessories such as pedals, picks, and straps can also be rented."
            },
            {
                "sub_category_code": 18018,
                "sub_category_name": "Recording",
                "sub_category_value": "Recording",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Recording equipment such as microphones, headphones, and mixing boards can be rented for use in home or professional recording studios."
            },
            {
                "sub_category_code": 18019,
                "sub_category_name": "Music stands and sheet music",
                "sub_category_value": "Music_stand_sheet_music",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Music stands and sheet music can be rented for personal use or for performances. This includes stands for orchestral instruments, guitar stands, and sheet music for various instruments and genres."
            },
            {
                "sub_category_code": 18020,
                "sub_category_name": "DJ lighting and effects",
                "sub_category_value": "DJ_lighting_effects",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "In addition to renting DJ equipment, lighting and effects such as strobe lights, fog machines, and lasers can also be rented to enhance the atmosphere of a party or event."
            },
            {
                "sub_category_code": 18021,
                "sub_category_name": "Audio and video equipment",
                "sub_category_value": "Audio_video_equipment",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Audio and video equipment such as speakers, projectors, and screens can be rented for events such as weddings, conferences, and presentations."
            },
            {
                "sub_category_code": 18018,
                "sub_category_name": "Stage",
                "sub_category_value": "Stage",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Stage equipment such as platforms, risers, and backdrops can be rented for performances or events where a stage is needed."
            }
            
        ]
    },
    {
        "category_code": 1005,
        "category_name": "equipments",
        "category_value": "equipment",
        "category_image": "equipments.jpg",
        "category_icon": "",
        "category_text_icon": "equipment.png",
        "category_description": "",
        "category_sub_category": [
            {
                "sub_category_code": 13001,
                "sub_category_name": "Audio",
                "sub_category_value": "Audio",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include speakers, microphones, sound systems, and mixing boards for events, concerts, and presentations."
            },
            {
                "sub_category_code": 13002,
                "sub_category_name": "Video",
                "sub_category_value": "Video",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include cameras, tripods, lighting, and editing software for professional videography, filmmaking, or personal use."
            },
            {
                "sub_category_code": 13003,
                "sub_category_name": "Computer",
                "sub_category_value": "Computer",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include laptops, desktops, monitors, and printers for business, gaming, or personal use."
            },
            {
                "sub_category_code": 13004,
                "sub_category_name": "Office",
                "sub_category_value": "Office",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include copiers, scanners, projectors, and whiteboards for office meetings, presentations, and events."
            },
            {
                "sub_category_code": 13005,
                "sub_category_name": "Party",
                "sub_category_value": "Party",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include tables, chairs, tents, decorations, and inflatables for parties, weddings, and other events."
            },
            {
                "sub_category_code": 13006,
                "sub_category_name": "Outdoor and Adventure",
                "sub_category_value": "Outdoor_Adventure",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include camping gear, backpacks, tents, kayaks, and bicycles for outdoor activities, such as camping, hiking, and cycling."
            },
            {
                "sub_category_code": 13007,
                "sub_category_name": "Diving",
                "sub_category_value": "Diving",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include Dive computers, Regulators, Buoyancy Control Devices, Wetsuits and Drysuits, Fins and Masks and Snorkels, Dive Lights, Tanks & Weight Belts."
            },
            {
                "sub_category_code": 13008,
                "sub_category_name": "Medical",
                "sub_category_value": "Medical",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include wheelchairs, hospital beds, oxygen tanks, and other medical equipment for home care or temporary medical needs."
            },
            {
                "sub_category_code": 13009,
                "sub_category_name": "Garden and Landscaping",
                "sub_category_value": "Garden_Landscaping",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include lawn mowers, trimmers, leaf blowers, and other tools for gardening and landscaping."
            },
            {
                "sub_category_code": 13010,
                "sub_category_name": "Event Production",
                "sub_category_value": "Event_Production",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include stage lighting, rigging equipment, audio-visual equipment, and other gear for events and performances."
            },
            {
                "sub_category_code": 13011,
                "sub_category_name": "Fitness",
                "sub_category_value": "Fitness",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include treadmills, ellipticals, weights, and other equipment for home gyms or temporary fitness needs."
            },
            {
                "sub_category_code": 13012,
                "sub_category_name": "Art and Craft",
                "sub_category_value": "Art_Craft",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include pottery wheels, kilns, looms, and other equipment for artists and crafters."
            },
            {
                "sub_category_code": 13013,
                "sub_category_name": "Photography and Videography",
                "sub_category_value": "Photography_Videography",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include lenses, tripods, lighting, and other gear for photographers and videographers."
            },
            {
                "sub_category_code": 13014,
                "sub_category_name": "Communication",
                "sub_category_value": "Communication",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include two-way radios, satellite phones, and other equipment for outdoor adventures, remote locations, or emergency situations."
            },
            {
                "sub_category_code": 13015,
                "sub_category_name": "Home Appliance",
                "sub_category_value": "Home_Appliance",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include refrigerators, washers, dryers, and other appliances for temporary use or home renovations."
            },
            {
                "sub_category_code": 13016,
                "sub_category_name": "Power Tools",
                "sub_category_value": "Power_Tools",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include drills, saws, and other tools for construction, woodworking, and other projects."
            },
            {
                "sub_category_code": 13017,
                "sub_category_name": "Vehicle",
                "sub_category_value": "Vehicle",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include car racks, GPS devices, and other gear for outdoor activities or road trips."
            },
            {
                "sub_category_code": 13018,
                "sub_category_name": "Industrial",
                "sub_category_value": "Industrial",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include generators, and other heavy machinery for industrial or construction needs."
            },
            {
                "sub_category_code": 13019,
                "sub_category_name": "Test and Measurement",
                "sub_category_value": "Test_Measurement",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include oscilloscopes, spectrum analyzers, and other instruments for electronic testing and measurements."
            },
            {
                "sub_category_code": 13020,
                "sub_category_name": "Safety",
                "sub_category_value": "Safety",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include safety harnesses, hard hats, and other gear for construction, industrial, or outdoor activities."
            },
            {
                "sub_category_code": 13021,
                "sub_category_name": "Scientific",
                "sub_category_value": "Scientific",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include microscopes, telescopes, and other gear for scientific research and education."
            },
            {
                "sub_category_code": 13022,
                "sub_category_name": "Medical Simulation",
                "sub_category_value": "Medical_Simulation",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include anatomical models, simulators, and other gear for medical education and training."
            },
            {
                "sub_category_code": 13023,
                "sub_category_name": "Office Furniture",
                "sub_category_value": "Office_Furniture",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include desks, chairs, and other furniture for temporary or permanent office spaces."
            },
            {
                "sub_category_code": 13024,
                "sub_category_name": "Hospitality",
                "sub_category_value": "Hospitality",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include catering equipment, linen, and other supplies for events and hospitality services."
            },
            {
                "sub_category_code": 13025,
                "sub_category_name": "Environmental",
                "sub_category_value": "Environmental",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include air quality monitors, water quality monitors, and other instruments for environmental monitoring and testing."
            },
            {
                "sub_category_code": 13026,
                "sub_category_name": "Security",
                "sub_category_value": "Security",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include surveillance cameras, metal detectors, and other gear for security and surveillance."
            },
            {
                "sub_category_code": 13027,
                "sub_category_name": "Environmental",
                "sub_category_value": "Environmental",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This can include air quality monitors, water quality monitors, and other instruments for environmental monitoring and testing."
            },
            {
                "sub_category_code": 13025,
                "sub_category_name": "Tube and Coupler Scaffolding",
                "sub_category_value": "Tube_Coupler_Scaffolding",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "This type of scaffolding uses steel tubes and couplers to create a strong and stable structure. It is commonly used for construction and maintenance work on tall buildings or structures."
            },
            {
                "sub_category_code": 13026,
                "sub_category_name": "Frame Scaffolding",
                "sub_category_value": "Frame_Scaffolding",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Frame scaffolding is a modular system made up of steel or aluminum frames that can be easily assembled and disassembled. It is commonly used for smaller construction or maintenance projects."
            },
            {
                "sub_category_code": 13027,
                "sub_category_name": "System Scaffolding",
                "sub_category_value": "System Scaffolding",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "System scaffolding is a pre-engineered system that is designed to be highly flexible and adaptable to different types of construction projects. It can be used for a variety of applications, from building construction to industrial maintenance."
            },
            {
                "sub_category_code": 13028,
                "sub_category_name": "Rolling Scaffolding",
                "sub_category_value": "Rolling_Scaffolding",
                "sub_category_type": "",
                "sub_category_image": "",
                "sub_category_icon": "",
                "sub_category_text_icon": "",
                "sub_category_description": "Rolling scaffolding is a type of scaffolding that can be moved easily from one location to another. It is commonly used for painting, cleaning, and maintenance work on buildings or structures."
            }
        ]
    }
];
const [createListing, setCreateListing] = useState<any>({ 
    category_value: "",
    category: "",
    sub_category: "",
    brand: "",
    model: "",
    title: "",
    description: "",
    location: "",
    geolocation: {},
    place_type: "",
    address: "",
    street: "",
    city: "",
    country: "",
    postal: "",
    guest_capacity: "",
    bedroom_capacity: "",
    bathroom_capacity: "",
    price: "",
    discount: "",
    discount_status: "",
    discount_duration: {
        date_start: "",
        date_end: ""
    },
    rate_type: "",
    business_type: "",
    packages: [
        {
            title: ""
        }
    ],
    amenity: [
        // {
        //     title: "wifi",
        //     description: "",
        //     amenity_group: "home",
        // }
    ],
    short_description: [
        {
            title: ""
        }
    ],
    listing_requirement: [
        {
            title: "",
            description: ""
        }
    ],
    safety_items: [
        {
            title: ""
        }
    ],
    images: [
        
    ]

});
const [step, setStep] = useState("category");
const [paginationButton, setPaginationButton] = useState({
    previous: false,
    next: false
});

    

    useEffect(() => {

        // execute only if this is the current page
        if(locationChecker()) {
            // this if statement is to check if previous and next button is allowed
            if(step === "category")
            {
                if(createListing?.category_value !=="")
                {
                    setPaginationButton({previous: false, next: true});
                }
                else 
                {
                    setPaginationButton({previous: false, next: false});
                }
                
            }
            else if(step === "subCategory")
            {
                if(createListing?.sub_category !=="")
                {
                    setPaginationButton({previous: true, next: true});
                }
                else 
                {
                    setPaginationButton({previous: true, next: false});
                }
            }
            else if(step === "title")
            {
                if( (LetterCount(createListing?.title) >= 5) && (LetterCount(createListing?.description) >= 50) )
                {
                    setPaginationButton({previous: true, next: true});
                }
                else 
                {
                    setPaginationButton({previous: true, next: false});
                }
            }
            else if(step === "amenity")
            {
                if( createListing?.amenity.length>0 )
                {
                    setPaginationButton({previous: true, next: true});
                }
                else 
                {
                    setPaginationButton({previous: true, next: false});
                }
            }
            else if(step === "images")
            {
                if( createListing?.images.length>4 )
                {
                    setPaginationButton({previous: true, next: true});
                }
                else 
                {
                    setPaginationButton({previous: true, next: false});
                }
            }
            else if(step === "itemDetails")
            {

                if(createListing?.category_value == "home")
                {
                    if( createListing?.place_type !== "" &&  createListing?.business_type !== "" &&  createListing?.bedroom_capacity !== "" &&  createListing?.guest_capacity !== "" &&  createListing?.bathroom_capacity !== "")
                    {
                        setPaginationButton({previous: true, next: true});
                    }
                    else 
                    {
                        setPaginationButton({previous: true, next: false});
                    }
                }
                else
                {
                    if(createListing?.business_type !== "")
                    {
                        setPaginationButton({previous: true, next: true});
                    }
                    else 
                    {
                        setPaginationButton({previous: true, next: false});
                    }
                }
                    
            }
            else if(step === "itemLocation")
            {
                if( createListing?.country!== "" && createListing?.city!== "" && createListing?.address!== "" && Object.values(createListing?.geolocation).length>0 )
                {
                    setPaginationButton({previous: true, next: true});
                }
                else 
                {
                    setPaginationButton({previous: true, next: false});
                }
            }
            else if(step === "itemPricing")
            {
                if( createListing?.price !== "" && createListing?.rate_type != "")
                {
                    setPaginationButton({previous: true, next: true});
                }
                else 
                {
                    setPaginationButton({previous: true, next: false});
                }
            }
            else if(step === "itemPreview")
            {
                setPaginationButton({previous: true, next: true});
            }


        }
        
      }, [location, createListing, step]);

    return (
        
        <div className="main" >
            {
            (!loading && !upload) &&
                <>
                    <Header 
                            searchTool = {false}
                    />

                    <IonContent class="home_content" fullscreen>
                        <div className="CreateListing" style={{minHeight: `${GetViewPortSize()}`}}>


                            {
                                step == 'category' &&
                                <ListingSetupCategory 
                                    itemCategory = {itemCategoriesList}
                                    createListing = {createListing}
                                    setCreateListing = {setCreateListing}
                                />
                            }
                            {
                                step == 'subCategory' &&
                                <ListingSetupSubCat
                                    itemCategory = {itemCategoriesList}
                                    createListing = {createListing}
                                    setCreateListing = {setCreateListing}
                                />
                            }
                            {
                                step == 'title' &&
                                <ListingSetupTitle
                                    itemCategory = {itemCategoriesList}
                                    createListing = {createListing}
                                    setCreateListing = {setCreateListing}
                                />
                            }
                            {
                                step == 'amenity' &&
                                <ListingSetupAmenity
                                    itemCategory = {itemCategoriesList}
                                    createListing = {createListing}
                                    setCreateListing = {setCreateListing}
                                    step = {step}
                                />
                            }
                            {
                                step == 'images' &&
                                <ListingSetupImages
                                    itemCategory = {itemCategoriesList}
                                    createListing = {createListing}
                                    setCreateListing = {setCreateListing}
                                    step = {step}
                                />
                            }
                            {
                                step == 'itemDetails' &&
                                <ListingSetupItemDetails
                                    itemCategory = {itemCategoriesList}
                                    createListing = {createListing}
                                    setCreateListing = {setCreateListing}
                                    step = {step}
                                />
                            }
                            {
                                step == 'itemLocation' &&
                                <ListingSetupItemLocation
                                    itemCategory = {itemCategoriesList}
                                    createListing = {createListing}
                                    setCreateListing = {setCreateListing}
                                    step = {step}
                                />
                            }
                            {
                                step == 'itemPricing' &&
                                <ListingSetupPricing
                                    itemCategory = {itemCategoriesList}
                                    createListing = {createListing}
                                    setCreateListing = {setCreateListing}
                                    step = {step}
                                />
                            }
                            {
                                step == 'itemPreview' &&
                                <ListingSetupPreview
                                    itemCategory = {itemCategoriesList}
                                    createListing = {createListing}
                                    setCreateListing = {setCreateListing}
                                    step = {step}
                                    error = {error}
                                />
                            }
                            

                        </div>
                    </IonContent>

                    <ListingSetupFooter 
                        createListing = {createListing}
                        step = {step}
                        setStep = {setStep}
                        paginationButton = {paginationButton}
                        upload = {upload}
                        setUpload = {setUpload}
                        setError = {setError}
                    />
                </>
            }

            {
            loading &&
                <LoaderPage />
            }
            {
            upload &&
                <UploadPage />
            }
        </div>
    );
};


export default CreateListing;