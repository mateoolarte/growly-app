// vendors
import { useState } from "react";
import Link from "next/link";

// components
import Button from "../../components/ui/Button";
import Tooltip from "../ui/Tooltip";
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
  Description,
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
} from "../TemplateSection/styled";

import { PricingContainer, Pricing, Flag, Note } from "../HeroTemplates/styled";

// assets
import FlagCOP from "../../assets/colombia-flag.png";
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
        Contenido modal de plan premium
      </Modal>
      <TopActions>
        <Link href="/plantillas">
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
          <PreferenceTitle>Ideal para:</PreferenceTitle>
          <Preferences>
            {preferences?.map(({ id, Icon, tooltipText }) => (
              <PreferenceItem key={id}>
                <Tooltip text={tooltipText}>
                  <Icon />
                </Tooltip>
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
                <Note>*Pesos colombianos</Note>
              </PricingContainer>
            </Price>
            <CheckoutContainer
              price={price}
              template={name}
              type={`${type}-${activePlan}`}
            />
            <Button type="link" href="#" white>
              Ver demo
            </Button>
          </Actions>
        </InfoContainer>
      </Container>
    </Wrapper>
  );
}
