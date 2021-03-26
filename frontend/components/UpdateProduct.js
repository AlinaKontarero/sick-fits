import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/client';
import Form from './styles/Form';
import DisplayError from './ErrorMessage';
import useForm from '../lib/useForm';

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      description
      price
    }
  }
`;

const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $price: Int
  ) {
    updateProduct(
      id: $id
      data: { name: $name, description: $description, price: $price }
    ) {
      id
      price
      description
      name
    }
  }
`;

export default function UpdateProduct({ id }) {
  // 1. get the existing item
  const { data, error, loading } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: { id },
  });

  // 2. get the mutation to update the item
  const [updateProduct, mutationResponse] = useMutation(
    UPDATE_PRODUCT_MUTATION,
    {
      variables: {
        id,
        // updates to the product:
      },
    }
  );
  // inputs state:
  const { inputs, handleChange, clearForm, resetForm } = useForm(data?.Product);
  console.log(inputs);

  // 3. we need the form to handle the updates
  if (loading) {
    return <p>Loading! </p>;
  }
  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        const res = await updateProduct({
          variables: {
            id,
            name: inputs.name,
            description: inputs.description,
            price: inputs.price,
          },
        }).catch(console.error);
        // @TODO: handle submit
      }}
    >
      <DisplayError error={mutationResponse.error || error} />
      <fieldset
        disabled={mutationResponse.loading}
        aria-busy={mutationResponse.loading}
      >
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
          Update Product
        </button>
      </fieldset>
    </Form>
  );
}
