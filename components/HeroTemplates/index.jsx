// styled
import {
  Wrapper,
  Container,
  Heading,
  SubHeading,
  ToggleBox,
  ToggleBoxItem,
  ToggleBoxButton,
  Content,
  Plan,
  Title,
  PricingContainer,
  Pricing,
  Flag,
  Note,
  Info,
  Description,
  Features,
  FeatureItem,
} from "./styled";

// assets
const FlagCOP = "/images/colombia-flag.png";

export default function HeroTemplates({
  plans,
  currentPlan,
  handleCurrentPlan,
}) {
  const activePlan = plans[currentPlan];
  const { description, Icon, pricing, features, title } = activePlan;

  return (
    <Wrapper>
      <Container>
        <Heading>Da el primer paso</Heading>
        <SubHeading>Comienza eligiendo un plan</SubHeading>

        <ToggleBox>
          <ToggleBoxItem isActive={currentPlan === 0}>
            <ToggleBoxButton
              isActive={currentPlan === 0}
              onClick={() => handleCurrentPlan(0)}
            >
              <strong>Starter</strong>
              $749.000 COP
            </ToggleBoxButton>
          </ToggleBoxItem>
          <ToggleBoxItem isActive={currentPlan === 1}>
            <ToggleBoxButton
              isActive={currentPlan === 1}
              onClick={() => handleCurrentPlan(1)}
            >
              <strong>Portfolio</strong>
              $1&apos;099.000 COP
            </ToggleBoxButton>
          </ToggleBoxItem>
        </ToggleBox>

        <Content>
          <Plan>
            <Icon />
            <Title>{title}</Title>
            <PricingContainer centered>
              <Pricing>{pricing}</Pricing>
              <Flag src={FlagCOP} alt="Bandera de Colombia" />
              <Note>*Pesos colombianos</Note>
            </PricingContainer>
          </Plan>
          <Info>
            <Description>{description}</Description>
            <strong>Este plan incluye</strong>
            <Features>
              {features.map((feature) => (
                <FeatureItem key={feature}>{feature}</FeatureItem>
              ))}
            </Features>
          </Info>
        </Content>
      </Container>
    </Wrapper>
  );
}
