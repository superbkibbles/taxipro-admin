export function providesList<R, T extends string>(
  resultsWithIds: R[] | any[] | undefined,
  tagType: T
) {
  return resultsWithIds
    ? [
        { type: tagType, id: 'LIST' },
        ...resultsWithIds.map(({ id }) => ({ type: tagType, id })),
      ]
    : [{ type: tagType, id: 'LIST' }]
}
