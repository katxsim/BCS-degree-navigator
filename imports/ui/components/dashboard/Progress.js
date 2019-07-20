import React from 'react'
import { Header, Progress, Message } from 'semantic-ui-react'
// import { Users } from "../../../../collection/users"

const ProgressExampleSize = () => (
    <div>
        <Header as='h3' block>
            Core Progress: 70%
        </Header>
        <Progress percent={70} color='olive' active />
        <Message info header='Core Progress Details' content="You need 2 more core courses." />

        <Header as='h3' block>
            Bridging Progress: 30%
        </Header>
        <Progress percent={30} color='violet' active />
        <Message info header='Bridging Progress Details' content="You need 3 more bridging courses." />

        <Header as='h3' block>
            Overall Progress: 65%
        </Header>
        <Progress percent={65} color='grey' active />
        <Message className="lProg" info header='Overall Progress Details' content="You need 6 more courses overall to be finished!" />

    </div>
)

export default ProgressExampleSize