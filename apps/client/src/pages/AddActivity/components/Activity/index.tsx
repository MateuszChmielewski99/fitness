import { trpc } from "../../../../common/api/trpc";
import { Container } from "../Container";
import './index.css'

export const Activity = () => {
    const { data } = trpc.user.getAll.useQuery();

    console.log(data);

    return (
        <Container>
            <h1 className="activity__header">Co</h1>
        </Container>
    )
}