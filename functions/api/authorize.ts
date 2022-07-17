import { verifyTokenId } from "@codehelios/verify-tokenid";

export async function onRequest(context): Promise<Response> {
  // Contents of context object
  const {
    request, // same as existing Worker API
    env, // same as existing Worker API
  } = context;

  const tokenID = await request.json().token;
  const { isValid, decoded, error } = await verifyTokenId(tokenID, `https://securetoken.google.com/${env.PROJECT_ID}`, env.PROJECT_ID);
  return new Response(JSON.stringify({isValid, decoded, error}));
}
