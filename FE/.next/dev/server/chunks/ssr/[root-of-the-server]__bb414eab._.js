module.exports = [
"[next]/internal/font/google/inter_ae2a9de.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "inter_ae2a9de-module___cwjWq__className",
  "variable": "inter_ae2a9de-module___cwjWq__variable",
});
}),
"[next]/internal/font/google/inter_ae2a9de.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_ae2a9de$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_ae2a9de.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_ae2a9de$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Inter', 'Inter Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_ae2a9de$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_ae2a9de$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/src/app/metadata.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "metadata",
    ()=>metadata,
    "siteConfig",
    ()=>siteConfig
]);
const siteConfig = {
    name: "Next.js Shadcn Base",
    description: "Aplikasi berbasis Next.js dengan UI yang modern",
    url: "https://your-domain.com",
    locale: "id-ID",
    keywords: [
        "next.js",
        "react",
        "aplikasi web",
        "indonesia",
        "modern ui",
        "shadcn"
    ]
};
const metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    icons: {
        icon: [
            {
                url: "/favicon/favicon.ico",
                type: "image/x-icon"
            },
            {
                url: "/images/logo.png",
                type: "image/png"
            }
        ],
        shortcut: "/favicon/favicon.ico",
        apple: [
            {
                url: "/images/logo.png",
                type: "image/png"
            },
            {
                url: "/images/logo.png",
                sizes: "180x180",
                type: "image/png"
            }
        ],
        other: [
            {
                rel: "mask-icon",
                url: "/images/logo.png",
                color: "#000000"
            }
        ]
    },
    manifest: "/favicon/site.webmanifest",
    metadataBase: new URL(siteConfig.url),
    openGraph: {
        type: "website",
        locale: siteConfig.locale,
        alternateLocale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: "/images/logo.png",
                width: 1200,
                height: 630,
                alt: siteConfig.name
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [
            "/images/logo.png"
        ]
    },
    other: {
        "google-site-verification": "your-verification-code",
        "msvalidate.01": "your-verification-code",
        "msapplication-TileColor": "#000000",
        "apple-mobile-web-app-capable": "yes",
        "apple-mobile-web-app-status-bar-style": "black"
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large"
        }
    },
    appleWebApp: {
        title: siteConfig.name,
        statusBarStyle: "black",
        capable: true
    }
};
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_ae2a9de$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_ae2a9de.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/metadata.ts [app-rsc] (ecmascript)");
;
;
;
;
;
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].locale,
        suppressHydrationWarning: true,
        className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_ae2a9de$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {}, void 0, false, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_ae2a9de$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].className,
                suppressHydrationWarning: true,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"],
    "metadata",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["metadata"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/metadata.ts [app-rsc] (ecmascript)");
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__bb414eab._.js.map