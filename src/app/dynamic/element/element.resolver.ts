import { Injectable, Inject, Type } from '@angular/core';
import { ELEMENT_PROVIDER, BaseElementComponent } from './element.provider';
import { ElementTypes, IELementProvider } from './element.interface';

@Injectable()
export class ElementResolver {
    private config: Map<ElementTypes, Type<BaseElementComponent>>;

    constructor(@Inject(ELEMENT_PROVIDER) providers: IELementProvider[] = []) {
        this.config = providers.reduce((config, provider) => config.set(provider.type, provider.component), new Map());
    }

    resolve = (type: ElementTypes) => this.config.get(type);
}