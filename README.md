<p align="center" margin="20 0"><a href="https://horusec.io/">
    <img src="https://github.com/ZupIT/horusec-devkit/blob/main/assets/horusec_logo.png?raw=true" 
            alt="logo_header" width="65%" style="max-width:100%;"/></a></p>

<p align="center">
    <a href="https://github.com/ZupIT/horusec-platform/pulse" alt="activity">
        <img src="https://img.shields.io/github/commit-activity/m/ZupIT/horusec-platform"/></a>
    <a href="https://github.com/ZupIT/horusec-platform/graphs/contributors" alt="contributors">
        <img src="https://img.shields.io/github/contributors/ZupIT/horusec-platform"/></a>
    <a href="https://github.com/ZupIT/horusec-platform/actions/workflows/analytic-pipeline.yml" alt="analytic">
        <img src="https://img.shields.io/github/workflow/status/ZupIT/horusec-platform/Analytic?label=analytic"/></a>
    <a href="https://github.com/ZupIT/horusec-platform/actions/workflows/api-pipeline.yml" alt="api">
        <img src="https://img.shields.io/github/workflow/status/ZupIT/horusec-platform/Api?label=api"/></a>
    <a href="https://github.com/ZupIT/horusec-platform/actions/workflows/core-pipeline.yml" alt="core">
        <img src="https://img.shields.io/github/workflow/status/ZupIT/horusec-platform/Core?label=core"/></a>
    <a href="https://github.com/ZupIT/horusec-platform/actions/workflows/manager-pipeline.yml" alt="manager">
        <img src="https://img.shields.io/github/workflow/status/ZupIT/horusec-platform/Manager?label=manager"/></a>
    <a href="https://github.com/ZupIT/horusec-platform/actions/workflows/messages-pipeline.yml" alt="messages">
        <img src="https://img.shields.io/github/workflow/status/ZupIT/horusec-platform/Messages?label=messages"/></a>
    <a href="https://github.com/ZupIT/horusec-platform/actions/workflows/migrations-pipeline.yml" alt="migrations">
        <img src="https://img.shields.io/github/workflow/status/ZupIT/horusec-platform/Migrations?label=migrations"/></a>
    <a href="https://github.com/ZupIT/horusec-platform/actions/workflows/vulnerability-pipeline.yml" alt="vulnerability">
        <img src="https://img.shields.io/github/workflow/status/ZupIT/horusec-platform/Vulnerability?label=vulnerability"/></a>
    <a href="https://github.com/ZupIT/horusec-platform/actions/workflows/webhook-pipeline.yml" alt="webhook">
        <img src="https://img.shields.io/github/workflow/status/ZupIT/horusec-platform/Webhook?label=webhook"/></a>
    <a href="https://github.com/ZupIT/horusec-platform/actions/workflows/auth-pipeline.yml" alt="auth">
        <img src="https://img.shields.io/github/workflow/status/ZupIT/horusec-platform/Auth?label=auth"/></a>
    <a href="https://opensource.org/licenses/Apache-2.0" alt="license">
        <img src="https://img.shields.io/badge/license-Apache%202-blue"/></a>
</p>

# Horusec Platform

Horusec Platform is a set of web services that integrate with the [Horusec CLI](https://github.com/ZupIT/horusec) 
to facilitate the visualization and management of vulnerabilities.

[comment]: <> (@todo add a gif of manager usage)

## Dependencies

- [RabbitMQ](https://www.rabbitmq.com/)
- [PostgreSQL](https://www.postgresql.org/)

## Installation

There are several ways to install horusec platform in your environment, choose the one that is most comfortable for you.

Just remember to change the default environment variables values to the new and secure ones.

In some types of installation we use a `make` command to simplify the process.
If you want to know everything that will be executed, take a look at the `Makefile` located at the root of the project.

### Install with docker compose:

```cmd
make install
```

After executing the command, we will start the docker compose file `compose.yml`, which contains all services, migrations and the needed dependencies. 
The compose file can be found in `deployments/compose/compose.yaml` and migrations in `migrations/source`.

After that, the installation will be ready, with all default values, the latest versions, and
the following user for tests:

```
Username: dev@example.com
Password: Devpass0*
```

By default, the docker compose file is configured to perform a standard installation. 
In the case of production environments, be sure to change the values of the environment variables to new and secure ones.

> :warning: We **do not recommend** using docker-compose installation in a productive environment.

Click [here](https://horusec.io/docs/web/installation/install-with-docker-compose) 
to check full docker compose installation docs.

### Install with helm:

Each release contains its own helm files for that version, which can be found 
[here](https://github.com/ZupIT/horusec-platform/releases), they can also be found at `deployments/helm`.
In both cases they will be separated by each service of the architecture.

Click [here](https://horusec.io/docs/web/installation/install-with-helm) to check the complete helm installation docs.

### Install with horusec-operator:

Horusec-operator performs management between Horusec web services and its Kubernetes cluster. It was created based on a community’s idea to have a simpler way to install the services in an environment using Kubernetes. You can see more about kubernetes operators [here](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/)
Click [here](https://horusec.io/docs/web/installation/install-with-operator/) to check full horusec-operator installation docs.


## Features

The following are some main features that Horusec Platform provides, to learn more about these and several other 
features access our [documentation](https://horusec.io/docs/web/overview).

### MultiTenancy

Distribute only the necessary [permissions](https://horusec.io/docs/web/overview/#1-multitenant) according to each user.

<p align="center" margin="20 0"><img src="assets/horusec-invite-users-1.png" alt="multiTenancy" width="100%" style="max-width:100%;"/></p>

### Dashboard

Dashboard with various metrics about your vulnerabilities for both workspace and repository.

<p align="center" margin="20 0"><img src="assets/horusec-dashboard-1.png" alt="dashboard" width="100%" style="max-width:100%;"/></p>

### Vulnerability Management

Vulnerability management screen, allowing to identify false positives, accepted risk and even modify a severity 
to a value appropriate to the reality of the vulnerability.

<p align="center" margin="20 0"><img src="assets/horusec-vuln-management-1.png" alt="vuln-management" width="100%" style="max-width:100%;"/></p>

### Tokens
Creation of workspace or repository authentication 
[tokens](https://horusec.io/docs/tutorials/how-to-create-an-authorization-token) for your pipeline.

<p align="center" margin="20 0"><img src="assets/horusec-create-token-1.png" alt="tokens" width="100%" style="max-width:100%;"/></p>

### Authentication Types

With the Horusec Platform you can choose which form of authentication you will use.

Currently, having three possibilities:

- HORUSEC (native) 
- LDAP
- KEYCLOAK

Checkout for our authentication types [docs](https://horusec.io/docs/tutorials/how-to-change-authentication-types).

[comment]: <> ([comment]: <> &#40;## Migrating From V1&#41;)

[comment]: <> (For more information on migrating from the previous version to the current one see our )

[comment]: <> ([documentation]&#40;@todo&#41;.)

## Communication

We have a few channels for contact, feel free to reach out to us at:

- [GitHub Issues](https://github.com/ZupIT/horusec-platform/issues)
- [Zup Open Source Forum](https://forum.zup.com.br)

## Contributing

Feel free to use, recommend improvements, or contribute to new implementations.

If this is our first repository that you visit, or would like to know more about Horusec,
check out some of our other projects.

- [Horusec CLI](https://github.com/ZupIT/horusec)
- [Horusec DevKit](https://github.com/ZupIT/horusec-devkit)
- [Horusec Engine](https://github.com/ZupIT/horusec-engine)
- [Horusec Operator](https://github.com/ZupIT/horusec-operator)
- [Horusec Admin](https://github.com/ZupIT/horusec-admin)
- [Horusec VsCode](https://github.com/ZupIT/horusec-vscode-plugin)

This project exists thanks to all the contributors. You rock! ❤️🚀
