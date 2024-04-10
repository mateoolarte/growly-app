import { Accordion } from "@/ui/Accordion";

import styles from "./Benefits.module.scss";

export function Benefits(props) {
  const { benefits, planSlug } = props;

  const parsedBenefits = benefits?.filter((item) => {
    if (item.belongPlans[planSlug] === "true") {
      return {
        id: item.id,
        name: item.name,
      };
    }
  });

  const mobileBenefits = [
    {
      id: 1,
      title: "Tu plan incluye",
      content: <BenefitList data={parsedBenefits} />,
    },
  ];

  return (
    <div className={styles["benefits"]}>
      <Accordion
        data={mobileBenefits}
        collapsed
        className={styles["benefits--mobile"]}
      />

      <div className={styles["benefits--desktop"]}>
        <p className={styles["benefits-title"]}>Tu plan incluye:</p>
        <BenefitList data={parsedBenefits} />
      </div>
    </div>
  );
}

function BenefitList(props) {
  const { data } = props;

  return (
    <ul className={styles["benefits-list"]}>
      {data?.map((benefit) => (
        <li key={benefit.id} className={styles["benefits-item"]}>
          {benefit.name}
        </li>
      ))}
    </ul>
  );
}
