import './Style/App.scss';
import Nav from './components/navbar/Nav'
import store from './store'
import {Provider} from 'react-redux'
import Contacts from './components/contacts/Contacts'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import Counter from './components/contacts/Counter';

function App() {
  return (
    // <Provider store={store}>
    //   <Router>
    //   <div className="App">
    //     <Nav/>
    //     <Switch>
    //       <Route exact path="/" component={Contacts}/>
    //       <Route exact path="/contact/addcontact" component={AddContact}/>
    //       <Route exact path="/contact/editcontact/:id" component={EditContact}/>
    //     </Switch>
    //   </div>
    //   </Router>
    // </Provider>
    <Counter/>
  );
}

export default App;
