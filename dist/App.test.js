"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_dom_1 = require("react-dom");
it('renders without crashing', () => {
    const div = document.createElement('div');
    react_dom_1.default.render(/>, div););
});
