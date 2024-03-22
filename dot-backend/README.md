<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# DOT Freelance Full stack Developer Test

Simple application for Managene Classification Problem (CRUD & Simple Authentication), build using Nest JS include any library like TypeOrm, class-validator, mysql2, bcrypt, etc

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

## Tech Stack

**Library and Framework:** Nest JS, JWT, TypeORM, class-validator, dotenv, mysql2, bcrypt, etc

## API Reference

#### More endpoint can clone/fork/download Postman Collection

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://app.getpostman.com/run-collection/9050639-6f5d5e2e-397e-429f-9151-57958a5967aa?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D9050639-6f5d5e2e-397e-429f-9151-57958a5967aa%26entityType%3Dcollection%26workspaceId%3D787eb70b-18d3-4d91-a5c7-3ed85a03a64e)

## Screenshots (Database Schema)

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Running Migration the app

```bash
# run migration
$ yarn migration:run

# generate migration
$ yarn migration:generate

# create migration
$ yarn migration:create


# revert migration
$ yarn migration:revert
```

## Running Seeder the app (in Progress)

```bash
# development
$ "db:seed": "ts-node -r tsconfig-paths/register ./src/seeders/seed.helper.ts"

```

## You Can Import SQL Dump Manually (using DBMS Client or CLI)

-

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

---

Copyright © 2024 by Muhamad Zainal Arifin

> The Project is Under MIT licensed.
