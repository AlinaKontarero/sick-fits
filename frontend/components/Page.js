import PropTypes from 'prop-types';
import Header from './Header'

export default function Page({ children, cool }) {
  return (
    <div>
      <Header />
      <h2>I'm the Page Component! </h2>
      <code>{cool}</code>
      {children}
    </div>
  );
}

Page.propTypes = {
  cool: PropTypes.string,
  // children: PropTypes.oneOf([
  //   PropTypes.arrayOf(PropTypes.node),
  //   PropTypes.node,
  // ]),
  children: PropTypes.any,
};
