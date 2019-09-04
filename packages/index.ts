import Vue from 'vue';
import Loading from './loading';
import Directive from './directive';
import { ILoadOpts } from '../types/index.d';
import './index.scss';

export default {
  install(instance: typeof Vue, options: ILoadOpts) {
    /* eslint-disable no-console */
    if (!instance) console.error('Vue instance is not defined');
    /* eslint-disable no-param-reassign */
    instance.prototype.$loading = (opts: ILoadOpts) => new Loading().install(opts);
    instance.directive('spin', new Directive().install(options));
  },
};
