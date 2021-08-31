// in src/App.js
import * as React from "react";
import { Admin, ListGuesser, Resource, EditGuesser, ShowGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { BookEdit, BookList, BookCreate, BookShow } from "./books";
import { SubjectCreate, SubjectList } from "./subjects";
import BookIcon from '@material-ui/icons/Book';
import SubjectIcon from '@material-ui/icons/Subject';
import Dashboard from './Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import { VisitorCreate, VisitorEdit, VisitorList } from "./visitors";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { CheckoutCreate, CheckoutEdit, CheckoutList } from "./checkouts";

const dataProvider = jsonServerProvider('http://localhost:8080/api');
const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider} >
    <Resource name="books" list={BookList} show={BookShow} edit={BookEdit} create={BookCreate} icon={BookIcon} />
    <Resource name="subjects" list={SubjectList} create={SubjectCreate} icon={SubjectIcon} />
    <Resource name="visitors" list={VisitorList} edit={VisitorEdit} create={VisitorCreate} icon={PersonIcon} />
    <Resource name="checkouts" list={CheckoutList} edit={CheckoutEdit} create={CheckoutCreate} icon={ShoppingCartIcon} />
  </Admin>
);

export default App;