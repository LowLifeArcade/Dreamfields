import Layout from '../components/Layout';
import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from '../context';
import { ProjectProvider } from '../contexts/SceneMachineProviders';
import { ProjectContext } from '../contexts/SceneMachineProviders';
import { useContext } from 'react';


// TODO: create a context and reducer for the sideMenuItems prop



function MyApp({ Component, pageProps }) {
  // const project = useContext(ProjectContext)
  // console.log('PROJECT IN APP', project)
  // const fakeMenuItems = [
  //   { slug: '/', icon: <i class="fas fa-home"></i>, name: 'Home' },
  //   { slug: '/edit/creator', icon: <i class="far fa-edit"></i>, name: 'Scene Machine' },
  //   { slug: '/creator', icon: <i class="fas fa-cog"></i>, name: 'Settings' },
  //   ,
  // ];
  // const fakeMenuItems2 = [
  //   { slug: '/projects', icon: <i class="fas fa-photo-video"></i>, name: 'Library' },
  //   { slug: `/creator/field/view/${project?.slug}`, icon: <i class="fas fa-phone-square-alt"></i>, name: 'Connect' },
  //   { slug: '/creator', icon: <i class="fas fa-poll"></i>, name: 'Stats' },
  //   { slug: '/creator/field/create', icon: <i class="far fa-plus-square"></i>, name: 'Create New' }
  // ];
  
  return (
    <Provider>
      <ProjectProvider>
      <head lang="en" class="notranslate" translate="no">
        {/* <script src="https://kit.fontawesome.com/69aa58689a.js" crossorigin="anonymous"></script> */}
        <meta nameName="google" content="notranslate" lang="en" class="notranslate" translate="no" className="notranslate"/>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
          @import
          url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');
          @import
          url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
          @import
          url('https://fonts.googleapis.com/css2?family=Marck+Script&display=swap');
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
        </ProjectProvider>
    </Provider>
  );
}

export default MyApp;
