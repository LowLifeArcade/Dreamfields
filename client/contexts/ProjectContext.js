/**
 * `project` is the whole project (field with all the scenes and shots)
 * */
export const ProjectContext = createContext();
/**
 * `FETCH_PROJECT` - fetch project from server and set it to the project context. `Payload` should be the project slug.
 *
 * `LOAD_PROJECT` - load project with `payload` spread into projectState
 */
export const setProjectContext = createContext();

export const ProjectProvider = ({ children }) => {

  const loadField = async (slug) => {
    const { data } = await axios.get(`/api/field/${slug}`);
    projectDispatch(['LOAD_PROJECT', {data, slug}])
    console.log('LOADFIELD FUNCTION IN PROVIDER')
    localStorage.setItem('projectslug', JSON.stringify(slug));
  };

  const initialProject = {};
  const projectReducer = (state, [type, payload]) => {
    switch (type) {
      // loads project into state from payload given
      case 'UNLOAD_PROJECT':
        return {}
      case 'LOAD_PROJECT':
        return { ...payload.data };
      case 'LOAD_SLUG': 
        return loadField(payload.slug);
      default:
        state;
    }
  };

  const [projectState, projectDispatch] = useReducer(
    projectReducer,
    initialProject
  );

  // TODO: Extract into async code folder
  // only for loading from localStorage when the page is refreshed or loaded
  const loadFieldFromLocalStorage = async (slug) => {
    const { data } = await axios.get(`/api/field/${slug}`);
    await console.log('field from provider', data);
    await projectDispatch(['LOAD_PROJECT', { data, slug }]);
  };

  // loading project from local storage if it exists
  useEffect(() => {
    const slug = localStorage.getItem('projectslug');
    if (slug) {
      loadFieldFromLocalStorage(JSON.parse(slug));
    }
  }, []);

  useEffect(() => {
    console.log('PROJECT PROVIDER: ', projectState)
  });

  return (
    <>
      <ProjectContext.Provider value={projectState}>
        <setProjectContext.Provider value={projectDispatch}>
          {children}
        </setProjectContext.Provider>
      </ProjectContext.Provider>
    </>
  );
};
