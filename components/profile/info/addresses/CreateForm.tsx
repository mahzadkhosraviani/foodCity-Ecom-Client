export default function CreateForm() {
  return (
    <>
      {" "}
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
      >
        ایجاد آدرس جدید
      </button>
      <div className="collapse mt-3" id="collapseExample">
        <div className="card card-body">
          <div className="row g-4">
            <div className="col col-md-6">
              <label className="form-label">عنوان</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col col-md-6">
              <label className="form-label">شماره تماس</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col col-md-6">
              <label className="form-label">کد پستی</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col col-md-6">
              <label className="form-label">استان</label>
              <select className="form-select">
                <option selected>تهران</option>
                <option value="1">اصفهان</option>
                <option value="2">فارس</option>
                <option value="3">یزد</option>
              </select>
            </div>
            <div className="col col-md-6">
              <label className="form-label">شهر</label>
              <select className="form-select">
                <option selected>تهران</option>
                <option value="1">اصفهان</option>
                <option value="2">شیراز</option>
                <option value="3">یزد</option>
              </select>
            </div>
            <div className="col col-md-12">
              <label className="form-label">آدرس</label>
              <textarea
                type="text"
                rows="5"
                className="form-control"
              ></textarea>
            </div>
          </div>
          <div>
            <button className="btn btn-primary mt-4">ایجاد</button>
          </div>
        </div>
      </div>
    </>
  );
}
