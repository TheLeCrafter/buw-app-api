# Bundesumweltwettbewerb App Api
[![CodeQL](https://github.com/TheLeCrafter/buw-app-api/actions/workflows/codeql-analysis.yml/badge.svg?branch=master)](https://github.com/TheLeCrafter/buw-app-api/actions/workflows/codeql-analysis.yml) <br>
On startup the app will download the blog post content and display it nicely. The api is hosted at https://buw-api.thelecrafter.dev/data for the data and at https://buw-api.thelecrafter.dev/thumbnails/<image.png> for the images.

## Building
#### Requirements:
- Node JS >= 17.3.0

The project is written in TypeScript and has to be compiled to JavaScript on first use. Clone the repository and run ``npm run compile`` on first use. If you don't edit the source code you don't need it to recompile on every restart and may just use ``npm run start``.

#### NOTE: You need to copy the .env.example file to .env to change the port.

## Using the CLI tool to create app posts
#### Requirements:
- Node JS >= 17.3.0

Clone the repository and run ``npm run cli``. Go through all steps and copy the generated output from the console into the /public/data/app_posts.json file.
