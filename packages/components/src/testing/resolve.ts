export const resolved = (property: 'color' | 'backgroundColor' | 'fontSize', value: string): string => {
  const probe = document.createElement('span');
  probe.style[property] = value;
  document.body.append(probe);
  const result = getComputedStyle(probe)[property];
  probe.remove();
  return result;
};
