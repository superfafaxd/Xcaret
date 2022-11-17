"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
// EXTERNAL MODULE: ./store/data/appSlice.js
var appSlice = __webpack_require__(23);
;// CONCATENATED MODULE: external "isomorphic-fetch"
const external_isomorphic_fetch_namespaceObject = require("isomorphic-fetch");
var external_isomorphic_fetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_fetch_namespaceObject);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./hooks/useLanguage.js



const useLanguage = ()=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const router = (0,router_namespaceObject.useRouter)();
    const { locale  } = router;
    dispatch((0,appSlice/* onLanguage */.jE)(locale));
    return {
        locale
    };
};

;// CONCATENATED MODULE: ./components/NavBar.jsx


const NavBar = ()=>{
    const { navbar  } = (0,external_react_redux_.useSelector)((state)=>state.app);
    const { logo , menu  } = navbar;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "shadow bg-gray-200",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "mx-auto p-5 flex items-center justify-between",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "cursor-pointer",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "h-3 sm:h-7",
                        src: logo
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "flex items-center gap-5",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "sm:text-2xl text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300",
                                children: menu.contact
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "sm:text-2xl text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300",
                                children: menu.lang.title
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("select", {
                                className: "text-xs bg-gray-200 text-black ",
                                children: menu.currency.map((item)=>{
                                    return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        className: "hover:text-blue-500 cursor-pointer transition-colors duration-300",
                                        value: item,
                                        children: item
                                    }, item);
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/Footer.jsx


const Footer = ()=>{
    const { footer  } = (0,external_react_redux_.useSelector)((state)=>state.app);
    const { copy , links  } = footer;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            className: "p-4 shadow md:flex md:items-center md:justify-around md:p-6 bg-black",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "text-sm text-white",
                    children: copy
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0",
                    children: links.map((item)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: item.href,
                                className: "mr-4 hover:underline md:mr-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: "text-sm text-white",
                                    children: [
                                        " ",
                                        item.tittle,
                                        " "
                                    ]
                                })
                            }, item.tittle)
                        });
                    })
                })
            ]
        })
    });
};

// EXTERNAL MODULE: external "react-device-detect"
var external_react_device_detect_ = __webpack_require__(599);
;// CONCATENATED MODULE: ./components/Numbers.jsx

const Numbers = ({ name , number  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "grid",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: "text-xs text-white ",
                children: [
                    name,
                    " "
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: "text-xs text-white m-0.5",
                children: [
                    " ",
                    number,
                    " "
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/SocialNetworks.jsx

const SocialNetworks = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "m-1 flex justify-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "https://www.facebook.com/XcaretPark/",
                className: "mr-6 text-gray-600",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    "aria-hidden": "true",
                    focusable: "false",
                    "data-prefix": "fab",
                    "data-icon": "facebook-f",
                    className: "w-2.5",
                    role: "img",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 320 512",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "currentColor",
                        d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "https://twitter.com/XcaretPark?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
                className: "mr-6 text-gray-600",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    "aria-hidden": "true",
                    focusable: "false",
                    "data-prefix": "fab",
                    "data-icon": "twitter",
                    className: "w-4",
                    role: "img",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 512 512",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "currentColor",
                        d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "#!",
                className: "mr-6 text-gray-600",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    "aria-hidden": "true",
                    focusable: "false",
                    "data-prefix": "fab",
                    "data-icon": "instagram",
                    className: "w-3.5",
                    role: "img",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 448 512",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "currentColor",
                        d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    })
                })
            })
        ]
    });
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./hooks/useDeviceDetected.js


const useDeviceDetected = ()=>{
    const [movil, setmovil] = (0,external_react_.useState)(false);
    const [browser, setBrowser] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        external_react_device_detect_.isMobile ? setmovil(true) : setmovil(false);
        external_react_device_detect_.isBrowser ? setBrowser(true) : setBrowser(false);
    }, []);
    return {
        movil,
        browser
    };
};

;// CONCATENATED MODULE: ./components/PreFooter.jsx






const PreFooter = ()=>{
    const { movil , browser  } = useDeviceDetected();
    const { prefooter  } = (0,external_react_redux_.useSelector)((state)=>state.app);
    const { contactCenter , numbers  } = prefooter;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mx-auto flex-col bg-storm-gray-300 p-3",
        children: [
            movil ? /*#__PURE__*/ jsx_runtime_.jsx(SocialNetworks, {}) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col items-stretch",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-around",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "text-xs text-white",
                                children: [
                                    contactCenter.title,
                                    " "
                                ]
                            }),
                            browser ? /*#__PURE__*/ jsx_runtime_.jsx(SocialNetworks, {}) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-around",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-xs text-white",
                                children: contactCenter.email
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-xs text-white"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-around",
                        children: [
                            numbers.map((item, index)=>{
                                return index < 2 ? /*#__PURE__*/ jsx_runtime_.jsx(Numbers, {
                                    name: item.name,
                                    number: item.number
                                }, index) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("select", {
                                        className: "text-xs bg-storm-gray-300 dark:text-white ",
                                        children: numbers.map((item, i)=>{
                                            return i > 1 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("option", {
                                                className: " hover:text-blue-500 cursor-pointer transition-colors duration-300",
                                                value: item.name,
                                                children: [
                                                    item.name,
                                                    " ",
                                                    item.number,
                                                    " "
                                                ]
                                            }, item.name) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
                                        })
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Header.jsx


const Header = ()=>{
    const { header  } = (0,external_react_redux_.useSelector)((state)=>state.app);
    const { h1 , discount , paragraphs  } = header;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "grid bg-gray-300 p-28 px-40",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "pl-16 text-6xl",
                children: h1
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex m-10",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "p-10",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "text-6xl",
                            children: discount
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-2xl text-center pt-12",
                        children: paragraphs
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/movil/HeaderMovil.jsx


const HeaderMovil = (props)=>{
    const { header  } = (0,external_react_redux_.useSelector)((state)=>state.app);
    const { h1 , discount , paragraphs  } = header;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "grid bg-gray-300 p-4 py-11",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "text-center text-4xl m-5",
                    children: h1
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "p-6",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-center text-5xl",
                        children: discount
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-lg text-center m-2",
                    children: paragraphs
                })
            ]
        })
    });
};
HeaderMovil.getInitialProps = async (ctx)=>{
    return {};
};

;// CONCATENATED MODULE: ./components/Legals.jsx




const Legals = ()=>{
    const { movil  } = useDeviceDetected();
    const { legals  } = (0,external_react_redux_.useSelector)((state)=>state.app);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-gray-100 p-5",
        children: movil ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
            className: "flex p-5 text-sm",
            children: [
                " ",
                legals,
                " "
            ]
        }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: "flex p-8 px-20 w-6/12 m-4",
            children: legals
        })
    });
};

;// CONCATENATED MODULE: external "sweetalert2"
const external_sweetalert2_namespaceObject = require("sweetalert2");
var external_sweetalert2_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_namespaceObject);
;// CONCATENATED MODULE: ./components/Promotions.jsx




const Promotions = ()=>{
    const { promotions  } = (0,external_react_redux_.useSelector)((state)=>state.app);
    const { title , logoPromo , Subtitle , paragraphs , button , imagePromo  } = promotions[0];
    const onSubmit = ()=>{
        const numPedido = Math.floor(Math.random() * 1000);
        external_sweetalert2_default().fire({
            title: "Codigo de compra " + numPedido,
            text: "Resumen: " + title,
            icon: "info",
            confirmButtonColor: "#3085d6"
        }).then((result)=>{
            if (result.isConfirmed) {
                external_sweetalert2_default().fire("Gracias por tu compra!", "", "success");
            }
        });
    };
    //console.log({title, logoPromo, Subtitle, paragraphs, button, imagePromo } )
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "m-3 sm:m-32",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col items-center shadow-xl xl:flex-row rounded-3xl",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: "cursor-pointer rounded-3xl ",
                    src: imagePromo,
                    alt: ""
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col justify-between p-4 leading-normal",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "m-2 py-5 w-48 ",
                            src: logoPromo
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                            className: "m-2 xl:text-6xl text-3xl text-center ",
                            children: [
                                title,
                                " "
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "m-2 xl:text-3xl text-xl font-normal text-gray-900",
                            children: [
                                Subtitle,
                                " "
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "m-2 xl:text-3xl text-xl font-normal text-gray-900",
                            children: [
                                paragraphs,
                                " "
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "py-2.5 px-5 mr-2 m-2 text-xl bg-white rounded-lg border border-black hover:bg-gray-200 ",
                            onClick: onSubmit,
                            children: button.text
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/CarouselItem.jsx

const CarouselItem = ({ resource , index  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "carousel-item text-center relative w-64 h-64 snap-start",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: "h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0",
                style: {
                    backgroundImage: `url(${resource.src || ""})`
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: resource.src || "",
                    alt: resource.alt,
                    className: "w-full aspect-square hidden"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: "h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
            })
        ]
    }, index);
};

;// CONCATENATED MODULE: ./components/CarouselComponent.jsx





const CarouselComponent = ()=>{
    const { movil , browser  } = useDeviceDetected();
    const { carousel: carouselData  } = (0,external_react_redux_.useSelector)((state)=>state.app);
    const { text , desktop , mobile  } = carouselData;
    const maxScrollWidth = (0,external_react_.useRef)(0);
    const [currentIndex, setCurrentIndex] = (0,external_react_.useState)(0);
    const carousel = (0,external_react_.useRef)(null);
    const movePrev = ()=>{
        if (currentIndex > 0) {
            setCurrentIndex((prevState)=>prevState - 1);
        }
    };
    const moveNext = ()=>{
        if (carousel.current !== null && carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current) {
            setCurrentIndex((prevState)=>prevState + 1);
        }
    };
    const isDisabled = (direction)=>{
        if (direction === "prev") {
            return currentIndex <= 0;
        }
        if (direction === "next" && carousel.current !== null) {
            return carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current;
        }
        return false;
    };
    (0,external_react_.useEffect)(()=>{
        if (carousel !== null && carousel.current !== null) {
            carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
        }
    }, [
        currentIndex
    ]);
    (0,external_react_.useEffect)(()=>{
        maxScrollWidth.current = carousel.current ? carousel.current.scrollWidth - carousel.current.offsetWidth : 0;
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "carousel my-12 mx-auto",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-4xl leading-8 font-semibold mb-12 text-slate-700",
                children: text
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-between absolute top left w-full h-full",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                onClick: movePrev,
                                className: "hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300",
                                disabled: isDisabled("prev"),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-12 w-20 -ml-5",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: 2,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M15 19l-7-7 7-7"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "sr-only",
                                        children: "Prev"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                onClick: moveNext,
                                className: "hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300",
                                disabled: isDisabled("next"),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-12 w-20 -ml-5",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: 2,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M9 5l7 7-7 7"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "sr-only",
                                        children: "Next"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        ref: carousel,
                        className: "carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0",
                        children: browser ? desktop.map((resource, index)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx(CarouselItem, {
                                resource: resource,
                                index: index
                            }, index);
                        }) : mobile.map((resource, index)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx(CarouselItem, {
                                resource: resource,
                                index: index
                            }, index);
                        })
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/index.js















const Home = (props)=>{
    const { movil  } = useDeviceDetected();
    const { locale  } = useLanguage();
    const dispatch = (0,external_react_redux_.useDispatch)();
    switch(locale){
        case "en":
            dispatch((0,appSlice/* onLoadData */.Eo)(props.data.en));
            break;
        case "es":
            dispatch((0,appSlice/* onLoadData */.Eo)(props.data.es));
            break;
        default:
            dispatch((0,appSlice/* onLoadData */.Eo)(props.data.es));
            break;
    }
    if (movil) {
        dispatch((0,appSlice/* onDeviceDetected */.AJ)("isMobile"));
    } else {
        dispatch((0,appSlice/* onDeviceDetected */.AJ)("isBrowser"));
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Xcaret"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(NavBar, {}),
            movil ? /*#__PURE__*/ jsx_runtime_.jsx(HeaderMovil, {}) : /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Promotions, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(CarouselComponent, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Legals, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(PreFooter, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
};
Home.getInitialProps = async (ctx)=>{
    const res = await external_isomorphic_fetch_default()("https://raw.githubusercontent.com/javialcocer/test-json/main/data.json");
    const resJSON = await res.json();
    return {
        data: resJSON
    };
};
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 599:
/***/ ((module) => {

module.exports = require("react-device-detect");

/***/ }),

/***/ 22:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [23], () => (__webpack_exec__(188)));
module.exports = __webpack_exports__;

})();