const MeetupDetails = (props) => {
    return <>
            <h1>{props.title}</h1>
            <img src={props.image} alt={props.title} />
            <p>{props.description}</p>
    </>
}

export default MeetupDetails;