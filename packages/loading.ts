import { ILoadOpts, ILoadFuns } from '../types/index.d';
import Plugin from './components/loading.vue';

export default class Loading {
  static fullscreen: Boolean = false;

  instance!: Plugin & ILoadFuns;

  // 插件安装入口
  /* eslint-disable no-param-reassign */
  public install(options: ILoadOpts, show: boolean = true) {
    if (typeof options.target === 'string') {
      options.target = document.querySelector(options.target);
    }
    options.target = options.target || document.body;
    if (Loading.fullscreen && options.fullscreen) return null;
    if (options.target !== document.body) options.fullscreen = false;
    else Loading.fullscreen = true;
    options.target.classList.add('t-load-wrapper');
    this.instance = new Plugin({
      el: document.createElement('div'),
      data: {
        show,
        ...options,
      },
    });
    options.target.appendChild(this.instance.$el);
    return {
      remove: () => this.remove(),
      hide: () => this.hide(),
      show: () => this.show(),
    };
  }

  public hide() {
    this.instance.toggle(false);
  }

  public show() {
    this.instance.toggle(true);
  }

  public remove() {
    this.instance.toggle(false);
    this.instance.$el.addEventListener('animationend', () => this.instance.$destroy());
  }
}
