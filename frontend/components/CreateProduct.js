import useForm from '../lib/useForm';
import Form from './styles/Form';

const CreateProduct = () => {
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    image: '',
    name: 'Nice Shoes',
    price: 15452,
    description: 'Default item description',
  });
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <fieldset>
        <label htmlFor="image">
          Image
          <input
            required
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Price"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
        <button onClick={() => console.log('inputs::: ', inputs)} type="submit">
          + Add Product
        </button>
        <button onClick={clearForm} type="button">
          Clear Form
        </button>
        <button onClick={resetForm} type="button">
          Reset Form
        </button>
      </fieldset>
    </Form>
  );
};

export default CreateProduct;
