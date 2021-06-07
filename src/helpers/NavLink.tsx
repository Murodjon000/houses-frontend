import React from 'react';
import { Link } from '@reach/router';

const NavLink: React.FunctionComponent<any> = (props) => (
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
