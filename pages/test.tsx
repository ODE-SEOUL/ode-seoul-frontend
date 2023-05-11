import React, { useState } from 'react';
import Test from '../src/components/common/test/Test';
import useModal from "../src/hooks/useModal";
import Modal from "../src/modal/DefaultModal";

export default function Index() {
  const { isShowing, toggle } = useModal();
  const [message, setMessage] = useState<string | undefined>();

  const handleClick = (info: string) => {
    setMessage(info);
    toggle();
  };

  return (
    <div className="App">
      <Test text='test'/>
      <button onClick={() => handleClick("Test Modal을 클릭하셨습니다!!!")}>Test Modal</button>
      {isShowing && <Modal isShowing={isShowing} hide={toggle} message={message!} />}
    </div>
  );
}
