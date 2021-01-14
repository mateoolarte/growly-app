// components
import Button from "../ui/Button";
import Tooltip from "../ui/Tooltip";

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
  themeLink,
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
          {preferences.map(({ id, Icon, tooltipText }) => (
            <PreferenceItem key={id}>
              <Tooltip text={tooltipText}>
                <Icon />
              </Tooltip>
            </PreferenceItem>
          ))}
        </Preferences>
        <Actions>
          <Button type="link" href={demoLink} white>
            Ver demo
          </Button>
          <Button type="link" href={themeLink}>
            Lo quiero
          </Button>
        </Actions>
      </Info>
    </Wrapper>
  );
}
