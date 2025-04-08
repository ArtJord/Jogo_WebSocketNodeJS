//Criando o proprio servidor 

const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  let secretNumber = Math.floor(Math.random() * 900000 + 100000); 
  let attempts = [];

  ws.on('message', (msg) => {
    try {
      const data = JSON.parse(msg);

      if (data.type === "info") {
        if (!data.name || !data.rgm) {
          ws.send(JSON.stringify({ type: "error", message: "Nome e RGM são obrigatórios." }));
        } else {
          ws.send(JSON.stringify({ type: "success", message: "Conexão bem-sucedida!" }));
          console.log(`Usuário conectado: ${data.name} (RGM: ${data.rgm})`);
        }
      }

      if (data.type === "guess") {
        if (typeof data.number !== "number") {
          ws.send(JSON.stringify({ type: "error", message: "Envio obrigatório de um número." }));
          return;
        }

        attempts.push(data.number);

        if (data.number < secretNumber) {
          ws.send(JSON.stringify({ type: "hint", message: "Maior" }));
        } else if (data.number > secretNumber) {
          ws.send(JSON.stringify({ type: "hint", message: "Menor" }));
        } else {
          ws.send(JSON.stringify({
            type: "success",
            message: "Você acertou!",
            secretNumber,
            attempts
          }));
          console.log("Desafio concluído com sucesso!");
        }
      }

    } catch (err) {
      ws.send(JSON.stringify({ type: "error", message: "Erro no formato da mensagem." }));
    }
  });
});

console.log("Servidor WebSocket rodando na porta 8080");
