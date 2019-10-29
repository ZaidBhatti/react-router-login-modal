import React from 'react';
import {useLocation, Route, RouteProps, useHistory} from 'react-router-dom';
import Modal from "../Modal";

type ModalRouteProps = {
    onClose?: () => void;
} & RouteProps;

const ModalRoute = ({children, onClose, ...rest}: ModalRouteProps) => {
    const location = useLocation();
    const history = useHistory();
    const isModal = (location.state && location.state.background);

    if (isModal) {
        return (
            <Route {...rest}>
                <Modal onClose={onClose || history.goBack}>
                    {children}
                </Modal>
            </Route>
        );
    }
    return (
        <Route {...rest}>
            {children}
        </Route>
    );
};

export default ModalRoute;
