export default function SectionHeading({ label, title, description }) {
  return (
    <div className="section-header fade-in">
      {label && <span className="section-label">{label}</span>}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-desc">{description}</p>}
    </div>
  );
}
