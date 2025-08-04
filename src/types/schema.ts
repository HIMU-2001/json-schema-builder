export type FieldType = 'string' | 'number' | 'float' | 'boolean' | 'objectId' | 'nested';

export interface Field {
  id: string;
  name: string;
  type: FieldType;
  include?: boolean;
  children?: Field[];
}
