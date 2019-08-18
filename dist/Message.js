"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const classnames_1 = require("classnames");
require("./Message.css");
class Message extends react_1.Component {
    render() {
        const classes = classnames_1.default('Message', {
            log: !this.props.author,
            me: this.props.me
        });
        return (react_1.default.createElement("div", { className: classes },
            this.props.author && (react_1.default.createElement("span", { className: "author" },
                this.props.author,
                ":")),
            this.props.body));
    }
}
Message.propTypes = {
    author: prop_types_1.default.string,
    body: prop_types_1.default.string.isRequired,
    me: prop_types_1.default.bool,
};
exports.default = Message;
