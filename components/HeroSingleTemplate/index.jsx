// vendors
import { useState } from "react";
import Link from "next/link";

// components
import Button from "../../components/ui/Button";
import Modal from "../ui/Modal";
import CheckoutContainer from "../CheckoutContainer";

// styled
import {
  Wrapper,
  TopActions,
  Container,
  ImageContainer,
  Image,
  InfoContainer,
  SelectPlanTitle,
  SelectPlanContainer,
  SelectPlanItem,
  Actions,
  Price,
  Icon,
  BtnGoBack,
} from "./styled";

import {
  PreferenceTitle,
  Preferences,
  PreferenceItem,
  IconContainer,
  PreferenceText,
  LogoContainer,
  Logo,
} from "../TemplateSection/styled";

import { PricingContainer, Pricing, Flag, Note } from "../HeroTemplates/styled";

// assets
const FlagCOP = "/images/colombia-flag.png";
import InfoIcon from "../../assets/icons/info.svg";
import ArrowLeft from "../../assets/icons/left-arrow.svg";

const BASIC_PLAN = "basic";
const PREMIUM_PLAN = "premium";

export default function HeroSingleTemplate({
  name,
  thumbnail,
  preferences,
  type,
  pricing,
  priceInCents,
  pricingPremium,
  pricePremiumInCents,
  logoImg,
  demoLink,
}) {
  const [activePlan, setActivePlan] = useState(BASIC_PLAN);
  const [premiumPlanModal, setPremiumPlanModal] = useState(false);
  const price = activePlan === BASIC_PLAN ? priceInCents : pricePremiumInCents;

  function handlePremiumModal(e) {
    e.stopPropagation();

    setPremiumPlanModal(true);
  }

  return (
    <Wrapper>
      <Modal isActive={premiumPlanModal} handleClose={setPremiumPlanModal}>
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
        <Link href="/plantillas" passHref>
          <BtnGoBack>
            <ArrowLeft />
            Volver
          </BtnGoBack>
        </Link>
      </TopActions>
      <Container>
        <ImageContainer>
          <Image src={thumbnail} alt={`thumbnail ${name}`} />
        </ImageContainer>
        <InfoContainer>
          <LogoContainer>
            <Logo src={logoImg} alt="Logo" />
          </LogoContainer>
          <PreferenceTitle>
            Esta plantilla es ideal para negocios como:
          </PreferenceTitle>
          <Preferences>
            {preferences?.map(({ id, Icon, tooltipText }) => (
              <PreferenceItem key={id}>
                <IconContainer>
                  <Icon />
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
                  <InfoIcon />
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
                  {activePlan === BASIC_PLAN && pricing}
                  {activePlan === PREMIUM_PLAN && pricingPremium}
                </Pricing>
                <Flag src={FlagCOP} alt="Bandera de Colombia" />
                <Note>
                  {type} {activePlan === BASIC_PLAN ? "básico" : "premium"}
                </Note>
              </PricingContainer>
            </Price>
            <CheckoutContainer
              price={price}
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
