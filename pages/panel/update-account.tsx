import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../public/components/panelComponents/userContext";
import EdituserForm from "../../public/components/panelComponents/edit-users/editUserForm";
import { baseUrl } from "../../public/apiFunctions";
// import { getuserWithId } from '../../public/apiFunctions'
import { useRouter } from "next/router";
import { useEffect } from "react";
import LoadingForm from "./loading-form";

import { getSingleUserTest } from "./users-management";
import UpdateAccountForm from "../../public/components/panelComponents/update-account/updataAccountForm";
const UpdateAccount = () => {
  const user: any = useContext(UserContext);

  return (
    <>
      {console.log(user)}

      {user.UserId != undefined ? (
        <UpdateAccountForm user={user} />
      ) : (
        <LoadingForm />
      )}
    </>
  );
};
export default UpdateAccount;
