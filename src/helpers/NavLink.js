import { Link } from '@reach/router';

/* eslint-disable */

const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? '#ec5200' : 'black',
        },
      };
    }}
  />
);

export default NavLink;
