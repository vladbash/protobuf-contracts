import { getServiceDescriptor } from '../utils';

const PROTO_PATH = __dirname + '/../../.proto/aiProcessor.proto';

const descriptor = getServiceDescriptor(PROTO_PATH).aiProcessor;

export {
    descriptor,
};