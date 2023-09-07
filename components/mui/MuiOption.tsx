
import { Option, Select } from "@mui/joy";
import * as React from 'react'

const component = Option

// (props: any) => {
//     const { children, ...rest } = props;

//     return (<Option {...rest}>{children}</Option>);
// }

const config: any  = {
    name: "Option",
    canHaveChildren: true,
    // childRequirements: {
    //     message: "You can only put Text",
    //     query: {
    //         "component.name": { $in: ["Text"] },
    //     },
    // },
    inputs: [
        // {
        //   name: "label",
        //   type: "string",
        // },
        // {
        //     name: 'sectionA',
        //     type: 'blocks', // Specify type of blocks
        //     // hideFromUI: true,
        //     helperText: 'This is an editable region.',
        //     defaultValue: [
        //         {
        //             '@type': '@builder.io/sdk:Element',
        //             component: {
        //                 name: 'Text',
        //                 options: {
        //                     text: 'Section A Editable in Builder...',
        //                 },
        //             },
        //             responsiveStyles: {
        //                 large: {
        //                     // Styles for the editable section
        //                 },
        //             },
        //         },
        //     ],
        // },
        {
            name: "value",
            type: "string",
        },
        {
            name: "disabled",
            type: "boolean",
        },
        {
            name: "selected",
            type: "boolean",
        },
    ],
    defaultChildren: [
        {
            "@type": "@builder.io/sdk:Element",
            component: { name: "Text", options: { text: "Option 1" } },
        },
    ],
}

export default {
    component, 
    ...config 
}