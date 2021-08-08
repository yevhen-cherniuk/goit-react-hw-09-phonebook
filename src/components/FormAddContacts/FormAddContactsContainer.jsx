import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import phonebookSelectors from "../../redux/phonebook/phonebookSelectors";
import phonebookOperations from "../../redux/phonebook/phonebookOperations";
import FormAddContacts from "./FormAddContacts";

const initialState = {
    name: "",
    number: "",
    isAdded: false,
    message: "",
  };


const FormAddContactsContainer = () => {
  const [state, setState] = useState(initialState);
  const contacts = useSelector(phonebookSelectors.getContacts);
  const dispatch = useDispatch();

  
  const handleChangeName = (name) => {
    setState({ ...state, name });
  };

  const handleChangeNumber = (number) => {
    setState({  ...state,number });
  };

  const handleClearForm = () => {
    setState((prevState)=>({...prevState, name: '', number: '' }));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const { name, number } = state;
    // const { contacts } = props;

    if (!name || !number) {
      setState({ ...state, isAdded: true, message: "Fill in all the fields" });
      setTimeout(() => {
        setState({...state, isAdded: false });
      }, 2000);
      return;
    }

    if (contacts.find((el) => el.name === name)) {
      setState({...state, isAdded: true, message: "Contact already exist" });
      setTimeout(() => {
        setState({...state, isAdded: false });
      }, 2000);
    } else {
      dispatch(phonebookOperations.addContact({ name, number }));
      setState({...state, isAdded: true, message: "Contact added successfully" });
      setTimeout(() => {
        setState((prevState)=>({...prevState, isAdded: false }));
      }, 2000);
    }
    handleClearForm();
  };

     return (
      <FormAddContacts
        {...state}
        handleChangeName={handleChangeName}
        handleChangeNumber={handleChangeNumber}
        handlesubmit={handlesubmit}
      />
    );
  
}

// const mapStateToProps = (state) => ({
//   contacts: phonebookSelectors.getContacts(state),
// });

// const mapDispatchToprops = {
//   addContact: phonebookOperations.addContact,
// };

export default FormAddContactsContainer;