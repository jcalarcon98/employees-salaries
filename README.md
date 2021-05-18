<h1 align="center"> ACME COMPANY </h1>

<p align='center'>

![Code Coverage](https://github.com/ant-design/ant-design/workflows/%E2%9C%85%20test/badge.svg)
![Code Coverage](https://img.shields.io/badge/CODE%20COVERAGE-%3E%2090%20%25-green)

 </p>


## Table of Contents

* [About the exercise](#about-the-exercise)
  * [Problem](#problem)
  * [Solution](#solution)
* [Solution Archutecture](#architecture)
  * [Low level Design](#low-level-design)
  * [Core Communication](#core-communication)
  * [High Level Design](#high-level-design)
* [Approach and Methodology](#approach-and-methodology)

## About the Exercise

The main purpose of this project is to evaluate my software development skills.

### Problem
<hr/>

The company ACME offers their employees the flexibility to work the hours they want. They will pay for the hours worked based on the day of the week and time of day. The goal of this exercise is to calculate the total that the company has to pay an employee, based on the hours they worked and the times during which they worked.

### Solution
<hr/>

To solve the problem within the ACME company, it was decided to create a software that allows to enter a .txt file, with the information of the employees in the specified format, which will return the name of the employee and the amount to be paid, as in the following example:
<p align="center">
  <img src="images/example.png" width="800" align='center'>
</p>

To achieve this solution it was decided to use the next technologies:

- [NodeJs](https://nodejs.org/en/) with [TypeScript](https://www.typescriptlang.org/) for development.
- [Jest](https://jestjs.io/) for testing and Code coverage.
- [Airbnb style Guide](https://airbnb.io/javascript/) for code style.
- Also the most relevant practices from [NodeJs best Practices](https://github.com/goldbergyoni/nodebestpractices) were used, practices like:
  - [Project Structure Practice](https://github.com/goldbergyoni/nodebestpractices#1-project-structure-practices) 
  - [Code Style Practices](https://github.com/goldbergyoni/nodebestpractices#3-code-style-practices)
  - [Testing and Quality Practices](https://github.com/goldbergyoni/nodebestpractices#4-testing-and-overall-quality-practices)


<hr/>

## Architecture

### Low Level Design

This diagram provides an overview of the communication between the application components. 

<p align="center">
  <img src="images/architecture/low-architecture.png" width="800" align='center'>
</p>

### Core Communication

This diagram shows the main communication between the elements of each component.

<p align="center">
  <img src="images/architecture/core-diagram.png" width="900" align='center'>
</p>

### High Level Design

This diagram shows the communication between all the elements of the application, detailing the content of each of the components.

<p align="center">
  <img src="images/architecture/high-architecture.png" width="1800" align='center'>
</p>

<hr/>

## Approach and Methodology

Before developing the solution, the following activities were carried out:

### Solution analysis