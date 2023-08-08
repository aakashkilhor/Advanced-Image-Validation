import React, { useState } from "react";
import Image from "../../common/Image";
import Modal from "../../common/Modal";
const Avatar = () => {

  const [modal, setModal] = useState(true);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <Image toggleModal = {toggleModal} />
      {modal && <Modal />}
      
    </>
  );
};

export default Avatar;
