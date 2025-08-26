export function copy (obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function textOutline (color = 'black', styles = {}) {
  return {
    ...styles,
    textShadow: `
      1px 1px 1px ${color},
      -1px -1px 1px ${color},
      1px -1px 1px ${color},
      -1px 1px 1px ${color}
    `,
  }
}
