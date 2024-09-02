## Generate Static Params

This repository is used to learn how to use a nextjs14 function, read the readme file carefully, thank you

## Getting Started

Clone the repository

```bash
git clone https://github.com/gabriel-logan/generateStaticParams-nextjs14.git
```

## Installation

```bash
yarn install
```

## To test the application run

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## To generate a build with the static page, run the command

```bash
yarn build
```

You will see the output files in the /out folder.

## Run the production application with the generated static pages.

```bash
yarn start
```

Again Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## OBS

Look at the next.config.mjs file for an example of how to publish to github pages and have everything working correctly.

You will need to configure the assetPrefix and basePath with the name of your repository because by default nextjs starts the route with / but github pages starts the routes with the name of your repository.

If you want to change the output of the bundle file as well, you can use the distDir command.

See the official documentation: https://nextjs.org/docs/pages/building-your-application/deploying/static-exports

## Acknowledgment

Gabriel Logan

If you have any questions, feel free to open a discussion or an issue. Thank you.

## License

GNU GENERAL PUBLIC LICENSE - GPL-3.0 license
