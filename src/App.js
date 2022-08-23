import './App.css';
import React from 'react';
import ClientListComponent from './components/client-list-component/ClientListComponent';
import AddClientModal from './components/client-list-component/AddClientModal';

class App extends React.Component {

  state = {
    showAddClientModal : false
  }

  showModalHandler = (event) =>{
    this.setState({showAddClientModal:true});
  }

  hideModalHandler = (event) =>{
    this.setState({showAddClientModal:false});
  }
  render(){
    return (
      // <div className="container">
      //     {/* <Router> */}
      //         <div>
      //             <h1 className="text-center">Zadatak Application</h1>
      //             {/* <Routes>
      //                 <Route path="/" exact component={ClientListComponent} />
      //                 {/* <Route path="/users" component={ListUserComponent} />
      //                 <Route path="/add-user" component={AddUserComponent} />
      //                 <Route path="/edit-user" component={EditUserComponent} /> */}
      //             {/* </Routes> */} 
      //         </div>
      //     {/* </Router> */}
      // </div>
      <div className='container'>
        
        <div className='switch-container'></div>
        <div className='client-list-container'>
        <button type="button" onClick={() => this.showModalHandler()}>Click Me! 
        </button>
          <ClientListComponent></ClientListComponent>
        </div>
        <AddClientModal showAddClientModal={this.state.showAddClientModal} hideModalHandler={this.hideModalHandler}></AddClientModal>
      </div>

      );
    }
  }
export default App;