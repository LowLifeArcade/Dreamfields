import CreatorRoute from '../../components/routes/CreatorRoute';
import { useContext, useState, useEffect } from 'react';
import { Context } from '../../context';
import UserRoute from '../../components/routes/UserRoute';
import Button from '../../components/Button';
import router from 'next/router';
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
  const [projects, setProjects] = useState([
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1622601803994-c70eb8ed6dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'Paul Saves All',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1603344204980-4edb0ea63148?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'Intentionally ',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'Pizza',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1622601803994-c70eb8ed6dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'Paul Saves All',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1622601803994-c70eb8ed6dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'Paul Saves All',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1622601803994-c70eb8ed6dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'ggggagagag',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1622601803994-c70eb8ed6dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'Paul Saves All',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1622601803994-c70eb8ed6dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'Paul Saves All',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1622601803994-c70eb8ed6dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'eeeeeeee',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1622601803994-c70eb8ed6dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'Paul Saves All',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1622601803994-c70eb8ed6dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'ggggggg',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1622601803994-c70eb8ed6dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'Paul Saves All',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1622601803994-c70eb8ed6dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'Paul Saves All',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1622601803994-c70eb8ed6dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'aaaaaaaa',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1622601803994-c70eb8ed6dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'Paul Saves All',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1622601803994-c70eb8ed6dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'some other',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1622601803994-c70eb8ed6dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'Paul Saves All',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1622601803994-c70eb8ed6dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'Paul Saves All',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1546624538-0a85938a4f2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=564&q=80',
      name: 'Zuccini',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=838&q=80',
      name: 'Treasure',
      slug: '',
    },
    {
      id: '',
      avatarImg: '',
      name: 'Add New',
      slug: '',
    },
  ]);
  const [favorites, setFavorites] = useState([
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      title: 'Pizza',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1546624538-0a85938a4f2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=564&q=80',
      title: 'Zuccini',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=838&q=80',
      title: 'Treasure',
      slug: '',
    },
  ]);

  const loadFields = async () => {
    const { data } = await axios.get('/api/creator-fields');
    setFields(data);
  };

  return (
    <CreatorRoute>
      {/* <DashboardLayout items={projects} title="Creator Dashboard"> */}
      <div className="page">
        <h1>Welcome back {user && user.name}</h1>
        <Button
          color="#276a72"
          onClick={() => router.push('/creator/field/create')}
          buttonName="New Field"
        />
        {fields.map((field) => (
          <div>
            <button
              onClick={() => router.push(`/creator/field/view/${field.slug}`)}
            >
              {field.name}
            </button>
          </div>
        ))}
        <pre>{JSON.stringify(fields, null, 4)}</pre>
        <style jsx>{`
        .page {
          padding: 20px;
        }
        `}</style>
      </div>

      {/* </DashboardLayout> */}
    </CreatorRoute>
  );
};

export default CreatorIndex;
