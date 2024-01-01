import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
function SeacrhModal() {
  return (
    <div>
      {/* <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Launch static backdrop modal
      </button> */}

      <div
        className="modal fade p-3"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content ">
              <div className="d-flex m-2 justify-content-end">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              </div>
                <form action="" className='container'>
                    <input type="text" className="form-control mb-4" placeholder='search for something ..'/>
                </form>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeacrhModal;
