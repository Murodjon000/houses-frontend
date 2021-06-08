import React from 'react';
import renderer from 'react-test-renderer';
import InfoSecond from '../../src/components/mainPage/InfoSecond';

test('should correctly render Details page', () => {
  const component = renderer.create(<InfoSecond image="https://images.unsplash.com/photo-1603993097397-89c963e325c7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
