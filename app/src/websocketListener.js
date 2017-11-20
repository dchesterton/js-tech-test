const listen = (websocketUrl, dispatch) => {
    const websocket = new WebSocket(websocketUrl);

    websocket.addEventListener('message', m => {
        // parse the message and send straight to the dispatcher, allowing the reducers to
        // handle them appropriately
        const message = JSON.parse(m.data);

        if (typeof message === 'object') {
            //console.log(message);
            dispatch(message);
        }
    });

    websocket.addEventListener('open', () => {
        websocket.send(JSON.stringify({type: 'subscribe', keys: ['o.*']}));
    });
};

export default listen;
