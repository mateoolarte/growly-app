// components
import { FeatureItem } from '../../components/FeatureItem';

// styles
import { FeaturesContainer } from './Features.styles';

export function Features({ features }) {
  return (
    <FeaturesContainer>
      {features.map((feature, index) => (
        <FeatureItem key={feature.id} {...feature} isAlt={index === 1} />
      ))}
    </FeaturesContainer>
  );
}
