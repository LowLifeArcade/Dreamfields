import Layout from '../components/Layout';
import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from '../context';

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <head>
        {/* <script src="https://kit.fontawesome.com/69aa58689a.js" crossorigin="anonymous"></script> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
          @import
          url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');
          {/* @import
          url('https://fonts.googleapis.com/css2?family=Anton&display=swap'); */}
        {/* @import
        url('https://fonts.googleapis.com/css2?family=Marck+Script&display=swap'); */}
        </style>

      </head>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Layout showSideBar={true}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
