// utils
import { render } from 'testUtils';

// components
import { TemplateItem } from '..';

describe('TemplateItem', () => {
  it('should render correctly', () => {
    const tree = render(<TemplateItem />);
    // expect(tree).toMatchSnapshot();
  });
})
