# GraphQL Backend Documentation

## Overview

This GraphQL backend, built with Apollo Server and Express, serves as the backend for the Documentation System. It handles the management of software development life cycle (SDLC) phases, file uploads, and various operations related to project documentation.

## GraphQL Schema

The GraphQL schema defines the types and operations supported by the backend. It includes three main types: `InitPhase`, `AnalysisPhase`, and `DesignPhase`, each representing a specific phase in the SDLC. Additionally, a custom scalar `Upload` is defined for handling file uploads.

### InitPhase

- Attributes:
  - `id`
  - `title`
  - `startDate`
  - `finishDate`
  - `objectives`
  - `manager`
  - `budgetInfo`
  - `scopeStatements`
  - `type`

### AnalysisPhase

- Attributes:
  - `id`
  - `introduction`
  - `purpose`
  - `audience`
  - `sw_description`
  - `sys_fr`
  - `image`
  - `type`

### DesignPhase

- Attributes:
  - `id`
  - `filename`
  - `image`
  - `type`

## Queries

The backend supports various queries to retrieve information about different SDLC phases.

- `getAllInitPhases`: Retrieve all initiation phases.
- `getInitPhase(id)`: Retrieve details of a specific initiation phase.
- `getAllAnalysisPhases`: Retrieve all analysis phases.
- `getAnalysisPhase(id)`: Retrieve details of a specific analysis phase.
- `getAllDesignPhases`: Retrieve all design phases.
- `getDesignPhase(id)`: Retrieve details of a specific design phase.

## Mutations

The backend provides mutations to create, update, and delete SDLC phases, as well as upload files.

- `createInitPhase(init_phase)`: Create a new initiation phase.
- `updateInitPhase(id, init_phase)`: Update details of a specific initiation phase.
- `deleteInitPhase(id)`: Delete a specific initiation phase.
- `createAnalysisPhase(analysis_phase)`: Create a new analysis phase.
- `updateAnalysisPhase(id, analysis_phase)`: Update details of a specific analysis phase.
- `deleteAnalysisPhase(id)`: Delete a specific analysis phase.
- `createDesignPhase(design_phase)`: Create a new design phase.
- `deleteDesignPhase(id)`: Delete a specific design phase.
- `uploadFile(file)`: Upload a file, returning its URL.

## Repository
You can check the application frontend here [Frontend Repository](https://github.com/AhmedMaherElSaeidi/Documentation-System-Angular)
