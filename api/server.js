const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

const dados = {
  "Relógios": [
    {
      nome: "Rolex Land-Dweller",
      imagem: "https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_640/v1742320621/rolexcom/collection/family-pages/classic-watches/land-dweller/family-page/roller/classic-watches-the-land-dweller-40-white-gold-roller_m127334-0001_2501fj_001",
      descricao: "Reinventando o presente para escrever o futuro. "
    },
    {
      nome: "Rolex Day-Date",
      imagem: "https://media.rolex.com/image/upload/q_auto:eco/f_auto/c_limit,w_1920/v1722242022/rolexcom/collection/family-pages/classic-watches/day-date/family-page/2024/classic-watches-day-date-10079_SV_RSA_DayDate_36_M128235_0050",
      descricao: "Se o tempo muda todas as coisas, este minuto também causa mudanças."
    }
  ],

  "Ocúlos": [
    {
      nome: "Oakley Square Wire",
      imagem: "https://assets2.oakley.com/cdn-record-files-pi/b101a12d-f733-4f2f-a402-a75a00232516/f2dfe3fb-de81-4d65-964e-afc7013667f4/0OO4075__407513__P21__shad__qt.png?impolicy=OO_ratio&width=2000",
      descricao: "Reinventamos nossos clássicos óculos Square Wire™, criando um visual novo de sofisticação descontraída que ainda traz o melhor da confortável e leve liga C-5."
    },
    {
      nome: "Oakley Plantaris",
      imagem: "https://assets2.oakley.com/cdn-record-files-pi/468817a6-9159-4d56-9666-b0c4004f18da/96dde08c-a2a0-4ddf-b419-b18701716b36/0OO9437__943701__P21__shad__qt.png?impolicy=OO_ratio&width=2000",
      descricao: "Inspirado pela observação das formas e criaturas encontradas na natureza, o Plantaris tem um design ousado com características funcionais e técnicas."
    }
  ],

  "Tênis": [
    {
      nome: "Nike Air Jordan 5 OG Grape",
      imagem: "https://imgnike-a.akamaihd.net/360x360/09762451A1.jpg",
      descricao: "O AJ5 é uma vitória, não importa como você o veja. A paleta de cores 'Grape' quebrou o padrão, afastando-se das cores tradicionais da Jordan para homenagear o time da NBA do estado onde MJ cresceu."
    },
    {
      nome: "Tênis Nike SB Malor",
      imagem: "https://imgnike-a.akamaihd.net/360x360/029484IFA1.jpg",
      descricao: "Destrua este tênis! O SB Malor foi criado para skatistas iniciantes que precisam de um calçado que possa suportar longas horas de prática para aprimorar suas habilidades."
    }
  ]
};

app.get('/api/materiais', (req, res) => {
  res.json(dados);
});

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>Catálogo de Carros</title>
    <style>
      body { font-family: Arial, sans-serif; padding: 20px; }
      img { width: 200px; height: auto; display: block; margin-bottom: 10px; }
      div.item { border: 1px solid #ccc; padding: 10px; margin-bottom: 20px; width: 220px; float: left; margin-right: 20px; }
      h2 { clear: both; }
    </style>
  </head>
  <body>
    <h1>Catálogo de Materiais Automotivos</h1>
    <div id="lista"></div>

    <script>
      fetch('/api/materiais')
        .then(response => response.json())
        .then(data => {
          const container = document.getElementById('lista');
          for (const categoria in data) {
            const h2 = document.createElement('h2');
            h2.textContent = categoria;
            container.appendChild(h2);

            data[categoria].forEach(item => {
              const div = document.createElement('div');
              div.className = 'item';

              const nome = document.createElement('h3');
              nome.textContent = item.nome;

              const img = document.createElement('img');
              img.src = item.imagem;
              img.alt = item.nome;

              const desc = document.createElement('p');
              desc.textContent = item.descricao;

              div.appendChild(nome);
              div.appendChild(img);
              div.appendChild(desc);

              container.appendChild(div);
            });
          }
        })
        .catch(err => {
          console.error('Erro ao carregar os dados:', err);
          const container = document.getElementById('lista');
          container.textContent = 'Erro ao carregar os dados.';
        });
    </script>
  </body>
  </html>
  `);
});

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
