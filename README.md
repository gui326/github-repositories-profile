# Desafios e Decisões Técnicas

### Componente de Pesquisa Responsivo

Um dos desafios foi lidar com a diferença de comportamento do componente de pesquisa entre desktop e mobile.

Ao invés de duplicar o componente e manter duas implementações com a mesma responsabilidade, usei a criatividade e adaptei a estrutura e o comportamento dinamicamente com base no contexto de exibição.

### Aplicação de filtro

A API do GitHub não fornece todos os filtros necessários diretamente via query params para a listagem de repositórios.

Diante disso, implementei uma camada de filtragem no client-side, A lógica foi estruturada de forma desacoplada.

---

# Observações e melhorias

### ISR no perfil

A página de perfil foi configurada utilizando **Incremental Static Regeneration (ISR)**.

- Os dados do perfil do GitHub não mudam com alta frequência
- Permite carregamento extremamente rápido no primeiro acesso
- Reduz chamadas desnecessárias à API externa
- Melhora experiência do usuário

### Paginação

Uma possível melhoria futura seria a implementação de paginação para a listagem de repositórios.

Apesar de tecnicamente recomendável para escalabilidade, não implementei por limitação do layout proposto.

---

# Instruções para Executar o Projeto

### 1. Configuração de variaveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```bash
GITHUB_API_KEY=""

GITHUB_BASE_URL=""
```

Obs: a variável GITHUB_API_KEY é sensível, tenha cuidado ao manipulá-la.

### 2. Instalação das Dependências

Execute o comando abaixo para instalar as dependências

`npm install` ou `yarn install`

### 3. Build da aplicação

Execute o comando abaixo para realizar o build da aplicação

`npm run build`

### 4. Executar em Produção

`npm run start`

---

### Link da aplicação na Vercel: https://github-gui326.vercel.app
