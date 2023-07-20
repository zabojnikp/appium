# Appium Boilerplate

## Native App Tests

All tests can be executed on te devices as configured in [`wdio.android.app.conf.ts`](./config/wdio.android.app.conf.ts). Please check the below tests on what they do or on how to run them separately.

```sh
# For Android local execution
npm run android.app

```

### Run single test

You can run the single test with the following commands

```sh
# For Android local execution
npm run android.app -- --spec=tests/specs/app.login.spec.ts

```

### BrowserStack

This boilerplate provides a setup for testing with BrowserStack. Please check the [BrowserStack](./config/browserstack)-folder to see the
setup for iOS and Android.

Make sure you install the latest version of the `@wdio/browserstack-service` with

```shell
npm install --save-dev @wdio/browserstack-service
```

There are 2 scripts that can be used, see the [`package.json`](./package.json), to execute the tests in the cloud:

```sh

# For Android
$ npm run android.browserstack.app
```
