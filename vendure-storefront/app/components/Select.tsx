import React, { SelectHTMLAttributes } from 'react';
import { useField } from 'remix-validated-form';
import FormElement from './FormElement';
import { useTranslation } from 'react-i18next';

export type SelectProps = {
  placeholder?: string;
  noPlaceholder?: boolean;
  label?: string;
  name: string;
} & SelectHTMLAttributes<HTMLSelectElement>;

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      name,
      label,
      required,
      defaultValue,
      placeholder = '',
      noPlaceholder = false,
      children,
      ...props
    },
    ref,
  ) => {
    const { getInputProps } = useField(name);
    const { t } = useTranslation();

    return (
      <FormElement name={name} label={label} required={required}>
        <select
          ref={ref}
          {...props}
          defaultValue={defaultValue}
          className="block w-full border-0 rounded-md shadow-sm focus:ring-gold focus:border-gold sm:text-sm raleway-400 bg-gold"
          {...getInputProps({})}
        >
          {!noPlaceholder && (
            <option value="">{placeholder ?? t('common.select')}</option>
          )}
          {children}
        </select>
      </FormElement>
    );
  },
);
