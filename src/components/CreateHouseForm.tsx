import React from 'react';

type InputProps = {
  // The common Part
  placeholder?: string;
  className?: string;
  id?: string;
} & (
  | {
      // The discriminated union
      type?: 'text' | 'date' | 'number' | 'file';
      // eslint-disable-next-line no-unused-vars
      onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }
  | {
      type: 'textarea';
      // eslint-disable-next-line no-unused-vars
      onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    }
);
const HouseForm: React.FunctionComponent<InputProps> = (
  props: InputProps,
) => {
  if (props.type === 'textarea') {
    return <textarea {...props} />;
  }
  return <input {...props} />;
};

export default HouseForm;
