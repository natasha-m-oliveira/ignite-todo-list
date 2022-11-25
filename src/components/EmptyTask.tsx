import clipboard from "../assets/clipboard.png";

export function EmptyTask() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 px-6 py-16">
      <img src={clipboard} alt="Prancheta" className="w-min" />
      <div className="text-center">
        <p className="text-gray-300 font-bold">
          Você ainda não tem tarefas cadastradas
        </p>
        <p className="text-gray-300">
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    </div>
  );
}
