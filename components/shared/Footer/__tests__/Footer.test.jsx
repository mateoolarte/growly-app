// utils
import { render } from 'testUtils';

// components
import { Footer } from '..';

describe('Footer', () => {
  it('should render correctly', () => {
    const { container } = render(<Footer />);
    const items = container.querySelectorAll('li');

    expect(items.length).toEqual(4);
  });

  it('should have set href on link', () => {
    const { container } = render(<Footer />);
    const link = container.querySelectorAll('a')[0];

    expect(link).toHaveAttribute('href', '/politica-de-privacidad');
  });

  it('should open the support chat link', () => {
    global.Tawk_API = {
      maximize: jest.fn(),
    };
    const { getByText } = render(<Footer />);
    const link = getByText('Contactar un asesor');

    link.click();
    expect(global.Tawk_API.maximize).toHaveBeenCalled();
  });
});
