"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const Message_1 = require("./Message");
require("./MessageList.css");
class MessageList extends react_1.Component {
    constructor() {
        super(...arguments);
        this.componentDidUpdate = () => {
            this.node.scrollTop = this.node.scrollHeight;
        };
    }
    render() {
        return (react_1.default.createElement("div", { className: "MessageList", ref: (node) => (this.node = node) }, this.props.messages.map((message, i) => (react_1.default.createElement(Message_1.default, Object.assign({ key: i }, message))))));
    }
}
MessageList.propTypes = {
    messages: prop_types_1.default.arrayOf(prop_types_1.default.object)
};
MessageList.defaultProps = {
    messages: [],
};
exports.default = MessageList;
