// interfaces
import { IPlan } from '../data/plans';

export function getAllTemplates(plans: Array<IPlan>) {
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
