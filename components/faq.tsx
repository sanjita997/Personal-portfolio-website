import { faqs } from "@/data/site";

export function FAQ({ items = faqs }: { items?: typeof faqs }) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details key={item.question}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
