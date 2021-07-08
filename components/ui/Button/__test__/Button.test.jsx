// utils
import { render } from 'test-utils';

// components
import { Button } from '..';

describe('Button', () => {
  it('Should render the default component', () => {
    const { container, getByText } = render(<Button>Button component</Button>);
    const btnElm = container.querySelectorAll('button');

    expect(btnElm).toHaveLength(1);
    expect(getByText('Button component')).toBeInTheDocument();
  });

  it('Should render the link component', () => {
    const { container, getByText } = render(
      <Button type="link" href="https://getgrowly.com">
        Link component
      </Button>
    );
    const linkElm = container.querySelectorAll('a');

    expect(linkElm).toHaveLength(1);
    expect(getByText('Link component')).toBeInTheDocument();
  });

  it('Should render the link component with target blank', () => {
    const { container, getByText } = render(
      <Button type="link" href="https://getgrowly.com" target="_blank">
        Link component
      </Button>
    );
    const linkElm = container.querySelectorAll('a');

    expect(linkElm).toHaveLength(1);
    expect(linkElm[0]).toHaveAttribute('target', '_blank');
    expect(getByText('Link component')).toBeInTheDocument();
  });
});
