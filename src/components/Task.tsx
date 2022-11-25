import * as Checkbox from "@radix-ui/react-checkbox";
import classNames from "classnames";
import { Check, Trash } from "phosphor-react";

export interface TaskProps {
  id: string;
  description: string;
  completed: boolean;
  onDelete?: (id: string) => void;
  onCompletedChange?: (id: string) => void;
}
export function Task({
  id,
  description,
  completed,
  onDelete,
  onCompletedChange,
}: TaskProps) {
  return (
    <div
      className={classNames(
        { "drop-shadow": completed },
        { "!border-gray-400": completed },
        "flex justify-between items-start gap-3 bg-gray-500 p-4 rounded-lg border border-gray-500"
      )}
    >
      <Checkbox.Root
        className="w-5 h-5 flex justify-center items-center border-2 border-blue-500 rounded-full hover:border-blue-700 transition-colors text-gray-100 aria-[checked=true]:border-purple-700 aria-[checked=true]:bg-purple-700 aria-[checked=true]:hover:border-purple-500 aria-[checked=true]:hover:bg-purple-500"
        onCheckedChange={() => onCompletedChange && onCompletedChange(id)}
      >
        <Checkbox.Indicator>
          <Check weight="bold" className="w-4 h-4 text-gray-100" />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <p className="text-gray-100 text-sm flex-1">{description}</p>
      <button
        className="w-6 h-6 flex justify-center items-center hover:bg-[#454545] text-gray-300 hover:text-red-500 rounded"
        onClick={() => onDelete && onDelete(id)}
      >
        <Trash size={18} />
      </button>
    </div>
  );
}
