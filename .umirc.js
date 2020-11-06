
export default {
  exportStatic: {
    htmlSuffix: true,
    dynamicRoot: true,
  },
  targets: {
    ie: 11,
  },
  // 修改icon
  links: [
    // href的图片你可以放在public里面，直接./图片名.png 就可以了，也可以是cdn链接
    { rel: 'icon', href: 'img/logo.png' },
  ],

}
