/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
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
export declare type LocationUpdateFormInputValues = {};
export declare type LocationUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LocationUpdateFormOverridesProps = {
    LocationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type LocationUpdateFormProps = React.PropsWithChildren<{
    overrides?: LocationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    location?: any;
    onSubmit?: (fields: LocationUpdateFormInputValues) => LocationUpdateFormInputValues;
    onSuccess?: (fields: LocationUpdateFormInputValues) => void;
    onError?: (fields: LocationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LocationUpdateFormInputValues) => LocationUpdateFormInputValues;
    onValidate?: LocationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LocationUpdateForm(props: LocationUpdateFormProps): React.ReactElement;
