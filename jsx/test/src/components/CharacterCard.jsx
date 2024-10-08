import React from "react";

import Image from "./Image";
import Title from "./Titulo";
import Details from "./Details";

const CharacterCard = ({imageUrl, title, gender, status}) => {
    return(
        <div>
            <Title title={title}/>
            <Image imageUrl={imageUrl}/>
            <Details gender={gender} status={status}/>
        </div>
    )
}

export default CharacterCard