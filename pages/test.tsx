import React from 'react';
import Test from '../src/components/common/test/Test';
import useModal from "../src/hooks/useModal";
import Modal from "../src/modal/DefaultModal";

export default function Index() {
  const { isShowing, toggle } = useModal();

  const handleClick = () => {
    toggle();
  };

  return (
    <div className="App">
      <Test text='test'/>
      <button onClick={handleClick}>Test Modal</button>
      {isShowing && <Modal isShowing={isShowing} hide={toggle}>
        <Test text='hello world'/>
      </Modal>}
    </div>
  );
}
 