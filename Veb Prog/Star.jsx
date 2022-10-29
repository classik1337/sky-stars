import { getRAndomint} from "../functions/functions";
import Moon from "./Moon";
import ".Sky/css";
import Star from "./Star";
import { getRandomInt } from "./functions";

    function Star(props) {
        const [isView, setIsView] = useState(false)

        useEffect(() => {
            setTimeout(() =>{
                setIsView(true)
            }, getRandomInt(1000, 100000))
            
        },[])
        return (
            isView &&
            <div
                className="Star__wrapper"
                style={{
                    left: props.star.left,
                    top: props.star.top,
                }}
                >
                    <div className="Star"></div>
                </div>
        );
        
    }

    export default Star;