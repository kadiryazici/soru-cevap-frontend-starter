export enum Color {
  Accent = 1,
  AccentCold,
  Bg1,
  Bg2,
  Bg3,
  Bg4,
  Light,
  LightGray,
  Danger,
  DarkGray,
}

export enum Vote {
  Upvote = 'Upvote',
  Downvote = 'Downvote',
  None = 'None',
}

const COLOR_CSS_VAR_MAP = {
  [Color.Accent]: 'var(--accent)',
  [Color.AccentCold]: 'var(--accent-cold)',
  [Color.Bg1]: 'var(--bg-1)',
  [Color.Bg2]: 'var(--bg-2)',
  [Color.Bg3]: 'var(--bg-3)',
  [Color.Bg4]: 'var(--bg-4)',
  [Color.Light]: 'var(--light)',
  [Color.LightGray]: 'var(--light-gray)',
  [Color.Danger]: 'var(--danger)',
  [Color.DarkGray]: 'var(--dark-gray)',
}

export function colorToCssVar(color: Color): string {
  return COLOR_CSS_VAR_MAP[color]
}
