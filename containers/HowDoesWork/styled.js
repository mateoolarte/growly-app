// vendors
import styled from 'styled-components';

// constants
import { MEDIA_QUERIES } from '../../utils/constants';

export const Wrapper = styled.section`
  width: 95%;
  max-width: ${(props) => props && props.theme.sizes.container};
  margin: 0 auto 3rem;
  text-align: center;

  ${MEDIA_QUERIES.tablet} {
    margin-bottom: 4rem;
  }
`;

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 28px;

  ${MEDIA_QUERIES.tablet} {
    font-size: 42px;
  }

  ${MEDIA_QUERIES.desktopXL} {
    font-size: 56px;
  }
`;

export const Description = styled.p`
  margin: 0 auto 2rem;
  font-size: 0.9rem;

  ${MEDIA_QUERIES.tablet} {
    width: 80%;
    font-size: 1rem;
  }

  ${MEDIA_QUERIES.desktopXL} {
    font-size: 1.1rem;
  }
`;

export const StepsContainer = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  padding: 0;
  list-style-type: none;
`;

export const StepItem = styled.li`
  width: calc(100% / 4 - 1rem);
  margin: 0 0.5rem;
  filter: ${(props) => (props && props.disabled ? 'grayscale(100%)' : '')};
  opacity: ${(props) => (props && props.disabled ? '0.6' : '1')};

  ${MEDIA_QUERIES.tablet} {
    width: calc(100% / 4 - 2rem);
    margin: 0 1rem;
  }
`;

export const Step = styled.button`
  width: 3.2rem;
  height: 3.2rem;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: linear-gradient(
    ${(props) => props && props.theme.colors.primary},
    ${(props) => props && props.theme.colors.secondary}
  );
  color: ${(props) => props && props.theme.colors.white};
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
`;

export const StepsContent = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  ${MEDIA_QUERIES.tablet} {
    margin-bottom: 3rem;
  }
`;

export const StepContentItem = styled.div`
  position: relative;
  width: calc(100% / 4 - 1rem);
  margin: 0 0.5rem;
  filter: ${(props) => (props && props.disabled ? 'grayscale(100%)' : '')};
  opacity: ${(props) => (props && props.disabled ? '0.5' : '1')};
`;

export const StepContentTitle = styled.h3`
  margin-top: 0;
  font-size: 0.8rem;

  ${MEDIA_QUERIES.tablet} {
    font-size: 1.1rem;
  }
`;

export const StepArrow = styled.span`
  display: none;

  ${MEDIA_QUERIES.landscape} {
    display: inline-block;
    position: absolute;
    top: 20%;
    right: -2.5rem;
  }
`;
