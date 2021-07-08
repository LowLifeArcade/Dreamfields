import CreatorRoute from '../../components/routes/CreatorRoute';
import { useContext, useState, useEffect } from 'react';
import { Context } from '../../context';
import UserRoute from '../../components/routes/UserRoute';
import FormCard from '../../components/formlayout/FormCard';
import Button from '../../components/Button';
import router from 'next/router';
import Link from 'next/link';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import axios from 'axios';

// TODO: save in Context the location to the project I click on in the router so that whenver I click the briefcase or edit page later I'm brought back to the project I'm currently working on.

const CreatorIndex = () => {
  const {
    state: { user },
  } = useContext(Context);

  const [fields, setFields] = useState([]);

  useEffect(() => {
    loadFields();
  }, []);

  const loadFields = async () => {
    const { data } = await axios.get('/api/creator-fields');
    setFields(data);
  };

  return (
    <CreatorRoute>
      <DashboardLayout title="Creator Dashboard">
        <FormCard>
          <div className="page">
            <h1>Welcome back {user && user.name}</h1>
            <Button
              color="#276a72"
              onClick={() => router.push('/creator/field/create')}
              buttonName="New Field"
            />
            {fields &&
              fields.map((field) => (
                <>
                  <div className="media">
                    avatar el
                    <div className="media-body">
                      <div className="row">
                        <div className="col">
                          <Link
                            href={`/creator/field/view/${field.slug}`}
                            className="pointer"
                          >
                            <a className="h5 text-primary">{field.name}</a>
                          </Link>
                          <p>{field.description}</p>
                          {field.scenes.length} Scenes
                          {field.scenes.length < 1 ? (
                            <p>
                              You need at least 1 scene to launch a project.
                            </p>
                          ) : field.published ? (
                            <p>
                              Your field is prepared and open in the world.
                              Check out the satelite to learn more.
                            </p>
                          ) : (
                            <p>Your field is ready to open to the world.</p>
                          )}
                        </div>
                        <div className="col text-center">
                          {field.published ? (
                            <div>
                              indication of field published
                              {/* icons {field.image.Location} */}
                            </div>
                          ) : (
                            <div>indication of field not published</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <button
                    onClick={() =>
                      router.push(`/creator/field/view/${field.slug}`)
                    }
                  >
                    {field.name}
                  </button> */}
                </>
              ))}
            <pre>{JSON.stringify(fields, null, 4)}</pre>
            <style jsx>{`
              .page {
                padding: 20px;
              }
            `}</style>
          </div>
        </FormCard>
      </DashboardLayout>
    </CreatorRoute>
  );
};

export default CreatorIndex;
