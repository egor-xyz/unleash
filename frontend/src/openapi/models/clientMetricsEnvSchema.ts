/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { DateSchema } from './dateSchema';
import type { ClientMetricsEnvSchemaVariants } from './clientMetricsEnvSchemaVariants';

/**
 * Used for reporting feature evaluation results from SDKs
 */
export interface ClientMetricsEnvSchema {
    /** Name of the feature checked by the SDK */
    featureName: string;
    /** The name of the application the SDK is being used in */
    appName: string;
    /** Which environment the SDK is being used in */
    environment: string;
    /** The start of the time window these metrics are valid for. The window is 1 hour wide */
    timestamp?: DateSchema;
    /** How many times the toggle evaluated to true */
    yes?: number;
    /** How many times the toggle evaluated to false */
    no?: number;
    /** How many times each variant was returned */
    variants?: ClientMetricsEnvSchemaVariants;
}
