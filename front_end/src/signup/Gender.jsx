function Gender() {
  return (
    <>
      <div className="flex ">
        <div className="form-control ml-6 pl-6">
          <label className="cursor-pointer label">
            <span className="label-text">Male</span>
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-secondary"
            />
          </label>
        </div>

        <div className="form-control ml-6 pl-6">
          <label className="cursor-pointer label">
            <span className="label-text">Female</span>
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-secondary"
            />
          </label>
        </div>
      </div>
    </>
  );
}

export default Gender;
