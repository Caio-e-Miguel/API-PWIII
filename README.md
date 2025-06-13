💍 API - Joias e Acessórios
API RESTful desenvolvida em ASP.NET Core para gerenciamento de joias e acessórios. Permite cadastrar, listar, atualizar e remover materiais, com armazenamento temporário em memória — sem necessidade de banco de dados.

📿 Repositório Oficial
🔗 GitHub - Caio-e-Miguel/API

💎 Tecnologias Utilizadas
.NET 6 ou superior

ASP.NET Core Web API

Swagger (para documentação e testes da API)

📂 Estrutura do Projeto
bash
Copiar
Editar
API/
├── Controllers/
│   └── MaterialController.cs     # Endpoints da API
├── Models/
│   └── Material.cs               # Modelo de dados
├── Program.cs                    # Configuração da aplicação
└── API.csproj                    # Arquivo de projeto .NET
✨ Como Executar a API Localmente
💼 Pré-requisitos
.NET 6 SDK ou superior

Visual Studio, Visual Studio Code ou terminal com CLI do .NET

📌 Passo a Passo
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/Caio-e-Miguel/API.git
cd API
(Opcional) Baixe arquivos adicionais:

Se seu projeto utiliza alguma pasta extra (ex: node_modules ou arquivos compartilhados via OneDrive), baixe-os pelo link abaixo e cole na raiz do projeto:

🔗 Acessar arquivos no OneDrive

Restaure os pacotes NuGet do projeto:

bash
Copiar
Editar
dotnet restore
Compile a aplicação:

bash
Copiar
Editar
dotnet build
Execute a API:

bash
Copiar
Editar
dotnet run
Acesse a interface Swagger para testar os endpoints:

👉 http://localhost:5000/swagger

💠 Observações
Os dados cadastrados são armazenados temporariamente em memória e serão perdidos ao reiniciar a aplicação.

Ideal para prototipagem rápida, testes e APIs sem persistência.
