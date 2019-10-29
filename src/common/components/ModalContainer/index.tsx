import React, {useEffect, useRef} from 'react';
import styled from "styled-components";

type ModalContainerProps = {
    closeAction: (event: MouseEvent | React.MouseEvent<HTMLButtonElement>) => any;
    children: any;
}

const CloseButton = styled.button`
    position: absolute;
    right: 0;
`;

const ModalContent = styled.div`
    min-width: 300px;
    min-height: 300px;
    background: white;
    border: 1px solid grey;
    position: relative;
    border-radius: 8px;
    box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.25);
`;

const ModalContainer = ({closeAction, children}: ModalContainerProps) => {
    const wrapperRef = useRef(null);

    const handleOutsideClick = (event: MouseEvent) => {
        // @ts-ignore
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            closeAction(event);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick, false);
        return () => {
            document.removeEventListener('click', handleOutsideClick, false);
        }
    }, [handleOutsideClick]);

    return (
        <ModalContent ref={wrapperRef}>
            <CloseButton onClick={closeAction}>Close</CloseButton>
            {children}
        </ModalContent>
    )
};

export default ModalContainer;
