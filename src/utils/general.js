export function copy (obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function textOutline (color = 'black', blur = "1") {
  return {
    textShadow: `
      1px 1px ${blur}px ${color},
      -1px -1px ${blur}px ${color},
      1px -1px ${blur}px ${color},
      -1px 1px ${blur}px ${color}
    `,
  }
}
