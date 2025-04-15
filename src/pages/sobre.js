import Link from "next/link";

export default function Sobre() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 gap-4">
      <h1 className="text-4xl font-bold">Sobre mim</h1>
      <p className="text-lg text-gray-600">Essa é a página de sobre 😄</p>

      <Link href="/home/src/pages/index.js" className="text-blue-500 hover:underline">
        Voltar para a Home
      </Link>
    </div>
  );
}
