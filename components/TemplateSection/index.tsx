// vendors
import styled from "styled-components";

// constants
import { MEDIA_QUERIES } from "../../constants";

// components
import Button from "../ui/Button";

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
  text-align: center;
`;

const Logo = styled.img`
  height: 60px;
`;

const Description = styled.p``;

const PreferenceTitle = styled.span`
  display: inline-block;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const Preferences = styled.ul`
  display: flex;
  margin: 0 0 3rem;
  padding: 0;
  list-style-type: none;
`;

const PreferenceItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-right: 1.2rem;
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

export default function TemplateSection({
  logoImg,
  description,
  preferences,
  demoLink,
  buyLink,
  thumbnail,
  isReverse,
}) {
  return (
    <Wrapper isReverse={isReverse}>
      <Image>
        <Thumbnail src={thumbnail} alt="Thumbnail" />
      </Image>

      <Info>
        <LogoContainer>
          <Logo src={logoImg} alt="Logo" />
        </LogoContainer>
        <Description>{description}</Description>
        <PreferenceTitle>Ideal para:</PreferenceTitle>
        <Preferences>
          {preferences.map((Preference, index) => (
            <PreferenceItem key={index}>
              <Preference />
            </PreferenceItem>
          ))}
        </Preferences>
        <Actions>
          <Button type="link" href={demoLink} white>
            Ver demo
          </Button>
          <Button type="link" href={buyLink}>
            Comprar
          </Button>
        </Actions>
      </Info>
    </Wrapper>
  );
}
