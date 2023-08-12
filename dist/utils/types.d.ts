import * as grpc from '@grpc/grpc-js';
export interface ServerDefinition extends grpc.GrpcObject {
    service: any;
}
export interface ServerPackage extends grpc.GrpcObject {
    [name: string]: {
        [name: string]: ServerDefinition;
    };
}
export type gRPCServerRoute = {
    service: grpc.ServiceDefinition<grpc.UntypedServiceImplementation>;
    implementation: grpc.UntypedServiceImplementation;
};
