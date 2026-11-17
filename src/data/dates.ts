const monthFormat = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });

export const formatMonth = (yearMonth: string): string => monthFormat.format(new Date(yearMonth + '-01T00:00:00Z'));

export const formatPeriod = (started: string, ended?: string): string => {
  if (started === ended) {
    return formatMonth(started);
  }
  return `${formatMonth(started)} – ${ended ? formatMonth(ended) : 'Present'}`;
};
