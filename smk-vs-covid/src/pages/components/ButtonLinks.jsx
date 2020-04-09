import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from 'reactstrap';

export default function ButtonLinks() {
    return (
        <ButtonGroup>
            <Button className="bg-danger text-white btn-spaced">
                <Link to="/porque">Porque?</Link>
            </Button>
            <Button className="bg-danger text-white btn-spaced" onClick={function() {alert("VISITE: www.oms.com")}}> 
               Prevenção
            </Button>
            <Button className="bg-danger text-white btn-spaced">
                <Link to="/informacoes">Mais informações</Link>
            </Button>
        </ButtonGroup>
    )
}
