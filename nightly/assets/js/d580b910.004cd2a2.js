"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[2998],{22952:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var o=n(31085),i=n(71184);const s={},a="UI5 Web Components & Vue.js",p={id:"docs/frameworks/Vue",title:"UI5 Web Components & Vue.js",description:"In this tutorial you will learn how to add UI5 Web Components to your application. You can add UI5 Web Components both to new Vue.js applications and to already existing ones.",source:"@site/docs/docs/3-frameworks/03-Vue.md",sourceDirName:"docs/3-frameworks",slug:"/docs/frameworks/Vue",permalink:"/ui5-webcomponents/nightly/docs/frameworks/Vue",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"UI5 Web Components & Angular",permalink:"/ui5-webcomponents/nightly/docs/frameworks/Angular"},next:{title:"Development",permalink:"/ui5-webcomponents/nightly/docs/development/"}},c={},l=[{value:"Setting up a Vite and Vue.js project with UI5 Web Components",id:"setting-up-a-vite-and-vuejs-project-with-ui5-web-components",level:2},{value:"Step 1. Setup a Vue project with Vite.",id:"step-1-setup-a-vue-project-with-vite",level:3},{value:"Step 2. Add UI5 Web Components",id:"step-2-add-ui5-web-components",level:3},{value:"Step 3. Instruct the compiler to treat UI5 Web Components as custom elements.",id:"step-3-instruct-the-compiler-to-treat-ui5-web-components-as-custom-elements",level:3},{value:"Step 4. Import the components that you are going to use.",id:"step-4-import-the-components-that-you-are-going-to-use",level:3},{value:"Step 5. Use the imported elements in your application.",id:"step-5-use-the-imported-elements-in-your-application",level:3},{value:"Step 6. Launch the application",id:"step-6-launch-the-application",level:3},{value:"Setting up a Nuxt project with UI5 Web Components",id:"setting-up-a-nuxt-project-with-ui5-web-components",level:2},{value:"Step 1. Setup a Nuxt project",id:"step-1-setup-a-nuxt-project",level:3},{value:"Step 2. Add UI5 Web Components",id:"step-2-add-ui5-web-components-1",level:3},{value:"Step 3. Configure the Nuxt application",id:"step-3-configure-the-nuxt-application",level:3},{value:"Step 4. Import the components that you are going to use",id:"step-4-import-the-components-that-you-are-going-to-use-1",level:3},{value:"Step 5. Use the imported elements in your application",id:"step-5-use-the-imported-elements-in-your-application-1",level:3},{value:"Step 6. Launch the application",id:"step-6-launch-the-application-1",level:3},{value:"Two-Way Data Binding",id:"two-way-data-binding",level:2}];function r(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"ui5-web-components--vuejs",children:"UI5 Web Components & Vue.js"}),"\n",(0,o.jsx)(t.p,{children:"In this tutorial you will learn how to add UI5 Web Components to your application. You can add UI5 Web Components both to new Vue.js applications and to already existing ones."}),"\n",(0,o.jsx)(t.h2,{id:"setting-up-a-vite-and-vuejs-project-with-ui5-web-components",children:"Setting up a Vite and Vue.js project with UI5 Web Components"}),"\n",(0,o.jsx)(t.h3,{id:"step-1-setup-a-vue-project-with-vite",children:"Step 1. Setup a Vue project with Vite."}),"\n",(0,o.jsxs)(t.p,{children:["To initialize a Vue project based on Vite, please follow the instructions provided in the ",(0,o.jsx)(t.a,{href:"https://vuejs.org/guide/quick-start.html",children:"official Vue documentation."})]}),"\n",(0,o.jsx)(t.h3,{id:"step-2-add-ui5-web-components",children:"Step 2. Add UI5 Web Components"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm install @ui5/webcomponents\n"})}),"\n",(0,o.jsx)(t.h3,{id:"step-3-instruct-the-compiler-to-treat-ui5-web-components-as-custom-elements",children:"Step 3. Instruct the compiler to treat UI5 Web Components as custom elements."}),"\n",(0,o.jsxs)(t.p,{children:["To avoid issues, it is recommended to exclude our custom elements from component resolution by specifying ",(0,o.jsx)(t.code,{children:"compilerOptions.isCustomElement"})," in our ",(0,o.jsx)(t.code,{children:"vite.config"})," file."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"// vite.config.js\n\nimport { defineConfig } from 'vite'\nimport vue from '@vitejs/plugin-vue'\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [\n    vue({\n      template: {\n        compilerOptions: {\n          // treat all tags with a ui5- as custom elements\n          isCustomElement: tag => tag.includes('ui5-')\n        }\n      }\n    })\n  ]\n})\n"})}),"\n",(0,o.jsx)(t.h3,{id:"step-4-import-the-components-that-you-are-going-to-use",children:"Step 4. Import the components that you are going to use."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'import "@ui5/webcomponents/dist/Button.js";\n'})}),"\n",(0,o.jsx)(t.h3,{id:"step-5-use-the-imported-elements-in-your-application",children:"Step 5. Use the imported elements in your application."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:"<ui5-button>Hello world!</ui5-button>\n"})}),"\n",(0,o.jsx)(t.h3,{id:"step-6-launch-the-application",children:"Step 6. Launch the application"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm run dev\n"})}),"\n",(0,o.jsx)(t.h2,{id:"setting-up-a-nuxt-project-with-ui5-web-components",children:"Setting up a Nuxt project with UI5 Web Components"}),"\n",(0,o.jsx)(t.p,{children:"Nuxt is a popular JavaScript framework built on Vue.js, designed to create server-rendered, single-page, and statically generated applications. It simplifies the development process by offering features like routing, state management, and an extensive plugin ecosystem."}),"\n",(0,o.jsx)(t.h3,{id:"step-1-setup-a-nuxt-project",children:"Step 1. Setup a Nuxt project"}),"\n",(0,o.jsxs)(t.p,{children:["To initialize a Nuxt project, please follow the instructions provided in the ",(0,o.jsx)(t.a,{href:"https://nuxt.com/docs/getting-started/installation#new-project",children:"official Nuxt documentation"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"step-2-add-ui5-web-components-1",children:"Step 2. Add UI5 Web Components"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm install @ui5/webcomponents\n"})}),"\n",(0,o.jsx)(t.h3,{id:"step-3-configure-the-nuxt-application",children:"Step 3. Configure the Nuxt application"}),"\n",(0,o.jsxs)(t.p,{children:["To avoid Vue's compiler treating UI5 Web Components as standard Vue components, you need to configure ",(0,o.jsx)(t.code,{children:"compilerOptions.isCustomElement"})," in your ",(0,o.jsx)(t.code,{children:"nuxt.config"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Here's an example:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:'// nuxt.config.ts\n\n// https://nuxt.com/docs/api/nuxt-config\nexport default defineNuxtConfig({\n  vue: {\n    compilerOptions: {\n      isCustomElement: (tag) => tag.startsWith("ui5-"),\n    },\n  },\n})\n'})}),"\n",(0,o.jsx)(t.h3,{id:"step-4-import-the-components-that-you-are-going-to-use-1",children:"Step 4. Import the components that you are going to use"}),"\n",(0,o.jsx)(t.p,{children:"In Nuxt, auto-import functionality does not work for UI5 Web Components. You must explicitly import each component you plan to use."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:'<script setup lang="ts">\nimport "@ui5/webcomponents/dist/Button.js";\n<\/script>\n'})}),"\n",(0,o.jsx)(t.h3,{id:"step-5-use-the-imported-elements-in-your-application-1",children:"Step 5. Use the imported elements in your application"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:"<template>\n  <ui5-button>Hello world!</ui5-button>\n</template>\n"})}),"\n",(0,o.jsx)(t.h3,{id:"step-6-launch-the-application-1",children:"Step 6. Launch the application"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm run dev\n"})}),"\n",(0,o.jsx)(t.h2,{id:"two-way-data-binding",children:"Two-Way Data Binding"}),"\n",(0,o.jsxs)(t.p,{children:["In order to use two-way data binding, use ",(0,o.jsx)(t.code,{children:"v-model"})," as follows:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:'<ui5-input v-model="inputValue"></ui5-input>\n'})}),"\n",(0,o.jsxs)(t.p,{children:["For the ",(0,o.jsx)(t.code,{children:"CheckBox"})," and ",(0,o.jsx)(t.code,{children:"RadioButton"})," web components, you need to include an additional ",(0,o.jsx)(t.code,{children:"type"})," attribute. This informs the Vue compiler that these components use the ",(0,o.jsx)(t.code,{children:"checked"})," property (unlike most input-type components that use the ",(0,o.jsx)(t.code,{children:"value"})," property)."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:'<ui5-radio-button type="radio" v-model="rbValue"></ui5-radio-button>\n<ui5-checkbox type="checkbox" v-model="cbValue"></ui5-checkbox>\n'})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},71184:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>p});var o=n(14041);const i={},s=o.createContext(i);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);