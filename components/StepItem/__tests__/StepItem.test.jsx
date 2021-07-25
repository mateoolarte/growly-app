// utils
import { render } from 'testUtils';

// components
import { StepItem } from '..';

describe('StepItem', () => {
  const propsBase = {
    stepNum: 1,
    title: 'title',
    description: 'description',
    image: 'image',
  };

  it('should render correctly', () => {
    const { getByText, container } = render(<StepItem {...propsBase} />);
    const numberStep = getByText('1');
    const titleElm = getByText('title');
    const descriptionElm = getByText('description');
    const imageElm = container.querySelector('img');

    expect(numberStep).toBeInTheDocument();
    expect(titleElm).toBeInTheDocument();
    expect(descriptionElm).toBeInTheDocument();
    expect(imageElm).toBeInTheDocument();
  });

  it('should render the reverse item', () => {
    const props = {
      ...propsBase,
      isReverse: true,
    };

    const { getByTestId } = render(<StepItem {...props} />);
    const reverseItem = getByTestId('reverse');
    expect(reverseItem).toBeInTheDocument();
  });

  it('should not render the component', () => {
    const props = {
      ...propsBase,
      title: '',
      description: '',
    };

    const { container } = render(<StepItem {...props} />);

    expect(container).toBeEmptyDOMElement();
  });

  it('should not render the img tag', () => {
    const props = {
      ...propsBase,
      image: '',
    };

    const { container } = render(<StepItem {...props} />);
    const imageElm = container.querySelector('img');
    expect(imageElm).not.toBeInTheDocument();
  });

  it('should not render the stepNum', () => {
    const props = {
      ...propsBase,
      stepNum: '',
    };

    const { container } = render(<StepItem {...props} />);
    const numberStep = container.querySelector('span');
    expect(numberStep).not.toBeInTheDocument();
  })

  it('should not render the title', () => {
    const props = {
      ...propsBase,
      title: '',
    };

    const { container } = render(<StepItem {...props} />);
    const titleElm = container.querySelector('h2');
    expect(titleElm).not.toBeInTheDocument();
  })

  it('should not render the description', () => {
    const props = {
      ...propsBase,
      description: '',
    };

    const { container } = render(<StepItem {...props} />);
    const descriptionElm = container.querySelector('p');
    expect(descriptionElm).not.toBeInTheDocument();
  })
});
