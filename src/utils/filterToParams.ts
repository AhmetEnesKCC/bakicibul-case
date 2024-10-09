export const filterToParams = (filters: Record<string, string>) => {
  const urlParams = new URLSearchParams();

  Object.entries(filters)
    .filter(([, value]) => Boolean(value))
    .forEach(([key, value]) => {
      urlParams.set(key, value);
    });
  return "?" + urlParams.toString();
};
