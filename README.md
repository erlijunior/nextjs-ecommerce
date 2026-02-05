# Mini E-commerce - Desafio Técnico

## Por que escolhi o framework

Escolhi **Next.js** pela facilidade de configurar tanto o frontend quanto a API no mesmo projeto, além da excelente experiência de desenvolvimento com TypeScript e a facilidade de deploy na Vercel.

## Estrutura de pastas do projeto

```
src/
├── actions/           # Server actions para comunicação com API
├── app/
│   ├── components/    # Componentes reutilizáveis
│   │   ├── cart/      # Componentes do carrinho
│   │   ├── footer/    # Footer da aplicação
│   │   ├── header/    # Header com logo e carrinho
│   │   ├── product/   # Componentes relacionados a produtos
│   │   └── ui/        # Componentes de interface (skeletons, etc.)
│   ├── store/         # Gerenciamento de estado com Zustand
│   ├── types/         # Definições TypeScript
│   └── api/           # API Routes do Next.js
```

## Como rodar o projeto localmente

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# O projeto estará disponível em http://localhost:3000
```

## Variáveis de ambiente

```
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## Link do deploy público

https://nextjs-ecommerce-xi-kohl.vercel.app/

## Decisões técnicas relevantes

- **Zustand** para gerenciamento de estado: mais simples que Redux para este projeto e para aprender, pois usei pouco em projetos anteriores
- **TailwindCSS** para estilização: desenvolvimento mais rápido e responsivo
- **Framer Motion** para animações do carrinho - já havia utilizado antes em outros projetos
- **TypeScript** por estar familiarizado com React + TypeScript
- **Persistência no localStorage** para manter carrinho entre sessões
- **Skeleton loading** para melhor experiência do usuário durante carregamentos

## Uso de IA no desenvolvimento

Durante o desenvolvimento deste projeto, utilizei o **GitHub Copilot** como ferramenta de assistência para:

- **Geração de componentes**: Auxílio na criação de componentes skeleton e estruturas repetitivas
- **Otimização de código**: Sugestões para melhorar a performance e legibilidade do código
- **Resolução de problemas**: Ajuda na identificação e correção de bugs específicos (como o problema de produto anterior sendo exibido)
- **Documentação**: Auxílio na estruturação deste README e comentários no código
- **TypeScript**: Sugestões de tipagem mais precisas e interfaces

O Copilot foi usado como uma ferramenta complementar ao meu conhecimento, me ajudando na soluções de bugs e testes sem substituir o raciocínio lógico e as decisões arquiteturais, que foram todas pensadas e implementadas por mim.

## Funcionalidades implementadas

### ✅ Requisitos obrigatórios

- [x] Framework Next.js com API Routes
- [x] Endpoints `/api/products` e `/api/products/:id`
- [x] Home com listagem de produtos
- [x] Página de produto com detalhes + botão "Adicionar ao carrinho"
- [x] Header com logo e ícone do carrinho
- [x] Footer simples
- [x] Minicarrinho (drawer/sidebar) com todas as funcionalidades
- [x] Responsividade mobile-first
- [x] Deploy público

### ✅ Diferenciais implementados

- [x] TypeScript completo
- [x] Gerenciamento de estado com Zustand
- [x] Animações no carrinho com Framer Motion
- [x] Persistência do carrinho no localStorage
- [x] Loading states com skeleton components
- [x] SEO básico com metadata

## Tecnologias utilizadas

- **Frontend**: Next.js 15, React, TypeScript
- **Estilização**: TailwindCSS
- **Gerenciamento de estado**: Zustand
- **Animações**: Framer Motion
- **Ícones**: Lucide React
- **Deploy**: Vercel
