import classNames from "classnames";

interface CounterProps {
  label: string;
  count: number | string;
  type?: "primary" | "secondary";
}

export function Counter({ label, count, type = "primary" }: CounterProps) {
  return (
    <div className="flex gap-2">
      <span
        className={classNames(
          "font-bold text-sm",
          type === "primary" ? "text-blue-500" : "text-purple-500"
        )}
      >
        {label}
      </span>
      <span className="bg-gray-400 px-2 py-[2px] rounded-full text-xs text-gray-200 flex justify-center items-center">
        {count}
      </span>
    </div>
  );
}
