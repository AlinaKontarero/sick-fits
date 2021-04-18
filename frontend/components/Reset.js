import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import Form from './styles/Form';
import useForm from '../lib/useForm';
import DisplayError from './ErrorMessage';

const RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $email: String!
    $token: String!
    $password: String!
  ) {
    redeemUserPasswordResetToken(
      email: $email
      token: $token
      password: $password
    ) {
      code
      message
    }
  }
`;

export default function Reset({ token }) {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
    token,
  });

  const [reset, { loading, data, error }] = useMutation(RESET_MUTATION, {
    variables: inputs,
  });
  const warningOnSuccess = data?.redeemUserPasswordResetToken?.code
    ? data?.redeemUserPasswordResetToken
    : undefined;
 
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await reset().catch(console.error);
    console.log(res);
    // Send the inputs data to the graphqlAPI
    resetForm();
  }

  if (data?.redeemUserPasswordResetToken === null) {
    return <p>Success! Check your email for a link.</p>;
  }

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Request a password reset</h2>
      <DisplayError error={error || warningOnSuccess} />
      <fieldset>
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
        <button type="submit">Request reset</button>
      </fieldset>
    </Form>
  );
}
