import { useState } from "react";

import "./glossary.css";

const TERMS = {
  cover: {
    past: "Covered",
    current: "Cover",
    active: "Covering",
    definition: "Disadvantage on attacks targeting you",
  },
  immobilize: {
    past: "Immobilized",
    current: "Immobilize",
    active: "Immobilizing",
    definition: "Unable to move",
  },
  stun: {
    past: "Stunned",
    current: "Stun",
    active: "Stunning",
    definition: "Lose next turn",
  },
  blind: {
    past: "Blinded",
    current: "Blind",
    active: "Blinding",
    definition: "Target cannot see and has disadvantage",
  },
  daze: {
    past: "Dazed",
    current: "Daze",
    active: "Dazing",
    definition: "Next roll/check is at disadvantage",
  },
  parry: {
    past: "Parried",
    current: "Parry",
    active: "Parrying",
    definition: "Take no damage, attack attacker if able",
  },
  dodge: {
    past: "Dodged",
    current: "Dodge",
    active: "Dodging",
    definition: "Take no damage",
  },
  graze: {
    past: "Grazed",
    current: "Graze",
    active: "Grazing",
    definition: "Take half damage",
  },
  retaliate: {
    past: "Retaliated",
    current: "Retaliate",
    active: "Retaliating",
    definition: "After taking damage, can attack attacker if able",
  },
};

export function TermWrapper({
  termKey,
  tense = "current",
  past = false,
  current = false,
  active = false,
}) {
  const term = TERMS[termKey];
  if (!term) return null;

  let label = "";
  if (past) label = term.past;
  if (current) label = term.current;
  if (active) label = term.active;
  if (!label) label = term[tense];

  return (
    <Term
      label={label}
      definition={term.definition}
    />
  );
}

const Term = ({
  label = "",
  definition = "",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="term" onClick={() => {
      setOpen(!open);
    }}>
      <b>{label}</b>
      {open && (
        <span>{definition}</span>
      )}
    </div>
  );
};

export const Cover = (props) => <TermWrapper termKey="cover" {...props} />;
export const Immobilize = (props) => <TermWrapper termKey="immobilize" {...props} />;
export const Stun = (props) => <TermWrapper termKey="stun" {...props} />;
export const Blind = (props) => <TermWrapper termKey="blind" {...props} />;
export const Daze = (props) => <TermWrapper termKey="daze" {...props} />;
export const Parry = (props) => <TermWrapper termKey="parry" {...props} />;
export const Dodge = (props) => <TermWrapper termKey="dodge" {...props} />;
export const Graze = (props) => <TermWrapper termKey="graze" {...props} />;
export const Retaliate = (props) => <TermWrapper termKey="retaliate" {...props} />;
