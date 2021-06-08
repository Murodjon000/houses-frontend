import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sidebar from '../../src/components/Sidebar';
import HouseCard from '../../src/components/HouseCard';
import FavouritesCard from '../../src/components/FavouritesCard';

configure({ adapter: new Adapter() });

const shallowSetup = () => {
  const props = {
    name: 'John',
    houses: {
      id: '5',
      name: 'Castle',
      price: 1000000,
      image:
        'https://images.unsplash.com/photo-1606854053266-60c43ca22b47?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    },
    favourites: {
      id: 1,
      name: 'Villa',
      description:
        'A modern style villa located on the peaceful location of Warsaw. Perfect for single family who loves to live away from the hustle and bustle of the capital city.',
      price: 1500000,
      image:
        'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
      location: 'Warsaw',
      date: '2005-10-10',
      rooms: 7,
      created_at: '2021-05-20T10:56:39.126Z',
      updated_at: '2021-05-20T10:56:39.126Z',
    },
  };

  const enzymeWrapper = shallow(<Sidebar {...props} />);
  const houseWrapper = shallow(<HouseCard {...props.houses} />);
  const favouriteWrapper = shallow(
    <FavouritesCard {...props.favourites} />,
  );

  return {
    props,
    enzymeWrapper,
    houseWrapper,
    favouriteWrapper,
  };
};

test('should render Sidebar component', () => {
  const { enzymeWrapper, props } = shallowSetup();

  expect(enzymeWrapper.find('.user-name').text()).toBe(props.name);
  expect(
    enzymeWrapper.find('img').hasClass('card-rounded-image'),
  ).toBe(true);
});

export default shallowSetup;
