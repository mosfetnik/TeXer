const Gender = ({ onCheckboxChange, selectedGender }) => {
  return (
    <>
      <div className="flex ">
        <div className="form-control ml-6 pl-6">
          <label
            className={`cursor-pointer label ${
              selectedGender === "male" ? "selected" : ""
            }`}
          >
            <span className="label-text">Male</span>
            <input
              type="checkbox"
              className="checkbox checkbox-secondar"
              checked={selectedGender === "male"}
              onChange={() => onCheckboxChange("male")}
            />
          </label>
        </div>

        <div className="form-control ml-6 pl-6">
          <label
            className={`cursor-pointer label ${
              selectedGender === "female" ? "selected" : ""
            }`}
          >
            <span className="label-text">Female</span>
            <input
              type="checkbox"
              className="checkbox checkbox-secondary"
              checked={selectedGender === "female"}
              onChange={() => onCheckboxChange("female")}
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default Gender;
