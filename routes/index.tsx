import { Head } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/server.ts";

import Counter from "../islands/Counter.tsx";

export const handler: Handlers = {
  PUT(request: Request) {
    const { method } = request;
    const headers = new Headers({
    });

    headers.set("Location", "https://httpbin.org/put")

    return new Response(null, {
      status: 307,
      headers,
    });
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
          file, and refresh.
        </p>
        <Counter start={3} />
      </div>
    </>
  );
}
