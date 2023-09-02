import React from "react";

import { ActionIcon, Badge, Button } from "@mantine/core";
import { Divider } from "@mantine/core";
import { AirConditioning, Analyze } from "tabler-icons-react";

export default function ButtonPage() {
  return (
    <div>
      <div>
        <h1>Buttons</h1>
      </div>
      <Divider />

      <div>
        <h2>Variants</h2>
      </div>

      <div className="mb-8">
        <h3>Filled</h3>
        <Button className="mr-4" variant="filled" color="accent">
          Accent
        </Button>
        <Button className="mr-4" variant="filled" color="warning">
          Warning
        </Button>
        <Button className="mr-4" variant="filled" color="danger">
          Danger
        </Button>
        <Button className="mr-4" variant="filled" color="neutral">
          Neutral
        </Button>
      </div>

      <div className="mb-8">
        <h3>Outlined</h3>
        <Button className="mr-4" variant="outline" color="accent">
          Accent
        </Button>
        <Button className="mr-4" variant="outline" color="warning">
          Warning
        </Button>
        <Button className="mr-4" variant="outline" color="danger">
          Danger
        </Button>
        <Button className="mr-4" variant="outline" color="neutral">
          Neutral
        </Button>
      </div>

      <div className="mb-8">
        <h3>Transparent</h3>
        <Button className="mr-4" variant="transparent" color="accent">
          Accent
        </Button>
        <Button className="mr-4" variant="transparent" color="warning">
          Warning
        </Button>
        <Button className="mr-4" variant="transparent" color="danger">
          Danger
        </Button>
        <Button className="mr-4" variant="transparent" color="neutral">
          Neutral
        </Button>
      </div>

      <Divider />

      <div className="mt-4">
        <h2>Sizes</h2>

        <div className="mb-8">
          <h3>All sizes</h3>
          <Button className="mr-4" size="xs">
            Xsmall
          </Button>
          <Button className="mr-4" size="sm">
            Small
          </Button>
          <Button className="mr-4" size="md">
            Medium
          </Button>
          <Button className="mr-4" size="lg">
            Large
          </Button>
        </div>
      </div>

      <Divider />

      <div className="mt-4">
        <h2>Icons</h2>

        <div className="mb-8">
          <h3>Left icon</h3>
          <Button
            className="mr-4"
            size="xs"
            leftSection={<Analyze size={14} />}
          >
            Xsmall
          </Button>
          <Button
            className="mr-4"
            size="sm"
            leftSection={<Analyze size={16} />}
          >
            Small
          </Button>
          <Button
            className="mr-4"
            size="md"
            leftSection={<Analyze size={16} />}
          >
            Medium
          </Button>
          <Button
            className="mr-4"
            size="lg"
            leftSection={<Analyze size={16} />}
          >
            Large
          </Button>
        </div>

        <div className="mb-8">
          <h3>Right icon</h3>
          <Button
            className="mr-4"
            size="xs"
            rightSection={<Analyze size={14} />}
          >
            Xsmall
          </Button>
          <Button
            className="mr-4"
            size="sm"
            rightSection={<Analyze size={16} />}
          >
            Small
          </Button>
          <Button
            className="mr-4"
            size="md"
            rightSection={<Analyze size={16} />}
          >
            Medium
          </Button>
          <Button
            className="mr-4"
            size="lg"
            rightSection={<Analyze size={16} />}
          >
            Large
          </Button>
        </div>

        <Divider />

        <div className="mb-8">
          <h3>Right icon</h3>
          <Button className="mr-4" size="xs" loading>
            Xsmall
          </Button>
          <Button className="mr-4" size="sm" loading>
            Small
          </Button>
          <Button className="mr-4" size="md" loading>
            Medium
          </Button>
          <Button className="mr-4" size="lg" loading>
            Large
          </Button>
        </div>

        <div className="mb-16">
          <h3>Badges</h3>
          <Badge color="accent" variant="filled" className="mr-4">
            Badge
          </Badge>
          <Badge color="warning" variant="filled" className="mr-4">
            Badge
          </Badge>
          <Badge color="danger" variant="filled" className="mr-4">
            Badge
          </Badge>
          <Badge color="neutral" variant="filled" className="mr-4">
            Badge
          </Badge>
        </div>
      </div>
    </div>
  );
}
