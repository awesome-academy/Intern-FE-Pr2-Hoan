import React from "react";
import "./ModalSearch.scss";
import { Modal, SearchBox } from "../../";

interface ModalSearchProps {
  onCloseModalSearch: Function;
  isShowModalSearch: Boolean;
}

const ModalSearch: React.FC<ModalSearchProps> = (props) => {
  const onCloseModalSearch = () => {
    props.isShowModalSearch && props.onCloseModalSearch()
  }
  return (
    <Modal onClose={props.onCloseModalSearch} isShow={props.isShowModalSearch}>
      <div className={`modal-search ${props.isShowModalSearch ? "active" : ""}`}>
        <header>
          <div className="container">
            <div className="modal-search-close">
              <div onClick={onCloseModalSearch} className="btn-close"></div>
            </div>
          </div>
        </header>
        <div className="modal-content">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-10">
                <SearchBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default ModalSearch