// utils
import { render, fireEvent, screen } from 'test-utils';

// components
import { Modal } from '..';

describe('Modal', () => {
  let props = {
    isActive: false,
    handleClose: () => {},
  };

  it('Should render the default component', () => {
    const { getByTestId } = render(<Modal {...props}>Modal component</Modal>);

    expect(getByTestId('inactive')).toBeTruthy();
  });

  it('Should render modal active', () => {
    props = {
      ...props,
      isActive: true,
    };

    const { getByTestId, getByText } = render(
      <Modal {...props}>Modal component</Modal>
    );

    expect(getByTestId('active')).toBeTruthy();
    expect(getByText('Modal component')).toBeTruthy();
  });
});
