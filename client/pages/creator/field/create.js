import { useEffect, useState } from 'react';
import CreatorRoute from '../../../components/routes/CreatorRoute';
import FormLayout from '../../../components/formlayout/FormLayout';
import FormCard from '../../../components/formlayout/FormCard';
import FormInput from '../../../components/formlayout/FormInput';
import FormTextArea from '../../../components/formlayout/FormTextArea';
import FormSelect from '../../../components/formlayout/FormSelect';
import ButtonUpload from '../../../components/ButtonUpload';
import Button from '../../../components/Button';

const fakeData = ['Love Story', 'Adventure', 'Comedy'];

const CreateField = () => {
  const [preview, setPreview] = useState('pic');
  const [values, setValues] = useState({
    name: '',
    description: '',
    price: '',
    uploading: false,
    paid: false,
    category: '',
    loading: false,
  });
  console.log('preview', preview);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleImg = (e) => {
    setPreview(window.URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  console.log(values);
  return (
    <CreatorRoute>
      <FormLayout rightBoxItems={values}>
        <FormCard title="Create Field">
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
          <FormSelect value={values.paid} name="paid" onChange={handleChange}>
            <option value={true}>Paid</option>
            <option value={false}>Free</option>
          </FormSelect>
          <FormSelect
            onChange={handleChange}
            value={values.category}
            htmlFor="Category"
            name="category"
          >
            <option disabled value="">
              Select One
            </option>
            {fakeData.map((c) => (
              <option>{c}</option>
            ))}
          </FormSelect>
          <div className="submit-section">
            <ButtonUpload
              color={'#3f3f3f'}
              disabled={values.loading}
              uploadType="image"
              buttonName="Upload Banner Image"
              onClick={handleImg}
            />
            <div className="description">
              Think of this as the image you want to represent your dream. It
              should have the characters and setting you want to convey in the
              story. The dimensions should stretch across the screen at about
              1200 x 600
            </div>
            {preview && <div>hi</div>}

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
  `}</style>
);
