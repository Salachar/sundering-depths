import { CLASSES } from "../data/builder";
import { textOutline } from "../utils/general";

import './classButtons.css';

export default function ClassButtons ({
  currentIndex = null,
  onClick = () => {},
  onAdd = () => {},
}) {
  return (
      <div className="class-buttons">
        {CLASSES.map((character_class, index) => {
          const ci = character_class.instance;
          return (
            <div
              key={`key_class_button_${index}`}
              className="button-container"
            >
              <div
                className="name-container"
                onClick={() => {
                  onClick({
                    ...CLASSES[index],
                    index,
                  });
                }}
                style={{
                  opacity: typeof currentIndex === "number" ? currentIndex === index ? 1 : 0.5 : 0.5,
                }}
              >
                <button
                  key={`class_button_${ci.class}`}
                  className="class-button"
                  style={textOutline(ci.color)}
                >
                  {ci.class}
                </button>
                <div
                  className="class-arrow"
                  style={{
                    color: ci.color,
                  }}
                />
              </div>

              <button
                key={`class_button_add_${ci.class}`}
                className="class-button-add"
                onClick={() => {
                  onAdd({
                    ...CLASSES[index],
                    index,
                  });
                }}
                style={textOutline(ci.color)}
              >
                +
              </button>
            </div>
          );
        })}
      </div>
  );
}
