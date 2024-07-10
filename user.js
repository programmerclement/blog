import {j as e, C as F, a as o, r as m, b as S, O as j, P as T, u as _, s as v, L as A, p as M, n as w, S as y, m as x, c as f, B as g, G as h, d as i, F as P, e as E, f as W, g as z, h as B, i as D, k as $, l as I, o as O} from "./index-b686c26d.js";
const G = "" + new URL("menu-242d80a8.svg",import.meta.url).href
  , H = "" + new URL("close-ad0e0ca6.svg",import.meta.url).href
  , q = ()=>{
    const t = _("./planet/scene.gltf");
    return e("primitive", {
        object: t.scene,
        scale: 2.5,
        "position-y": 0,
        "rotation-y": 0
    })
}
  , Y = ()=>e(F, {
    shadows: !0,
    frameloop: "demand",
    dpr: [1, 2],
    gl: {
        preserveDrawingBuffer: !0
    },
    camera: {
        fov: 45,
        near: .1,
        far: 200,
        position: [-4, 3, 6]
    },
    children: o(m.Suspense, {
        fallback: e(S, {}),
        children: [e(j, {
            autoRotate: !0,
            enableZoom: !1,
            maxPolarAngle: Math.PI / 2,
            minPolarAngle: Math.PI / 2
        }), e(q, {}), e(T, {
            all: !0
        })]
    })
})
  , R = ()=>{
    const [t,r] = m.useState("")
      , [n,c] = m.useState(!1)
      , [s,l] = m.useState(!1);
    return m.useEffect(()=>{
        const a = ()=>{
            window.scrollY > 100 ? l(!0) : l(!1)
        }
        ;
        return window.addEventListener("scroll", a),
        ()=>window.removeEventListener("scroll", a)
    }
    , []),
    e("nav", {
        className: `${v.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${s ? "bg-primary" : "bg-transparent"}`,
        children: o("div", {
            className: "w-full flex justify-between items-center max-w-7xl mx-auto",
            children: [o(A, {
                to: "/",
                className: "flex items-center gap-2",
                onClick: ()=>{
                    r(""),
                    window.scrollTo(0, 0)
                }
                ,
                children: [e("img", {
                    src: M,
                    alt: "logo",
                    className: "w-9 h-9 object-contain"
                }), o("p", {
                    className: "text-white text-[18px] font-bold cursor-pointer flex ",
                    children: ["Programmer  ", e("span", {
                        className: "sm:block hidden",
                        children: " DATCH"
                    })]
                })]
            }), e("ul", {
                className: "list-none hidden sm:flex flex-row gap-10",
                children: w.map(a=>e("li", {
                    className: `${t === a.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`,
                    onClick: ()=>r(a.title),
                    children: e("a", {
                        href: `#${a.id}`,
                        children: a.title
                    })
                }, a.id))
            }), o("div", {
                className: "sm:hidden flex flex-1 justify-end items-center",
                children: [e("img", {
                    src: n ? H : G,
                    alt: "menu",
                    className: "w-[28px] h-[28px] object-contain",
                    onClick: ()=>c(!n)
                }), e("div", {
                    className: `${n ? "flex" : "hidden"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`,
                    children: e("ul", {
                        className: "list-none flex justify-end items-start flex-1 flex-col gap-4",
                        children: w.map(a=>e("li", {
                            className: `font-poppins font-medium cursor-pointer text-[16px] ${t === a.title ? "text-white" : "text-secondary"}`,
                            onClick: ()=>{
                                c(!n),
                                r(a.title)
                            }
                            ,
                            children: e("a", {
                                href: `#${a.id}`,
                                children: a.title
                            })
                        }, a.id))
                    })
                })]
            })]
        })
    })
}
  , u = {
    _origin: "https://api.emailjs.com"
}
  , V = (t,r="https://api.emailjs.com")=>{
    u._userID = t,
    u._origin = r
}
  , k = (t,r,n)=>{
    if (!t)
        throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
    if (!r)
        throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!n)
        throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
    return !0
}
;
class b {
    constructor(r) {
        this.status = r ? r.status : 0,
        this.text = r ? r.responseText : "Network Error"
    }
}
const N = (t,r,n={})=>new Promise((c,s)=>{
    const l = new XMLHttpRequest;
    l.addEventListener("load", ({target: a})=>{
        const d = new b(a);
        d.status === 200 || d.text === "OK" ? c(d) : s(d)
    }
    ),
    l.addEventListener("error", ({target: a})=>{
        s(new b(a))
    }
    ),
    l.open("POST", u._origin + t, !0),
    Object.keys(n).forEach(a=>{
        l.setRequestHeader(a, n[a])
    }
    ),
    l.send(r)
}
)
  , J = (t,r,n,c)=>{
    const s = c || u._userID;
    return k(s, t, r),
    N("/api/v1.0/email/send", JSON.stringify({
        lib_version: "3.10.0",
        user_id: s,
        service_id: t,
        template_id: r,
        template_params: n
    }), {
        "Content-type": "application/json"
    })
}
  , U = t=>{
    let r;
    if (typeof t == "string" ? r = document.querySelector(t) : r = t,
    !r || r.nodeName !== "FORM")
        throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
    return r
}
  , X = (t,r,n,c)=>{
    const s = c || u._userID
      , l = U(n);
    k(s, t, r);
    const a = new FormData(l);
    return a.append("lib_version", "3.10.0"),
    a.append("service_id", t),
    a.append("template_id", r),
    a.append("user_id", s),
    N("/api/v1.0/email/send-form", a)
}
  , Z = {
    init: V,
    send: J,
    sendForm: X
}
  , K = ()=>{
    const t = m.useRef()
      , [r,n] = m.useState({
        name: "",
        email: "",
        message: ""
    })
      , [c,s] = m.useState(!1)
      , l = d=>{
        const {target: p} = d
          , {name: C, value: L} = p;
        n({
            ...r,
            [C]: L
        })
    }
      , a = d=>{
        if (d.preventDefault(),
        s(!0),
        r.name.trim() == "" || r.email.trim() == "" || r.message.trim() == "") {
            s(!1),
            g.warning("Fill all fields please!");
            return
        }
        Z.send("service_iogpqwp", "template_98jr5kj", {
            from_name: r.name,
            to_name: "JavaScript Mastery",
            from_email: r.email,
            to_email: "programmerdatch@gmail.com",
            message: r.message
        }, "f-pGSwFsvB-vhWYnZ").then(()=>{
            s(!1),
            g.success("Thank you! I'll respond ASAP!"),
            n({
                name: "",
                email: "",
                message: ""
            })
        }
        , p=>{
            s(!1),
            console.error(p),
            g.error("Oops! Error: " + p.message + ". Try again later!")
        }
        )
    }
    ;
    return o("div", {
        className: "xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden",
        children: [o(x.div, {
            variants: f("left", "tween", .2, 1),
            className: "flex-[0.75] bg-black-100 p-8 rounded-2xl",
            children: [e("p", {
                className: v.sectionSubText,
                children: "Get in touch"
            }), e("h3", {
                className: v.sectionHeadText,
                children: "Contact."
            }), o("form", {
                ref: t,
                onSubmit: a,
                className: "mt-12 flex flex-col gap-8",
                children: [o("label", {
                    className: "flex flex-col",
                    children: [e("span", {
                        className: "text-white font-medium mb-4",
                        children: "Your Name"
                    }), e("input", {
                        type: "text",
                        name: "name",
                        value: r.name,
                        onChange: l,
                        placeholder: "What's your good name?",
                        className: "bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                    })]
                }), o("label", {
                    className: "flex flex-col",
                    children: [e("span", {
                        className: "text-white font-medium mb-4",
                        children: "Your email or Phone number"
                    }), e("input", {
                        type: "text",
                        name: "email",
                        value: r.email,
                        onChange: l,
                        placeholder: "What's your email or Phone?",
                        className: "bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                    })]
                }), o("label", {
                    className: "flex flex-col",
                    children: [e("span", {
                        className: "text-white font-medium mb-4",
                        children: "Your Message"
                    }), e("textarea", {
                        rows: 7,
                        name: "message",
                        value: r.message,
                        onChange: l,
                        placeholder: "What you want to say or Job you need to offer?",
                        className: "bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                    })]
                }), e("button", {
                    type: "submit",
                    className: "bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary",
                    children: c ? e(Q, {}) : "Send"
                })]
            })]
        }), e(x.div, {
            variants: f("right", "tween", .2, 1),
            className: "xl:flex-1 xl:h-auto md:h-[550px] h-[350px]",
            children: e(Y, {})
        })]
    })
}
  , Q = ()=>o("span", {
    className: "flex items-center",
    children: [o("svg", {
        className: "animate-spin -ml-1 mr-3 h-5 w-5 text-slate-200",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        children: [e("circle", {
            className: "opacity-25",
            cx: "12",
            cy: "12",
            r: "10",
            stroke: "currentColor",
            strokeWidth: "4"
        }), e("path", {
            className: "opacity-75",
            fill: "currentColor",
            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.002 8.002 0 0117.708 4.5L15.5 6.707a5.965 5.965 0 00-8.493 8.493l2.207-2.208a2 2 0 112.828 2.828l-4.3 4.3a1 1 0 01-1.497-1.32l.181-.203A8.001 8.001 0 016 17.291z"
        })]
    }), "Sending..."]
})
  , ee = y(K, "contact");
function te(t) {
    return h({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
            },
            child: []
        }]
    })(t)
}
function re(t) {
    return h({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            },
            child: []
        }]
    })(t)
}
function ae(t) {
    return h({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "circle",
            attr: {
                cx: "12",
                cy: "12",
                r: "10"
            },
            child: []
        }, {
            tag: "line",
            attr: {
                x1: "2",
                y1: "12",
                x2: "22",
                y2: "12"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
            },
            child: []
        }]
    })(t)
}
function oe(t) {
    return h({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "rect",
            attr: {
                x: "2",
                y: "2",
                width: "20",
                height: "20",
                rx: "5",
                ry: "5"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
            },
            child: []
        }, {
            tag: "line",
            attr: {
                x1: "17.5",
                y1: "6.5",
                x2: "17.51",
                y2: "6.5"
            },
            child: []
        }]
    })(t)
}
function ne(t) {
    return h({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            },
            child: []
        }, {
            tag: "rect",
            attr: {
                x: "2",
                y: "9",
                width: "4",
                height: "12"
            },
            child: []
        }, {
            tag: "circle",
            attr: {
                cx: "4",
                cy: "4",
                r: "2"
            },
            child: []
        }]
    })(t)
}
function se(t) {
    return h({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
            },
            child: []
        }]
    })(t)
}
function le(t) {
    return h({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
            },
            child: []
        }, {
            tag: "polygon",
            attr: {
                points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
            },
            child: []
        }]
    })(t)
}
const ie = [{
    id: 1,
    icon: e(ae, {}),
    url: i.web,
    hoverColor: "hover:text-blue-500"
}, {
    id: 2,
    icon: e(re, {}),
    url: i.github,
    hoverColor: "hover:text-gray-800"
}, {
    id: 3,
    icon: e(se, {}),
    url: i.twitter,
    hoverColor: "hover:text-blue-400"
}, {
    id: 4,
    icon: e(ne, {}),
    url: i.linkedin,
    hoverColor: "hover:text-blue-800"
}, {
    id: 5,
    icon: e(oe, {}),
    url: i.ig,
    hoverColor: "hover:text-pink-500"
}, {
    id: 6,
    icon: e(le, {}),
    url: i.youtube,
    hoverColor: "hover:text-red-500"
}, {
    id: 7,
    icon: e(P, {}),
    url: i.whatsapp,
    hoverColor: "hover:text-green-500"
}, {
    id: 8,
    icon: e(te, {}),
    url: i.facebook,
    hoverColor: "hover:text-blue-600"
}, {
    id: 9,
    icon: e(E, {}),
    url: i.email,
    hoverColor: "hover:text-gray-600"
}, {
    id: 10,
    icon: e(W, {}),
    url: i.tiktok,
    hoverColor: "hover:text-black"
}, {
    id: 11,
    icon: e(z, {}),
    url: i.play,
    hoverColor: "hover:text-green-500"
}, {
    id: 12,
    icon: e(B, {}),
    url: i.telegram,
    hoverColor: "hover:text-blue-400"
}, {
    id: 12,
    icon: e(D, {}),
    url: i.snap,
    hoverColor: "hover:text-yellow-400"
}, {
    id: 13,
    icon: e($, {}),
    url: i.call,
    hoverColor: "hover:text-gray-600"
}]
  , ce = ()=>o("div", {
    className: "pt-2 pb-2 mt-2 flex flex-col justify-center items-center",
    children: [e(x.p, {
        variants: f("up", "tween", .2, 2),
        className: "text-3xl sm:text-4xl text-[#fff] mb-5",
        children: "Follow Me"
    }), e(x.ul, {
        variants: f("down", "tween", .2, 3),
        className: "flex flex-wrap flex-grow-0 gap-2 justify-center animate-pulse",
        children: ie.map(t=>e("a", {
            href: t.url,
            target: "__blank",
            className: `text-gray-400 cursor-pointer rounded-lg bg-tertiary shadow-sm p-4 duration-300 hover:bg-gray-100 ${t.hoverColor}`,
            children: e("i", {
                className: "text-xl sm:text-2xl md:text-3xl",
                children: t.icon
            })
        }, t.id))
    }), o("p", {
        className: "text-bold text-white mt-8 mb-4",
        children: [o("span", {
            className: "text-gray-500",
            children: ["©", new Date().getFullYear()]
        }), " ", e("span", {
            className: "text-slate-200",
            children: " Programmer DATCH"
        })]
    })]
})
  , de = y(ce, "")
  , he = ()=>o("div", {
    className: "relative z-0 bg-primary",
    children: [e(R, {}), e(I, {}), o("div", {
        className: "relative z-0",
        children: [e(ee, {}), e(O, {}), e(de, {})]
    })]
});
export {he as default};
