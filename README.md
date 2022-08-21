# Boas vindas ao repositório Olimpiadas Fit!

Com a chegada das olimpíadas fit, fomos designados para construir uma API REST em NodeJS para o COF (Comitê Olimpíco Fit), que será responsável por marcar e dizer os vencedores das seguintes modalidades:

Competição de hidratação: maior quantidade em L de água, vence

Competição de yoga: maior tempo fazendo yoga vence

Competição de perda de peso: maior quantidade de calorias perdidas vence

Competição de dardos: maior distância entre os lançamentos vence


---
# Orientações

<details>
  <summary>
    <strong>⌨️ Tecnologias</strong>
  </summary>
  
  - **Typescript**
  
  - **Node**
  
  - **Express**
  
  - **MySql**
  
  - **Sequelize**
  
  - **Chai**
  
  - **Mocha**
  
  - **Sinon**
  
  - **Dotenv**

</details>

<details>
  <summary>
    <strong>🪛 Scripts relevantes do <code>package.json</code></strong>
  </summary><br>

  - `dev`: Roda a aplicação na porta `3001`;
    - *uso (na raiz do projeto): `npm run dev`*

  - `db:reset`: Roda os scripts do `Sequelize` restaurando o **banco de dados**. Utilize esse script caso ocorra algum problema no seu banco local;
    - *uso (na raiz do projeto): `npm run db:reset`*

  - `test`: Roda todos os testes;
    - *uso (na raiz do projeto): `npm test`*

</details>

 <details>
  <summary>
    <strong>‼️ Antes de começar a utilizar</strong>
  </summary><br>

  1. Certifique-se que posssui o bando de dados MYSQL em sua maquina

  2. Configuração das variaveis de ambiente

    - Caso não queira utilizar variavel de ambiente: Vá no arquivo src/database/config/database.ts e modifique manualmente.
  
 </details>

<details>
  <summary>
    <strong>🤝 Passo a Passo</strong>
  </summary><br>

  1. Clone o repositório

  - Use o comando: `git clone git@github.com:msennaa/ttbackend.git`
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd ttbackend`

  2. Instale as dependências

  - Para isso, use o seguinte comando: `npm install`
  
  3. Restaure o banco de dados

  - Para isso, use o seguinte comando na raiz do projeto: `npm run db:reset`
  
  4. Subindo a aplicação na porta 3001

  - Para isso, use o seguinte comando na raiz do projeto: `npm run dev`
  
  </details>
  
<details>
  <summary>
    <strong>🗣 Me dê feedbacks sobre o projeto!</strong>
  </summary><br>

  Qualquer tipo de feedback é bem vindo para que eu possa continuar melhorando. 
   - **senamatheusjob@gmail.com**

</details>


---

  
# Explicação do projeto

---

####  1 - Rotas de cadastro de atletas (POST)

- Competição de yoga: `http://localhost:3001/yoga`

- Competição de hidratação: `http://localhost:3001/hidratation`

- Competição de perda de peso: `http://localhost:3001/weight`

- Competição de dardos: `http://localhost:3001/dart`
<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

  - Se todos os campos estão preenchidos.
    - Segue abaixo os retornos caso o preenchimento não seja o esperado ou o cadastro do atleta seja feito em uma competição que já foi finalizada
    
    ```json
    { "message": "Athlete is required" }
    ```
    
    ```json
    { "message": "Value is required" }
    ```
    
    ```json
    { "message": "Unity is required" }
    ```
    
    ```json
    { "message": "Athlete must be at least 3 characters"}
    ```
    
    ```json
    { "message": "Athlete must be a string"}
    ```
    
    ```json
    { "message": "Value must be a string" }
    ```
    
    ```json
    { "message": "Invalid value" }
    ```
    
    ```json
    { "message": "Unity must be a string" }
    ```
    
    ```json
    { "message": "Invalid Unity" }
    ```
  
    ```json
    { "message": "This competition is over" }
    ```

</details>

####  2 - Rotas que retornam a tabela do campeonato (GET)

- Competição de yoga: `http://localhost:3001/yoga`

- Competição de hidratação: `http://localhost:3001/hidratation`

- Competição de perda de peso: `http://localhost:3001/weight`

- Competição de dardos: `http://localhost:3001/dart`
<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

  - Se está ordenado corretamente.
    - Segue abaixo o retorno dos campeonatos
    
```json
[
    {
        "competicao": "campeonato de yoga",
        "athlete": "Yuri",
        "value": "10",
        "unity": "m"
    },
    {
        "competicao": "campeonato de yoga",
        "athlete": "Renata",
        "value": "2",
        "unity": "m"
    },
    {
        "competicao": "campeonato de yoga",
        "athlete": "Joao das Neves",
        "value": "10",
        "unity": "s"
    },
    {
        "competicao": "campeonato de yoga",
        "athlete": "Rui",
        "value": "2",
        "unity": "s"
    }
]
```

---
    
```json
[
    {
        "competicao": "campeonato de hidratação",
        "athlete": "Rubens",
        "value": "8",
        "unity": "l"
    },
    {
        "competicao": "campeonato de hidratação",
        "athlete": "Marcio",
        "value": "2",
        "unity": "l"
    },
    {
        "competicao": "campeonato de hidratação",
        "athlete": "Joao",
        "value": "500",
        "unity": "ml"
    },
    {
        "competicao": "campeonato de hidratação",
        "athlete": "Oseias",
        "value": "150",
        "unity": "ml"
    }
]
```

---
    
```json
[
    {
        "competicao": "campeonato de perda de peso",
        "athlete": "Brenda",
        "value": "30",
        "unity": "kg"
    },
    {
        "competicao": "campeonato de perda de peso",
        "athlete": "Ricardo",
        "value": "2",
        "unity": "kg"
    },
    {
        "competicao": "campeonato de perda de peso",
        "athlete": "Paula",
        "value": "500",
        "unity": "g"
    },
    {
        "competicao": "campeonato de perda de peso",
        "athlete": "Andre",
        "value": "100",
        "unity": "g"
    }
]
```
---
    
```json
[
    {
        "competicao": "campeonato de dardos",
        "athlete": "Marco",
        "value": "30",
        "unity": "m"
    },
    {
        "competicao": "campeonato de dardos",
        "athlete": "Ursula",
        "value": "15",
        "unity": "m"
    },
    {
        "competicao": "campeonato de dardos",
        "athlete": "Roberto",
        "value": "50",
        "unity": "cm"
    },
    {
        "competicao": "campeonato de dardos",
        "athlete": "Irineu",
        "value": "10",
        "unity": "cm"
    }
]
```

</details>

####  3 - Rotas que finaliza e reinicia a competição (PUT)

- Competição de yoga: `http://localhost:3001/yoga`

- Competição de hidratação: `http://localhost:3001/hidratation`

- Competição de perda de peso: `http://localhost:3001/weight`

- Competição de dardos: `http://localhost:3001/dart`
<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

  - Se é possível finalizar e reiniciar a competição.
    - Segue abaixo o retorno das atualizações.
    
    ```json
    { "message": "Finishing competition" }
    ```
    
    ```json
    { "message": "Restarting competition" }
    ```

</details>

####  4 - Rotas de cadastro de competição (POST)

- Competição de yoga: `http://localhost:3001/register`

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

  - Se todos os campos estão preenchidos.
    - Segue abaixo os retornos caso o preenchimento não seja o esperado
    
    ```json
    { "message": "competitionName is required" }
    ```
    
    ```json
    { "message": "competitionName must be a string" }
    ```
    
    ```json
    { "message": "competitionName must be at least 3 characters" }
    ```

</details>
