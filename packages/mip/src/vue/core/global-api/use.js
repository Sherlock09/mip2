/**
 * @file use.js
 * @author sfe-sy(sfe-sy@baidu.com)
 */

import {toArray} from '../util/index';

export function initUse(Vue) {
    Vue.use = function (plugin) {
        const installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
        if (installedPlugins.indexOf(plugin) > -1) {
            return this;
        }

        // additional parameters
        const args = toArray(arguments, 1);
        args.unshift(this);
        if (typeof plugin.install === 'function') {
            plugin.install.apply(plugin, args);
        }
        else if (typeof plugin === 'function') {
            plugin.apply(null, args);
        }

        installedPlugins.push(plugin);
        return this;
    };
}