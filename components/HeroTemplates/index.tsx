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
  Image,
  Title,
  Pricing,
  Info,
  Description,
  Features,
  FeatureItem,
} from "./styled";

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
              $20 USD/mes
            </ToggleBoxButton>
          </ToggleBoxItem>
          <ToggleBoxItem isActive={currentPlan === 1}>
            <ToggleBoxButton
              isActive={currentPlan === 1}
              onClick={() => handleCurrentPlan(1)}
            >
              <strong>Portfolio</strong>
              $40 USD/mes
            </ToggleBoxButton>
          </ToggleBoxItem>
        </ToggleBox>

        <Content>
          <Image>
            <Icon />
            <Title>{title}</Title>
            <Pricing>{pricing}</Pricing>
          </Image>
          <Info>
            <Description>{description}</Description>
            <strong>Este plan incluye</strong>
            <Features>
              {features.map((feature) => (
                <FeatureItem>{feature}</FeatureItem>
              ))}
            </Features>
          </Info>
        </Content>
      </Container>
    </Wrapper>
  );
}
