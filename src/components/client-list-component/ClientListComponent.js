import React, { Component } from 'react';
import './ClientListComponent.css';

class ClientListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {clients: [], search: '', showAddClientModal: false};
        
    }

    componentDidMount() {
        fetch('http://localhost:8084/api/clients/')
            .then(response => response.json())
            .then(data => this.setState({clients: data}));


    }

    deleteClient(id) {
        
        fetch('http://localhost:8084/api/clients/' + id, {
            method:'DELETE'
        })
           .then(res => {
               this.setState({clients: this.state.clients.filter(client => client.id !== id)});
           })

    }

    editClient(id) {
        window.localStorage.setItem("clientId", id);
        this.props.history.push('/edit-client');
    }

    addClient(props){
        fetch('http://localhost:8084/api/clients/', {
            method:'POST',
            body: JSON.stringify({
                props
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
           .then(res => {
            console.log(res)
           })
    }

    onchange = e => {
        this.setState({ search: e.target.value });
      };

render() {
    let filteredClients = [];
    let search = this.state.search;
    if(search != ''){
        filteredClients = this.state.clients.filter(client => {
        return client.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });}else{
        filteredClients = this.state.clients;
    }
    return (
        <div>
            <h2 className="text-center">Clients</h2>
            <button className="btn btn-danger" onClick={() => this.setState({showAddClientModal: true})}> Add new</button>
            <input className="search" onChange={this.onchange} placeholder="Search"/>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Street name</th>
                        <th>Street number</th>
                        <th>Zip</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredClients.map(
                    client =>
                                <tr key={client.id}>
                                    <td>{client.name}</td>
                                    <td>{client.country}</td>
                                    <td>{client.city}</td>
                                    <td>{client.street_name}</td>
                                    <td>{client.street_number}</td>
                                    <td>{client.zip}</td>
                                    <td>

                                        <button className="btn btn-edit" onClick={() => this.editClient(client.id)}> Edit</button>

                                        <button className="btn btn-delete" onClick={() =>{
                                            if (window.confirm('Are you sure you wish to delete this client?',
                                            {confirmLabel: 'Yes',
                                            abortLabel: 'No'})) 
                                            this.deleteClient(client.id)}}> Delete</button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    );
}
}
export default ClientListComponent;