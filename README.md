# 💎 API - Joias e Acessórios

API RESTful desenvolvida em **ASP.NET Core** para gerenciamento de joias e acessórios. Permite **cadastrar**, **listar**, **atualizar** e **remover** materiais, com armazenamento **temporário em memória** — sem necessidade de banco de dados.

---

## 📂 Repositório Oficial

[🔗 GitHub - Caio-e-Miguel/API](https://github.com/Caio-e-Miguel/API.git)

---

## 💼 Tecnologias Utilizadas

- [.NET 6 ou superior](https://dotnet.microsoft.com/)
- ASP.NET Core Web API
- Swagger (para documentação e testes da API)

---

## 📁 Estrutura do Projeto

API/
├── Controllers/
│ └── MaterialController.cs
├── Models/
│ └── Material.cs
├── Program.cs
└── API.csproj

---

## 🚀 Como Executar a API Localmente

### Pré-requisitos

- [.NET 6 SDK ou superior](https://dotnet.microsoft.com/en-us/download/dotnet)
- Visual Studio, Visual Studio Code ou terminal com CLI do .NET

---

### Passo a Passo

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Caio-e-Miguel/API.git
   cd API


---


📌 Observações
Os dados são armazenados em memória e serão perdidos ao reiniciar a aplicação.

Ideal para prototipagem rápida, testes e APIs sem persistência.
