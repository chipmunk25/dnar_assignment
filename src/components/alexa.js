const Alexa = ({ title, alexa_value }) => {
    return (
        <div className="alexa">
            <div className="header">
                <span>{title}</span>
            </div>
            <div className="description">{alexa_value} </div>
        </div>
    )
}

export default Alexa