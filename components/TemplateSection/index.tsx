// components
import Button from "../ui/Button";

// styled
import {
  Wrapper,
  Image,
  Thumbnail,
  Info,
  LogoContainer,
  Logo,
  Description,
  PreferenceTitle,
  Preferences,
  PreferenceItem,
  Actions,
} from "./styled";

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
