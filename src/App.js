import { createTheme } from '@material-ui/core/styles';
import BookIcon from '@material-ui/icons/Book';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SubjectIcon from '@material-ui/icons/Subject';
import jsonServerProvider from 'ra-data-json-server';
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { BookCreate, BookEdit, BookList, BookShow } from "./books";
import { CheckoutCreate, CheckoutEdit, CheckoutList } from "./checkouts";
import Dashboard from './Dashboard';
import MyLayout from "./MyLayout";
import { SubjectCreate, SubjectList } from "./subjects";
import { VisitorCreate, VisitorEdit, VisitorList } from "./visitors";

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#6f00f5',
    },
  },
})

const apiUrl = process.env.NODE_ENV !== 'production' ?
  'http://localhost:8080/api' :
  'https://zlun-library-management.herokuapp.com/api';
  
const dataProvider = jsonServerProvider(apiUrl);

const App = () => (
  <Admin theme={theme} layout={MyLayout} dashboard={Dashboard} dataProvider={dataProvider} >
    <Resource name="books" list={BookList} show={BookShow} edit={BookEdit} create={BookCreate} icon={BookIcon} />
    <Resource name="subjects" list={SubjectList} create={SubjectCreate} icon={SubjectIcon} />
    <Resource name="visitors" list={VisitorList} edit={VisitorEdit} create={VisitorCreate} icon={PersonIcon} />
    <Resource name="checkouts" list={CheckoutList} edit={CheckoutEdit} create={CheckoutCreate} icon={ShoppingCartIcon} />
  </Admin>
);

export default App;