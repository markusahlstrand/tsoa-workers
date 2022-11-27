# tsoa-jsdom

A lightweight add-on to make the TSOA framework work in jsdom and the edge

The goal of this lib is to make it possible to run the fantastic [TSOA](https://tsoa-community.github.io/)-library in cloudflare workers.

The standard TSOA framework has dependencies on node-libraries that aren't available in jsdom, which of course is a problem. It is also a fairly large library which isn't ideal when running on the edge.

## Limitations

The add-on will focus on getting the most commonly used subset of the functionality working and missing pieces will be added as they are needed.

## Strategy

The TSOA framework consists of two parts: The TSOA CLI which generates the routes and the TSOA runtime.

The TSOA CLI is only used when compiling the code and at this part is fine to keep in Node-js. As the CLI doesn't seem to execute the decorators or care about where they are imported from it's possible to just move those dependencies to a separate file that doesn't have any external dependencies.

The TSOA CLI uses a handlebars template for generating the routes file, so we just need to replace this with another template that uses a jsdom-friendly router.

The last step is to replace the runtime with the validation logic with something leaner that runs without Node-js dependencies.
