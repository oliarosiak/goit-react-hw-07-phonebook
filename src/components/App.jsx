import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operation';
import { selectIsLoading, selectError } from 'redux/selectors';

import { MainHeader, SecondHeader } from './App.styled';

import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {    
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <MainHeader>Hogwarts Magical Phonebook</MainHeader>
      <ContactForm />
      <SecondHeader>Contacts</SecondHeader>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
};

export default App;
