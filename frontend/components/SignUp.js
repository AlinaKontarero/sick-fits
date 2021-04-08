import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import Form from './styles/Form';
import useForm from '../lib/useForm';
import { CURRENT_USER_QUERY } from './User';
import DisplayError from './ErrorMessage';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $password: String!
    $name: String!
  ) {
    authenticateUserWithPassword(email: $email, password: $password) {
      createUser(data: { email: $email, name: $name, password: $password }) {
        id
        name
        email
      }
    }
  }
`;

export default function SignUp() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
    name: '',
  });

  const [signup, { loading, error, data }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
    // refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await signup().catch(console.error);
    console.log(res);
    // Send the inputs data to the graphqlAPI
    resetForm();
  }

  if (data?.createUser) {
    return (
      <p>
        Signed up with {data.createUser.email}? Please go ahead and Sign In!
      </p>
    );
  }

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Sign up into your account</h2>
      <DisplayError error={error} />
      <fieldset>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            placeholder="Your name"
            autoComplete="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign up!</button>
      </fieldset>
    </Form>
  );
}
