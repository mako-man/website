! function (e, t) {
    "object" == typeof exports ? module.exports = t(e, e.document) : "function" == typeof define && define.amd ? define(function () {
        return t(e, e.document)
    }) : e.Sketch = t(e, e.document)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";

    function n(e) {
        return "[object Array]" == Object.prototype.toString.call(e)
    }

    function o(e) {
        return "function" == typeof e
    }

    function r(e) {
        return "number" == typeof e
    }

    function i(e) {
        return "string" == typeof e
    }

    function u(e) {
        return C[e] || String.fromCharCode(e)
    }

    function a(e, t, n) {
        for (var o in t) !n && o in e || (e[o] = t[o]);
        return e
    }

    function c(e, t) {
        return function () {
            e.apply(t, arguments)
        }
    }

    function s(e) {
        var t = {};
        for (var n in e) "webkitMovementX" !== n && "webkitMovementY" !== n && (t[n] = o(e[n]) ? c(e[n], e) : e[n]);
        return t
    }

    function l(e) {
        function t(t) {
            o(t) && t.apply(e, [].splice.call(arguments, 1))
        }

        function n(e) {
            for (_ = 0; _ < et.length; _++) B = et[_], i(B) ? O[(e ? "add" : "remove") + "EventListener"].call(O, B, S, !1) : o(B) ? S = B : O = B
        }

        function r() {
            L(A), A = I(r), K || (t(e.setup), K = o(e.setup)), U || (t(e.resize), U = o(e.resize)), e.running && !q && (e.dt = (z = +new Date) - e.now, e.millis += e.dt, e.now = z, t(e.update), Z && (e.retina && (e.save(), e.scale(V, V)), e.autoclear && e.clear()), t(e.draw), Z && e.retina && e.restore()), q = ++q % e.interval
        }

        function c() {
            O = J ? e.style : e.canvas, D = J ? "px" : "", Y = e.width, j = e.height, e.fullscreen && (j = e.height = v.innerHeight, Y = e.width = v.innerWidth), e.retina && Z && V && (O.style.height = j + "px", O.style.width = Y + "px", Y *= V, j *= V), O.height !== j && (O.height = j + D), O.width !== Y && (O.width = Y + D), K && t(e.resize)
        }

        function l(t, n) {
            return N = n.getBoundingClientRect(), t.x = t.pageX - N.left - (v.scrollX || v.pageXOffset), t.y = t.pageY - N.top - (v.scrollY || v.pageYOffset), e.retina && Z && V && (t.x *= V, t.y *= V), t
        }

        function f(t, n) {
            return l(t, e.element), n = n || {}, n.ox = n.x || t.x, n.oy = n.y || t.y, n.x = t.x, n.y = t.y, n.dx = n.x - n.ox, n.dy = n.y - n.oy, n
        }

        function d(e) {
            if (e.preventDefault(), G = s(e), G.originalEvent = e, G.touches)
                for (Q.length = G.touches.length, _ = 0; _ < G.touches.length; _++) Q[_] = f(G.touches[_], Q[_]);
            else Q.length = 0, Q[0] = f(G, $);
            return a($, Q[0], !0), G
        }

        function g(n) {
            for (n = d(n), M = (X = et.indexOf(W = n.type)) - 1, e.dragging = /down|start/.test(W) ? !0 : /up|end/.test(W) ? !1 : e.dragging; M;) i(et[M]) ? t(e[et[M--]], n) : i(et[X]) ? t(e[et[X++]], n) : M = 0
        }

        function p(n) {
            F = n.keyCode, H = "keyup" == n.type, tt[F] = tt[u(F)] = !H, t(e[n.type], n)
        }

        function m(n) {
            e.autopause && ("blur" == n.type ? E : y)(), t(e[n.type], n)
        }

        function y() {
            e.now = +new Date, e.running = !0
        }

        function E() {
            e.running = !1
        }

        function k() {
            (e.running ? E : y)()
        }

        function P() {
            Z && e.clearRect(0, 0, e.width, e.height)
        }

        function T() {
            R = e.element.parentNode, _ = b.indexOf(e), R && R.removeChild(e.element), ~_ && b.splice(_, 1), n(!1), E()
        }
        var A, S, O, R, N, _, D, z, B, G, W, F, H, M, X, Y, j, q = 0,
            Q = [],
            U = !1,
            K = !1,
            V = v.devicePixelRatio || 1,
            J = e.type == x,
            Z = e.type == h,
            $ = {
                x: 0,
                y: 0,
                ox: 0,
                oy: 0,
                dx: 0,
                dy: 0
            },
            et = [e.eventTarget || e.element, g, "mousedown", "touchstart", g, "mousemove", "touchmove", g, "mouseup", "touchend", g, "click", g, "mouseout", g, "mouseover", w, p, "keydown", "keyup", v, m, "focus", "blur", c, "resize"],
            tt = {};
        for (F in C) tt[C[F]] = !1;
        return a(e, {
            touches: Q,
            mouse: $,
            keys: tt,
            dragging: !1,
            running: !1,
            millis: 0,
            now: 0 / 0,
            dt: 0 / 0,
            destroy: T,
            toggle: k,
            clear: P,
            start: y,
            stop: E
        }), b.push(e), e.autostart && y(), n(!0), c(), r(), e
    }
    for (var f, d, g = "E LN10 LN2 LOG2E LOG10E PI SQRT1_2 SQRT2 abs acos asin atan ceil cos exp floor log round sin sqrt tan atan2 pow max min".split(" "), p = "__hasSketch", m = Math, h = "canvas", y = "webgl", x = "dom", w = t, v = e, b = [], E = {
            fullscreen: !0,
            autostart: !0,
            autoclear: !0,
            autopause: !0,
            container: w.body,
            interval: 1,
            globals: !0,
            retina: !1,
            type: h
        }, C = {
            8: "BACKSPACE",
            9: "TAB",
            13: "ENTER",
            16: "SHIFT",
            27: "ESCAPE",
            32: "SPACE",
            37: "LEFT",
            38: "UP",
            39: "RIGHT",
            40: "DOWN"
        }, k = {
            CANVAS: h,
            WEB_GL: y,
            WEBGL: y,
            DOM: x,
            instances: b,
            install: function (e) {
                if (!e[p]) {
                    for (var t = 0; t < g.length; t++) e[g[t]] = m[g[t]];
                    a(e, {
                        TWO_PI: 2 * m.PI,
                        HALF_PI: m.PI / 2,
                        QUARTER_PI: m.PI / 4,
                        random: function (e, t) {
                            return n(e) ? e[~~(m.random() * e.length)] : (r(t) || (t = e || 1, e = 0), e + m.random() * (t - e))
                        },
                        lerp: function (e, t, n) {
                            return e + n * (t - e)
                        },
                        map: function (e, t, n, o, r) {
                            return (e - t) / (n - t) * (r - o) + o
                        }
                    }), e[p] = !0
                }
            },
            create: function (e) {
                return e = a(e || {}, E), e.globals && k.install(self), f = e.element = e.element || w.createElement(e.type === x ? "div" : "canvas"), d = e.context = e.context || function () {
                    switch (e.type) {
                    case h:
                        return f.getContext("2d", e);
                    case y:
                        return f.getContext("webgl", e) || f.getContext("experimental-webgl", e);
                    case x:
                        return f.canvas = f
                    }
                }(), (e.container || w.body).appendChild(f), k.augment(d, e)
            },
            augment: function (e, t) {
                return t = a(t || {}, E), t.element = e.canvas || e, t.element.className += " sketch", a(e, t, !0), l(e)
            }
        }, P = ["ms", "moz", "webkit", "o"], T = self, A = 0, S = "AnimationFrame", O = "request" + S, R = "cancel" + S, I = T[O], L = T[R], N = 0; N < P.length && !I; N++) I = T[P[N] + "Request" + S], L = T[P[N] + "Cancel" + S];
    return T[O] = I = I || function (e) {
        var t = +new Date,
            n = m.max(0, 16 - (t - A)),
            o = setTimeout(function () {
                e(t + n)
            }, n);
        return A = t + n, o
    }, T[R] = L = L || function (e) {
        clearTimeout(e)
    }, k
});