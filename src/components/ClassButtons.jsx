import { CLASSES } from "../data/builder";
import { textOutline } from "../utils/general";

import './classButtons.css';

const CHARS_ONE = [CLASSES[0], CLASSES[1], CLASSES[2]];
const CHARS_TWO = [CLASSES[3], CLASSES[4], CLASSES[5]];

export default function ClassButtons ({
  currentIndex = null,
  onClick = () => {},
  onAdd = () => {},
}) {
  return (
    <div className="class-buttons">
      <div className="class-tab-container">
        {CHARS_ONE.map((character_class, index) => {
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
                    ...CHARS_ONE[index],
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
                  style={textOutline(ci.color, 15)}
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
                    ...CHARS_ONE[index],
                    index,
                  });
                }}
                style={textOutline(ci.color, 1)}
              >
                +
              </button>
            </div>
          );
        })}
      </div>

      <div className="class-tab-container">
        {CHARS_TWO.map((character_class, i) => {
          const ci = character_class.instance;
          const index = i + CHARS_ONE.length;
          return (
            <div
              key={`key_class_button_${index}`}
              className="button-container"
            >
              <div
                className="name-container"
                onClick={() => {
                  onClick({
                    ...CHARS_TWO[i],
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
                  style={textOutline(ci.color, 15)}
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
                    ...CHARS_TWO[i],
                    index,
                  });
                }}
                style={textOutline(ci.color, 1)}
              >
                +
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
