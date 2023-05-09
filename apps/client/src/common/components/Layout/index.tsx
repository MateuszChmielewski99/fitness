import { FC, type ReactNode } from "react"

type Props = {
    children: ReactNode;
}

export const Layout:FC<Props> = props => {
    return (
        <div style={{height: '100%'}}>{props.children}</div>
    )
}