import styles from "./Form.module.css";

function Form({ input, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>Categoria</label>
      <select id="category" value={input.category} onChange={handleChange}>
        <option value="">Seleziona una categoria</option>
        <option value="abbigliamento">Abbigliamento per la Maternità</option>
        <option value="cura-personale">Cura Personale e Benessere</option>
        <option value="accessori-neonato">Accessori per il Neonato</option>
        <option value="allattamento">Allattamento e Alimentazione</option>
        <option value="attrezzature">Attrezzature per il Neonato</option>
        <option value="igiene">Igiene e Cura del Neonato</option>
        <option value="giocattoli">Giocattoli e Intrattenimento</option>
      </select>

      <label>Nome del Prodotto</label>
      <input
        id="productName"
        placeholder="Inserire nome del prodotto"
        value={input.productName}
        onChange={handleChange}
      />

      <label>Descrizione</label>
      <textarea
        id="description"
        placeholder="Inserire descrizione"
        value={input.description}
        onChange={handleChange}
      />

      <label>Prezzo</label>
      <input
        id="price"
        placeholder="Inserire prezzo"
        value={input.price}
        onChange={handleChange}
      />

      <label>Marca</label>
      <input
        id="brand"
        placeholder="Inserire marca"
        value={input.brand}
        onChange={handleChange}
      />

      <label>Disponibilità</label>
      <select
        id="availability"
        value={input.availability}
        onChange={handleChange}
      >
        <option value="">Seleziona disponibilità</option>
        <option value="disponibile">Disponibile</option>
        <option value="non-disponibile">Non disponibile</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
