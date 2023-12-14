/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PlanetUpdateFormInputValues = {
    name?: string;
    description?: string;
};
export declare type PlanetUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlanetUpdateFormOverridesProps = {
    PlanetUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PlanetUpdateFormProps = React.PropsWithChildren<{
    overrides?: PlanetUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    planet?: any;
    onSubmit?: (fields: PlanetUpdateFormInputValues) => PlanetUpdateFormInputValues;
    onSuccess?: (fields: PlanetUpdateFormInputValues) => void;
    onError?: (fields: PlanetUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlanetUpdateFormInputValues) => PlanetUpdateFormInputValues;
    onValidate?: PlanetUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PlanetUpdateForm(props: PlanetUpdateFormProps): React.ReactElement;
