"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const MessageForm_1 = require("./MessageForm");
const MessageList_1 = require("./MessageList");
require("./App.css");
class App extends react_1.Component {
    constructor(props) {
        super(props);
        this.handleNewMessage = (text) => {
            this.setState({
                messages: [...this.state.messages, { me: true, author: "Me", body: text }],
            });
        };
        this.state = {
            messages: [],
        };
    }
    render() {
        return (react_1.default.createElement("div", { className: "App" },
            react_1.default.createElement(MessageList_1.default, { messages: this.state.messages }),
            react_1.default.createElement(MessageForm_1.default, { onMessageSend: this.handleNewMessage })));
    }
}
exports.default = App;
