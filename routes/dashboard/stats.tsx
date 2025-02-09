// Copyright 2023 the Deno authors. All rights reserved. MIT license.
import type { PageProps } from "$fresh/server.ts";
import Chart from "@/islands/Chart.tsx";
import Head from "@/components/Head.tsx";
import TabsBar from "@/components/TabsBar.tsx";
import { HEADING_WITH_MARGIN_STYLES } from "@/utils/constants.ts";

function randomNumbers(length: number) {
  return Array.from({ length }, () => Math.floor(Math.random() * 1000));
}

export default function DashboardStatsPage(props: PageProps) {
  const labels = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const datasets = [
    {
      label: "Site visits",
      data: randomNumbers(labels.length),
      borderColor: "#be185d",
    },
    {
      label: "Users created",
      data: randomNumbers(labels.length),
      borderColor: "#e85d04",
    },
    {
      label: "Items created",
      data: randomNumbers(labels.length),
      borderColor: "#219ebc",
    },
    {
      label: "Votes",
      data: randomNumbers(labels.length),
      borderColor: "#4338ca",
    },
  ];

  return (
    <>
      <Head title="Dashboard" href={props.url.href} />
      <main class="flex-1 p-4 flex flex-col">
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
        <div class="flex-1 relative">
          <Chart
            type="line"
            options={{
              maintainAspectRatio: false,
              interaction: {
                intersect: false,
                mode: "index",
              },
              scales: {
                x: {
                  grid: { display: false },
                },
                y: {
                  beginAtZero: true,
                  grid: { display: false },
                  ticks: { precision: 0 },
                },
              },
            }}
            data={{
              labels,
              datasets: datasets.map((dataset) => ({
                ...dataset,
                pointRadius: 0,
                cubicInterpolationMode: "monotone",
              })),
            }}
          />
        </div>
      </main>
    </>
  );
}
