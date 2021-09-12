import { useEffect, useState, useContext } from 'react';
import CreatorRoute from '../../../components/routes/CreatorRoute';
import FormLayout from '../../../components/formlayout/FormLayout';
import FormCard from '../../../components/formlayout/FormCard';
import FormInput from '../../../components/formlayout/FormInput';
import FormTextArea from '../../../components/formlayout/FormTextArea';
import FormSelect from '../../../components/formlayout/FormSelect';
import ButtonUpload from '../../../components/ButtonUpload';
import Button from '../../../components/Button';
import Resizer from 'react-image-file-resizer';
import { toast } from 'react-toastify';
import axios from 'axios';
import router from 'next/router';
import { production, frameRate, aspectRatio } from '../../../dataModels';
import {
  ProjectContext,
  setProjectContext,
} from '../../../contexts/SceneMachineProviders';
import { Context } from '../../../context';

const fakeData = ['Love Story', 'Adventure', 'Comedy'];
const links = [
  { slug: 'pie', name: 'Home' },
  { slug: 'pie', name: 'Resume' },
  { slug: 'pie', name: 'Tools' },
  { slug: 'pie', name: 'Migrate' },
  { slug: 'pie', name: 'Overview' },
];
const initialFormValues = {
  name: '',
  // slug: '',
  description: '',
  // image: {Location: '', name: ''},
  script: { Location: '', rev: 1 },
  category: '',
  production: 'Pre',
  funding: { funded: false, amount: 0 },
  frameRate: '24fps',
  aspectRatio: '16:9',
  creator: '',
  timeLine: [],
  contributors: [''],
  rev: 1,
};
// const initialFormValues = {
//   name: '',
//   slug: '',
//   description: '',
//   projects: {
//     ['projectName']: {
//       slug: '',
//       script: { Location: '', rev: 1 },
//       conceptArt: [],
//       funding: { funded: false, amount: 0 },
//       reels: {
//         ['reelName']: {
//           production: false,
//           timeLine: {
//             tiemLine: [
//               {
//                 scene001: '',
//               },
//             ],
//             rev: 1,
//             frameRate: 24,
//             aspectRatio: '16:9',
//           },
//           scenes: [{ id: '', name: '', thumbNail: '' }],
//           director: '',
//           contributors: ['']
//         },
//       },
//     },
//   },
//   uploading: false,
//   loading: false,
// }

const CreateField = () => {
  const [progress, setProgress] = useState(0);
  const [preview, setPreview] = useState('');
  const [values, setValues] = useState(initialFormValues);
  const [image, setImage] = useState({});
  const project = useContext(ProjectContext);
  const user = useContext(Context);
  const dispatch = useContext(setProjectContext);

  useEffect(() => {
    let storageValues = window.localStorage.getItem('new-scene-form', values);
    if (storageValues) {
      setValues(JSON.parse(storageValues));
    }

  }, []);

  useEffect(() => {
    user.state.user &&
      user.state.user._id &&
      setValues({ ...values, creator: user.state.user._id });

    console.log('user values', user.state.user && user.state.user._id);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('new-scene-form', JSON.stringify(values));
    // console.log('form values', values);
  }, [values]);

  const handleClearForm = () => {
    window.localStorage.removeItem('new-scene-form');
    window.location.reload();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleFunded = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      funding: {
        funded: e.target.value === 'true' ? true : false,
        amount: values.funding.amount,
      },
    });
  };
  const handleFundingAmount = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      funding: {
        amount: e.target.value,
        funded: values.funding.funded,
      },
    });
  };

  const handleImg = (e) => {
    let file = e.target.files[0];
    setPreview(window.URL.createObjectURL(file));
    setValues({ ...values, loading: true });

    // resize image
    Resizer.imageFileResizer(file, 2020, 1000, 'JPEG', 100, 0, async (uri) => {
      try {
        let { data } = await axios.post('/api/field/upload-image', {
          image: uri,
        });
        console.log('IMAGE UPLOADED', data);
        // set image in state
        setImage(data);

        setValues({ ...values, loading: false });
      } catch (err) {
        setValues({ ...values, loading: false });
        toast.warning('failed upload');
        console.log('failed upload');
      }
    });
  };

  const handleImageRemove = async () => {
    let confirm = window.confirm('Do you want to remove this image?');

    if (confirm) {
      try {
        setValues({ ...values, loading: true });
        await axios.post('/api/field/remove-image', { image });
        setImage({});
        setPreview('');
        setValues({ ...values, loading: false });
      } catch (err) {
        console.log(err);
        setValues({ ...values, loading: false });
        toast.warn('Image upload failed.');
        console.log('Image upload failed');
      }
    }
  };

  const handleScript = async (e) => {
    let file = e.target.files[0];
    // TODO: set loading

    let scriptData = new FormData();
    scriptData.append('script', file);

    try {
      let { data } = await axios.post('/api/field/upload-script', scriptData, {
        onUploadProgress: (e) => {
          setProgress(Math.round((100 * e.loaded) / e.total));
        },
      });
      setValues({
        ...values,
        script: { Location: data.Location, rev: values.script.rev },
      });
      console.log('succesfully uploaded script', data);
      // TODO: loading false
    } catch (err) {
      // TODO: loading false
      console.log('failed upload');
    }
  };

  // TODO: add script removal

  // {ETag: "\"7d9d303eeb9f73832551387aef58c0c2\"", Location: "https://dreamfields-bucket.s3.us-west-1.amazonaws.com/6PCH3fUICi0HQSzuhd6-5.pdf", key: "6PCH3fUICi0HQSzuhd6-5.pdf", Key: "6PCH3fUICi0HQSzuhd6-5.pdf", Bucket: "dreamfields-bucket"}

  //   Bucket: "dreamfields-bucket"
  // ETag: "\"7d9d303eeb9f73832551387aef58c0c2\""
  // Key: "6PCH3fUICi0HQSzuhd6-5.pdf"
  // Location: "https://dreamfields-bucket.s3.us-west-1.amazonaws.com/6PCH3fUICi0HQSzuhd6-5.pdf"

  const handleVideo = async (e) => {
    try {
      const file = e.target.files[0];
      const videoData = new FormData();
      videoData.append('video', file);

      const { data } = await axios.post('/api/field/video-upload', videoData, {
        onUploadProgress: (e) => {
          setProgress(Math.round((100 * e.loaded) / e.total));
        },
      });
    } catch (error) {}
  };

  const handleScriptRemove = async () => {
    let confirm = window.confirm('Do you want to remove this script?');

    if (confirm) {
      try {
        // TODO: set loading true
        await axios.post('/api/field/remove-script', { image });
        setImage({});
        setPreview('');
        setValues({ ...values, loading: false });
      } catch (err) {
        console.log(err);
        setValues({ ...values, loading: false });
        // toast.warn('Image upload failed.');
        console.log('Image upload failed');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/field', {
        ...values,
        image,
      });
      // toast.success('Awesome! Now we can start adding scenes to your field.');
      console.log('success', data);
      const slug = data.slug
      dispatch(['LOAD_PROJECT', { data, slug }]);
      // dispatch(['LOAD_PROJECT', {data, slug}])
      // data.ok && window.location.reload();
      // setTimeout(() => {
      await data && router.push('/edit/creator');
      // data.ok && router.push('/creator');
      // }, 2000);
    } catch (err) {
      toast.error(err.response.data);
      console.log(err.response.data);
    }
  };

  return (
    <CreatorRoute>
      <FormLayout rightBoxItems={values}>
        <FormCard title="Create Project Form">
          {/* <button onClick={handleClearForm}>Clear Form</button> */}
          <FormInput
            onChange={handleChange}
            value={values.name}
            htmlFor="Dream Field Name"
            name="name"
          />
          <FormTextArea
            onChange={handleChange}
            value={values.description}
            htmlFor="Describe your dream"
            name="description"
            cols="10"
            rows="10"
          />
          <div className="script-section">
            <div className="button-label">Script</div>
            <ButtonUpload
              color={'#3f3f3f'}
              disabled={values.loading || preview}
              // uploadType=".pdf"
              buttonName={preview ? 'Preview' : 'Script'}
              onChange={handleScript}
            />
            <div className="button-label"></div>
          </div>
          <FormSelect
            value={values.production}
            name="production"
            htmlFor="Production"
            onChange={handleChange}>
            <option value={production.pre}>Pre Production</option>
            <option value={production.boards}>Boards</option>
            <option value={production.production}>Production</option>
            <option value={production.post}>Post</option>
          </FormSelect>
          <FormInput
            onChange={handleChange}
            value={values.category}
            htmlFor="Category"
            name="category"
          />
          <FormSelect
            value={values.funding.funded}
            name="funded"
            htmlFor="Funded"
            onChange={handleFunded}>
            <option value={false}>Not funded</option>
            <option value={true}>Funded</option>
          </FormSelect>
          <FormInput
            onChange={handleFundingAmount}
            value={values.funding.amount}
            htmlFor="Funding Amount"
            name="amount"></FormInput>
          <FormSelect
            onChange={handleChange}
            value={values.frameRate}
            htmlFor="Frame Rate"
            name="frameRate">
            <option value={frameRate.sync24}>23.96fps</option>
            <option value={frameRate.true24}>24fps</option>
            <option value={frameRate.sync30}>29.97fps</option>
            <option value={frameRate.true30}>30fps</option>
            <option value={frameRate.sync60}>59.94fps</option>
            <option value={frameRate.true60}>60fps</option>
          </FormSelect>
          <FormSelect
            onChange={handleChange}
            value={values.aspectRatio}
            htmlFor="Aspect Ratio"
            name="aspectRatio">
            <option value={aspectRatio.SDTV}>4:3</option>
            <option value={aspectRatio.HDTV}>16:9</option>
            <option value={aspectRatio.cinema}>1.85</option>
            <option value={aspectRatio.netflix}>2:1</option>
            <option value={aspectRatio.cinemaScope}>2.35</option>
            <option value={aspectRatio.anamorphic}>2.39</option>
            <option value={aspectRatio.auteur}>2.76</option>
          </FormSelect>

          {/* <FormSelect
            onChange={handleChange}
            value={values.category}
            htmlFor="Category"
            name="category">
            <option disabled value="">
              Select One
            </option>
            {fakeData.map((c) => (
              <option>{c}</option>
            ))}
          </FormSelect> */}
          <div className="submit-section">
            <div className="button-label">Banner Image</div>
            <ButtonUpload
              color={'#3f3f3f'}
              disabled={values.loading || preview}
              uploadType="image"
              buttonName={preview ? 'Preview' : 'Upload Banner Image'}
              onChange={handleImg}
            />
            {preview ? (
              <div>
                <div
                  onClick={handleImageRemove}
                  className="banner-preview-container">
                  <img className="banner-preview" src={preview} alt="" />
                </div>
                {/* <div className="banner-preview-container">
                  <img className="banner-preview" src={image.Location} alt="" />
                </div> */}
              </div>
            ) : (
              <div className="description">
                Think of this as the image you want to represent your dream. It
                should have the characters and a setting you want to convey in
                the story. The dimensions should stretch across the screen at
                about 1200 x 600
              </div>
            )}

            <Button
              color={'#3f3f3f'}
              disabled={values.loading}
              buttonName={values.loading ? '...saving' : 'Save and Continue'}
              onClick={handleSubmit}
            />
          </div>
        </FormCard>
      </FormLayout>
      {style}
    </CreatorRoute>
  );
};

export default CreateField;

const style = (
  <style jsx>{`
    .button-label {
      color: #333;
      font-size: small;
      color: rgb(105, 100, 85);
      padding-bottom: 15px;
    }
    .submit-section {
      display: flex;
      align-items: flex-start;
      flex-direction: column;

      padding: 10px 0;
    }
    .description {
      border: solid 1px #333;
      padding: 10px;
      margin: 20px 0;
      font-size: 0.9rem;
      color: rgb(97, 97, 97);
    }
    .banner-preview-container {
      margin: 20px 0;
    }
    .banner-preview {
      height: 200px;
      width: 100%;
      object-fit: cover;
    .section {
      padding: 3px 0px;
      margin-bottom: 3px;
    }
    .script-section {
      padding: 3px 0px;
      padding-bottom: 200px;
    }

    .label {
      color: #333;
      font-size: small;
      color: rgb(105, 100, 85);
    }

    .input {
      margin: 5px 0;
      margin-top: 9px;
      padding: 8px;
      width: 100%;
      border: solid 1px rgb(196, 188, 163);
      border-radius: 3px;
    }
  `}</style>
);
