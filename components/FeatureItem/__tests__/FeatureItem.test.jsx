// utils
import { render } from 'testUtils';

// components
import { FeatureItem } from '..';

describe('FeatureItem', () => {
  it('Should render the component', () => {
    const props = {
      isAlt: false,
      title: 'Test FeatureItem',
      image: 'url-image',
      description: 'Component description',
      bgText: 'url-bg',
    };

    const { getByText } = render(<FeatureItem {...props} />);

    const titleElm = getByText('Test FeatureItem');
    const descriptionElm = getByText('Component description');

    expect(titleElm).toBeInTheDocument();
    expect(descriptionElm).toBeInTheDocument();
  });

  it('Should not render the component', () => {
    const props = {
      isAlt: false,
      image: 'url-image',
      bgText: 'url-bg',
    };

    const { container } = render(<FeatureItem {...props} />);

    expect(container).toBeEmptyDOMElement();
  });

  it('Should not show image tag', () => {
    const props = {
      isAlt: false,
      title: 'Test FeatureItem',
      description: 'Component description',
      bgText: 'url-bg',
    };
    const { container } = render(<FeatureItem {...props} />);
    const imgElm = container.querySelector('img');

    expect(imgElm).not.toBeInTheDocument();
  });
});
