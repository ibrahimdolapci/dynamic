import { InjectionToken, Type, Input, ValueProvider } from '@angular/core';
import { IELementProvider, ElementTypes } from './element.interface';

export const ELEMENT_PROVIDER = new InjectionToken<IELementProvider[]>('Element Provider');

export abstract class ElementConfig {
    type: ElementTypes;
    settings: any;
}

export class BaseElementComponent {
    type: ElementTypes;
    @Input() settings: any;

    constructor({ type, settings }: ElementConfig) {
        this.type = type;
        this.settings = settings;
    }
}

export function provideElement(type: ElementTypes, component: Type<BaseElementComponent>): ValueProvider {
    return {
        provide: ELEMENT_PROVIDER,
        useValue: { type, component },
        multi: true
    };
}