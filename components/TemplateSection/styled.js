// vendors
import styled from "styled-components";

// constants
import { MEDIA_QUERIES } from "../../utils/constants";

const Wrapper = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 3rem;

  ${MEDIA_QUERIES.tablet} {
    flex-direction: ${(props) =>
      props && props.isReverse ? "row-reverse" : "row"};
    margin-bottom: 4rem;
  }

  ${MEDIA_QUERIES.desktopXL} {
    margin-bottom: 6rem;
  }
`;

const Image = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  ${MEDIA_QUERIES.tablet} {
    width: 50%;
    padding: 0 1rem;
    margin-bottom: 0;
  }

  ${MEDIA_QUERIES.landscape} {
    width: 55%;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
`;

const Info = styled.div`
  width: 100%;

  ${MEDIA_QUERIES.tablet} {
    width: 50%;
    padding: 0 1rem;
  }

  ${MEDIA_QUERIES.landscape} {
    width: 45%;
  }
`;

const LogoContainer = styled.div`
  margin-bottom: 2rem;
`;

const Logo = styled.img`
  width: 120px;
`;

const PreferenceTitle = styled.span`
  display: inline-block;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const Preferences = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 2rem;
  padding: 0;
  list-style-type: none;
`;

const PreferenceItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90px;
  margin: 0 0.5rem 1rem;
  text-align: center;
`;

const IconContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  margin-bottom: 0.5rem;
  border-radius: 50%;
  background-color: ${(props) => props && props.theme.colors.gray};

  ${MEDIA_QUERIES.tablet} {
    width: 60px;
    height: 60px;
  }

  svg {
    height: 25px;

    ${MEDIA_QUERIES.tablet} {
      height: 35px;
    }
  }
`;

const PreferenceText = styled.p`
  margin: 0;
  font-size: 13px;
`;

const Actions = styled.div`
  a {
    display: block;
    margin-bottom: 1rem;
    text-align: center;

    ${MEDIA_QUERIES.tablet} {
      display: inline-block;
      margin-right: 1rem;
      margin-bottom: 0;
      text-align: left;
    }
  }
`;

export {
  Wrapper,
  Image,
  Thumbnail,
  Info,
  LogoContainer,
  Logo,
  PreferenceTitle,
  Preferences,
  PreferenceItem,
  Actions,
  IconContainer,
  PreferenceText,
};
