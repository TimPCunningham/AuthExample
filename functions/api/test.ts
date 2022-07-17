export async function onRequest(context): Promise<Response> {
  // Contents of context object
  const {
    request, // same as existing Worker API
    env, // same as existing Worker API
  } = context;

  console.log("test worker");

  return new Response("Hello, world!");
}
