import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">Sales App</h1>
                    <p className="lead">Analyze the performance of your sales by different perspectives.</p>
                    <hr />
                    <p>This application consists on showing a Dashboard by using data supplied by a Back-End built with Spring Boot.</p>
                    <Link className="btn btn-primary btn-lg" to="/dashboard">
                        Acess Dashboard
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Home;
