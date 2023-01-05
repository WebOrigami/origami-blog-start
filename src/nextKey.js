export default async function nextKey(graph, key) {
  let returnNextKey = false;
  for await (const graphKey of graph) {
    if (returnNextKey) {
      return graphKey;
    }
    if (graphKey === key) {
      returnNextKey = true;
    }
  }
  return undefined;
}
