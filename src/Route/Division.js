import { useParams } from "react-router-dom";
import Header from "../Component/Header";



function Division() {
    const {division} = useParams();
    return(
        <div>
            <Header />
            <div>{division}</div>
        </div>
    )
}

export default Division;