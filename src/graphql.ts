
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateClienteInput {
    exampleField?: Nullable<number>;
}

export class UpdateClienteInput {
    id: number;
}

export class Cliente {
    exampleField?: Nullable<number>;
}

export abstract class IQuery {
    abstract clientes(): Nullable<Cliente>[] | Promise<Nullable<Cliente>[]>;

    abstract cliente(id: number): Nullable<Cliente> | Promise<Nullable<Cliente>>;
}

export abstract class IMutation {
    abstract createCliente(createClienteInput: CreateClienteInput): Cliente | Promise<Cliente>;

    abstract updateCliente(updateClienteInput: UpdateClienteInput): Cliente | Promise<Cliente>;

    abstract removeCliente(id: number): Nullable<Cliente> | Promise<Nullable<Cliente>>;
}

type Nullable<T> = T | null;
