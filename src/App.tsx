import { useForm, FormProvider, useWatch } from 'react-hook-form';
import { FieldBuilder } from './components/FieldBuilder';
import { useEffect, useState } from 'react';
import { Button } from './components/ui/button';

type FieldType = 'string' | 'number' | 'float' | 'boolean' | 'objectId' | 'nested';

interface Field {
  id: string;
  name: string;
  type: FieldType;
  include?: boolean;
  children?: Field[];
}

function generateSchema(fields: Field[] = []) {
  const schema: Record<string, any> = {};

  fields.forEach((field) => {
    if (field.include === false) return; // Skip excluded fields

    if (field.type === 'nested') {
      schema[field.name || ''] = generateSchema(field.children || []);
    } else {
      schema[field.name || ''] = field.type || 'string';
    }
  });

  return schema;
}

export default function App() {
  const methods = useForm({
    defaultValues: {
      fields: [],
    },
  });

  const [jsonOutput, setJsonOutput] = useState({});
  const watchedFields = useWatch({ control: methods.control, name: 'fields' });

  useEffect(() => {
    setJsonOutput(generateSchema(watchedFields || []));
  }, [watchedFields]);

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col md:flex-row gap-6 p-6">
        <div className="w-2/3">
          <h1 className="text-2xl font-bold mb-4">🧱 JSON Schema Builder</h1>

          <form
            onSubmit={methods.handleSubmit((data) =>
              console.log('Final Schema', generateSchema(data.fields))
            )}
          >
            <FieldBuilder name="fields" />
            <Button type="submit" className="mt-4 ml-4">
              Submit Schema
            </Button>
          </form>
        </div>

        <div className="w-1/3">
          <h2 className="text-xl font-semibold mb-2">📄 JSON Preview</h2>
          <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm h-full max-h-[80vh]">
            {JSON.stringify(jsonOutput, null, 2)}
          </pre>
        </div>
      </div>
    </FormProvider>
  );
}
