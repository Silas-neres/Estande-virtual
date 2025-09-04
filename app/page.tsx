import { ProductCard } from "@/components/product-card"
import { Header } from "@/components/header"

// Sample products data - replace with your actual products
const products = [
  {
    id: 1,
    name: "Ferro Fundido",
    description: "Peças de ferro fundido de alta qualidade para reciclagem",
    price: "R$ 2,50/kg",
    image: "/ferro-fundido-reciclagem.png",
    whatsappMessage: "Olá! Tenho interesse no Ferro Fundido. Poderia me dar mais informações?",
  },
  {
    id: 2,
    name: "Alumínio",
    description: "Sucata de alumínio limpa e separada",
    price: "R$ 4,20/kg",
    image: "/aluminio-reciclagem-sucata.png",
    whatsappMessage: "Olá! Gostaria de saber mais sobre o Alumínio disponível.",
  },
  {
    id: 3,
    name: "Cobre",
    description: "Fios e peças de cobre para reciclagem",
    price: "R$ 18,50/kg",
    image: "/cobre-fios-reciclagem.png",
    whatsappMessage: "Olá! Tenho interesse no Cobre. Qual a disponibilidade?",
  },
  {
    id: 4,
    name: "Aço Inox",
    description: "Sucata de aço inoxidável em bom estado",
    price: "R$ 3,80/kg",
    image: "/aco-inox-reciclagem.png",
    whatsappMessage: "Olá! Gostaria de mais informações sobre o Aço Inox.",
  },
  {
    id: 5,
    name: "Latão",
    description: "Peças de latão para reciclagem industrial",
    price: "R$ 12,30/kg",
    image: "/latao-reciclagem-industrial.png",
    whatsappMessage: "Olá! Tenho interesse no Latão. Poderia me passar mais detalhes?",
  },
  {
    id: 6,
    name: "Ferro Comum",
    description: "Sucata de ferro comum limpa e classificada",
    price: "R$ 0,85/kg",
    image: "/ferro-comum-sucata-reciclagem.png",
    whatsappMessage: "Olá! Gostaria de saber sobre a disponibilidade do Ferro Comum.",
  },
  {
    id: 7,
    name: "Plástico PET",
    description: "Garrafas e embalagens de plástico PET para reciclagem",
    price: "R$ 1,20/kg",
    image: "/plastico-pet-reciclagem.png",
    whatsappMessage: "Olá! Tenho interesse no Plástico PET. Poderia me dar mais informações?",
  },
  {
    id: 8,
    name: "Vidro",
    description: "Sucata de vidro limpa e separada por cor",
    price: "R$ 0,50/kg",
    image: "/vidro-reciclagem.png",
    whatsappMessage: "Olá! Gostaria de saber mais sobre o Vidro disponível.",
  },
  {
    id: 9,
    name: "Papelão",
    description: "Sucata de papelão para reciclagem industrial",
    price: "R$ 0,30/kg",
    image: "/papelao-reciclagem-industrial.png",
    whatsappMessage: "Olá! Tenho interesse no Papelão. Qual a disponibilidade?",
  },
  {
    id: 10,
    name: "Madeira",
    description: "Resíduos de madeira para reciclagem e reaproveitamento",
    price: "R$ 0,70/kg",
    image: "/madeira-reciclagem.png",
    whatsappMessage: "Olá! Gostaria de mais informações sobre a Madeira disponível.",
  },
  {
    id: 11,
    name: "Borracha",
    description: "Resíduos de borracha para reciclagem industrial",
    price: "R$ 1,50/kg",
    image: "/borracha-reciclagem-industrial.png",
    whatsappMessage: "Olá! Tenho interesse na Borracha. Poderia me passar mais detalhes?",
  },
  {
    id: 12,
    name: "Tecido",
    description: "Resíduos de tecido para reciclagem têxtil",
    price: "R$ 0,90/kg",
    image: "/tecido-reciclagem-textil.png",
    whatsappMessage: "Olá! Gostaria de saber sobre a disponibilidade do Tecido.",
  },
  {
    id: 13,
    name: "Chumbo",
    description: "Sucata de chumbo para reciclagem industrial",
    price: "R$ 7,50/kg",
    image: "/chumbo-reciclagem-industrial.png",
    whatsappMessage: "Olá! Tenho interesse no Chumbo. Poderia me dar mais informações?",
  },
  {
    id: 14,
    name: "Zinco",
    description: "Peças de zinco para reciclagem",
    price: "R$ 5,20/kg",
    image: "/zinco-reciclagem.png",
    whatsappMessage: "Olá! Gostaria de saber mais sobre o Zinco disponível.",
  },
  {
    id: 15,
    name: "Estanho",
    description: "Sucata de estanho limpa e separada",
    price: "R$ 6,80/kg",
    image: "/estanho-reciclagem-sucata.png",
    whatsappMessage: "Olá! Tenho interesse no Estanho. Qual a disponibilidade?",
  },    
  {
    id: 16,
    name: "Níquel",
    description: "Peças de níquel para reciclagem industrial",
    price: "R$ 15,00/kg",
    image: "/niquel-reciclagem-industrial.png",
    whatsappMessage: "Olá! Gostaria de mais informações sobre o Níquel disponível.",  
  },
  {
    id: 17,
    name: "Magnésio",
    description: "Sucata de magnésio para reciclagem",
    price: "R$ 10,50/kg",
    image: "/magnesio-reciclagem.png",
    whatsappMessage: "Olá! Tenho interesse no Magnésio. Poderia me dar mais informações?",
  },
  {
    id: 18,
    name: "Titânio",
    description: "Peças de titânio para reciclagem industrial",
    price: "R$ 20,00/kg",
    image: "/titanio-reciclagem-industrial.png",
    whatsappMessage: "Olá! Gostaria de saber mais sobre o Titânio disponível.",
  },
  {
    id: 19,
    name: "Cádmio",
    description: "Sucata de cádmio para reciclagem",
    price: "R$ 8,75/kg",
    image: "/cadmio-reciclagem.png",
    whatsappMessage: "Olá! Tenho interesse no Cádmio. Qual a disponibilidade?",
  },
  {
    id: 20,
    name: "Prata",
    description: "Peças de prata para reciclagem e reaproveitamento",
    price: "R$ 25,00/kg",
    image: "/prata-reciclagem-reaproveitamento.png",
    whatsappMessage: "Olá! Gostaria de mais informações sobre a Prata disponível.",
  },
  {
    id: 21,
    name: "Ouro",
    description: "Sucata de ouro para reciclagem industrial",
    price: "R$ 150,00/kg",
    image: "/ouro-reciclagem-industrial.png",
    whatsappMessage: "Olá! Tenho interesse no Ouro. Poderia me passar mais detalhes?",
  },
  {
    id: 22,
    name: "Platina",
    description: "Peças de platina para reciclagem",
    price: "R$ 120,00/kg",
    image: "/platina-reciclagem.png",
    whatsappMessage: "Olá! Gostaria de saber sobre a disponibilidade da Platina.",
  },  
  { 
    id: 23,
    name: "Paládio",
    description: "Sucata de paládio para reciclagem industrial",
    price: "R$ 130,00/kg",
    image: "/paladio-reciclagem-industrial.png",
    whatsappMessage: "Olá! Tenho interesse no Paládio. Poderia me dar mais informações?",
  },
  {    
    id: 24,
    name: "Ródio",
    description: "Peças de ródio para reciclagem",
    price: "R$ 200,00/kg",
    image: "/rodio-reciclagem.png",
    whatsappMessage: "Olá! Gostaria de saber mais sobre o Ródio disponível.",
  },
  {    
    id: 25,
    name: "Ródio",
    description: "Peças de ródio para reciclagem",
    price: "R$ 200,00/kg",
    image: "/rodio-reciclagem.png",
    whatsappMessage: "Olá! Gostaria de saber mais sobre o Ródio disponível.",
  },
  {    
    id: 26,
    name: "Ródio",
    description: "Peças de ródio para reciclagem",
    price: "R$ 200,00/kg",
    image: "/rodio-reciclagem.png",
    whatsappMessage: "Olá! Gostaria de saber mais sobre o Ródio disponível.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12 p-6 bg-card rounded-lg">
          <h2 className="text-2xl font-semibold text-primary mb-2">Precisa de algo específico?</h2>
          <p className="text-muted-foreground mb-4">
            Entre em contato conosco pelo WhatsApp para consultar outros materiais disponíveis.
          </p>
          <a
            href="https://wa.me/5511999999999?text=Olá! Gostaria de consultar sobre materiais de reciclagem disponíveis."
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
      </main>
    </div>
  )
}
