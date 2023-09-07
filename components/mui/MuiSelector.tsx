

import { Blocks } from "@builder.io/sdk-react";
import { Select } from "@mui/joy";
import * as React from 'react'

const SelectorComponent = (props: any) => {
  const { children, startDecorator, endDecorator, ...rest } = props;
  
  return (
    <Select
      {...rest}
      startDecorator={<Blocks blocks={startDecorator}></Blocks>}
      endDecorator={<Blocks blocks={endDecorator}></Blocks>}
    >
      {children}
    </Select>
  );
}

const config: any = {
  name: "Selector",
  canHaveChildren: true,
  inputs: [
    {
      name: 'startDecorator',
      type: 'blocks',
      hideFromUI: false,
      helperText: 'This is an editable region.',
      defaultValue: [
        {
          '@type': '@builder.io/sdk:Element',
          component: {
            name: 'Box',
          },
          responsiveStyles: {
            large: {},
          },
        },
      ],
    },
    // ... other inputs can be uncommented as needed
  ],
  defaultChildren: [
    // ... default children
  ],
}

export default {
  component: SelectorComponent,
  ...config
}


// import { Blocks } from "@builder.io/sdk-react";
// import { Option, Select } from "@mui/joy";
// import * as React from 'react'

// // const buildify = (Component: React.ElementType) => (props: any) => {
// //   let customProps = { ...props };
// //   delete customProps.builderBlock;
// //   delete customProps.builderState;
// //   delete customProps.builderContext;
// //   delete customProps.attributes;

// //   const sxStyle = {
// //     ...props.builderBlock.responsiveStyles?.[
// //     props?.builderState?.state?.deviceSize ?? "large"
// //     ],
// //   };

// //   return (
// //     <Component
// //       sx={sxStyle}
// //       {...customProps}
// //       {...props.attributes}
// //       // https://forum.builder.io/t/custom-component-with-nowrap-true-cause-focus-issue/817/5
// //       ref={(el: HTMLElement | null) => {
// //         props.attributes &&
// //           Object.entries(props.attributes).forEach(
// //             ([attributeName, attributeValue]) => {
// //               if (attributeName.startsWith("builder-")) {
// //                 el?.setAttribute(attributeName, attributeValue as string); // Here i set the "builder-*" attributes on the element
// //               }
// //             }
// //           );
// //       }}
    
// //     // {...props.attributes}
// //     />
// //   );
// // };

// let component = (props: any) => {
//   const { children, startDecorator, endDecorator, ...rest } = props;
  
//   return (
//     <Select
//       {...rest}
//       startDecorator={<Blocks blocks={startDecorator}></Blocks>}
//       endDecorator={<Blocks blocks={endDecorator}></Blocks>}
//     >
//       {children}
//     </Select>
//   );
// }

// // component = buildify(component)

// const config: any = {
//   name: "Selector",
//   // noWrap: true,
//   canHaveChildren: true,
//   inputs: [
//     {
//       name: 'startDecorator',
//       type: 'blocks', // Specify type of blocks
//       hideFromUI: false,
//       helperText: 'This is an editable region.',
//       defaultValue: [
//         {
//           '@type': '@builder.io/sdk:Element',
//           component: {
//             name: 'Box',
//           },
//           responsiveStyles: {
//             large: {
//               // Styles for the editable section
//             },
//           },
//         },
//       ],
//     },
//     // {
//     //   name: 'endDecorator',
//     //   type: 'uiBlocks', // Specify type of blocks
//     //   hideFromUI: false,
//     //   helperText: 'This is an editable region.',
//     //   defaultValue: [
//     //     {
//     //       '@type': '@builder.io/sdk:Element',
//     //       component: {
//     //         name: 'Icon',
//     //         options: {
//     //           name: 'AiFillAlipayCircle',
//     //         },
//     //       },
//     //       responsiveStyles: {
//     //         large: {
//     //           // Styles for the editable section
//     //         },
//     //       },
//     //     },
//     //   ],
//     // },
//     // {
//     //     name: "placeholder",
//     //     type: "string",
//     // },
//     // {
//     //   name: "name",
//     //   type: "string",
//     // },
//     // {
//     //   name: "variant",
//     //   type: "text",
//     //   enum: ["solid", "soft", "outlined", "plain"],
//     // },
//     // {
//     //   name: "indicator",
//     //   type: "string",
//     // },
//     // {
//     //   name: "autoFocus",
//     //   type: "boolean",
//     // },
//     // {
//     //   name: "defaultListboxOpen",
//     //   type: "boolean",
//     // },
//     // {
//     //   name: "defaultValue",
//     //   type: "text",
//     // },
//     // {
//     //   name: "disabled",
//     //   type: "boolean",
//     // },
//     // {
//     //   name: "listboxId",
//     //   type: "string",
//     // },
//     // {
//     //   name: "listboxOpen",
//     //   type: "bool",
//     // },
//     // {
//     //   name: "value",
//     //   type: "text",
//     // },
//     // {
//     //   name: "size",
//     //   type: "text",
//     //   enum: ["sm", "md", "lg"],
//     // },
//     // {
//     //   name: "color",
//     //   type: "text",
//     //   enum: ["primary", "neutral", "danger", "success", "warning", "info"],
//     // },
//   ],
//   defaultChildren: [
//     {
//       "@type": "@builder.io/sdk:Element",
//       component: {
//         name: "Option",
//         options: {
//           value: "opt-1",
//         },
//       },
//       children: [
//         {
//           "@type": "@builder.io/sdk:Element",
//           component: { name: "Text", options: { text: "Option 1" } },
//         },
//       ],
//     },
//     {
//       "@type": "@builder.io/sdk:Element",
//       component: {
//         name: "Option",
//         options: {
//           value: "opt-2",
//         },
//       },
//       children: [
//         {
//           "@type": "@builder.io/sdk:Element",
//           component: { name: "Text", options: { text: "Option 2" } },
//         },
//       ],
//     },
//     {
//       "@type": "@builder.io/sdk:Element",
//       component: {
//         name: "Option",
//         options: {
//           value: "opt-3",
//         },
//       },
//       children: [
//         {
//           "@type": "@builder.io/sdk:Element",
//           component: { name: "Text", options: { text: "Option 3" } },
//         },
//       ],
//     },
//   ],
// }

// export default {
//  component,
//   ...config
// }