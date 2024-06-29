export const spreadSizes = (sizes) => {
  if (typeof sizes === 'number') {
    return `${sizes}px`;
  }

  const spread = sizes.map((size) => `${size}px`);
  return spread.toString().replace(/,/g, ' ');
};
