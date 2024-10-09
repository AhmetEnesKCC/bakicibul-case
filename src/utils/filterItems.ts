export const filterItems = <T>(items: T[], params: Record<keyof T, string>) => {
  return items.filter((item) => {
    return Object.entries(params).every(
      ([param_key, param_value]) => item[param_key as keyof T] === param_value
    );
  });
};
