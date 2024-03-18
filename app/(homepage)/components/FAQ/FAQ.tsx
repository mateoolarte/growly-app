import { Accordion } from "@/ui/Accordion";

import "./FAQ.scss";

export function FAQ(props) {
  const { title, description, items } = props;

  if (!items || items.length === 0) return null;

  const parsedItems = items?.map((item) => {
    return {
      id: item.id,
      title: item.question,
      content: item.answer,
    };
  });

  return (
    <section className="faq" id="faq">
      <div className="container-box">
        <div className="faq-container">
          <div className="faq-info">
            <h2 className="faq-title">{title}</h2>
            <p className="faq-description">{description}</p>
          </div>
          <div className="faq-content">
            <Accordion data={parsedItems} hasHTMLContent />
          </div>
        </div>
      </div>
    </section>
  );
}
