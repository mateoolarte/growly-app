import Link from 'next/link';
import Image from 'next/image';

import { Button } from '../ui/Button';
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
  if (!logoImg && !thumbnail || (!preferences || preferences?.length === 0)) {
    return null;
  }

  return (
    <Wrapper isReverse={isReverse} data-testid={isReverse ? 'reverse' : ''}>
      {thumbnail && (
        <ImageContainer>
          {demoLink && (
            <Link href={demoLink} target="_blank">
              <Thumbnail src={thumbnail} alt="Thumbnail" />
            </Link>
          )}

          {!demoLink && <Thumbnail src={thumbnail} alt="Thumbnail" />}
        </ImageContainer>
      )}

      <Info>
        {logoImg && (
          <LogoContainer>
            <Logo src={logoImg} alt="Logo" />
          </LogoContainer>
        )}
        {preferences?.length > 0 && (
          <>
            <PreferenceTitle>
              Esta plantilla es ideal para negocios como:
            </PreferenceTitle>
            <Preferences>
              {preferences.map(({ id, icon, tooltipText }) => {
                if (!icon && !tooltipText) {
                  return null;
                }

                return (
                  <PreferenceItem key={id}>
                    {icon && (
                      <IconContainer>
                        <Image src={icon} alt="icono" width={35} height={35} />
                      </IconContainer>
                    )}
                    {tooltipText && (
                      <PreferenceText>{tooltipText}</PreferenceText>
                    )}
                  </PreferenceItem>
                );
              })}
            </Preferences>
          </>
        )}
        {demoLink && templateLink && (
          <Actions>
            {demoLink && (
              <Button type="link" href={demoLink} white target="_blank">
                Ver demo
              </Button>
            )}
            {templateLink && (
              <Button type="link" href={templateLink}>
                Lo quiero
              </Button>
            )}
          </Actions>
        )}
      </Info>
    </Wrapper>
  );
}
