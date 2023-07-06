// vendors
import { useState } from 'react';
import Image from 'next/image';

// components
import { Button } from '../../components/ui/Button';
import { Modal } from '../../components/ui/Modal';
import { Checkout } from '../../components/Checkout';

// styled
import {
  Wrapper,
  TopActions,
  Container,
  ImageContainer,
  Thumbnail,
  InfoContainer,
  SelectPlanTitle,
  SelectPlanContainer,
  SelectPlanItem,
  Actions,
  Price,
  Icon,
  BtnGoBack,
} from './HeroTemplate.styles';

import {
  PreferenceTitle,
  Preferences,
  PreferenceItem,
  IconContainer,
  PreferenceText,
  LogoContainer,
  Logo,
} from '../../components/TemplateItem/TemplateItem.styles';

import {
  PricingContainer,
  Pricing,
  Flag,
  Note,
} from '../HeroTemplates/HeroTemplates.styles';

// assets
const flagCOP = '/images/colombia-flag.png';
const infoIcon = '/icons/info.svg';
const arrowLeft = '/icons/left-arrow.svg';

const BASIC_PLAN = 'basic';
const PREMIUM_PLAN = 'premium';

// interfaces
import { IPreference, IPricing } from '../../data/plans';

interface IHeroTemplateProps {
  name: string;
  thumbnail: string;
  preferences: Array<IPreference>;
  type: string;
  pricing: IPricing;
  logoImg: string;
  demoLink: string;
}

export function HeroTemplate({
  name,
  thumbnail,
  preferences,
  type,
  pricing,
  logoImg,
  demoLink,
}: IHeroTemplateProps) {
  const [activePlan, setActivePlan] = useState(BASIC_PLAN);
  const [planPremiumModal, setPlanPremiumModal] = useState(false);
  const { price, priceInCents, premiumPrice, premiumPriceInCents } = pricing;
  const priceType =
    activePlan === BASIC_PLAN ? priceInCents : premiumPriceInCents;

  function handlePremiumModal(e) {
    e.stopPropagation();

    setPlanPremiumModal(true);
  }

  return (
    <Wrapper>
      <Modal isActive={planPremiumModal} handleClose={setPlanPremiumModal}>
        <p>
          La opción Premium, es un servicio plus, cuesta $300.000 COP
          adicionales por producto, para que el equipo de Growly se encargue de
          las actualizaciones y administración del sitio web. Son máximo 6
          actualizaciones al año, estas actualizaciones consisten en: Todas las
          secciones administrables del plan, quitar o agregar servicios,
          administración del formulario de contacto, seguridad, mantenimiento y
          reporte de analytics mensual.
        </p>
      </Modal>
      <TopActions>
        <BtnGoBack href="/plantillas">
          <Image src={arrowLeft} alt="icono" width={40} height={22} />
          Volver
        </BtnGoBack>
      </TopActions>
      <Container>
        <ImageContainer>
          <Thumbnail src={thumbnail} alt={`thumbnail ${name}`} />
        </ImageContainer>
        <InfoContainer>
          <LogoContainer>
            <Logo src={logoImg} alt="Logo" />
          </LogoContainer>
          <PreferenceTitle>
            Esta plantilla es ideal para negocios como:
          </PreferenceTitle>
          <Preferences>
            {preferences?.map(({ id, icon, tooltipText }) => (
              <PreferenceItem key={id}>
                <IconContainer>
                  <Image src={icon} alt="icono" width={35} height={35} />
                </IconContainer>
                <PreferenceText>{tooltipText}</PreferenceText>
              </PreferenceItem>
            ))}
          </Preferences>
          <SelectPlanTitle>Selecciona el item a pagar:</SelectPlanTitle>
          <SelectPlanContainer>
            <SelectPlanItem
              type="button"
              isActive={activePlan === BASIC_PLAN}
              onClick={() => setActivePlan(BASIC_PLAN)}
            >
              {type} básico
            </SelectPlanItem>
            <SelectPlanItem
              type="button"
              isActive={activePlan === PREMIUM_PLAN}
              onClick={() => setActivePlan(PREMIUM_PLAN)}
            >
              <strong>
                {type} premium
                <Icon type="button" onClick={handlePremiumModal}>
                  <Image src={infoIcon} alt="icono" width={10} height={10} />
                </Icon>
              </strong>
              <span>
                Administración de contenido (6 / año) por parte del equipo de
                growly $300.000 COP
              </span>
            </SelectPlanItem>
          </SelectPlanContainer>
          <Actions>
            <Price>
              <PricingContainer>
                <Pricing>
                  {activePlan === BASIC_PLAN && price}
                  {activePlan === PREMIUM_PLAN && premiumPrice}
                </Pricing>
                <Flag src={flagCOP} alt="Bandera de Colombia" />
                <Note>
                  {type} {activePlan === BASIC_PLAN ? 'básico' : 'premium'}
                </Note>
              </PricingContainer>
            </Price>
            <Checkout
              price={priceType}
              template={name}
              type={`${type}-${activePlan}`}
            />
            {demoLink && (
              <Button type="link" href={demoLink} white target="_blank">
                Ver demo
              </Button>
            )}
          </Actions>
        </InfoContainer>
      </Container>
    </Wrapper>
  );
}
