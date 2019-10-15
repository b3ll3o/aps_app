import React from 'react';

import { Button } from 'react-bootstrap';

const BtnAdiciona = ({ changeAdd }) => {
    return (
        <div>
            <Button className="btn btn-primary btn-lg btn-block" onClick={changeAdd}>adiconar foco incendio</Button>
        </div>
    );
}

export default BtnAdiciona;