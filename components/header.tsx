export function Header() {
  return (
    <header className="bg-card border-b border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 7v10c0 2.21 3.79 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.79 4 8 4s8-1.79 8-4M4 7c0-2.21 3.79-4 8-4s8 1.79 8 4"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">ReciclaFerro</h1>
              <p className="text-sm text-muted-foreground">Reciclagem de Qualidade</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#produtos" className="text-foreground hover:text-accent transition-colors">
              Produtos
            </a>
            <a href="#sobre" className="text-foreground hover:text-accent transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-foreground hover:text-accent transition-colors">
              Contato
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
