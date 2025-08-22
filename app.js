const http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

	res.write(`
	    <!DOCTYPE html>
	    <html lang="pt-BR">
	      <head>
	        <meta charset="UTF-8" />
	        <title>Meu Site</title>
	        <style>
	          body {
	            font-family: Arial, sans-serif;
	            background: linear-gradient(135deg, #6a11cb, #2575fc);
	            color: #fff;
	            margin: 0;
	            padding: 0;
	            display: flex;
	            justify-content: center;
	            align-items: center;
	            height: 100vh;
	          }
	          .card {
	            background: rgba(0,0,0,0.5);
	            padding: 2rem;
	            border-radius: 12px;
	            text-align: center;
	            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
	          }
	          h1 {
	            margin-bottom: 1rem;
	          }
	          button {
	            padding: 0.6rem 1.2rem;
	            border: none;
	            border-radius: 8px;
	            background: #ff9800;
	            color: white;
	            font-size: 1rem;
	            cursor: pointer;
	            transition: 0.3s;
	          }
	          button:hover {
	            background: #e68900;
	          }
	        </style>
	      </head>
	      <body>
	        <div class="card">
	          <h1>🚀 Bem-vindo ao meu site!</h1>
	          <p>Essa é uma página HTML estilizada.</p>
	          <button onclick="alert('Você clicou no botão!')">Clique aqui</button>
	        </div>
	      </body>
	    </html>
	  `);
	res.end();
}).listen(3000);

console.log("Server started on port 3000");
