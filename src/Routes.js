import React from 'react';
import CSSMinifier from './components/CSSMInifier';
import CodingTools from './components/CodingTools';




const Routes = [
    {
        sidebarName: "Coding Tools",
        path : '/coding-tools',
        component: CodingTools,
        child :    [{
                path: '/coding-tools/css-minifier',
                sidebarName: 'CSS-Minifier',
                component: CSSMinifier,
                description : "A CSS minifier works by analyzing the CSS file's structure and removing any unnecessary whitespace, line breaks, and comments."
            },
            ]
    },
    {
        sidebarName: "Text Tools",
        path : '/text-tools',
        component: CodingTools,
        child :    [{
                path: '/coding-tools/css-minifier',
                sidebarName: 'CSS-Minifier',
                component: CSSMinifier
            },
            ]
    },
    {
        sidebarName: "CSS Tools",
        path : '/css-tools',
        component: CodingTools,
        child :    [{
                path: '/coding-tools/css-minifier',
                sidebarName: 'CSS-Minifier',
                component: CSSMinifier
            },
            ]
    }
];

export default Routes;