import React from 'react';
import {useLocation, Switch} from 'react-router-dom';

const ModalSwitch = ({children}: { children: any }) => {
    const location = useLocation();
    const background = location.state && location.state.background;

    return (
        <>
            <Switch location={background || location}>
                {children}
            </Switch>
            {background && children}
        </>
    )
};

export default ModalSwitch;