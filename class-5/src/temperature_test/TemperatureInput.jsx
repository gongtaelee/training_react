import PropTypes from 'prop-types'

TemperatureInput.propTypes ={
    temperature: PropTypes.string.isRequired,
    scale: PropTypes.string,
    onTemperatureChange: PropTypes.func.isRequired // [temperature : number, scale : string] => void
}

export default function TemperatureInput({temperature, scale, onTemperatureChange}){
    const handleChange = (event) => {
        onTemperatureChange(event.target.value, scale);
    }
    return (
        <fieldset>
            <legend>
                온도를 입력해주세요(단위:{scaleNames[scale]});
            </legend>
            <input value={temperature} onChange={handleChange} />
        </fieldset>
    )
}

const scaleNames = {
    c: "섭씨",
    f: "화씨"
};