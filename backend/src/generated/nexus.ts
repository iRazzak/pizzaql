/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */





declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Mutation: {};
  Order: { // root type
    city: string; // String!
    dough: string; // String!
    id: number; // Int!
    name: string; // String!
    paid: boolean; // Boolean!
    phone: string; // String!
    price: string; // String!
    size: string; // String!
    status: string; // String!
    street: string; // String!
    time: string; // String!
    type: string; // String!
  }
  Query: {};
  Subscription: { // root type
    createdOrder: NexusGenRootTypes['Order']; // Order!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
}

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createOrder: NexusGenRootTypes['Order']; // Order!
    deleteOrder: NexusGenRootTypes['Order']; // Order!
    updateOrder: NexusGenRootTypes['Order']; // Order!
  }
  Order: { // field return type
    city: string; // String!
    dough: string; // String!
    id: number; // Int!
    name: string; // String!
    paid: boolean; // Boolean!
    phone: string; // String!
    price: string; // String!
    size: string; // String!
    status: string; // String!
    street: string; // String!
    time: string; // String!
    type: string; // String!
  }
  Query: { // field return type
    order: NexusGenRootTypes['Order'][]; // [Order!]!
    orders: NexusGenRootTypes['Order'][]; // [Order!]!
  }
  Subscription: { // field return type
    createdOrder: NexusGenRootTypes['Order']; // Order!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createOrder: { // args
      city?: string | null; // String
      dough?: string | null; // String
      name?: string | null; // String
      paid?: boolean | null; // Boolean
      phone?: string | null; // String
      price?: string | null; // String
      size?: string | null; // String
      status?: string | null; // String
      street?: string | null; // String
      time?: string | null; // String
      type?: string | null; // String
    }
    deleteOrder: { // args
      id?: string | null; // ID
    }
    updateOrder: { // args
      id?: string | null; // ID
      status?: string | null; // String
    }
  }
  Query: {
    order: { // args
      id?: string | null; // ID
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Mutation" | "Order" | "Query" | "Subscription";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}