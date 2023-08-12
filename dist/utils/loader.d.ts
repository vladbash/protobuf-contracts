import * as protoLoader from '@grpc/proto-loader';
import { ServerPackage } from './types';
declare const getServiceDescriptor: (protoPath: string, options?: protoLoader.Options) => ServerPackage;
export { getServiceDescriptor };
