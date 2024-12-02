import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <div>hshshs</div>
      <Card>
        <CardHeader>
          <CardTitle>hehe</CardTitle>
        </CardHeader>
        <CardContent>
          <Button>bro</Button>
        </CardContent>
      </Card>

      <Button>perss mee</Button>
    </HydrateClient>
  );
}
