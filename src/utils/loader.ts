import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ServerPackage } from './types';

const getServiceDescriptor = (protoPath: string, options: protoLoader.Options = {}): ServerPackage => {
    const packageDefinition = protoLoader.loadSync(
        protoPath,
        {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true,
            ...options
        }
    );

    return grpc.loadPackageDefinition(packageDefinition) as ServerPackage;
};

export {
    getServiceDescriptor
};
