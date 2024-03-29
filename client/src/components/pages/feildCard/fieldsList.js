import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getFields } from "../../../Redux/Actions/feildsAction/actions";
import Add from "./addField";
import Card from "./feildCard";
import "./styles.css";
import "./adminSide.css";

const Display = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const fieldsList = useSelector((state) => state.fieldsReducers.fields);
  const user = useSelector((state) => state.authReducer.user);

  useEffect(() => {
    dispatch(getFields());
  }, []);

  return (
    <div className="fieldsContainer">
      <h1>fields covered</h1>
      {user && user.role == "coordinator" ? (
        <div className="feildsAddButton">
          <Add />
        </div>
      ) : null}
      <div className="feildCard">
        {fieldsList &&
          fieldsList.map((feild, i) => <Card key={feild._id} feild={feild} />)}
      </div>
    </div>
  );
};
export default Display;
