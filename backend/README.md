<div class="markdown prose w-full break-words dark:prose-invert light">
  <p>
    <strong
      ><font style="vertical-align: inherit"
        ><font style="vertical-align: inherit">Readme.md</font></font
      ></strong
    >
  </p>
  <h1>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit"
        >Cadastro de Clientes e Contatos</font
      ></font
    >
  </h1>
  <h2>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit">Introdução</font></font
    >
  </h2>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit"
        >Neste desafio, foi criado uma aplicação web que permita cadastrar
        clientes e seus contatos vinculados. </font
      ><font style="vertical-align: inherit"
        >Além disso, a aplicação fornece um relatório em tela ou exportado
        em PDF que mostre os dados do cliente e seus contatos.</font
      ></font
    >
  </p>
  <h2>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit">Tecnologias Utilizadas</font></font
    >
  </h2>
  <ul>
    <li>
      <a href="https://www.typescriptlang.org/" target="_new"
        ><font style="vertical-align: inherit"
          ><font style="vertical-align: inherit">TypeScript</font></font
        ></a
      >
    </li>
    <li>
      <a href="https://nodejs.org/en/" target="_new"
        ><font style="vertical-align: inherit"
          ><font style="vertical-align: inherit">Node.js</font></font
        ></a
      >
    </li>
    <li>
      <a href="https://www.postgresql.org/" target="_new"
        ><font style="vertical-align: inherit"
          ><font style="vertical-align: inherit">PostgreSQLName</font></font
        ></a
      >
    </li>
    <li>
      <a href="https://expressjs.com/pt-br/" target="_new"
        ><font style="vertical-align: inherit"
          ><font style="vertical-align: inherit">Expressar</font></font
        ></a
      >
    </li>
    <li>
      <a href="https://typeorm.io/" target="_new"
        ><font style="vertical-align: inherit"
          ><font style="vertical-align: inherit">TypeORM</font></font
        ></a
      >
    </li>
    <li>
      <a href="https://yarnpkg.com/package/zod" target="_new"
        ><font style="vertical-align: inherit"
          ><font style="vertical-align: inherit">Zod</font></font
        ></a
      >
    </li>
  </ul>
  <h2>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit"
        >Diagrama de Entidade de Relacionamentos (DER)</font
      ></font
    >
  </h2>
  <p><img src="DER.png" alt="DER" /></p>
  <h2>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit"
        >Configuração e Instalação</font
      ></font
    >
  </h2>
  <ol>
    <li>
      <font style="vertical-align: inherit"
        ><font style="vertical-align: inherit"
          >Clone o repositório em sua máquina local:</font
        ></font
      >
    </li>
  </ol>
  <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bash</font></font></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">git <span class="hljs-built_in">clone</span> &lt;link-do-repositorio&gt;
<span class="hljs-built_in">cd</span> desafio-fullstack-junior
</code></div></div></pre>
  <ol start="2">
    <li>
      <font style="vertical-align: inherit"
        ><font style="vertical-align: inherit"
          >Instale as dependências do projeto:</font
        ></font
      >
    </li>
  </ol>
  <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs">npm install
</code></div></div></pre>
  <ol start="3">
    <li>
      <p>
        <font style="vertical-align: inherit"
          ><font style="vertical-align: inherit"
            >Configure suas variáveis ​​de ambiente copiando o arquivo
          </font></font
        ><code>.env.example</code
        ><font style="vertical-align: inherit"
          ><font style="vertical-align: inherit">para </font></font
        ><code>.env</code
        ><font style="vertical-align: inherit"
          ><font style="vertical-align: inherit"
            >e preenchendo com suas credenciais do PostgreSQL e outras
            configurações necessárias.</font
          ></font
        >
      </p>
    </li>
    <li>
      <p>
        <font style="vertical-align: inherit"
          ><font style="vertical-align: inherit"
            >Execute as migrations para criar as tabelas no banco de
            dados:</font
          ></font
        >
      </p>
    </li>
  </ol>
  <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sql</font></font></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-sql">npm run typeorm migration:generate src<span class="hljs-operator">/</span>migrations<span class="hljs-operator">/</span><span class="hljs-keyword">create</span><span class="hljs-operator">&lt;</span>nome<span class="hljs-operator">-</span>da<span class="hljs-operator">-</span>class<span class="hljs-operator">&gt;</span> <span class="hljs-comment">-- -d src/data-source.ts</span>
npm <span class="hljs-keyword">exec</span> <span class="hljs-comment">-- npm run typeorm -- migration:run -d src/data-source.ts</span>
</code></div></div></pre>
  <h2>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit">Terminais</font></font
    >
  </h2>
  <h3>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit">clientes</font></font
    >
  </h3>
  <h4>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit">Criação de cliente</font></font
    >
  </h4>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit"
        >Cria um novo cliente no sistema.</font
      ></font
    >
  </p>
  <ul>
    <li>
      <strong
        ><font style="vertical-align: inherit"
          ><font style="vertical-align: inherit">Método</font></font
        ></strong
      ><font style="vertical-align: inherit"
        ><font style="vertical-align: inherit"> : POST</font></font
      >
    </li>
    <li>
      <strong
        ><font style="vertical-align: inherit"
          ><font style="vertical-align: inherit">Rota</font></font
        ></strong
      ><font style="vertical-align: inherit"
        ><font style="vertical-align: inherit"> : /clientes</font></font
      >
    </li>
  </ul>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit"
        >Exemplo de solicitação:</font
      ></font
    >
  </p>
  <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bash</font></font></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">POST /clients<font></font>
Host: http://localhost:3000<font></font>
Authorization: None<font></font>
Content-<span class="hljs-built_in">type</span>: application/json
</code></div></div></pre>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit">Corpo da Requisição:</font></font
    >
  </p>
  <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">json</font></font></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-json"><span class="hljs-punctuation">{</span>
  <span class="hljs-attr">"name"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"diego"</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">"email"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"diego@mail.com"</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">"phone"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"11913455456"</span>
<span class="hljs-punctuation">}</span>
</code></div></div></pre>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit"
        >Resposta da Requisição:</font
      ></font
    >
  </p>
  <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">json</font></font></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-json"><span class="hljs-punctuation">{</span>
  <span class="hljs-attr">"name"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"diego"</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">"email"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"diego@mail.com"</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">"phone"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"11913455456"</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">"id"</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">"registerDate"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"2023-08-03T20:14:23.803Z"</span>
<span class="hljs-punctuation">}</span>
</code></div></div></pre>
  <h4>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit"
        >Listar Todos os Clientes</font
      ></font
    >
  </h4>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit"
        >Retornar uma lista de todos os clientes cadastrados no sistema.</font
      ></font
    >
  </p>
  <ul>
    <li>
      <strong
        ><font style="vertical-align: inherit"
          ><font style="vertical-align: inherit">Método</font></font
        ></strong
      ><font style="vertical-align: inherit"
        ><font style="vertical-align: inherit"> : GET</font></font
      >
    </li>
    <li>
      <strong
        ><font style="vertical-align: inherit"
          ><font style="vertical-align: inherit">Rota</font></font
        ></strong
      ><font style="vertical-align: inherit"
        ><font style="vertical-align: inherit"> : /clientes</font></font
      >
    </li>
  </ul>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit"
        >Exemplo de solicitação:</font
      ></font
    >
  </p>
  <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bash</font></font></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">GET /clients<font></font>
Host: http://localhost:3000<font></font>
Authorization: necessita <span class="hljs-keyword">do</span> token <span class="hljs-keyword">do</span> cliente para acesso<font></font>
Content-<span class="hljs-built_in">type</span>: application/json
</code></div></div></pre>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit"
        >Resposta da Requisição:</font
      ></font
    >
  </p>
  <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">json</font></font></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-json"><span class="hljs-punctuation">[</span>
  <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">"name"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"diego"</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">"email"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"diego@mail.com"</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">"phone"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"11913455456"</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">"id"</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">"registerDate"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"2023-08-03T20:14:23.803Z"</span>
  <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
  <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">"name"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"michele"</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">"email"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"michele@mail.com"</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">"phone"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"1188574531"</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">"id"</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">"registerDate"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"2023-08-03T20:14:25.803Z"</span>
  <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
  <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">"name"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"luiz"</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">"email"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"luiz@mail.com"</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">"phone"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"118836547825"</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">"id"</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">"registerDate"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"2023-08-03T20:14:28.803Z"</span>
  <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">]</span>
</code></div></div></pre>
  <h4>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit">Listar Cliente por ID</font></font
    >
  </h4>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit"
        >um cliente Retorna específico pelo seu ID.</font
      ></font
    >
  </p>
  <ul>
    <li>
      <strong
        ><font style="vertical-align: inherit"
          ><font style="vertical-align: inherit">Método</font></font
        ></strong
      ><font style="vertical-align: inherit"
        ><font style="vertical-align: inherit"> : GET</font></font
      >
    </li>
    <li>
      <strong
        ><font style="vertical-align: inherit"
          ><font style="vertical-align: inherit">Rota</font></font
        ></strong
      ><font style="vertical-align: inherit"
        ><font style="vertical-align: inherit"> : /clientes/:id</font></font
      >
    </li>
  </ul>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit"
        >Exemplo de solicitação:</font
      ></font
    >
  </p>
  <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bash</font></font></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">GET /clients/:<span class="hljs-built_in">id</span><font></font>
Host: http://localhost:3000<font></font>
Authorization: necessita <span class="hljs-keyword">do</span> token <span class="hljs-keyword">do</span> cliente para acesso<font></font>
Content-<span class="hljs-built_in">type</span>: application/json
</code></div></div></pre>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit"
        >Resposta da Requisição:</font
      ></font
    >
  </p>
  <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">json</font></font></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-json"><span class="hljs-punctuation">{</span>
  <span class="hljs-attr">"client"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">"name"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"diego"</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">"email"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"diego@mail.com"</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">"phone"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"11913455456"</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">"id"</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">"registerDate"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"2023-08-03T20:14:23.803Z"</span>
  <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">"contacts"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">"id"</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">"fullName"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"michele Oliveira"</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">"email"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"michele@mail.com"</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">"phone"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"1188574531"</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">"registerDate"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"2023-08-03T20:14:25.803Z"</span>
    <span class="hljs-punctuation">}</span>
  <span class="hljs-punctuation">]</span>
<span class="hljs-punctuation">}</span>
</code></div></div></pre>
  <h4>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit"
        >Atualizar Cliente por ID</font
      ></font
    >
  </h4>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit"
        >Atualiza os dados de um cliente específico pelo seu ID.</font
      ></font
    >
  </p>
  <ul>
    <li>
      <strong
        ><font style="vertical-align: inherit"
          ><font style="vertical-align: inherit">Método</font></font
        ></strong
      ><font style="vertical-align: inherit"
        ><font style="vertical-align: inherit"> : PATCH</font></font
      >
    </li>
    <li>
      <strong
        ><font style="vertical-align: inherit"
          ><font style="vertical-align: inherit">Rota</font></font
        ></strong
      ><font style="vertical-align: inherit"
        ><font style="vertical-align: inherit"> : /clientes/:id</font></font
      >
    </li>
  </ul>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit"
        >Exemplo de solicitação:</font
      ></font
    >
  </p>
  <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bash</font></font></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">PATCH /clients/:<span class="hljs-built_in">id</span><font></font>
Host: http://localhost:3000<font></font>
Authorization: necessita <span class="hljs-keyword">do</span> token <span class="hljs-keyword">do</span> cliente para acesso<font></font>
Content-<span class="hljs-built_in">type</span>: application/json
</code></div></div></pre>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit">Corpo da Requisição:</font></font
    >
  </p>
  <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">json</font></font></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-json"><span class="hljs-punctuation">{</span>
  <span class="hljs-attr">"name"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"diego Oliveira"</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">"email"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"diego123@mail.com"</span>
<span class="hljs-punctuation">}</span>
</code></div></div></pre>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit"
        >Resposta da Requisição:</font
      ></font
    >
  </p>
  <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">json</font></font></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-json"><span class="hljs-punctuation">{</span>
  <span class="hljs-attr">"name"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"diego Oliveira"</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">"email"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"diego123@mail.com"</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">"phone"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"11913455456"</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">"id"</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">"registerDate"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"2023-08-03T20:14:23.803Z"</span>
<span class="hljs-punctuation">}</span>
</code></div></div></pre>
  <h4>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit">Excluir cliente por ID</font></font
    >
  </h4>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit"
        >Deletar um cliente específico pelo seu ID.</font
      ></font
    >
  </p>
  <ul>
    <li>
      <strong
        ><font style="vertical-align: inherit"
          ><font style="vertical-align: inherit">Método</font></font
        ></strong
      ><font style="vertical-align: inherit"
        ><font style="vertical-align: inherit"> : DELETE</font></font
      >
    </li>
    <li>
      <strong
        ><font style="vertical-align: inherit"
          ><font style="vertical-align: inherit">Rota</font></font
        ></strong
      ><font style="vertical-align: inherit"
        ><font style="vertical-align: inherit"> : /clientes/:id</font></font
      >
    </li>
  </ul>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit"
        >Exemplo de solicitação:</font
      ></font
    >
  </p>
  <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bash</font></font></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">DELETE /clients/:<span class="hljs-built_in">id</span><font></font>
Host: http://localhost:3000<font></font>
Authorization: necessita <span class="hljs-keyword">do</span> token <span class="hljs-keyword">do</span> cliente para acesso<font></font>
Content-<span class="hljs-built_in">type</span>: application/json
</code></div></div></pre>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit"
        >Resposta da Requisição:</font
      ></font
    >
  </p>
  <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">scss</font></font></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-scss"><span class="hljs-number">204</span> No <span class="hljs-attribute">Content</span> (nenhum corpo retornado para resposta)
</code></div></div></pre>
  <h3>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit">Contatos</font></font
    >
  </h3>
  <h4>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit">Criação de Contato</font></font
    >
  </h4>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit"
        >Cria um novo contato associado a um cliente.</font
      ></font
    >
  </p>
  <ul>
    <li>
      <strong
        ><font style="vertical-align: inherit"
          ><font style="vertical-align: inherit">Método</font></font
        ></strong
      ><font style="vertical-align: inherit"
        ><font style="vertical-align: inherit"> : POST</font></font
      >
    </li>
    <li>
      <strong
        ><font style="vertical-align: inherit"
          ><font style="vertical-align: inherit">Rota</font></font
        ></strong
      ><font style="vertical-align: inherit"
        ><font style="vertical-align: inherit"> : /contatos</font></font
      >
    </li>
  </ul>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit"
        >Exemplo de solicitação:</font
      ></font
    >
  </p>
  <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bash</font></font></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">POST /contacts<font></font>
Host: http://localhost:3000<font></font>
Authorization: necessita <span class="hljs-keyword">do</span> token <span class="hljs-keyword">do</span> cliente para acesso<font></font>
Content-<span class="hljs-built_in">type</span>: application/json
</code></div></div></pre>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit">Corpo da Requisição:</font></font
    >
  </p>
  <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">json</font></font></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-json"><span class="hljs-punctuation">{</span>
  <span class="hljs-attr">"fullName"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"michele Oliveira"</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">"phone"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"95164220"</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">"email"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"michele@mail.com"</span>
<span class="hljs-punctuation">}</span>
</code></div></div></pre>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit"
        >Resposta da Requisição:</font
      ></font
    >
  </p>
  <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">json</font></font></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-json"><span class="hljs-punctuation">{</span>
  <span class="hljs-attr">"fullName"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"michele Oliveira"</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">"email"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"michele@mail.com"</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">"phone"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"95164220"</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">"id"</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">"registerDate"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"2023-08-03T20:25:56.111Z"</span>
<span class="hljs-punctuation">}</span>
</code></div></div></pre>
  <h4>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit"
        >Listar Todos os Contatos</font
      ></font
    >
  </h4>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit"
        >Retornar uma lista de todos os</font
      ></font
    >
  </p>
  <ul>
    <li>
      <strong
        ><font style="vertical-align: inherit"
          ><font style="vertical-align: inherit">Método</font></font
        ></strong
      ><font style="vertical-align: inherit"
        ><font style="vertical-align: inherit"> : GET</font></font
      >
    </li>
    <li>
      <strong
        ><font style="vertical-align: inherit"
          ><font style="vertical-align: inherit">Rota</font></font
        ></strong
      ><font style="vertical-align: inherit"
        ><font style="vertical-align: inherit"> : /contatos</font></font
      >
    </li>
  </ul>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit">Ex</font></font
    >
  </p>
  <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vbnet</font></font></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash"><font></font>
Host: http://localhost:3000<font></font>
<font></font>
Host<font></font>
<font></font>
Content<font></font>
GET /contacts<font></font>
Host: http://localhost:3000<font></font>
Authorization: necessita <span class="hljs-keyword">do</span> token <span class="hljs-keyword">do</span> cliente para acesso<font></font>
Content-<span class="hljs-built_in">type</span>: application/json
</code></div></div></pre>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit"
        >Resposta da Requisição:</font
      ></font
    >
  </p>
  <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">json</font></font></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-json"><span class="hljs-punctuation">[</span>
  <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">"fullName"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"michele Oliveira"</span><span class="hljs-punctuation">,</span>
    <font></font>
   <font></font>
<span class="hljs-attr">"email"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"michele@mail.com"</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">"phone"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"95164220"</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">"id"</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">"registerDate"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"2023-08-03T20:25:56.111Z"</span>
  <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
  <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">"fullName"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"luiz Oliveira"</span><span class="hljs-punctuation">,</span>
    <font></font>
   <font></font>
<span class="hljs-attr">"email"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"luiz@mail.com"</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">"phone"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"9516321320"</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">"id"</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">"registerDate"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"2023-08-03T20:43:57.233Z"</span>
  <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">]</span>
</code></div></div></pre>
  <h4>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit">Listar Contato por ID</font></font
    >
  </h4>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit"
        >um retorna contato espec</font
      ></font
    >
  </p>
  <ul>
    <li>
      <strong
        ><font style="vertical-align: inherit"
          ><font style="vertical-align: inherit">Método</font></font
        ></strong
      ><font style="vertical-align: inherit"
        ><font style="vertical-align: inherit"> : GET</font></font
      >
    </li>
    <li>
      <strong
        ><font style="vertical-align: inherit"
          ><font style="vertical-align: inherit">Rota</font></font
        ></strong
      ><font style="vertical-align: inherit"
        ><font style="vertical-align: inherit"> : /contatos/:id</font></font
      >
    </li>
  </ul>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit"
        >Exemplo de solicitação:</font
      ></font
    >
  </p>
  <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sql</font></font></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">GET /contacts/:<span class="hljs-built_in">id</span><font></font>
Host: http://localhost:3000<font></font>
Authorization: necessita <font></font>
Host: http://localhost:3000<font></font>
Authorization:<font></font>
<font></font>
Host: http://localhost:3000<font></font>
Authorization<font></font>
<font></font>
Host: http://localhost:3000<font></font>
<span class="hljs-keyword">do</span> token <span class="hljs-keyword">do</span> cliente para acesso<font></font>
Content-<span class="hljs-built_in">type</span>: application/json
<font></font>
``<font></font>
</code></div></div></pre>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit">res</font></font
    >
  </p>
  <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">json</font></font></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-json"><span class="hljs-punctuation">{</span>
  <span class="hljs-attr">"fullName"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"luiz Oliveira"</span><span class="hljs-punctuation">,</span>
  <font></font>
 <font></font>
<span class="hljs-attr">"email"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"luiz@mail.com"</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">"phone"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"9516321320"</span><span class="hljs-punctuation">,</span>
  <font></font>
 <font></font>
<span class="hljs-attr">"id"</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3</span><span class="hljs-punctuation">,</span>
  <font></font>
 <font></font>
<span class="hljs-attr">"registerDate"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"2023-08-03T20:43:57.233Z"</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">"client"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">"name"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"diego"</span><span class="hljs-punctuation">,</span>
    <font></font>
   <font></font>
<span class="hljs-attr">"email"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"diego@mail.com"</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">"phone"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"219821626"</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">"id"</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">"registerDate"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"2023-08-03T20:35:49.907Z"</span>
  <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>
</code></div></div></pre>
  <h4>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit">Atualizar Contato</font></font
    >
  </h4>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit"
        >Atualiza os dados de um contato específico</font
      ></font
    >
  </p>
  <ul>
    <li>
      <strong
        ><font style="vertical-align: inherit"
          ><font style="vertical-align: inherit">Método</font></font
        ></strong
      ><font style="vertical-align: inherit"
        ><font style="vertical-align: inherit"> : PATCH</font></font
      >
    </li>
    <li>
      <strong
        ><font style="vertical-align: inherit"
          ><font style="vertical-align: inherit">Rota</font></font
        ></strong
      ><font style="vertical-align: inherit"
        ><font style="vertical-align: inherit"> : /contatos/:id</font></font
      >
    </li>
  </ul>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit">Ex</font></font
    >
  </p>
  <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bash</font></font></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">PATCH /contacts/:<span class="hljs-built_in">id</span><font></font>
Host: http://localhost:3000<font></font>
Authorization: necessita <font></font>
Host<font></font>
<span class="hljs-keyword">do</span> token <span class="hljs-keyword">do</span> cliente para acesso<font></font>
Content-<font></font>
Content<font></font>
<span class="hljs-built_in">type</span>: application/json
</code></div></div></pre>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit">cor</font></font
    >
  </p>
  <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">json</font></font></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-json"><span class="hljs-punctuation">{</span>
  <span class="hljs-attr">"fullName"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"luiz sousa"</span><span class="hljs-punctuation">,</span>
  <font></font>
 <font></font>
<span class="hljs-attr">"email"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"luiz123@mail.com"</span>
<span class="hljs-punctuation">}</span>
</code></div></div></pre>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit"
        >Resposta da Requisição:</font
      ></font
    >
  </p>
  <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">json</font></font></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-json"><span class="hljs-punctuation">{</span>
  <font></font>
 <font></font>
<span class="hljs-attr">"fullName"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"luiz sousa"</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">"email"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"luiz123@mail.com"</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">"phone"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"9516321320"</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">"id"</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">"registerDate"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"2023-08-03T20:43:57.233Z"</span>
<span class="hljs-punctuation">}</span>
</code></div></div></pre>
  <h4>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit">Excluir contato por ID</font></font
    >
  </h4>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit">De</font></font
    >
  </p>
  <ul>
    <li>
      <strong
        ><font style="vertical-align: inherit"
          ><font style="vertical-align: inherit">Método</font></font
        ></strong
      ><font style="vertical-align: inherit"
        ><font style="vertical-align: inherit"> : DELETE</font></font
      >
    </li>
    <li>
      <strong
        ><font style="vertical-align: inherit"
          ><font style="vertical-align: inherit">Rota</font></font
        ></strong
      ><font style="vertical-align: inherit"
        ><font style="vertical-align: inherit"> : /contatos/:id</font></font
      >
    </li>
  </ul>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit"
        >Exemplo de solicitação:</font
      ></font
    >
  </p>
  <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bash</font></font></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">DELETE /contacts/:<span class="hljs-built_in">id</span><font></font>
Host: http://localhost:3000<font></font>
Authorization: necessita <font></font>
Host: http://localhost:3000<font></font>
Authorization:<font></font>
<font></font>
Host: http://localhost:3000<font></font>
<font></font>
Host<font></font>
<span class="hljs-keyword">do</span> token <span class="hljs-keyword">do</span> cliente para acesso<font></font>
Content-<span class="hljs-built_in">type</span>: application/json
</code></div></div></pre>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit">Resposta da Requisição</font></font
    >
  </p>
  <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">scss</font></font></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-scss"><span class="hljs-number">204</span> No <span class="hljs-attribute">Content</span> (nenhum corpo retornado para resposta)
</code></div></div></pre>
  <h2>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit">Testes (opcional)</font></font
    >
  </h2>
  <p>
    <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit">Para executar os testes</font></font
    >
  </p>
  <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"></font></font></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-arduino">npm run test
</code></div></div></pre>
  