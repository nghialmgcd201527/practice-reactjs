import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import Protypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../../userSlice";
import RegisterForm from "../RegisterForm";

Register.propTypes = {
  closeDialog: Protypes.func,
};

function Register(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      //auto set username = email
      values.username = values.email;

      const action = register(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);

      //close dialog
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }

      enqueueSnackbar("Register successfully", { variant: "success" });
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
