// Copyright 2023 the Deno authors. All rights reserved. MIT license.
import type { PageProps } from "$fresh/server.ts";
import Head from "@/components/Head.tsx";
import TabsBar from "@/components/TabsBar.tsx";
import { HEADING_WITH_MARGIN_STYLES } from "@/utils/constants.ts";
import UsersTable from "@/islands/UsersTable.tsx";

export default function DashboardUsersPage(props: PageProps) {
  const endpoint = "/api/users";

  return (
    <>
      <Head title="Users" href={props.url.href}>
        <link
          as="fetch"
          crossOrigin="anonymous"
          href={endpoint}
          rel="preload"
        />
      </Head>
      <main class="flex-1 p-4">
        <h1 class={HEADING_WITH_MARGIN_STYLES}>Dashboard</h1>
        <TabsBar
          links={[{
            path: "/dashboard/stats",
            innerText: "Stats",
          }, {
            path: "/dashboard/users",
            innerText: "Users",
          }]}
          currentPath={props.url.pathname}
        />
        <UsersTable endpoint={endpoint} />
      </main>
    </>
  );
}
