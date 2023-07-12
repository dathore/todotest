import { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Detail() {
    const todoId = useParams();
    const [data, setData] = useState();
    const [buttonText, setButtonText] = useState("NOT COMPLETED");
    useEffect(() => {
        const dataFetch = async () => {
            const data = await (await fetch("https://dummyjson.com/todos/" + todoId?.index)).json();
            setData(data);
        };

        dataFetch();

    }, [todoId]);
    const _updateButton = () => {
        if (buttonText === "NOT COMPLETED") {
            setButtonText("COMPLETED")
        } else {
            setButtonText("NOT COMPLETED")
        }

    }
    return (
        <div>
            <Navbar style={{ backgroundColor: "#00cc00" }}>
                <Navbar.Brand href="/home" style={{ color: "white" }}>Simple Todo App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='d-flex justify-content-between'>
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <button className="btn btn-success">Log out</button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="detail-card">
                <p>
                    {data?.todo}
                </p>
                <button
                    className={buttonText === "NOT COMPLETED" ? "btn btn-danger" : "btn btn-success"}
                    onClick={_updateButton}
                >{buttonText}</button>
            </div>
        </div>
    )

}
export default Detail;