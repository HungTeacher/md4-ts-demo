import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './search.scss';

type OffcanvasPlacement = "top" | "bottom" | "start" | "end"

interface OffcanvasExampleProps {
    name: string;
    placement: OffcanvasPlacement | undefined
}
function OffCanvasExample({ name, placement }: OffcanvasExampleProps) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button variant="primary" onClick={handleShow} className="me-2">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <Offcanvas show={show} onHide={handleClose} placement={placement}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="search_top">
                        <div className="search_input">
                            <i style={{padding: "0 15px 0 0"}} className="fa-solid fa-magnifying-glass"></i>
                            <input className="inputSearch" type="text" placeholder="What do you need?"/>
                        </div>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="search_body">
                    <div className="search_categories">
                        <h4>List Categories</h4>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

function Search() {
    return (
        <>
            <OffCanvasExample placement="top" name="top" />
        </>
    );
}
export default Search