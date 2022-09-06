import { useState } from "react";


const AddMessage = ({onMessage}) => {

const [message , setMessage] = useState('')

    const handleInputChange = (event) => {
        const {value } = event.target;
        setMessage  (value)
    }

    const onSend = (event) => {
        event.preventDefault()
        onMessage(message)
        setMessage('')
    }

    const isDisabled = () => {
        return message === "";
    };

 return (
        <div>
            <form onSubmit={onSend} className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your message..."
                    value={message}
                    onChange={handleInputChange}
                />
                <div className="input-group-append">
                    <button onClick={onSend} className="btn submit-button" disabled={isDisabled()}>
                        SEND
                    </button>
                </div>
            </form>
        </div>
    )

}

export default AddMessage