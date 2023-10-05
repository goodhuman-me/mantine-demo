import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { DatesProvider } from "@mantine/dates";

import { router } from "./routes/router.tsx";
import { theme } from "./themes/theme.ts";

import "@good/mantine-theme/core/styles.css";
import "@good/mantine-theme/dates/styles.css";
import "@good/mantine-theme/notifications/styles.css";
import "@good/mantine-theme/code-highlight/styles.css";

import "./index.css";

import { goodTheme } from "@good/mantine-theme";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={goodTheme}>
      <Notifications position="top-right" limit={5} />
      <DatesProvider
        settings={{
          locale: "en-AU",
          firstDayOfWeek: 1,
          weekendDays: [0, 6],
        }}
      >
        <RouterProvider router={router} />
      </DatesProvider>
    </MantineProvider>
  </React.StrictMode>
);
