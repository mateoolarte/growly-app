// vendors
import Link from 'next/link';
import Image from 'next/image';

// components
import { Button } from '../ui/Button';

// styled
import {
  Wrapper,
  ImageContainer,
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
} from './TemplateItem.styles';

export function TemplateItem({
  logoImg,
  preferences,
  demoLink,
  templateLink,
  thumbnail,
  isReverse,
}) {
  return (
    <Wrapper isReverse={isReverse}>
      <ImageContainer>
        <Link href={demoLink} passHref>
          <a target="_blank">
            <Thumbnail src={thumbnail} alt="Thumbnail" />
          </a>
        </Link>
      </ImageContainer>

      <Info>
        <LogoContainer>
          <Logo src={logoImg} alt="Logo" />
        </LogoContainer>
        <PreferenceTitle>
          Esta plantilla es ideal para negocios como:
        </PreferenceTitle>
        <Preferences>
          {preferences.map(({ id, icon, tooltipText }) => (
            <PreferenceItem key={id}>
              <IconContainer>
                <Image src={icon} alt="icono" width={35} height={35} />
              </IconContainer>
              <PreferenceText>{tooltipText}</PreferenceText>
            </PreferenceItem>
          ))}
        </Preferences>
        <Actions>
          <Button type="link" href={demoLink} white target="_blank">
            Ver demo
          </Button>
          <Button type="link" href={templateLink}>
            Lo quiero
          </Button>
        </Actions>
      </Info>
    </Wrapper>
  );
}
