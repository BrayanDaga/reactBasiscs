import { Link } from "react-router";

export default function HomePage() {
    return (<>
        <h1>Home Page</h1>
        <Link to="/todo">Go to Todo</Link>
    </> )
}