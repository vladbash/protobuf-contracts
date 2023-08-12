"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.descriptor = void 0;
const utils_1 = require("../utils");
const PROTO_PATH = __dirname + '/../../.proto/aiProcessor.proto';
const descriptor = (0, utils_1.getServiceDescriptor)(PROTO_PATH).aiProcessor;
exports.descriptor = descriptor;
//# sourceMappingURL=index.js.map