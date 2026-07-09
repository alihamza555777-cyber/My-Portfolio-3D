export default function NetflixRow({ id, title, children }) {
  return (
    <div id={id} className="netflix-row" style={{ overflow: 'visible' }}>
      <div className="netflix-row-header">
        {title}
      </div>
      <div className="netflix-grid-container">
        {children}
      </div>
    </div>
  );
}
