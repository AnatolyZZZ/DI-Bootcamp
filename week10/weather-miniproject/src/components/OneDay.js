import './OneDay.css'
export const OneDay = (props) => {
    return (<div className="oneday">
        <p>Max Temp:{props.day.Temperature.Maximum.Value}</p>
        <p>Min Temp: {props.day.Temperature.Minimum.Value}</p>
        {props.day.Day.HasPrecipitation? <>
            <p>{props.day.Day.PrecipitationIntensity} {props.day.Day.PrecipitationType}</p>
        </> : <p>No preciptation</p> }
        <p>At night:</p>
        {props.day.Night.HasPrecipitation ? <>
            <p>{props.day.Night.PrecipitationIntensity} {props.day.Night.PrecipitationType}</p>
        </> : <p>No preciptation</p> }
        
    </div>)
}