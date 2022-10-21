export interface OptionFieldInterface {
  key: string;
  translate: string;
  value: string;
}

export interface FieldInterface {
  description: string;
  type: 'input' | 'number' | 'select' | 'radio' | 'checkbox' | 'textarea';
  name: string;
  label?: string;
  placeholder: string;
  status: number;
  required: boolean;
  visible: boolean;
  modifiable: boolean;
  defaultValue: string;
  regex?: string;
  options?: Array<OptionFieldInterface>;
}
