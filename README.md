# Unhandled exit of Node.js server in CI/CD
This repository demonstrates a common issue in Node.js: an infinite server loop causing problems in CI/CD pipelines. The server runs indefinitely, not gracefully shutting down, leading to resource consumption issues.

## Problem
The `bug.js` file contains a simple Node.js HTTP server. However, it lacks a mechanism for proper shutdown. This means the server continues running until manually stopped, causing resource exhaustion in CI/CD environments.

## Solution
The `bugSolution.js` file provides a solution by adding a `server.close()` method within an event listener for the `SIGINT` signal (Ctrl+C). This ensures a graceful shutdown when the process receives an interrupt signal, releasing resources and preventing problems in automated environments.

## How to reproduce the issue
1. Clone the repository.
2. Navigate to the repository's directory.
3. Run `node bug.js`.
4. Observe that the server starts and runs continuously until manually interrupted with Ctrl+C.

## How to implement the solution
1. Replace `bug.js` with `bugSolution.js`.
2. Run `node bugSolution.js`.
3. Try to interrupt the server using Ctrl+C.  Observe that the server gracefully shuts down.