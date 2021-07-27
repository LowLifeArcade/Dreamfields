import axios from 'axios';

// set defaults for axios here possibly or at least local defaults if I can
axios.defaults.baseURL = '/graphql'
axios.defaults.method = 'POST'
// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('X-AUTH')
axios.defaults.headers.post['Content-Type'] = 'application/json'


/**
 * Graph QL mutation for deails section of the scene machine
 * We change everything in the details view here
 * Framerate, aspect ratio, scene count, contributers, etc
 */
export const changeDetails = async (exampleValue) => {
  try {
    const { data } = await axios({
      data: {
        query: `mutation{
        exampleQueryFromServer(
        exampleKey:"${exampleValue}"
      ){
        _id
        exampleItemToReturn
      }
    }`,
      },
    });

    return {
      exampleKey: data.data ? data.data.exampleFuncFromServer : null,
    };
  } catch (err) {}
};
