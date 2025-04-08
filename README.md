# 🎯 Desafio WebSocket + HTTP (Node.js)

Este projeto foi desenvolvido como parte de um desafio prático da faculdade, utilizando **Node.js**, **WebSocket**, **HTML** e **CSS** para criar uma aplicação interativa de adivinhação de número secreto.

---

## 📚 Descrição do Desafio

Você precisa:

- Criar um **servidor HTTP** que sirva uma página HTML.
- Criar uma **interface WebSocket** para conectar ao servidor WebSocket do professor (`ws://192.168.100.116:8080`).
- Enviar informações do aluno (nome e RGM).
- Enviar tentativas de adivinhação de número.
- Exibir feedback do servidor (`"Maior"`, `"Menor"`, ou `"Você acertou!"`).

---

## ✨ Funcionalidades

✅ Conexão WebSocket com status  
✅ Envio de Nome e RGM  
✅ Formulário de tentativa de número secreto  
✅ Feedback em tempo real do servidor  
✅ Histórico de tentativas e número secreto revelado  
✅ Interface bonita, responsiva e moderna  

---

## 🚀 Como executar

### 1. Clone o projeto
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```
### 2. Instale as dependências
```bash
npm install
```

### 3. Execute o servidor HTTP
```bash
node server.js
```

###4. Em seguida execute o WebSocket
```bash
node WebSocketServer.js
```
Isso vai rodar seu servidor local em: http://localhost:3000

🧠 Como funciona a comunicação
Envio de informações:
```json

{ "type": "info", "name": "Seu Nome", "rgm": "Seu RGM" }
```
Envio de tentativas:
```json

{ "type": "guess", "number": 123456 }
```
### Respostas possíveis do servidor:
{ "type": "success", "message": "Conexão bem-sucedida!" }

{ "type": "hint", "message": "Maior" }

{ "type": "hint", "message": "Menor" }

{ "type": "success", "message": "Você acertou!", "secretNumber": 123456, "attempts": [ ... ] }

{ "type": "error", "message": "Mensagem de erro." }

### 💻 Tecnologias Utilizadas
Node.js

WebSocket

HTML5

CSS3 (com design moderno)

JavaScript (vanilla)
