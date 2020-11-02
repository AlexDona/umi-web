// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'C:/Users/weite/Downloads/landing-umi-example-master/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/index.html",
    "exact": true,
    "component": require('@/pages/index.js').default
  },
  {
    "path": "/",
    "exact": true,
    "component": require('@/pages/index.js').default
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
