export function SectionHeading({
  eyebrow,
  title,
  text,
  center = false
}: {
  eyebrow: string;
  title: string;
  text?: string;
  center?: boolean;
}) {
  return (
    <div className={`section-heading${center ? " center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text ? <p className="lead">{text}</p> : null}
    </div>
  );
}
