const rulesOf = (sheet: CSSStyleSheet): CSSRule[] => {
  try {
    return [...sheet.cssRules];
  } catch {
    return [];
  }
};

const flatten = (rules: CSSRule[]): CSSRule[] =>
  rules.flatMap(rule => rule instanceof CSSGroupingRule ? [rule, ...flatten([...rule.cssRules])] : [rule]);

const isOurs = (sheet: CSSStyleSheet) =>
  /\/src\/.*\.css/.test((sheet.ownerNode as HTMLElement | null)?.dataset?.viteDevId ?? sheet.href ?? '');

export const ungatedHoverSelectors = (): string[] =>
  flatten([...document.styleSheets].filter(isOurs).flatMap(rulesOf))
    .filter((rule): rule is CSSStyleRule => rule instanceof CSSStyleRule && rule.selectorText.includes(':hover'))
    .filter(rule => !(rule.parentRule instanceof CSSMediaRule && rule.parentRule.conditionText === '(hover: hover)'))
    .map(rule => rule.selectorText);
