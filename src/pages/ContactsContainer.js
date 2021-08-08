import React, { useEffect } from "react";
import Contacts from "./Contacts";
import { useSelector, useDispatch } from "react-redux";
import phonebookSelectors from "../redux/phonebook/phonebookSelectors";
import phonebookOperation from "../redux/phonebook/phonebookOperations";

const ContactsContainer = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(phonebookSelectors.getContacts);
  useEffect(() => {
    dispatch(phonebookOperation.fetchContact());
    // const { fetchContacts } = this.props;
    // fetchContacts();
  }, [])
  
  
    // const { contacts } = this.props;
    return <Contacts contacts={contacts} />;
  
}

// const mapStateToProps = (state) => ({
//   contacts: phonebookSelectors.getContacts(state),
// });

// const mapDispatchToProps = {
//   fetchContacts: phonebookOperation.fetchContact,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer);
export default ContactsContainer;