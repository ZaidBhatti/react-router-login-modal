import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ModalContainer from "../ModalContainer";

type ModalProps = {
    children: any;
    onClose: () => void;
}

const Backdrop = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: rgba(0, 0, 0, .2);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Modal = ({children, onClose}: ModalProps) => {
    return ReactDOM.createPortal(
        <Backdrop>
            <ModalContainer closeAction={onClose}>
                {children}
            </ModalContainer>
        </Backdrop>,
        // @ts-ignore
        document.getElementById('modal_root')
    );
};

export default Modal;
