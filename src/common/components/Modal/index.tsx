import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

type ModalProps = {
    children: any;
    onClose: () => void;
}

const StyledModal = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: rgba(0, 0, 0, .2);
    color: #FFF;
    font-size: 40px;
`;

const CloseButton = styled.button`
    position: absolute;
    right: 0;
`;

const Modal = ({ children, onClose }: ModalProps) => {
    return ReactDOM.createPortal(
      <StyledModal>
          <CloseButton type={'button'} onClick={onClose}>Close</CloseButton>
          {children}
      </StyledModal>,
        // @ts-ignore
        document.getElementById('modal_root')
  );
};

export default Modal;
