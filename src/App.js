import { useState } from "react";
import EditProfileModel from "./Components/EditProfileModel";
import ProfileCard from "./Components/ProfileCard";
import "./styles.css";
const personListJSON = [
  {
    avtaar:
      "https://avatars.dicebear.com/v2/avataaars/male/ram.svg?mood[]=happy",
    fullname: "Ram",
    mail: "ram@asd.com",
    contact: 1234567,
    website: "ram.com"
  },
  {
    avtaar:
      "https://avatars.dicebear.com/v2/avataaars/male/sham.svg?mood[]=happy",
    fullname: "sham",
    mail: "ram@asd.com",
    contact: 1234567,
    website: "ram.com"
  },
  {
    avtaar:
      "https://avatars.dicebear.com/v2/avataaars/female/sita.svg?mood[]=happy",
    fullname: "sita",
    mail: "ram@asd.com",
    contact: 1234567,
    website: "ram.com"
  },
  {
    avtaar:
      "https://avatars.dicebear.com/v2/avataaars/female/geeta.svg?mood[]=happy",
    fullname: "geeta",
    mail: "ram@asd.com",
    contact: 1234567,
    website: "ram.com"
  },
  {
    avtaar:
      "https://avatars.dicebear.com/v2/avataaars/female/geaseta.svg?mood[]=happy",
    fullname: "geeta",
    mail: "ram@asd.com",
    contact: 1234567,
    website: "ram.com"
  },
  {
    avtaar:
      "https://avatars.dicebear.com/v2/avataaars/female/geesta.svg?mood[]=happy",
    fullname: "geeta",
    mail: "ram@asd.com",
    contact: 1234567,
    website: "ram.com"
  },
  {
    avtaar:
      "https://avatars.dicebear.com/v2/avataaars/female/gedeta.svg?mood[]=happy",
    fullname: "geeta",
    mail: "ram@asd.com",
    contact: 1234567,
    website: "ram.com"
  },
  {
    avtaar:
      "https://avatars.dicebear.com/v2/avataaars/female/gaeeta.svg?mood[]=happy",
    fullname: "geeta",
    mail: "ram@asd.com",
    contact: 1234567,
    website: "ram.com"
  }
];

export default function App() {
  const [personList, setPersonList] = useState(personListJSON);
  const [ShowEditModal, setShowEditModel] = useState(null);
  const handleLike = (index) => {
    personList[index] = {
      ...personList[index],
      like: personList[index].like ? false : true
    };
    setPersonList([...personList]);
  };

  const removePerson = (index) => {
    setPersonList(personList.filter((item, id) => id !== index));
  };

  const handleOnSave = (person) => {
    personList[ShowEditModal] = person;
    setPersonList([...personList]);
    setShowEditModel(null);
  };

  return (
    <div className={ShowEditModal !== null ? "App showModel" : "App"}>
      {ShowEditModal !== null ? (
        <EditProfileModel
          personData={personList[ShowEditModal]}
          onClose={() => setShowEditModel(null)}
          handleOnSave={handleOnSave}
        />
      ) : null}
      {personList.map((item, index) => (
        <ProfileCard
          person={item}
          index={index}
          handleLike={handleLike}
          removePerson={removePerson}
          handleEdit={(index) => setShowEditModel(index)}
        />
      ))}
    </div>
  );
}
