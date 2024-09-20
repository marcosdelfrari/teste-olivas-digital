"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var data_1 = require("./lib/data");
if (!(0, fs_1.existsSync)("styles")) {
    (0, fs_1.mkdirSync)("styles");
}
var output = "\n$corPrimary: ".concat(data_1.id.corPrimary, ";\n$corSecondary: ").concat(data_1.id.corSecondary, "; \n\n:root {\n  --cor-primary: #{$corPrimary};\n  --cor-secondary: #{$corSecondary};\n}");
(0, fs_1.writeFileSync)("styles/colors.scss", output.trim());
