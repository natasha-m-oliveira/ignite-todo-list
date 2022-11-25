import { InputText } from "./InputText";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="bg-gray-700 flex flex-col justify-center items-center h-52">
      <Logo />
    </header>
  );
}
