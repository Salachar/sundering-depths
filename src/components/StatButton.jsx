import './statButton.css';

export default function StatButton ({
  locked = false,
  stat = "",
  value = 0,
  onChange = () => {},
}) {
  return (
    <div className="stat">
      <span className="label">{stat}{locked && ":"}</span>
      {!locked && (
        <button className="left" onClick={() => {
          onChange(-1);
        }}>−</button>
      )}
      <span className="value">{value}</span>
      {!locked && (
        <button className="right" onClick={() => {
          onChange(1);
        }}>+</button>
      )}
    </div>
  );
}
