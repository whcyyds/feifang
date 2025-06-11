if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _imports_0 = "/static/logo.webp";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$1 = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const banners = [
        "/static/lp1.png",
        "/static/lp2.png",
        "/static/lp3.png"
      ];
      const products = [
        { name: "春亚纺", img: "/static/chunyafang.jpg" },
        { name: "四面弹", img: "/static/simiantan.jpg" },
        { name: "桑蚕丝", img: "/static/sangcansi.png" },
        { name: "天丝", img: "/static/tiansi.jpg" }
      ];
      const __returned__ = { banners, products };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" 顶部 Logo 和公司名称 "),
      vue.createElementVNode("view", { class: "header" }, [
        vue.createElementVNode("image", {
          class: "logo",
          src: _imports_0,
          mode: "aspectFit"
        }),
        vue.createElementVNode("text", { class: "title" }, "飞纺纺织")
      ]),
      vue.createCommentVNode(" 轮播图 "),
      vue.createElementVNode("swiper", {
        class: "swiper",
        circular: "",
        autoplay: "",
        interval: "3000"
      }, [
        (vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($setup.banners, (item, index) => {
            return vue.createElementVNode("swiper-item", { key: index }, [
              vue.createElementVNode("image", {
                src: item,
                class: "banner-img",
                mode: "aspectFill"
              }, null, 8, ["src"])
            ]);
          }),
          64
          /* STABLE_FRAGMENT */
        ))
      ]),
      vue.createCommentVNode(" 公司简介 "),
      vue.createElementVNode("view", { class: "section" }, [
        vue.createElementVNode("view", null, [
          vue.createElementVNode("text", { class: "section-title" }, "公司简介")
        ]),
        vue.createElementVNode("text", { class: "section-text" }, " 飞纺是一家专注于高品质纺织面料贸易的企业，致力于为客户提供优质面料和专业服务。 ")
      ]),
      vue.createCommentVNode(" 产品展示 "),
      vue.createElementVNode("view", { class: "section" }, [
        vue.createElementVNode("text", { class: "section-title" }, "产品展示"),
        vue.createElementVNode("view", { class: "product-grid" }, [
          (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($setup.products, (product, index) => {
              return vue.createElementVNode("view", {
                class: "product-card",
                key: index
              }, [
                vue.createElementVNode("image", {
                  src: product.img,
                  class: "product-img",
                  mode: "aspectFill"
                }, null, 8, ["src"]),
                vue.createElementVNode(
                  "text",
                  { class: "product-name" },
                  vue.toDisplayString(product.name),
                  1
                  /* TEXT */
                )
              ]);
            }),
            64
            /* STABLE_FRAGMENT */
          ))
        ])
      ]),
      vue.createCommentVNode(" 联系我们 "),
      vue.createElementVNode("view", { class: "section" }, [
        vue.createElementVNode("view", { class: "section-title" }, "联系我们"),
        vue.createElementVNode("view", { class: "section-text" }, "电话：19951051350"),
        vue.createElementVNode("text", { class: "section-text" }, "地址：江苏省苏州市吴江区盛泽镇凤凰荟购物中心")
      ])
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "E:/飞纺官网/feifang/pages/index/index.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "E:/飞纺官网/feifang/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
