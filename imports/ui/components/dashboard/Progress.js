import React from 'react'
import {Header, Progress} from 'semantic-ui-react'

const ProgressExampleSize = () => (
    <div>
        <Header as='h3' block>
            Core Progress: 70%
        </Header>
        <Progress percent={70} color='olive' active/>
        <Header as='h3' block>
            Bridging Progress: 30%
        </Header>
        <Progress percent={30} color='violet' active/>
        <Header as='h3' block>
            Overall Progress: 65%
        </Header>
        <Progress percent={65} color='grey' active/>
    </div>
)

export default ProgressExampleSize