type Mods = Record<string, boolean | string>;

/**
 *
 * @param baseClass - basic general class
 * @param mods - additional modifications with conditional flags
 * @param additional - additional classes
 * @returns concatenated className string
 */
export function classNames(
  cls: string,
  mods: Mods = {},
  additional: string[] = [],
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([, modFlag]) => Boolean(modFlag))
      .map(([modName]) => modName),
  ].join(' ');
}
