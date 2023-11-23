import React, { useState } from "react"
import TemperatureInput from "./TemperatureInput"

function BoilingVerdict(celsius){
    return celsius >= 100 ? <p>물이 끓습니다.</p> : <p>물이 끓지 않습니다.</p>
}

function toCelsius(temperature){
    return (temperature - 32) * 5 / 9;
}

function toFahrenheit(temperature){
    return (temperature * 9) / 5 + 32;
}

function tryConvert(temperature, convert){
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) return "";
    
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

export default function Calculator(){
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    const handleTemperatureChange = (temperature, scale) => {
        setTemperature(temperature);
        setScale(scale);
    }

    const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            <TemperatureInput
                temperature={celsius}
                scale="c"
                onTemperatureChange={handleTemperatureChange}
            />
            <TemperatureInput
                temperature={fahrenheit}
                scale="f"
                onTemperatureChange={handleTemperatureChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}