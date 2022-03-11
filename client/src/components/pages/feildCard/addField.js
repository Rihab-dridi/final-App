import React, { useState } from "react";
import { Button, InputGroup } from "reactstrap";
import { addField } from "../../../Redux/Actions/feildsAction/actions";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import "./adminSide.css";

function AddField() {
  const dispatch = useDispatch();
  //modal close/open
  const [isOpen, setIsOpen] = useState(false);

  //the addform local states
  const [name, setName] = useState();
  const [id, setId] = useState();
  const [image, setImage] = useState();

  // the form inputs
  const addNameHandeler = (e) => {
    setName(e.target.value);
  };
  const addIdHandeler = (e) => {
    setId(e.target.value);
  };
  const addImageHandeler = (e) => {
    setImage(e.target.value);
    console.log(e.target.value.split("\\").pop());
  };

  //the save in the dataBase
  const addHandler = () => {
    dispatch(addField({ name, id, image }));
    setIsOpen(false);
    setName("");
    setId("");
    setImage("");
  };
  return (
    <div>
      <Button className="adminAddField" onClick={() => setIsOpen(!isOpen)}>
        <i class="fas fa-plus"></i> Add new Field
      </Button>
      <Modal isOpen={isOpen} className="addModal">
        <div className="modalLeft">
        <h2>Add a new Field</h2>
          <form>
           

            <div className="feildNameContainer">
              {/* <label for="name"> choose the feild's name </label> */}
              <input
                id="name"
                type="text"
                placeholder="choose the feild's name"
                value={name}
                onChange={addNameHandeler}
              ></input>
            </div>

            <div className="feildFileContainer">
              <input
                id="inputFile"
                type="file"
                name="file"
                placeholder=""
                value={image}
                onChange={addImageHandeler}
              ></input>
              <label for="inputFile">
                choose photo <span>{image?.split("\\").pop()} </span>
              </label>
            </div>
          </form>
          <div className="addBtns">
            <Button id="btn1" className="submitAdd" onClick={addHandler}>
              save
            </Button>
            <Button
              id="btn2"
              className="submitAdd"
              onClick={() => setIsOpen(false)}
            >
              cancel
            </Button>
          </div>
        </div>
        <div className="modalRigth">
          <img src="/images/add.png" alt="add illustration" />
        </div>
      </Modal>
    </div>
  );
}

export default AddField;
