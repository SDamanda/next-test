import Header from "../../../components/Header";

const motos = [
    {
        id: 1;
        nome: "Harley-Davidson Fat Boy 114",
        preço: "US$ 30.000",
        imagem: "/moto1.jpg",
        descriçao: "Design robusto, rodas de aros largos, assento confortável, estilo clássico de cruiser com visual imponente, ideal para quem busca uma moto com presença marcante."

    },
    {
        id: 2,
        nome: "Harley-Davidson Road King",
        preço: "US$ 25.000",
        imagem: "/moto2.jpg",
        descriçao: "Clássica touring, com para-brisa grande, assento confortável, equipado para longas viagens, com estilo vintage e detalhes premium. robusto, rodas de aros largos, assento confortável, estilo clássico de cruiser com visual imponente, ideal para quem busca uma moto com presença marcante."

    },
];

export default function Home() {
    return (
        <>
            <Header />
            <div style={{
                display: 'flex',
                gap: 20,
                flexWrap: 'wrap',
                justifyContent: 'center',
                padding: 20
            }}>
                {motos.map(moto => (
                    <div key={moto.id} style={{
                        border: '1px solid #ddd',
                        borderRadius: 8,
                        padding: 16,
                        widht: 220,
                        textAlign: 'center'
                    }}>


                    </div>
                ))}
            </div>
        </>

    );
}
