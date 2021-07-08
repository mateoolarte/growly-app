// components
import { TemplateItem } from '../../components/TemplateItem';

// styles
import { Wrapper, Heading } from './styled';

export function TemplatesList({ plans, currentPlan }) {
  return (
    <Wrapper>
      <Heading>Selecciona la plantilla ideal para a tu negocio</Heading>

      {plans[currentPlan].templates?.map((template, index) => (
        <TemplateItem
          key={template.id}
          {...template}
          isReverse={index % 2 !== 0}
        />
      ))}
    </Wrapper>
  );
}
