import {useContext, useEffect, useState} from "react";
import {WebsocketContext} from "../../common/contexts/WebsocketContext";

export const Websocket = () => {
    const [value, setValue] = useState('');
    const [message, setMessages] = useState<MessagePayload[]>([])
    const socket = useContext(WebsocketContext)

    type MessagePayload = {
        content: string
        msg: string
    }

    useEffect(() => {
        socket.on('connect', () => {
            console.log('Connected!')
        })
        socket.on('onMessage', (data: MessagePayload) => {
            console.log('onMessage event received!')
            console.log(data)
            setMessages(prev => [...prev, data])
        })

        return () => {
            console.log('Unregistering Events...')
            socket.off('connect')
            socket.off('onMessage')
        }
    }, [])

    const onSubmit = () => {
        socket.emit('newMessage', value)
        setValue('')
    }

    return (
        <div>
            <div>
                {message.length === 0 ? <div>Сообщений нет</div> : <div></div>}
                {message.map(msg => (
                    <div>
                        <p>{msg.content}</p>
                    </div>
                ))}
            </div>
            <div>
                <input
                    type="text"
                    value={value}
                    onChange={(event => setValue(event.target.value))}
                />
                <button onClick={onSubmit}>Submit</button>
            </div>
        </div>
    )
}