function CardPage(props){
    return(
        <div className="cards">
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title style={{ marginBottom:'30px' }}>{props.song}</Card.Title>
                <Card.Text>
                    {props.desc}
                </Card.Text>
                <div className="btn ml-auto">
                    <Button variant="primary">More</Button>
                </div>
            </Card.Body>
            </Card>
        </div>
    );
}
