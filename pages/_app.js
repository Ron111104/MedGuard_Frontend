import "@/styles/globals.css";
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from '../amplifyconfiguration.json';
Amplify.configure(config);

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default withAuthenticator(App);
