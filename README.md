# tsoa-workers

This is a lib is to make it possible to run the fantastic [TSOA](https://tsoa-community.github.io/)-library in cloudflare workers.

The standard TSOA framework has dependencies on node-libraries in the CLI-part that aren't available in jsdom, which of course is a problem. It also only supports express and koa, that doesn't run in jsdom either

## Strategy

The TSOA framework consists of two parts: The TSOA CLI which generates the routes and the TSOA runtime.

The TSOA CLI is only used when compiling the code and at this part is fine to keep in Node-js. As the CLI doesn't seem to execute the decorators or care about where they are imported from it's possible to just move those dependencies to a separate file that doesn't have any external dependencies.

The TSOA CLI uses a handlebars template for generating the routes file, so we just provide another template that uses the cloudworker-router.

## Examples

Check out the examples folder for how to set up a project using tsoa-workers. The only change need compared to vanilla tsoa is just a single line in the `tsoa.json`-file to switch the middleware template:

```
{
  "entryFile": "src/app.ts",
  "noImplicitAdditionalProperties": "throw-on-extras",
  "controllerPathGlobs": ["src/**/*Controller.ts"],
  "spec": {
    "outputDirectory": "build",
    "specVersion": 3,
  },
  "routes": {
    "routesDir": "build",
    "middlewareTemplate": "../../src/cloudworker-router.hbs"
  }
}
```
