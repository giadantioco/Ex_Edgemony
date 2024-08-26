// Quali sono le principali componenti del mini-compilatore che riesci a individuare nel codice? Elencale brevemente.

// un mini compilatore è composto da tre principali parti:
// - Parsing: prende il codice originale e lo trasforma in una rappresentazione più astratta
// - Transformation: prende l'astratta rappresentazione creata dal parsing e la manipola per trasformarla in quello che il compilatore richiede
// - Code generation: prende la trasformazione del codice e la 'traduce' nel nuovo codice richiesto

// Cos'è e cosa fa la funzione tokenizer? Spiegalo con parole tue.

// Nella prima fase (parsing) ci sono due ulteriori fasi: l'analisi lessicale e quella sintattica;

// ANALISI LESSICALE
// - Nella prima fase la funzione tokenizer prende il codice originale e lo spezza in questi nuovi elementi, chiamati tokens. Questi tokens sono array che contengono pezzi isolati della sintassi inserita, e posso essere numeri, punteggiatura, spazi vuoti, parole o singole lettere. Trasformano quello che per noi è l'input inserito in un'array composto a tipo e valore.

function tokenizer(input) {
  let current = 0;
  let tokens = [];

  while (current < input.length) {
    let char = input[current];
    if (char === "(") {
      tokens.push({
        type: "paren",
        value: "(",
      });
      current++;
      continue;
    }
    if (char === ")") {
      tokens.push({
        type: "paren",
        value: ")",
      });
      current++;
      continue;
    }
    // we don't save whute spaces into tokens, we don't need to; we just check if they exist
    let WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      current++;
      continue;
    }

    let NUMBERS = /[0-9]/;
    if (NUMBERS.test(char)) {
      let value = "";
      while (NUMBERS.test(char)) {
        value += char;
        char = input[++current];
      }
      tokens.push({ type: "number", value });
      continue;
    }

    if (char === '"') {
      let value = "";
      char = input[++current];
      while (char !== '"') {
        value += char;
        char = input[++current];
      }
      char = input[++current];
      tokens.push({ type: "string", value });
      continue;
    }

    let LETTERS = /[a-z]/i;
    if (LETTERS.test(char)) {
      let value = "";
      while (LETTERS.test(char)) {
        value += char;
        char = input[++current];
      }
      tokens.push({ type: "name", value });
      continue;
    }
    throw new TypeError("I dont know what this character is: " + char);
  }
  return tokens;
}

// ANALISI SINTASSI
// - La seconda fase prende i tokens e li formatta in una rappresentazione che descrive ogni parte della sintassi e la relazione tra loro. Questa fase è conosciuta anche come un'intermedia rappresentazione di un'Abstrac Syntax Tree; Un AST è un oggetto profondamente nestato che rappresenta il codice in un modo che è sia facile da lavorarci assieme, e che ci restituisce informazioni.

// [{ type: 'paren', value: '(' }, ...]   =>   { type: 'Program', body: [...] }

// Perché è fondamentale avere un parser in un compilatore? Quale ruolo svolge?

// Un parser in un compilatore svolge il ruolo di analizzare un costrutto che si verifica nel testo, e questo lo fa trasformando prima in tokens il nostro testo, e poi analizzando questi tokens ed assegnandogli egli oggetti alla quale verrà passato un tipo ed un valore

function parserer(tokens) {
  let current = 0;
  function walk() {
    let token = tokens[current];
    if (token.type === "number") {
      current++;
      return {
        type: "NumberLiteral",
        value: token.value,
      };
    }
    if (token.type === "string") {
      current++;
      return {
        type: "StringLiteral",
        value: token.value,
      };
    }
    if (token.type === "paren" && token.value === "(") {
      token = tokens[++current];
      let node = {
        type: "CallExpression",
        name: token.value,
        params: [],
      };
      token = tokens[++current];

      while (
        token.type !== "paren" ||
        (token.type === "paren" && token.value !== ")")
      ) {
        node.params.push(walk());
        token = tokens[current];
      }
      current++;
      return node;
    }
    throw new TypeError(token.type);
  }
  let ast = {
    type: "Program",
    body: [],
  };
  while (current < tokens.length) {
    ast.body.push(walk());
  }
  return ast;
}

// Se dovessi creare un conta caratteri in JavaScript, quali parti di questo compilatore ti sarebbero utili?
