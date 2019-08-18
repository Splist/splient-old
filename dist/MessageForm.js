"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const prop_types_1 = require("prop-types");
require("./MessageForm.css");
class MessageForm extends react_1.Component {
    constructor() {
        super(...arguments);
        this.componentDidMount = () => {
            this.input.focus();
        };
        this.handleFormSubmit = (event) => {
            event.preventDefault();
            this.props.onMessageSend(this.input.value);
            this.input.value = "";
        };
    }
    render() {
        return (react_1.default.createElement("form", { className: "MessageForm", onSubmit: this.handleFormSubmit },
            react_1.default.createElement("div", { className: "input-container" },
                react_1.default.createElement("input", { type: "text", ref: (node) => (this.input = node), placeholder: "Enter your message..." })),
            react_1.default.createElement("div", { className: "button-container" },
                react_1.default.createElement("button", { type: "submit" }, "Send"))));
    }
}
MessageForm.propTypes = {
    onMessageSend: prop_types_1.default.func.isRequired,
};
exports.default = MessageForm;
