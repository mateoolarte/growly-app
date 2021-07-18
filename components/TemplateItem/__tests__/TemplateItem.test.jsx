// utils
import { render } from 'test-utils';

// components
import { TemplateItem } from '..';

describe('TemplateItem', () => {
  it('should render correctly', () => {
    const tree = render(<TemplateItem />);
    // expect(tree).toMatchSnapshot();
  });
})
