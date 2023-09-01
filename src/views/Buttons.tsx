import React from "react";

import { Button } from "@mantine/core";

export default function Buttons() {
  return (
    <div>
      <div>
        <h2>Buttons</h2>
        <h3>Default variants</h3>
        <Button className="mr-4" variant="subtle">
          Click me
        </Button>
        <Button className="mr-4" variant="light">
          Click me
        </Button>
        <Button className="mr-4" variant="outline">
          Click me
        </Button>
        <Button className="mr-4" variant="filled">
          Click me
        </Button>
        <Button className="mr-4" variant="default">
          Click me
        </Button>
      </div>

      <div className="mt-8">
        <h3>GH variants</h3>
        <Button variant="accent" className="mr-4">
          Accent
        </Button>
        <Button variant="danger" className="mr-4">
          Danger
        </Button>
        <Button variant="warning" className="mr-4">
          Warning
        </Button>
        <Button variant="neutral" className="mr-4">
          Neutral
        </Button>
      </div>

      <div className="mt-8">
        <h3>Sizes</h3>
        <Button variant="accent" size="xs" className="mr-4">
          Label
        </Button>
        <Button variant="accent" size="sm" className="mr-4">
          Small
        </Button>
        <Button variant="accent" size="md" className="mr-4">
          Medium
        </Button>
        <Button variant="accent" size="lg" className="mr-4">
          Large
        </Button>
      </div>
    </div>
  );
}
