# Founders Network Design System

## Requirements

Node 16 +

## Getting started:

In the root folder

First install the dependencies:

```
npm install
```

1 - To execute locally (development):

```
npm run storybook
```

Navigate to:

```
http://localhost:6006/
```

2 - To build the project to deploy in a server (generate static files):

```
npm run build-storybook
```

This will generate a folder "storybook-static", which can be deployed to a server or opened by just opening the "index.html" inside it.

## How to deploy the artifact to GCP.

1 - Fisrt you need to log in the GCP and run:

```
npm run artifactregistry-login
```

2 - Then you can run the code below in the terminal. It will generate the ./dist folder.

```
npm run build
```

2 - To publish it to npm, just go inside the ./dist folder and run.

```
npm publish
```

## How to use use on another apps.

1 - Copy the .npmrc file and add it to the root folder of your project

2 - Install the package run:

```
npm install @fn/fn-ds@latest
```
