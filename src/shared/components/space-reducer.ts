export function spaceReducer(accum: string, current: string, index: number): string {
  if (index === 0) current;
  return `${accum} ${current}`;
}
