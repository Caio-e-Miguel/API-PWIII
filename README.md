# 🏗️ API - Materiais de Construção

API RESTful desenvolvida em ASP.NET Core para gerenciar materiais de construção. Permite cadastrar, listar, atualizar e remover materiais — **sem necessidade de banco de dados**. Os dados são armazenados temporariamente em memória.

---

## 📂 Repositório Oficial

🔗 GitHub: [https://github.com/Caio-e-Miguel/API.git](https://github.com/Caio-e-Miguel/API.git)

---

## 🚀 Tecnologias Utilizadas

- [.NET 6 ou superior](https://dotnet.microsoft.com/)
- ASP.NET Core Web API
- Swagger (documentação da API)

---

## 📁 Estrutura do Projeto

- `Controllers/MaterialController.cs`: Controlador principal com endpoints da API.
- `Models/Material.cs`: Modelo de dados da entidade `Material`.
- `Program.cs`: Arquivo de inicialização e configuração do app.

---

## 🛠️ Como Executar a API Localmente

### ✅ Pré-requisitos

- [.NET 6 SDK ou superior](https://dotnet.microsoft.com/en-us/download/dotnet)
- Um editor de código como Visual Studio, VS Code ou terminal com CLI do .NET

---

### 📌 Passo a Passo para Executar

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Caio-e-Miguel/API.git
   cd API
   (Importante!) Baixe a pasta node_modules no OneDrive:
   ---
2. **⬇️ Baixe a pasta node_modules no OneDrive:**
🔗 [Clique aqui para acessar a pasta node_modules](https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy85ZDJhMjc0YmVkMGYyMWUzL0VoZlBtdkczbjY1Qm5JNXZ2SGwzUTFrQkdMVzhqUVpWQk14ZnRaTWQyVkFRcGc%5FZT1oSWFtd2o&id=9D2A274BED0F21E3%21sf19acf179fb741ae9c8e6fbc79774359&cid=9D2A274BED0F21E3)

Faça o download e cole a pasta dentro do diretório raiz do projeto, ao lado dos arquivos Program.cs, Controllers, Models, etc.
---
3. **Restaure os pacotes do projeto:**
comando no cmd:
dotnet restore

---
4. **Compile a aplicação:**
dotnet build

---
5. **Execute a API:**
dotnet run

---
6. **Abra o navegador e acesse a interface Swagger:**
http://localhost:5000/swagger
