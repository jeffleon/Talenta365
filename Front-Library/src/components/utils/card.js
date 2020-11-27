import React from 'react'
import {Button} from 'reactstrap'
import { Card, Icon} from 'semantic-ui-react'
const Card_ = ({content, description, extra, handleButton}) => {
    return (
        <Card>
            <Card.Content>
                <Card.Header>{content}</Card.Header>
                <Card.Description>
                    {description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a>
                <Icon name='book' />
                {extra}
            </a>
            </Card.Content>
            <Button color="primary" onClick={handleButton}>Borrow Book </Button>
        </Card>
    )
}

export default Card_