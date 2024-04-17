# Ticket Helpdesk

This project is a ticket helpdesk system built with [Next.js](https://nextjs.org/), [Prisma](https://www.prisma.io/), and [MaterialUI](https://mui.com/material-ui/), designed to manage support tickets efficiently.

---

## Getting Started

### Prerequisites

Before running the project, make sure you have the following installed:

- Node.js
- npm or yarn or bun

### Installation

1.  Clone the repository:

```sh
git clone https://github.com/Tezigudo/ticket-helpdesk.git
```

2.  Go to project directory

```sh
cd ticket-helpdesk
```

3.  Install dependencies:

```sh
# npm
npm install

# yarn
yarn install

# bun
bun install
```

4. Run database migrations:

```sh
# npm or yarn
npx prisma migrate dev --name init

# bun
bunx prisma migrate dev --name init
```

5. Generate Prisma client:

```sh
# npm or yarn
npx prisma generate dev

# bun
bunx prisma generate dev
```

### Running the Application

To run the application in development mode, use the following command:

```sh

# npm
npm run dev

# yarn
yarn dev

# bun
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Mocking Data

To populate the database with mock ticket data, you can run the mock API endpoint provided:

```sh
GET: /api/tickets/mock
```

### Running Tests

To run tests, you can use the following commands:

```sh
# npm
npm test
# yarn
yarn test
# bun
bun test
```

These commands will execute the test suites and provide feedback on the test results.

### API Documentation

For detailed documentation of the API endpoints, refer to the [API documentation](https://app.swaggerhub.com/apis-docs/GODJANGG/ticket-management_api/1.0.0).
