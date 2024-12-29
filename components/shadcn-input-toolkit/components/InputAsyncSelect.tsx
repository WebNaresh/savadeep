"use client";

import * as React from "react";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Select } from "@/components/ui/select";
import AsyncSelect from "react-select/async";
import { InputFieldProps } from "../types/shadcn-input-toolkit";

const AsyncInputSelect: React.FC<InputFieldProps> = (props) => {
  const { label, name, placeholder, form, className } = props;

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={`min-w-[300px] max-w-[300px] ${className}`}>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <AsyncSelect
                placeholder={placeholder}
                cacheOptions
                defaultOptions
                loadOptions={props.async_function}
              />
            </FormControl>
          </Select>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default AsyncInputSelect;
