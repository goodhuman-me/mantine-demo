import React from "react";

import { Button } from "@mantine/core";

export default function Buttons() {
  return (
    <div>
      <div>
        <h2>Buttons</h2>
        <h3>Default variants</h3>
        <Button className="mr-4" variant="outline" color="accent">
          Click me
        </Button>
        <Button className="mr-4" variant="outline" color="warning">
          Click me
        </Button>
        <Button className="mr-4" variant="outline" color="danger">
          Click me
        </Button>
        <Button className="mr-4" variant="outline" color="neutral">
          Click me
        </Button>
        {/* <Button className="mr-4" variant="filled" color="blue">
          Click me
        </Button>
        <Button className="mr-4" variant="filled" color="accent">
          Click me
        </Button> */}
      </div>
    </div>
  );
}
