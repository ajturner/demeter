/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DemeterApp {
        "datasetUrl": string;
        "featureId": string;
    }
    interface DemeterMetadata {
        "distance": number;
        "featureId": string;
        "featureLayerUrl": string;
        "fields": any;
    }
}
declare global {
    interface HTMLDemeterAppElement extends Components.DemeterApp, HTMLStencilElement {
    }
    var HTMLDemeterAppElement: {
        prototype: HTMLDemeterAppElement;
        new (): HTMLDemeterAppElement;
    };
    interface HTMLDemeterMetadataElement extends Components.DemeterMetadata, HTMLStencilElement {
    }
    var HTMLDemeterMetadataElement: {
        prototype: HTMLDemeterMetadataElement;
        new (): HTMLDemeterMetadataElement;
    };
    interface HTMLElementTagNameMap {
        "demeter-app": HTMLDemeterAppElement;
        "demeter-metadata": HTMLDemeterMetadataElement;
    }
}
declare namespace LocalJSX {
    interface DemeterApp {
        "datasetUrl"?: string;
        "featureId"?: string;
    }
    interface DemeterMetadata {
        "distance"?: number;
        "featureId"?: string;
        "featureLayerUrl"?: string;
        "fields"?: any;
    }
    interface IntrinsicElements {
        "demeter-app": DemeterApp;
        "demeter-metadata": DemeterMetadata;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "demeter-app": LocalJSX.DemeterApp & JSXBase.HTMLAttributes<HTMLDemeterAppElement>;
            "demeter-metadata": LocalJSX.DemeterMetadata & JSXBase.HTMLAttributes<HTMLDemeterMetadataElement>;
        }
    }
}