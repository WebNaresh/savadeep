import { type LucideIcon } from 'lucide-react';

export interface BaseInputProps {
    label?: string;
    name: string;
    placeholder?: string;
    type:
    | "text"
    | "password"
    | "email"
    | "OTP"
    | "avatar"
    | "number"
    | "file"
    | "select"
    | "multiSelect"
    | "multiSelect_images"
    | "rating"
    | "places_autocomplete"
    | "text-area"
    | "date"
    | "checkbox";
    form: any;
    className?: string;
    disabled?: boolean;
    autoComplete?: string;
}

export interface InputFieldProps extends BaseInputProps {
    options?: { value: string | null; label: string }[];
    async_function?: (
        input: string
    ) => Promise<{ value: string; label: string }[]>;
    Icon: LucideIcon;
    iconClassName?: string;
}

export type SelectOption = {
    value: string;
    label: string;
};

export interface SelectProp extends BaseInputProps {
    options: SelectOption[];
}

