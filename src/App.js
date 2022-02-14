import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebookF,faGoogle,faLinkedin,faTwitter,faInstagram,faSearchengin} from '@fortawesome/free-brands-svg-icons' 
import { useContext } from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import Begin from './initial/Begin';
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
import Subm from './dashboard/subm';
import SubmCopy from './dashboard/submcopy';
import GetDetailsNDHM from './dashboard/GetDetailsNDHM';
import RegisterOrg from './initial/RegisterOrg';
function App() {
library.add(faFacebookF,faGoogle,faInstagram,faLinkedin,faTwitter,faSearchengin); 
const token = localStorage.getItem('userName');


  return (
  
    <Router>
      <Switch>
     
      <Route path='/allconsultation' exact>
      { token && <AllConsultation />}
      {!token && <Redirect to='/conversations' />}
      
          
      </Route>
      <Route path='/newspeciality' exact>
      {!token && <Redirect to='/login' />}
      { <NewSpeciality />}
          
      </Route>
      <Route path='/allspeciality' exact>
      {!token && <Redirect to='/login' />}
      { <AllSpeciality />}
          
      </Route>
      <Route path='/createstaff' exact>
      {!token && <Redirect to='/login' />}
      { <CreateStaff />}
          
      </Route>
      <Route path='staff' exact>
      {!token && <Redirect to='/login' />}
      { <Staff />}
          
      </Route>
      <Route path='/registerconsultation' exact>
      {!token && <Redirect to='/login' />}
      { <RegisterConsultation/>}
          
      </Route>
      <Route path='/allpatients' exact>
      {!token && <Redirect to='/login' />}
      { <Patients />}
          
      </Route>
      <Route path='/bulkupload' exact>
      {!token && <Redirect to='/login' />}
      { <BulkUpload/>}
          
      </Route>
    
     
      <Route path='/favouritemessages' exact>
      {!token && <Redirect to='/login' />}
      { <FavouriteMessage />}
          
      </Route>
      <Route path='/allfeaturedupdate' exact>
      {!token && <Redirect to='/login' />}
      { <AllFeatUpdate/>}
          
      </Route>
      <Route path='/createfeaturedupdate' exact>
      {!token && <Redirect to='/login' />}
      { <CreateFeatUpdate />}
          
      </Route>
      <Route path='/myfeedback' exact>
      {!token && <Redirect to='/login' />}
      { <MyFeedback/>}
          
      </Route>
      <Route path='/mytestimonials' exact>
      {!token && <Redirect to='/login' />}
      { <MyTestimonials/>}
          
      </Route>
      <Route path='/submcopy' exact>
      {!token && <Redirect to='/login' />}
      { <SubmCopy/>}
          
      </Route>
      <Route path='/addresource' exact>
      {!token && <Redirect to='/login' />}
      { <AddResource/>}
          
      </Route>
      <Route path='/allresource' exact>
      {!token && <Redirect to='/login' />}
      { <AllResource />}
          
      </Route>
   
    
      <Route path='/staff' exact>
      {!token && <Redirect to='/login' />}
      { <Staff />}
          
      </Route>
      <Route path='/loggedin' exact>
      {!token && <Redirect to='/login' />}
      { <Sidebarx />}
          
      </Route>
      <Route path='/allstaffaction' exact>
      {!token && <Redirect to='/login' />}
      { <AllStaffaction />}
          
      </Route>
     
      <Route path='/allpatientsaction' exact>
      {!token && <Redirect to='/login' />}
      { <AllPatientsAction />}
          
      </Route>
      <Route path='/getdetailsNDHM' exact>
      {!token && <Redirect to='/login' />}
      { <GetDetailsNDHM />}
          
      </Route>
      <Route path='/allconversationaction' exact>
      {!token && <Redirect to='/login' />}
      { <AllConversationAction />}
          
      </Route>
      <Route path='/conversations' exact>
      {!token && <Redirect to='/login' />}
      { <Conversations/>}
          
      </Route>
      <Route path='/check' exact>
      {!token && <Redirect to='/login' />}
      { <Check />}
          
      </Route>
      <Route path='/' exact >
      {token && <Redirect to='/conversations' />}
         <Home />
      </Route>
      <Route path='/login' exact >
      {token && <Redirect to='/conversations' />}
         <Begin />
      </Route>
      <Route path='/provider' exact >
      {token && <Redirect to='/conversations' />}
      <Contact />
        
      </Route>
      <Route path='/contactus' exact>
      {token && <Redirect to='/conversations' />}
      <ContactUs />
        
      </Route>
      <Route path='/registerorg' exact>
      {token && <Redirect to='/conversations' />}
      <RegisterOrg />
        
      </Route>
      <Redirect  to="/conversations"/>
        </Switch>
    </Router>
    
  );
  }

export default App;
