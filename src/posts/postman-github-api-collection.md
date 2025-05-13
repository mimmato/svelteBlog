---
title: Testing GitHub REST API in Postman collections
description: Setting up a postman collection of tests for the GitHub REST API
date: 2025-04-30
categories:
  - postman
  - rest api
  - api testing
  - postman collection
published: true
---

# Table of Contents

1. [Introduction](#1-introduction)

2. [Use Cases Covered](#2-use-cases-covered)  
   - [Repository Management](#-repository-management)  
   - [Issue Management](#-issue-management)  
   - [Pull Request Workflow](#-pull-request-workflow)
3. [Tests](#3-tests-coverage)
4. [Try it yourself](#4-try-it-yourself)


## 1. Introduction

This Postman collection is designed to test and demonstrate real-world use cases of the GitHub REST API without overwhelming the user with its full complexity. Instead of covering every available endpoint, this project focuses on common developer workflows like repository management, issue tracking, and pull requests. The goal is to provide a practical, maintainable set of API tests that reflect everyday usage—ideal for learning, automation practice, or onboarding QA and dev teams.

<br>

I decided to test the GitHub API to demonstrate my understanding of API testing using Postman, including request design, environment configuration, test scripting, and response validation. By focusing on practical scenarios instead of exhaustive endpoint coverage, this project showcases how to approach API testing with clarity, relevance, and maintainability in mind.

## 2. Use Cases Covered

This collection focuses on a set of practical, real-world workflows using the GitHub API. The goal is to keep the scope manageable while demonstrating common developer and team tasks—such as setting up repositories, managing issues, and working with pull requests. Each use case is broken into a dedicated folder and includes automated tests for validating API behavior.

### 🔧 Repository Management

This folder covers the core lifecycle of a GitHub repository—from checking existence to creating, updating, and deleting it. It also includes validation of repository settings and admin access.

<br>

| Method | Endpoint                                                      | Description                              |
|--------|---------------------------------------------------------------|------------------------------------------|
| GET    | `/repos/{owner}/{repo}`                                       | Check if the repository exists           |
| DELETE | `/repos/{owner}/{repo}`                                       | Delete the repository if it exists       |
| POST   | `/user/repos`                                                 | Create a new repository                  |
| GET    | `/repos/{owner}/{repo}/collaborators/{username}`             | Verify admin user access                 |
| GET    | `/repos/{owner}/{repo}`                                       | Retrieve repository information          |
| PATCH  | `/repos/{owner}/{repo}`                                       | Update repository details                |

### 🐛 Issue Management

This folder automates issue tracking by covering the creation, listing, updating, and filtering of issues. It also includes logic to validate whether issues are enabled and provides visibility into both open and closed issues.

<br>

| Method | Endpoint                                                      | Description                     |
|--------|---------------------------------------------------------------|---------------------------------|
| GET    | `/repos/{owner}/{repo}`                                       | Confirm issues are enabled      |
| GET    | `/repos/{owner}/{repo}/issues`                                | Retrieve all issues             |
| POST   | `/repos/{owner}/{repo}/issues`                                | Create a new issue              |
| GET    | `/repos/{owner}/{repo}/issues/{issue_number}`                | Get a specific issue            |
| PATCH  | `/repos/{owner}/{repo}/issues/{issue_number}`                | Update or close an issue        |
| GET    | `/repos/{owner}/{repo}/issues?state=open`                    | List open issues only           |
| GET    | `/repos/{owner}/{repo}/issues?state=closed`                  | List closed issues only         |

### 📋 Pull Request Workflow

This folder simulates a full pull request flow, including branch creation, file updates, opening a pull request, merging it, and verifying the final commit. It's ideal for testing CI/CD triggers or demonstrating GitHub collaboration workflows.

<br>

| Method | Endpoint                                                      | Description                          |
|--------|---------------------------------------------------------------|--------------------------------------|
| GET    | `/repos/{owner}/{repo}/git/refs/heads/{branch}`              | Get the latest commit SHA            |
| POST   | `/repos/{owner}/{repo}/git/refs`                             | Create a new branch                  |
| PUT    | `/repos/{owner}/{repo}/contents/{path}`                      | Add or update a file in a branch     |
| POST   | `/repos/{owner}/{repo}/pulls`                                | Open a pull request                  |
| GET    | `/repos/{owner}/{repo}/pulls/{pull_number}`                  | Check pull request status            |
| PUT    | `/repos/{owner}/{repo}/pulls/{pull_number}/merge`            | Merge the pull request               |
| GET    | `/repos/{owner}/{repo}/commits`                              | Confirm the merge via latest commit  |

<br>

Each use case is designed with reusability and automation in mind, leveraging:

- **Postman environments**  
- **Dynamic collection variables**  
- **Built-in test scripts** for reliable validation

## 3. Tests coverage

Each request in the collection includes test scripts to verify expected behavior and ensure the GitHub API responds correctly. These tests also help chain requests dynamically through the use of variables. The following are examples of tests performed in the `Repository management` folder:

<br>

- **Repository Existence Check**

<br>

   > Verifies if the repository exists by asserting response status (`200 OK` or `404 Not Found`).

   > Stores the result in a collection variable: `repo_exists`.

- **Repository Deletion**

<br>

   > Confirms deletion with `204 No Content`, or notes if the repository was already absent (`404 Not Found`).

   > Handles and logs unexpected responses.

- **Repository Creation**

<br>

   > Validates success with `201 Created`.

   > Ensures `full_name` is present in the response.

   > Saves `repo_full_name` for use in later requests.

- **Admin Collaborator Verification**

<br>

   > Filters collaborators for those with `admin` permissions.

   > Stores a comma-separated list of admin usernames in an environment variable.

   > Asserts that at least one admin user exists.

- **Repository Info Retrieval**

<br>

   > Confirms success with `200 OK`.

   > Logs the current repository description.

   > Saves the description to a collection variable (`previous_description`) for later comparison.

- **Repository Update (PATCH)**

<br>

   > Verifies update with `200 OK`.

   > Confirms that the repository description has changed compared to its previous value.
   
   > Logs both old and new descriptions for traceability.

<br>

These tests provide dynamic, state-aware execution throughout the workflow and enable Postman to handle different repo states intelligently.

<br>

## 4. Try it yourself

<br>

You can access and import the full collection of tests [here](https://elements.getpostman.com/redirect?entityId=34236881-72f79f5c-4de9-4699-b159-23d0a2b4fb30&entityType=collection).

<br>

You will be redirected to my public collection of tests. You can run tests in browser or using the Postman Desktop application. To run tests, you must:

#### Add your own GitHub Personal Access Token:

<br>

[Managing your personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

<br>

#### Assign neccessary permissions:

<br>

- repo
- worklow
- write:packages
- admin:public_key
- admin:repo_hook
- delete_repo

<br>

#### Configure it as a vault key in the Postman vault:

<br>

[Store secrets in your Postman Vault](https://learning.postman.com/docs/sending-requests/postman-vault/postman-vault-secrets/#access-your-postman-vault)