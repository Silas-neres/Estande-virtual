import { ProductCard } from "@/components/product-card"
import { Header } from "@/components/header"

// Sample products data - replace with your actual products
const products = [
  {
    id: 1,
    name: "Colunas 5/16",
    description: "Colunas 5/16 6 metros",
    price: "R$ 75,00/6m",
    image: "/coluna5-4.jpg",
    whatsappMessage: "Olá! Gostaria de saber mais sobre as Colunas 5/16 disponíveis.",
  },
  {
    id: 2,
    name: "Perfil 75x40",
    description: "Perfil 75x40 6 metros",
    price: "R$ 125,00/6m",
    image: "/perfil-2.jpg",
    whatsappMessage: "Olá! Gostaria de saber mais sobre os Perfis 75x40 disponíveis.",
  },
  {
    id: 3,
    name: "Colunas 3/8",
    description: "Colunas 3/8, 20x7 com 6 metros",
    price: "R$ 115,00",
    image: "/coluna3-2.jpg",
    whatsappMessage: "Olá! Gostaria de saber mais sobre as Colunas 3/8 disponíveis.",
  },
  {
    id: 4,
    name: "Piso elevado",
    description: "Piso elevado de concreto",
    price: "R$ 10,00",
    image: "/pido-elevado-1.jpg",
    whatsappMessage: "Olá! Gostaria de saber mais sobre os Pisos Elevados disponíveis.",
  },
  {
    id: 5,
    name: "Tesouras",
    description: "Tesouras fabricadas de acordo com a medida desejada, encomende já!",
    price: "R$ 120,00/m",
    image: "/tesoura-1.jpg",
    whatsappMessage: "Olá! Gostaria de saber mais sobre as Tesouras disponíveis ",
  },
  {
    id: 6,
    name: "Cano PVC",
    description: "A partir de R$ 35,00 (75mm), tamanhos variados",
    price: "R$ 35,00",
    image: "/cano-2.jpg",
    whatsappMessage: "Olá! Gostaria de saber mais sobre os Canos PVC disponíveis ",
  },
  {
    id: 7,
    name: "Tinta em Geral",
    description: "Tintas variadas, a partir de 35,00 a lata de 3,6L, e 250,00 a lata de 18L",
    price: "R$ 35,00/3,6L",
    image: "/tinta-1.jpg",
    whatsappMessage: "Olá! Gostaria de saber mais sobre as Tintas disponíveis ",
  },
  {
    id: 8,
    name: "Malhas",
    description: "Malhas e Telas soldadas para construção civil",
    price: "R$ 35,00",
    image: "/malha-2.jpg",
    whatsappMessage: "Olá! Gostaria de saber mais sobre as Malhas disponíveis ",
  },
  {
    id: 9,
    name: "Treliças",
    description: "Treliças para construção civil",
    price: "R$ 18,00/4m",
    image: "/trelica-3.jpg",
    whatsappMessage: "Olá! Gostaria de saber mais sobre as Treliças disponíveis ",
  },
  {
    id: 10,
    name: "Pratileiras",
    description: "Pratileiras 2,40 metros de altura e plataforma de 45cmx92cm",
    image: "/pratileira.jpg",
    whatsappMessage: "Olá! Gostaria de saber mais sobre as Pratileiras disponíveis ",
  },
  {
    id: 11,
    name: "Base caixa d'água",
    description: "Base para caixa d'água 500L, 1000L e 2000L",
    image: "/base-dagua-1.jpg",
    whatsappMessage: "Olá! Gostaria de saber mais sobre as Bases para caixa d'água disponíveis ",
  },
  {
    id: 12,
    name: "Ferros de obra",
    description: "Ferros de obra 6 - 25 mm",
    image: "/ferro-obra-1.jpg",
    whatsappMessage: "Olá! Gostaria de saber mais sobre os Ferros de obra disponíveis ",
  },
  {
    id: 13,
    name: "Taças d'água",
    image: "/taça-dagua-2.jpg",
    whatsappMessage: "Olá! Gostaria de saber mais sobre as Taças d'água disponíveis ",
  },
  {
    id: 14,
    name: "Variados",
    image: "/imagens_combinadas.jpg",
    whatsappMessage: "Olá! Gostaria de saber mais sobre os materiais variados disponíveis ",
  },
  {
    id: 15,
    name: "Cantoneiras",
    image: "/cantoneira.jpg",
    whatsappMessage: "Olá! Gostaria de saber mais sobre as Cantoneiras disponíveis ",
  },    
  {
    id: 16,
    name: "Pedras de mármore",
    image: "/pedra-marmore-1.jpg",
    whatsappMessage: "Olá! Gostaria de saber mais sobre as Pedras de mármore disponíveis ",  
  },
  {
    id: 17,
    name: "Argamamassa, gesso e rejunte",
    image: "/argamassas_combinadas.jpg",
    whatsappMessage: "Olá! Gostaria de saber mais sobre as Argamassas, gesso e rejunte disponíveis ",
  },
  {
    id: 18,
    name: "Portões",
    image: "/portoes.jpg",
    whatsappMessage: "Olá! Gostaria de saber mais sobre os Portões disponíveis ",
  },
  {
    id: 19,
    name: "Automóveis",
    image: "/caminhoes (2).jpg",
    whatsappMessage: "Olá! Gostaria de saber mais sobre os Automóveis disponíveis ",
  },
  {
    id: 20,
    name: "Vigas",
    image: "/viga-1.jpg",
    whatsappMessage: "Olá! Gostaria de saber mais sobre as Vigas disponíveis ",
  },
  {
    id: 21,
    name: "Escada",
    image: "/escada-1.jpg",
    whatsappMessage: "Olá! Gostaria de saber mais sobre as Escadas disponíveis ",
  },
  {
    id: 22,
    name: "Motrores",
    image: "/motor-3.jpg",
    whatsappMessage: "Olá! Gostaria de saber mais sobre os Motores disponíveis ",
  },  
  { 
    id: 23,
    name: "Pilares estruturais",
    image: "/pilar-estrutural-1.jpg",
    whatsappMessage: "Olá! Gostaria de saber mais sobre os Pilares estruturais disponíveis ",
  },
  {    
    id: 24,
    name: "Telhas de zinco",
    image: "/telha de zinco.jpg",
    whatsappMessage: "Olá! Gostaria de saber mais sobre as Telhas de zinco disponíveis ",
  },
  {    
    id: 25,
    name: "Malha POP",
    image: "/malha-pop2.jpg",
    whatsappMessage: "Olá! Gostaria de saber mais sobre as Malhas POP disponíveis ",
  },
  {    
    id: 26,
    name: "Chapas de aço",
    image: "/chapa.jpg",
    whatsappMessage: "Olá! Gostaria de saber mais sobre  as Chapas de aço disponíveis ",
  },
  {    
    id: 26,
    name: "Caixa d'água",
    image: "/caixa-dagua1.jpg",
    whatsappMessage: "Olá! Gostaria de saber mais sobre as Caixas d'água disponíveis ",
  },
  
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4 text-balance">Estande Virtual de Reciclagem</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Encontre os melhores materiais recicláveis com qualidade garantida. Entre em contato via WhatsApp para mais
            informações e negociação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="produtos">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12 p-6 bg-card rounded-lg" id="contato">
          <h2 className="text-2xl font-semibold text-primary mb-2">Precisa de algo específico?</h2>
          <p className="text-muted-foreground mb-4">
            Entre em contato conosco pelo WhatsApp para consultar outros materiais disponíveis.
          </p>
          <a
            href="https://wa.me/5561991011456?text=Olá! Gostaria de consultar sobre materiais disponíveis."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
            Falar no WhatsApp
          </a>
        </div>

        <div className="text-center mt-12 p-6 bg-card rounded-lg" id="localizacao">
          <h2 className="text-2xl font-semibold text-primary mb-2">Localização</h2>
          <p className="text-muted-foreground mb-4">
            Esatamos aqui 📍
          </p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.845887593545!2d-48.0260738!3d-15.969422499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2b7b8f8c0155%3A0xad22483c73aed35f!2sGlobo%20Reciclaveis!5e0!3m2!1spt-BR!2sbr!4v1757005522880!5m2!1spt-BR!2sbr" 
              className="mx-auto mt-4 w-full max-w-3xl h-[450px] rounded-lg"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>

        
      </main>
    </div>
  )
}
