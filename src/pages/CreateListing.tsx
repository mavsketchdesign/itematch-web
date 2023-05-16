import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ListingSetupCategory from '../components/ListingSetupCategory';
import ListingSetupSubCat from '../components/ListingSetupSubCat';
import ListingSetupTitle from '../components/ListingSetupTitle';
import ListingSetupAmenity from '../components/ListingSetupAmenity';
import ListingSetupImages from '../components/ListingSetupImages';
import Header from '../components/Header';
import ListingSetupFooter from '../components/ListingSetupFooter';
import { useState, useEffect, useRef} from 'react';
import {GetViewPortSize, LetterCount} from '../utilities/tools';
import '../css/CreateListing.css';
import {
    useParams,
    Link,
    useLocation
  } from "react-router-dom";

const CreateListing: React.FC = () => {
    let location = useLocation();
    const locationChecker = () => {
        return (location?.pathname == "/CreateListing/") ?
        true :
        false;
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
            "category_text_icon": "cars.png",
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
            "category_code": 1005,
            "category_name": "equipments",
            "category_value": "equipment",
            "category_image": "equipments.jpg",
            "category_icon": "",
            "category_text_icon": "equipments.png",
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
                }
            ]
        },
        {
            "category_code": 1006,
            "category_name": "games",
            "category_value": "game",
            "category_image": "games.jpg",
            "category_icon": "",
            "category_text_icon": "games.png",
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
                }
            ]
        },
        {
            "category_code": 1007,
            "category_name": "sports",
            "category_value": "sport",
            "category_image": "sports.jpg",
            "category_icon": "",
            "category_text_icon": "sports.png",
            "category_description": "",
            "category_sub_category": [
                {
                    "sub_category_code": 15001,
                    "sub_category_name": "Golf Equipment",
                    "sub_category_value": "Golf",
                    "sub_category_type": "",
                    "sub_category_image": "",
                    "sub_category_icon": "",
                    "sub_category_text_icon": "",
                    "sub_category_description": "This can include golf clubs, golf bags, and golf carts."
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
                }
            ]
        },
        {
            "category_code": 1009,
            "category_name": "builders",
            "category_value": "builder",
            "category_image": "builder.jpg",
            "category_icon": "",
            "category_text_icon": "builders.png",
            "category_description": "",
            "category_sub_category": [
                {
                    "sub_category_code": 17001,
                    "sub_category_name": "Excavators",
                    "sub_category_value": "Excavators",
                    "sub_category_type": "",
                    "sub_category_image": "",
                    "sub_category_icon": "",
                    "sub_category_text_icon": "",
                    "sub_category_description": "Excavators are heavy equipment used for digging and moving large quantities of earth, soil, and debris. They are commonly used in construction and excavation projects."
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
        guest_capacity: "",
        bedroom_capacity: "",
        price: "",
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
                console.log("category")
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
                console.log("subCategory")
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
                console.log("title");
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
                console.log("amenity");
                if( createListing?.amenity.length>0 )
                {
                    setPaginationButton({previous: true, next: true});
                }
                else 
                {
                    setPaginationButton({previous: true, next: false});
                }
            }


        }
        
      }, [location, createListing, step]);

    return (
        <div className="main" >

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
                    

                </div>
            </IonContent>

            <ListingSetupFooter 
                createListing = {createListing}
                step = {step}
                setStep = {setStep}
                paginationButton = {paginationButton}
            />
        </div>
    );
};


export default CreateListing;