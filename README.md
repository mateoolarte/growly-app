# Growly Core

Web application to manage the core features of the platform

## Built With

- [NextJS](https://nextjs.org/)
- Typescript
- React
- SASS
- ESLint
- Prettier
- Husky & Lint staged

## Installing / Getting started

### Prerequisites

- [NodeJS LTS](https://nodejs.org/en)
- [PNPM package manager](https://pnpm.io/installation)
- Configure the [Strapi CMS](https://github.com/usegrowly/cms)

```shell
pnpm install
```

After installing the dependencies you should copy the values from `.env.example` file.

**Note:** For the `NEXT_PUBLIC_CMS_TOKEN_ACCESS` variable you should go to the [cms](https://github.com/usegrowly/cms) Strapi project and follow these steps in order to get the value

- Go to [http://localhost:1337/admin](http://localhost:1337/admin)
- Click on Settings on the Left panel inside Strapi Admin
- Go to API Tokens
- Click on the button **Create new API Token**
  - Fill the name field with a token indentifier name
  - Select in Token duration dropdown Unlimited option
  - Select in Token type Read-only option
  - Click on Save button
- If everything was correct you should show the Token access value, get the value and put it in the `NEXT_PUBLIC_CMS_TOKEN_ACCESS` variable

## Developing

### Run local environment

```shell
pnpm dev
```

### Building

```shell
pnpm build
```

### Linting

```shell
pnpm pretty
```

### Deploying

Create a PR with the details about what you are trying to change, ask for review, and merge into the `main` branch
