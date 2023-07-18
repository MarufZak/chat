const formatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

export const formatDate = (date) => {
  return formatter.format(new Date(date));
};
