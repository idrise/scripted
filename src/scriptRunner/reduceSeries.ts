export async function reduceSeries<ElementType, Accumulator>(
  array: ElementType[],
  reducer: (
    acc: Accumulator,
    element: ElementType,
    index: number,
    array: ElementType[],
  ) => Promise<Accumulator>,
  accumulator: Accumulator,
) {
  for (let i = 0; i < array.length; i++) {
    accumulator = await reducer(accumulator, array[i], i, array);
  }
  return accumulator;
}
