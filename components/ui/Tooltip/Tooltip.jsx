// vendors
import { useState } from 'react';

// styled
import { Wrapper, Box } from './Tooltip.styles';

export function Tooltip({ text, children }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <Wrapper
      onMouseEnter={() => setIsActive(true)}
      onTouchStart={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <Box isActive={isActive}>{text}</Box>
      {children}
    </Wrapper>
  );
}
