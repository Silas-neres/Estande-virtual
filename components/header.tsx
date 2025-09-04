export function Header() {
  return (
    <header className="bg-card border-b border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <img src="/logo.png" alt="Logo" className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Globo Recicláveis</h1>
              <p className="text-sm text-muted-foreground">Reciclagem de Qualidade</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#produtos" className="text-foreground hover:text-accent transition-colors">
              Produtos
            </a>
            <a href="#contato" className="text-foreground hover:text-accent transition-colors">
              Contato
            </a>
            <a href="#localizacao" className="text-foreground hover:text-accent transition-colors">
              Localização
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
