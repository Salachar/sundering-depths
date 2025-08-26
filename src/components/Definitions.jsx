import "./definitions.css";

export default function Definitions ({
  locked = false,
  selectable = false,
  definitions = [],
  selected = {},
  h3 = "",
  before = null,
  after = null,
  onClick = () => {},
}) {
  if (!definitions.length) return null;

  return (
    <>
      {before && before}
      <h3>{h3}</h3>
      <div className="definitions">
        {definitions.map((definition, index) => {
          const {
            name = "",
            label = "",
            description = "",
          } = definition || {};

          const isSelected = selected[name];

          if (locked && !isSelected) return null;

          return (
            <div
              key={`key_def_${index}`}
              className={`definition ${selectable ? "selectable" : ""} ${(!locked && isSelected) ? "selected" : ""}`}
              onClick={() => {
                if (!selectable) return;
                onClick(definition, index);
              }}
            >
              <span className="label">
                {label || name}:
              </span>
              <span className="description">
                {description}
              </span>
            </div>
          )
        })}
      </div>
      {after && after}
    </>
  );
}
