import "./index.css";

const Form = ({ state, onChange, children }) => {
  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <div className="task-input">
      <h2>Aggiungi attività</h2>
      <div className="time-section">
        <label>Giorno</label>
        <input type="date" name="day"  onChange={handleChange} />
        <br />
        <label>Ora</label>
        <input type="time" name="hour" onChange={handleChange} />
        <br />
      </div>{" "}
      <label>Cose da fare</label>
      <input type="text" name="todo" onChange={handleChange} />
      <br />
      <label>Descrizione</label>
      <input
        className="descrizione"
        type="text"
        name="descrizione"
        onChange={handleChange}
      />
      {state.isError ? (
        <p className="message message--error">
          <strong>ERRORE</strong> : Non hai riempito alcuni campi!
        </p>
      ) : null}
      <br />
      {children}
    </div>
  );
};

export default Form;
