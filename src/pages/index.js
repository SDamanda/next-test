import Link from "next/link"
import styles from '/index.module.css';
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter()
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Olá, mundo!</h1>
      <p className="text-lg text-gray-600">ola</p>

      <p onClick={()=>router.push("/contato")} className="text-blue-500 hover:underline">ir para Contato</p>
      <p onClick={()=>router.push("/produtos")} className="text-blue-500 hover:underline">ir para Produtos</p>
    </div>
    
  );
  return (
    <div className={styles.container}>
      <h1>pagina</h1>
      <p>conteudo adaptavel para qualquer tela</p>
    </div>
  );

}
