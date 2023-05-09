import { type ReactNode, type FC } from 'react';
import './index.css';

type Props = {
    children?:ReactNode
}

export const LoadingScreen:FC<Props> = props => {
    return <div className="loading_screen">{props.children}</div>
}