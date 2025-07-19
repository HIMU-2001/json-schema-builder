import type { Field } from '../types/schema';

export function generateSchema(fields: Field[]): any {
  const result: Record<string, any> = {};

  fields.forEach((field) => {
    if (!field.name) return;

    switch (field.type) {
      case 'nested':
        result[field.name] = generateSchema(field.children || []);
        break;
      case 'string':
        result[field.name] = "String";
        break;
      case 'number':
        result[field.name] = "Number";
        break;
      case 'float':
        result[field.name] = "Float";
        break;
      case 'boolean':
        result[field.name] = "Boolean";
        break;
      case 'objectId':
        result[field.name] = "ObjectId";
        break;
      default:
        result[field.name] = "";
    }
  });

  return result;
}
