#

This is an [Electron](https://www.electronjs.org/) shell utilising Vite for routing within the application

## Getting started

First, install your dependencies:

```
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then start your development instance:

```
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

This will load up an Electron shell and you will be able to see the main application which can be found at **/src/renderer**

## Information

#### Electron

##### Entrypoint

Electron requires a main entry point which can be found at **/src/electron/main.js** which starts the entire application.

##### CommonJS vs ESM

Everything outside the renderer uses CommonJS modules and so importing/exporting will need to match this.
The renderer uses ES Modules.

##### IPC

Electron has something called Context Isolation which essentially means that it can isolate code (The renderer) to run in a different context to itself. Because of this we have to manually pass any functions outside of renderer via [Inter-Process Communication (IPC)](https://electronjs.org/docs/latest/tutorial/ipc).

How this works, we have a file **/src/electron/ipc.js** that declares functions we will be able to pass through to the renderer application.
Then in **/src/electron/preload.js** we expose these functions to our renderer, the preload script is the first thing to run in the entire application as seen in our entrypoint **/src/electron/main.js**

#### Building

Currently the application is set to build a portable Windows application.
This can be generated for MacOS too by running:

```
npm run build:mac
# or
yarn build:mac
# or
pnpm build:mac
# or
bun build:mac
```
