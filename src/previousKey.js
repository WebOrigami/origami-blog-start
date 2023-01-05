export default async function nextKey(graph, key) {
  let previousKey = undefined;
  for await (const graphKey of graph) {
    if (graphKey === key) {
      return previousKey;
    }
    previousKey = graphKey;
  }
  return undefined;
}
