export function getTemplateData(plans, type, template) {
  const templateType = plans.find((item) => item.title === type);
  const currentTemplate = templateType?.templates?.find(
    (item) => item.name === template
  );

  return {
    ...currentTemplate,
    pricing: {
      price: templateType.pricing,
      priceInCents: templateType.priceInCents,
      premiumPrice: templateType.premiumPrice,
      premiumPriceInCents: templateType.premiumPriceInCents,
    },
    features: templateType.features,
  };
}
