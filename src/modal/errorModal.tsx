import React from "react";
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface ModalProps {
  isShowing: boolean;
  hide: () => void;
  children: React.ReactNode;
}

const Modal = (props: ModalProps) =>{
  return props.isShowing
    ? ReactDOM.createPortal(
        <OutSide>
          <ModalLayOut>
            <div>
              <Box>
                  <CloseButton
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={props.hide}
                  >
                    <span aria-hidden="true">&times;</span>
                  </CloseButton>
              </Box>
              
                
              
            </div>
            <Container>
              {props.children}
            </Container>
            
          </ModalLayOut>
        </OutSide>,
        document.body
      )
    : null;
}
  

export default Modal;

const OutSide = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.2);
`;

const ModalLayOut = styled.div`
  width: 350px;
  height:300px;
  margin: auto;
  background-color: white;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-radius: 5%;
  overflow: hidden;
  box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.2);
`;

const Container = styled.div`
   width: 90%;
   margin: auto;
`;
const Box = styled.div`
   width: 100%;
    background: rgb(108, 128, 75);
    height: 80px;
   `;

const CloseButton = styled.div`
  margin: 10px;
  float: right;
  cursor: pointer;
`;