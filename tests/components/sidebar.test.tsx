import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Sidebar from '../../src/components/Sidebar';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Sidebar
      name="John"
      image="https://images.unsplash.com/photo-1603993097397-89c963e325c7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
