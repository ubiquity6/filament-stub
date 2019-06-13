// @flow
declare module 'filament' {
  declare module.exports: any;
}

module.exports = ({
  init: function(){
    throw new Error('this file is a stub. Use yarn compile-filament in ubq/renderer/renderengine');
  },
}:any);
