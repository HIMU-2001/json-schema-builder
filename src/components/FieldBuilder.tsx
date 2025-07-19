import type { FC } from 'react';
import { useFieldArray, useFormContext, Controller } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch'; 
import { Label } from '@/components/ui/label';
import type { FieldType } from '../types/schema';
import { v4 as uuidv4 } from 'uuid';

interface FieldProps {
  name: string;
}

export const FieldBuilder: FC<FieldProps> = ({ name }) => {
  const { control, register, watch } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name });

  return (
    <div className="ml-4 border-l-3 border-muted pl-4 space-y-4">
      {fields.map((field, index) => {
        const fieldName = `${name}.${index}`;
        const selectedType: FieldType = watch(`${fieldName}.type`) || 'string';

        return (
          <div key={field.id} className="space-y-2">
            <div className="flex items-start gap-3">
              <Input
                {...register(`${fieldName}.name`)}
                placeholder="Field Name"
                className="w-1/4"
              />

              <Controller
                name={`${fieldName}.type`}
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-1/4">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="string">String</SelectItem>
                      <SelectItem value="number">Number</SelectItem>
                      <SelectItem value="float">Float</SelectItem>
                      <SelectItem value="boolean">Boolean</SelectItem>
                      <SelectItem value="objectId">ObjectId</SelectItem>
                      <SelectItem value="nested">Nested</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />

              {/* ✅ Toggle to include/exclude field from JSON */}
              <div className="flex items-center gap-2 mt-2">
                <Label htmlFor={`${fieldName}.include`}>Include</Label>
                <Controller
                  name={`${fieldName}.include`}
                  control={control}
                  defaultValue={true}
                  render={({ field }) => (
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      id={`${fieldName}.include`}
                    />
                  )}
                />
              </div>

              <Button
                variant="destructive"
                size="sm"
                type="button"
                onClick={() => remove(index)}
              >
                Delete
              </Button>
            </div>

            {selectedType === 'nested' && (
              <FieldBuilder name={`${fieldName}.children`} />
            )}
          </div>
        );
      })}

      <Button
        variant="secondary"
        type="button"
        onClick={() =>
          append({
            id: uuidv4(),
            name: '',
            type: '',
            include: true,
            children: [],
          })
        }
      >
        + Add Field
      </Button>
    </div>
  );
};
