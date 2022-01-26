export default function ProfileCard({
  person,
  index,
  removePerson,
  handleLike,
  handleEdit
}) {
  return (
    <div className="container">
      <div className="image">
        <img alt="profile" height="200" src={person.avtaar} />
      </div>
      <div className="bio">
        <div className="row bold">{person.fullname}</div>
        <div className="row">
          <img
            alt="mail"
            src="https://img.icons8.com/material-outlined/24/000000/mail.png"
          />
          <span className="pl12">{person.mail}</span>
        </div>
        <div className="row">
          <img
            alt="phone"
            src="https://img.icons8.com/ios/24/000000/phone.png"
          />
          <span className="pl12"> {person.contact}</span>{" "}
        </div>
        <div className="row">
          <img
            alt="website"
            src="https://img.icons8.com/ios/24/000000/domain.png"
          />
          <span className="pl12"> {person.website}</span>{" "}
        </div>
      </div>
      <div className="action">
        {person.like ? (
          <svg
            onClick={() => handleLike(index)}
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 172 172"
            style={{ fill: "#000000" }}
          >
            <g
              fill="none"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style={{
                mixBlendMode: "normal"
              }}
            >
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g fill="#e74c3c">
                <path d="M86,162.71469l-2.20375,-1.8275c-4.17906,-3.49375 -9.83625,-7.28312 -16.39375,-11.66375c-25.54469,-17.10594 -60.5225,-40.51406 -60.5225,-80.42344c0,-24.65781 20.06219,-44.72 44.72,-44.72c13.39719,0 25.94781,5.96625 34.4,16.16531c8.45219,-10.19906 21.00281,-16.16531 34.4,-16.16531c24.65781,0 44.72,20.06219 44.72,44.72c0,39.90938 -34.97781,63.3175 -60.5225,80.42344c-6.5575,4.38063 -12.21469,8.17 -16.39375,11.66375z"></path>
              </g>
            </g>
          </svg>
        ) : (
          <img
            onClick={() => handleLike(index)}
            alt="like"
            src="https://img.icons8.com/ios/24/000000/like--v1.png"
          />
        )}
        <img
          onClick={() => handleEdit(index)}
          alt="edit"
          src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/24/000000/external-edit-interface-kiranshastry-solid-kiranshastry-2.png"
        />
        <img
          onClick={() => removePerson(index)}
          alt="delete"
          src="https://img.icons8.com/material-sharp/24/000000/filled-trash.png"
        />
      </div>
    </div>
  );
}
