import { verifyTokenId } from "@codehelios/verify-tokenid";
import jwt from "@tsndr/cloudflare-worker-jwt";

export async function onRequest(context): Promise<Response> {
  // Contents of context object
  const {
    request, // same as existing Worker API
    env, // same as existing Worker API
  } = context;
  const data = await request.json();
  const { isValid, decoded, error } = await verifyTokenId(data.token, `https://securetoken.google.com/${env.PROJECT_ID}`, env.PROJECT_ID);

  if(isValid) {
    const token = await jwt.sign({uid: decoded.payload.user_id, email: decoded.payload.email, expiry: Date.now() + (60 * 60 * 24 * 7 * 1000)}, env.SECRET);
    return new Response(JSON.stringify({token}));
  } else {
    return new Response(JSON.stringify({error}));
  }
}
