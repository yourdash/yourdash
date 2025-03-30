import instance from "./main.js";

export default async function timeTaken(name: string, measure: () => Promise<void> | void) {
  instance.log.info("timer", `Task: ${instance.log.addEmphasisToString(name)} started.`);
  const timeThen = Date.now();
  await measure();
  const timeNow = Date.now();
  instance.log.info("timer", `Task: ${instance.log.addEmphasisToString(name)} took ${instance.log.addEmphasisToString((timeNow - timeThen).toString())}µs.`);
}
