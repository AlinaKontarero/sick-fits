import { useEffect, useState } from 'react';

export default function useForm(initial = {}) {
  // create a state object for inputs
  const [inputs, setInputs] = useState(initial);
  // array of initial objects: 
  const initialValues = Object.values(initial).join('');

  useEffect(() => {
    // This fn runs when things we are watching change
    setInputs(initial)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues]) 

  function handleChange(e) {
    let { value, name, type } = e.target;
    if (type === 'number') {
      value = parseInt(value);
    }
    if (type === 'file') {
      [value] = e.target.files;
    }

    setInputs({
      // copy not changing properies:
      ...inputs,
      // update changing property:
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );

    setInputs(blankState);
  }

  // return surfice things from the custom hook:
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
