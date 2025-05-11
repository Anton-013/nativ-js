import { useState } from "react"
import { ManType } from "../05/05_01"


type PropsType = {
    title: string
    man: ManType
    car: {model: string}
}

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {

    const [messang, setMessang] = useState<string>('hello')

    return (
        <>
            <h1>{title}</h1>
            <hr />
            <div>{man.name}</div>
            <div>{props.car.model}</div>
        </>
    )
}