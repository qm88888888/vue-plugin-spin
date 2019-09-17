import { DirectiveBinding } from 'vue/types/options.d';
import { ILoadOpts, IDirective } from '../types/index.d';
import Plugin from './loading';

export default class Directive {
  static options: ILoadOpts = {};

  /* eslint-disable class-methods-use-this */
  public install(options: ILoadOpts) {
    Directive.options = options;
    const instance: any = {};
    return {
      bind: (el: HTMLElement, bind: DirectiveBinding) => this.bind(el, bind),
      update: (el: HTMLElement, bind: DirectiveBinding) => this.update(el, bind),
      unbind: (el: HTMLElement, bind: DirectiveBinding) => this.unbind(el, bind),
    };
  }

  bind(el: any, bind: DirectiveBinding) {
    const opts: ILoadOpts = Object.assign({}, Directive.options);
    opts.target = el;
    opts.fullscreen = false;
    if (Object.prototype.hasOwnProperty.call(bind.modifiers, 'fullscreen')) opts.fullscreen = true;
    if (Object.prototype.hasOwnProperty.call(bind.modifiers, 'default')) opts.type = 'default';
    /* eslint-disable no-param-reassign */
    el.instance = new Plugin().install(opts, bind.value) as IDirective;
  }

  update(el: any, bind: DirectiveBinding) {
    if (!el.instance) return;
    if (bind.value) el.instance.show();
    else el.instance.hide();
  }

  unbind(el: any, bind: DirectiveBinding) {
    if (!el.instance) return;
    el.instance.remove();
  }
}
