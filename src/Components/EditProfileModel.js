import { useState } from "react";
import InputBox from "./InputBox";

export default function EditProfileModel({
  personData,
  onClose,
  handleOnSave
}) {
  const [person, setPerson] = useState(personData);

  const handleInputChange = (field, value) => {
    setPerson({
      ...person,
      [field]: value
    });
  };

  const handleSaveClick = () => {
    if (person.fullname && person.mail && person.contact && person.website)
      handleOnSave(person);
  };

  return (
    <div className="popup">
      <div className="popup-container">
        <div className="popup-header">
          <div>Basic Model</div>
          <div style={{ cursor: "pointer" }} onClick={onClose}>
            X
          </div>
        </div>
        <div className="popup-body">
          <InputBox
            isRequired
            labelText="Name"
            inputValue={person.fullname}
            onChangeText={(value) => {
              handleInputChange("fullname", value);
            }}
          />
          <InputBox
            isRequired
            labelText="Email"
            inputValue={person.mail}
            onChangeText={(value) => {
              handleInputChange("mail", value);
            }}
          />
          <InputBox
            isRequired
            labelText="Phone"
            inputValue={person.contact}
            onChangeText={(value) => {
              handleInputChange("contact", value);
            }}
          />
          <InputBox
            isRequired
            labelText="Website"
            inputValue={person.website}
            onChangeText={(value) => {
              handleInputChange("website", value);
            }}
          />
        </div>
        <div className="popup-bottom">
          <button onClick={onClose} className="btn">
            Cancel
          </button>
          <button onClick={handleSaveClick} className="btn btn-main">
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
