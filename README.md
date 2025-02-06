# CAPFIZZ NODE BOT

A Node.js automation tool for managing multiple Capfizz Sentry Node accounts with parallel mining and real-time monitoring dashboard.

## Features

- Multi-account parallel mining
- Automatic ping every 60 seconds per account
- Auto retry with rate limit handling
- Real-time statistics dashboard
- Activity logging for each account
- Easy configuration management
- Modular and maintainable structure

## Prerequisites

Before running the bot, you need to:

1. Register an account at [Capfizz Mainnet](https://mainnet.capfizz.com/)
2. Install the [Capfizz Sentry Node Extension](https://chromewebstore.google.com/detail/capfizz-sentry-node/agollninopbkafedoijcnbdopajjjmfa) in your Chrome browser

## Installation

1. Clone this repository:

```bash
git clone https://github.com/Rambeboy/capfizz-node-bot.git && cd capfizz-node-bot
```

2. Install dependencies:

```bash
npm install
```

## Configuration

### Getting Your Account Cookie

1. Right-click on the Capfizz Sentry Node extension icon
2. Click "Inspect Popup"
3. Go to the "Network" tab
4. Copy the cookie from the request headers
5. Add the cookie to `data.txt` (one cookie per line for multiple accounts)

## Usage

1. Add your account cookie(s) to `data.txt`:

```
cookie_string_here
another_cookie_string_here
```

2. Run the bot:

```bash
npm run start
```

## Dashboard Interface

The dashboard shows:

- Account Activity Log: Real-time mining and ping activities
- Mining Statistics: Total points, successful mines, and failed mines
- Account List: Status of all configured accounts

## Controls

- Press `q` to quit
- Press `Esc` to exit
- Press `Ctrl+C` to terminate

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
