import { Component, Input, Type, Injector, ValueProvider } from '@angular/core';
import { ElementResolver } from './element.resolver';
import { ElementConfig, BaseElementComponent } from './element.provider';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss'],
  providers: [{
    provide: ElementConfig,
    useValue: "This value cannot be read from child generated components."
  }]
})
export class ElementComponent {

  @Input() set element(config: ElementConfig) {

    //Angular DI framework, also provides ValueProvider for injecting a value in components.
    const providers: ValueProvider[] = [{
      provide: ElementConfig, // we will get settings with injecting Element Config in component.
      useValue: config
    }];

    // Each generated components will have own injector. When they try to get
    // settings from ElementConfig, their own injector supplies that unless they
    // use @Host or @SkipSelf decorators. 
    this.elementInjector = Injector.create({ providers, parent: this.injector });

    // resolver keeps components in a collection with type and component pairs.
    // it's resolve function get type as a parameter and return component.
    this.type = this.resolver.resolve(config.type);
  };

  type: Type<BaseElementComponent>;
  elementInjector: Injector;

  constructor(private resolver: ElementResolver, private injector: Injector) { }
}