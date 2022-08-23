import AddClientForm from './AddClientForm';
import React from 'react';

class AddClientModal extends React.Component {
  render() {
    const addClientForm = <AddClientForm></AddClientForm>;
    const modal = this.props.showAddClientModal ? <div>{addClientForm}</div> : null;
    return (
      <div>
        {modal}
      </div>
    );
  }
}

export default AddClientModal;