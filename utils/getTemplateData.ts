// interfaces
import { IPlan, ITemplate, IPricing } from '../data/plans';

export interface ISingleTemplateData extends ITemplate {
  pricing: IPricing;
  features: Array<string>;
}

export function getTemplateData(
  plans: Array<IPlan>,
  type: string | string[],
  template: string | string[]
): ISingleTemplateData {
  const templateType = plans.find((item) => item.title === type);
  const currentTemplate = templateType?.templates?.find(
    (item) => item.name === template
  );

  return {
    ...currentTemplate,
    pricing: {
      price: templateType.price,
      priceInCents: templateType.priceInCents,
      premiumPrice: templateType.premiumPrice,
      premiumPriceInCents: templateType.premiumPriceInCents,
    },
    features: templateType.features,
  };
}
