import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

export function Task() {
  return (
    <div className="">
      <Checkbox.Root>
        <Checkbox.Indicator>
          <Check />
        </Checkbox.Indicator>
      </Checkbox.Root>
    </div>
  );
}
