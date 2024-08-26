// Quali sono le principali componenti del mini-compilatore che riesci a individuare nel codice? Elencale brevemente.

// un mini compilatore è composto da tre principali parti:
// - Parsing: prende il codice originale e lo trasforma in una rappresentazione più astratta
// - Transformation: prende l'astratta rappresentazione creata dal parsing e la manipola per trasformarla in quello che il compilatore richiede
// - Code generation: prende la trasformazione del codice e la 'traduce' nel nuovo codice richiesto

// Cos'è e cosa fa la funzione tokenizer? Spiegalo con parole tue.

// Nella prima fase (parsing) ci sono due ulteriori fasi: l'analisi lessicale e quella sintattica;
// - Nella prima fase la funzione tokenizer prende il codice originale e lo spezza in questi nuovi elementi, chiamati tokens. Questi tokens sono array che contengono pezzi isolati della sintassi inserita, e posso essere numeri, punteggiatura, operatori o quant'altro.
// - La seconda fase prende questitokens e li formatta in una rappresentazione che descrive ogni parte della sintassi e la relazione tra loro. Questa fase è conosciuta anche come un'intermedia rappresentazione di un'Abstrac Syntax Tree; Un AST è un oggetto profondamente nestato che rappresenta il codice in un modo che è sia facile da lavorarci assieme, e che ci restituisce informazioni.

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
    let WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      current++;
      continue;
    }
  }
}

// Perché è fondamentale avere un parser in un compilatore? Quale ruolo svolge?

// Perchè trasforma i nostri tokens (contenuti in arrays) in una rappresentazione che descrive le parti della sintassi e la rappresentazione tra loro
