import shallowSetup from './mock-data';

test('should render Houses component', () => {
  const { props, houseWrapper } = shallowSetup();

  expect(houseWrapper.find('.test-class').text()).toBe(props.houses.name);
  expect(houseWrapper.find('img').hasClass('border-card')).toBe(true);
  expect(
    houseWrapper.find('div').first().hasClass('infoCarousel__wrapper-desc-info') //eslint-disable-line
  ).toBe(true);
});
