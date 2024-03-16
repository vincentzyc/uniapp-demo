const processed = Symbol('processed');

export default () => {
  return {
    // 插件名
    postcssPlugin: 'postcss-pxtorpx',

    /**
     * 这个钩子遍历所有大部分CSS属性(如background, color, font-size, etc.)
     * 其他特殊属性如 `@`开头的属性需要用 AtRule 钩子处理
     */
    Declaration(decl) {
      if (decl[processed]) return;

      // 标记当前 node 已处理
      decl[processed] = true;

      // 将px单位替换为rpx
      if (decl.value && decl.value.indexOf('px') > -1) {
        decl.value = decl.value.replace(/(\d+)px/g, (m, v) => v * 2 + 'rpx');
      }
    },
  };
};
