import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { DatesProvider } from "@mantine/dates";

import { router } from "./routes/router.tsx";
import { theme } from "./themes/theme.ts";

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/code-highlight/styles.css";

import "./index.css";

// rome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
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
  </React.StrictMode>,
);
