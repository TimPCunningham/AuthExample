import jwt from "@tsndr/cloudflare-worker-jwt";

const authenticate = async ({ request, next, env }): Promise<Response> => {
  try {
    console.log(request.headers.get("authorization"));
    const authorization = request.headers.get("authorization").split(" ");

    if(authorization.length != 2) {
      return new Response(JSON.stringify({error: "Malformed authorization header"}), { status: 400 });
    }

    const token = authorization[1];
    const valid = await jwt.verify(token, env.SECRET);
    if(!valid) {
      return new Response(JSON.stringify({error: "Permission denied."}), { status: 403 });
    }

    console.log("Success!");
    return await next();
  } catch (err) {
    return new Response(`Error: ${err}`, { status: 500, statusText: "Internal Server Error" });
  }
};

export const onRequest = [authenticate];
