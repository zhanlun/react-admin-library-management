import { AppBar, Layout } from 'react-admin';

const MyAppBar = props => <AppBar {...props} userMenu={<></>} />;

const MyLayout = props => <Layout {...props} appBar={MyAppBar} />;

export default MyLayout;