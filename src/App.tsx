import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
  IonImg
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle} from 'ionicons/icons';
import Home from './pages/Home';
import Join from './pages/Join';
import ForgotPassword from './components/ForgotPassword';
import CreateListing from './pages/CreateListing';
import ManageItem from './pages/ManageItem';
import ItemInfo from './pages/ItemInfo';
import NotFound from './components/NotFound';
import ItemDetails from './pages/ItemDetails';
import Profile from './pages/Profile';
import { Provider } from "react-redux";
import store from "./store";
import * as rdd from 'react-device-detect';
import { useState, useRef, useEffect } from 'react';
import { Capacitor } from '@capacitor/core';
import {GetViewPortSize} from './utilities/tools';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
// import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* import custom css */
import './css/app.css';

setupIonicReact();




const App: React.FC = () => {
  
  

  

  return (
    <Provider store={store}>
      <IonApp>
        <IonReactRouter>
          {/* <IonTabs> */}
            <IonRouterOutlet>
              <Route exact path="/">
                <Join />
              </Route>
              <Route exact path="/CreateListing/">
                <CreateListing />
              </Route>
              <Route exact path="/ManageItem/">
                <ManageItem />
              </Route>
              <Route exact path="/ManageItem/Items/">
                <ItemInfo />
              </Route>
              <Route exact path="/ManageItem/profile/">
                <NotFound 
                  icon = {"not_found.png"}
                  message = "Sorry, seems like what you are searching for is not found!"
                />
              </Route>
              <Route path="/ManageItem/Items/:id" component={ItemDetails}></Route>
              <Route path="/ManageItem/profile/:id" component={Profile}></Route>
              <Route exact path="/ForgotPassword/">
                <ForgotPassword />
              </Route>
            </IonRouterOutlet>
            
          {/* </IonTabs> */}
        </IonReactRouter>
      </IonApp>
    </Provider>
)};

export default App;
