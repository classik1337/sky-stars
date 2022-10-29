import React, { useState, useEffect } from "React";
import { getRAndomint} from "../functions/functions";
import Moon from "./Moon";
import ".Sky/css";
import Star from "./Star";
import { getRandomInt } from "./functions";
 
function Sky() {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const newStars = stars;
        const countStars =getRandomInt(0, 100);

        for (let i = 0; i< countStars; i++) {
            const star = {
                left: getRandomInt(0, 100) + "%",
                top: getRandomInt(0, 100) + "%",
            };

            newStars.push(star);

        }

        setStars([...newStars]);

    }, []);
    const changeSky = (event) => {
        console.log(event);
        const newStars = stars;
        newStars.push({
            lef: event.pageX - 6,
            top: eventpageY - 6,
        });
        setStars([...newStars]);

    };
    return (
        <div className="Sky" onClick={(event) => changeSky(event)}>
            <Moon />
            {stars.map((star, index) =>(
                <Star star={star} key={index} />
            ))}
        </div>
    );

}

export default Sky;