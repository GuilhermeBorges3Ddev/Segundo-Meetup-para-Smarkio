import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

export default function ButtonLinks() {
    return (
        <ButtonGroup>
            <Button className="bg-danger text-white btn-spaced">Porque?</Button>
            <Button className="bg-danger text-white btn-spaced">Prevenção</Button>
            <Button className="bg-danger text-white btn-spaced">Mais informações</Button>
        </ButtonGroup>
    )
}
