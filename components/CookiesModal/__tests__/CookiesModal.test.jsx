// utils
import { render } from 'testUtils';

// components
import { CookiesModal } from '..';

describe('CookiesModal', () => {
  it('Should render the component', () => {
    const { getByText } = render(<CookiesModal />);
    const titleElm = getByText('Aviso de cookies');
    const ctaBtn = getByText('Aceptar');

    expect(titleElm).toBeInTheDocument();
    expect(ctaBtn).toBeInTheDocument();
  });

  it('Should hide the modal', () => {
    const { getByText } = render(<CookiesModal />);
    const ctaBtn = getByText('Aceptar');

    ctaBtn.click();

    expect(ctaBtn).not.toBeInTheDocument();
  });
});
