import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebookF,faGoogle,faLinkedin,faTwitter,faInstagram,faSearchengin} from '@fortawesome/free-brands-svg-icons' 
import { useContext } from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import Beginx  from './initial/Begin';
import Contact from './initial/Contact';
import Home from './initial/Home';
import ContactUs from './initial/ContactUs';

import Check from './check';
import Sidebarx from './dashboard/Components/sidebar';
import AllStaffaction from './dashboard/AllStaffaction';
 import AllPatientsAction from './dashboard/AllPatientsAction';
import AllConversationAction from './dashboard/AllConversationAction';
import AuthContext from './auth-context';
import Conversationsx from './data/conversations';
import StaffBody from './dashboard/Components/StaffBody'
import Conversations from './dashboard/Conversations';
import CreateStaff   from './dashboard/CreateStaff';
import Staff from './dashboard/Staff';
import Patients from './dashboard/Patients'
import BulkUpload from './dashboard/BulkUpload'
import FavouriteMessage from './dashboard/FavouriteMessage'
import AllFeatUpdate   from './dashboard/AllFeatUpdate'
import CreateFeatUpdate from './dashboard/CreateFeatUpdate'
import MyFeedback from './dashboard/MyFeedback'
import MyTestimonials from './dashboard/MyTestimonials'
import AddResource    from './dashboard/AddResource'
import AllResource from './dashboard/AllResource'
import AllConsultation from './dashboard/AllConsultation';
import NewSpeciality from './dashboard/NewSpeciality';
import AllSpeciality from './dashboard/AllSpeciality';
import RegisterConsultation from './dashboard/RegisterConsultation';
function App() {
library.add(faFacebookF,faGoogle,faInstagram,faLinkedin,faTwitter,faSearchengin); 
const authCtx = useContext(AuthContext);
  return (
    <Router>
      <Switch>
      <Route path='/' exact >
         <Home />
      </Route>
      <Route path='/allconsultation' exact>
      {authCtx.isLoggedIn && <AllConsultation />}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
      </Route>
      <Route path='/newspeciality' exact>
      {authCtx.isLoggedIn && <NewSpeciality />}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
      </Route>
      <Route path='/allspeciality' exact>
      {authCtx.isLoggedIn && <AllSpeciality />}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
      </Route>
      <Route path='/createstaff' exact>
      {authCtx.isLoggedIn && <CreateStaff />}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
      </Route>
      <Route path='staff' exact>
      {authCtx.isLoggedIn && <Staff />}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
      </Route>
      <Route path='/registerconsultation' exact>
      {authCtx.isLoggedIn && <RegisterConsultation/>}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
      </Route>
      <Route path='/allpatients' exact>
      {authCtx.isLoggedIn && <Patients />}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
      </Route>
      <Route path='/bulkupload' exact>
      {authCtx.isLoggedIn && <BulkUpload/>}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
      </Route>
      <Route path='/login' exact >
     <Beginx />
      </Route>
      <Route path='/provider' exact >
      <Contact />
        
      </Route>
      <Route path='/contactus' exact>
      <ContactUs />
        
      </Route>
      <Route path='/favouritemessages' exact>
      {authCtx.isLoggedIn && <FavouriteMessage />}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
      </Route>
      <Route path='/allfeaturedupdate' exact>
      {authCtx.isLoggedIn && <AllFeatUpdate/>}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
      </Route>
      <Route path='/createfeaturedupdate' exact>
      {authCtx.isLoggedIn && <CreateFeatUpdate />}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
      </Route>
      <Route path='/myfeedback' exact>
      {authCtx.isLoggedIn && <MyFeedback/>}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
      </Route>
      <Route path='/mytestimonials' exact>
      {authCtx.isLoggedIn && <MyTestimonials/>}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
      </Route>
      <Route path='/addresource' exact>
      {authCtx.isLoggedIn && <AddResource/>}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
      </Route>
      <Route path='/allresource' exact>
      {authCtx.isLoggedIn && <AllResource />}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
      </Route>
   
    
      <Route path='/staff' exact>
      {authCtx.isLoggedIn && <Staff />}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
      </Route>
      <Route path='/loggedin' exact>
      {authCtx.isLoggedIn && <Sidebarx />}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
      </Route>
      <Route path='/allstaffaction' exact>
      {authCtx.isLoggedIn && <AllStaffaction />}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
      </Route>
      {!authCtx.isLoggedIn && (
          <Route path='/login'>
            <Beginx />
          </Route>
        )}
      <Route path='/allpatientsaction' exact>
      {authCtx.isLoggedIn && <AllPatientsAction />}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
      </Route>
      <Route path='/allconversationaction' exact>
      {authCtx.isLoggedIn && <AllConversationAction />}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
      </Route>
      <Route path='/conversations' exact>
      {authCtx.isLoggedIn && <Conversations/>}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
      </Route>
      <Route path='/check' exact>
      {authCtx.isLoggedIn && <Check />}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
      </Route>
      <Redirect  to="/"/>
        </Switch>
    </Router>
    
  );
  }

export default App;
