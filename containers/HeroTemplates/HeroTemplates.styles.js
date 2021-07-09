// vendors
import styled from 'styled-components';

// constants
import { MEDIA_QUERIES } from '../../utils/constants';

// assets
const bgPlans = '/images/bg-plans.jpg';
const checkIcon = '/icons/check.svg';

export const Wrapper = styled.section`
  position: relative;
  padding-top: 120px;
  margin-bottom: 2rem;
  background-image: url('${bgPlans}');
  background-repeat: no-repeat;
  background-size: cover;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      ${(props) => props && props.theme.colors.lightGradient},
      ${(props) => props && props.theme.colors.white}
    );
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 1;
  width: 95%;
  max-width: ${(props) => props && props.theme.sizes.container};
  margin: 0 auto 4rem;
`;

export const Heading = styled.h1`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 36px;
  line-height: 1;
  text-align: center;

  ${MEDIA_QUERIES.tablet} {
    margin-bottom: 2rem;
    font-size: 56px;
  }

  ${MEDIA_QUERIES.desktopXL} {
    font-size: 72px;
  }
`;

export const SubHeading = styled.h2`
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: ${(props) => props && props.theme.colors.primary};
  font-size: 22px;
  text-align: center;

  ${MEDIA_QUERIES.tablet} {
    font-size: 30px;
  }
`;

export const ToggleBox = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 300px;
  min-height: 55px;
  margin: 0 auto 2rem;
  padding: 0;
  list-style-type: none;

  ${MEDIA_QUERIES.tablet} {
    width: 340px;
  }
`;

export const ToggleBoxItem = styled.li`
  ${MEDIA_QUERIES.tablet} {
    position: absolute;
    top: 0;
    left: 0;
  }

  ${(props) =>
    props &&
    props.isActive &&
    `
    z-index: 1;
  `}

  &:nth-child(2) {
    left: 120px;

    ${MEDIA_QUERIES.tablet} {
      left: 160px;
    }
  }
`;

export const ToggleBoxButton = styled.button`
  display: inline-block;
  width: 120px;
  padding: 0.4rem 1rem;
  border: 0;
  border-radius: 2rem;
  background-color: ${(props) => props && props.theme.colors.white};
  font-size: 0.9rem;
  text-align: center;
  box-shadow: 0 2px 6px ${(props) => props && props.theme.colors.grayDark};
  cursor: pointer;
  outline: none;

  ${(props) =>
    props &&
    props.isActive &&
    `
    background: linear-gradient(
          ${props.theme.colors.primary},
          ${props.theme.colors.secondary}
        );
    color: ${props.theme.colors.white};
    box-shadow: none;
  `}

  ${MEDIA_QUERIES.tablet} {
    width: 140px;
    padding: 0.6rem 1rem 0.6rem 3.2rem;
    font-size: 1rem;
    text-align: left;
  }

  strong {
    display: block;
    font-size: 1rem;

    ${MEDIA_QUERIES.tablet} {
      font-size: 1.1rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  ${MEDIA_QUERIES.landscape} {
    flex-direction: row;
  }
`;

export const Plan = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  text-align: center;

  ${MEDIA_QUERIES.landscape} {
    width: 20%;
    margin-bottom: 0;
    margin-right: 1rem;
  }

  svg {
    height: 120px;
    margin-bottom: 0.2rem;
  }
`;

export const Title = styled.h3`
  margin: 0;
  color: ${(props) => props && props.theme.colors.secondary};
  font-size: 28px;

  ${MEDIA_QUERIES.landscape} {
    font-size: 48px;
  }
`;

export const PricingContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  ${(props) =>
    props &&
    props.centered &&
    `
    justify-content: center;
  `}
`;

export const Pricing = styled.h4`
  margin: 0;
  margin-right: 0.5rem;
  font-size: 28px;

  ${MEDIA_QUERIES.landscape} {
    font-size: 35px;
  }
`;

export const Flag = styled.img`
  height: 26px;
`;

export const Note = styled.p`
  width: 100%;
  margin: 0;
  color: ${(props) => props && props.theme.colors.secondary};
  font-size: 12px;
`;

export const Info = styled.div`
  width: 90%;

  ${MEDIA_QUERIES.landscape} {
    width: 80%;
  }

  strong {
    display: inline-block;
    margin-bottom: 1rem;
  }
`;

export const Description = styled.p`
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

export const Features = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style-type: none;

  ${MEDIA_QUERIES.landscape} {
    height: 280px;
  }
`;

export const FeatureItem = styled.li`
  position: relative;
  margin-bottom: 0.8rem;
  padding: 0 1rem 0 1.8rem;

  ${MEDIA_QUERIES.landscape} {
    width: 45%;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 1px;
    width: 1.2rem;
    height: 1.2rem;
    background-image: url('${checkIcon}');
    background-repeat: no-repeat;
    background-size: 1.2rem;
  }
`;
