# gitidy

> A tool for tidying Gitflow.

## Setup

1. Install dependencies:
```sh
# Install in development machine
npm install

# Or, install in production server
npm ci
```

2. Run this app:
```sh
# Run in development mode
npm run dev

# Or, run in production mode
npm start
```

## Docker

```sh
# 1. Build container
docker build -t gitidy .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> gitidy
```

## Contributing

If you have suggestions for how gitidy could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2023 Muhammad Rendra
