import React from "react";

import { Button } from "@mantine/core";

export default function Buttons() {
  return (
    <div>
      <h1>Buttons</h1>

      <p>Variants</p>
      <Button style={{ marginRight: "8px" }} variant="subtle">
        Click me
      </Button>
      <Button style={{ marginRight: "8px" }} variant="light">
        Click me
      </Button>
      <Button style={{ marginRight: "8px" }} variant="outline">
        Click me
      </Button>
      <Button style={{ marginRight: "8px" }} variant="filled">
        Click me
      </Button>
      <Button style={{ marginRight: "8px" }} variant="default">
        Click me
      </Button>
    </div>
  );
}
