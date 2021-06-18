import { useEffect, useState } from "react";
import CreatorRoute from "../../../components/routes/CreatorRoute"



const CreateField = () => {
  const [values, setValues] = useState({
    name: '', 
    description: '',
    price: '',
    uploading: false,
    paid: false,
    loading: false,
    imagePreview: ''
  });
  return (
    <CreatorRoute>
      <h1>Create Field</h1>
      <p>Layout with different sidebar</p>
    </CreatorRoute>
  )
}

export default CreateField
