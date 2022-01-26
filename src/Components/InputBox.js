export default function InputBox({
  isRequired,
  labelText,
  inputValue,
  onChangeText
}) {
  return (
    <div className="inputBoxContainer">
      <label className="inputBoxLeft">
        {isRequired ? <span className="warningText">*</span> : null}
        {labelText}
        {" : "}
      </label>
      <div className="inputBoxRight">
        <input
          type="text"
          className={inputValue === "" ? "inputBox warning" : "inputBox"}
          value={inputValue}
          placeholder="name"
          onChange={(e) => onChangeText(e.target.value)}
        />
        <div className="warningText">
          {inputValue === "" ? "This field is required" : null}
        </div>
      </div>
    </div>
  );
}
