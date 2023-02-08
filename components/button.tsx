
const Button = (text, callBack) => {
    return (
        <button onClick={callBack()}>{text}</button>
    )
}

export default Button;