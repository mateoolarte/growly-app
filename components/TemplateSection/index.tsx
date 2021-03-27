// vendors
import Link from "next/link";

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
  PreferenceTitle,
  Preferences,
  PreferenceItem,
  Actions,
  IconContainer,
  PreferenceText,
} from "./styled";

export default function TemplateSection({
  logoImg,
  preferences,
  demoLink,
  themeLink,
  thumbnail,
  isReverse,
}) {
  return (
    <Wrapper isReverse={isReverse}>
      <Image>
        <Link href={demoLink} passHref>
          <a target="_blank">
            <Thumbnail src={thumbnail} alt="Thumbnail" />
          </a>
        </Link>
      </Image>

      <Info>
        <LogoContainer>
          <Logo src={logoImg} alt="Logo" />
        </LogoContainer>
        <PreferenceTitle>
          Esta plantilla es ideal para negocios como:
        </PreferenceTitle>
        <Preferences>
          {preferences.map(({ id, Icon, tooltipText }) => (
            <PreferenceItem key={id}>
              <IconContainer>
                <Icon />
              </IconContainer>
              <PreferenceText>{tooltipText}</PreferenceText>
            </PreferenceItem>
          ))}
        </Preferences>
        <Actions>
          <Button type="link" href={demoLink} white target="_blank">
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
