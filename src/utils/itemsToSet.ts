/**
 *
 * @param items
 * @generic_type T
 *
 * @returns function
 *          @param key
 * @returns {items[0][key][]}
 */

export const itemsToSet =
  <T>(items: T[]) =>
  <K extends keyof T>(key: K): Array<T[K]> => {
    return Array.from(new Set(items.map((item) => item[key])));
  };
