import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from 'reactstrap';

export default function ButtonLinks() {
    return (
        <ButtonGroup>
            <Button className="bg-danger text-white btn-spaced">
                <Link to="/porque">Porque?</Link>
            </Button>
            <Button className="bg-danger text-white btn-spaced"> 
                <Link to="/prevencao">Prevenção</Link>
            </Button>
            <Button className="bg-danger text-white btn-spaced">
                <Link to="/info">Mais informações</Link>
            </Button>
        </ButtonGroup>
    )
}
