export function getAllTemplates(plans) {
  const allTemplates = [];

  plans.forEach((plan) => {
    plan.templates.forEach((template) => {
      allTemplates.push({
        params: {
          type: plan.title,
          template: template.name,
        },
      });
    });
  });

  return allTemplates;
}
