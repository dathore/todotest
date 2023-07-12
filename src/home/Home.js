import { useState, useEffect } from "react";
import { Nav, Navbar, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate();
    const [data, setData] = useState();
    const [ative, setAtive] = useState("/?limit=30&skip=0");

    useEffect(() => {
        // fetch data
        const dataFetch = async () => {
            const data = await (await fetch("https://dummyjson.com/todos")).json();

            setData(data);
        };

        dataFetch();

    }, []);

    const _pageClick = (e) => {

        const _pageClickData = async () => {
            const data = await (await fetch("https://dummyjson.com/todos" + e.target.value)).json();
            setAtive(e.target.value);
            setData(data);
        };

        _pageClickData();

    }
    const _detail = (index) => {
        navigate("/detail/" + index)
    }

    return (

        <div className="body">
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
            <div className="container p-2">
                <p className="mt-5" style={{ fontSize: 24 }}>Todo list</p>
                <hr></hr>
                <div className="d-flex justify-content-around" style={{ paddingTop: "30px" }}>
                    <Row md={12}>
                        {data?.todos?.map((item, index) => {
                            return (
                                <div className="col-3" key={index}
                                    style={{ paddingBottom: "40px" }}
                                    onClick={() => _detail(++index)}
                                >
                                    <div className="card-text">
                                        <p>{item?.todo}</p>
                                    </div>
                                </div>
                            )
                        })

                        }
                    </Row>
                </div>
                <div className="d-flex justify-content-center p-5">
                    <button className="button-group" value={"/?limit=30&skip=0"}
                        onClick={e => _pageClick(e, "value")}
                        style={{ backgroundColor: ative === "/?limit=30&skip=0" ? "#787878" : "#3AB43A" }}
                    >1</button>
                    <button className="button-group" value={"/?limit=30&skip=30"}
                        onClick={e => _pageClick(e, "value")}
                        style={{ backgroundColor: ative === "/?limit=30&skip=30" ? "#787878" : "#3AB43A" }}
                    >2</button>
                    <button className="button-group" value={"/?limit=30&skip=60"}
                        onClick={e => _pageClick(e, "value")}
                        style={{ backgroundColor: ative === "/?limit=30&skip=60" ? "#787878)" : "#3AB43A" }}
                    >3</button>
                    <button className="button-group" value={"/?limit=30&skip=90"}
                        onClick={e => _pageClick(e, "value")}
                        style={{ backgroundColor: ative === "/?limit=30&skip=90" ? "#787878" : "#3AB43A" }}
                    >4</button>
                    <button className="button-group" value={"/?limit=30&skip=120"}
                        onClick={e => _pageClick(e, "value")}
                        style={{ backgroundColor: ative === "/?limit=30&skip=120" ? "#787878" : "#3AB43A" }}
                    >5</button>

                </div>
            </div>
        </div>
    );
}

export default Home;
