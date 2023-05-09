import { type FC, type ReactNode } from "react"
import './index.css';

type Props = {
    children: ReactNode
}

export const Container:FC<Props> = props => {
    return <div className="snap-container">
        {props.children}
    </div>
}