# software_containerization
Containerization Assignment
Create an application with the following components:

1. Relational or non-relational database with suitable configuration (such as a custom schema for a relational database).

2. REST API that can read and write to the database (at least 1 GET to read content and one POST method to create content).

3. Web front end that interacts with the database via the REST API.

For the Database, you can reuse an existing database image.

Create Dockerfiles to containerize the REST API and the Web front end.

Create Kubernetes YAML files or a single Helm chart that generate three deployments/statefulsets as appropriate for deploying the three components to a Kubernetes cluster.

Create additional configuration artifacts as described in the Rubric below.

Submit a zip file containing:

1. The source code of your project. Note: the sources are mandatory because we need to ensure that we look at the source files as they were at the time of the submission. Sources include: the application, the Dockerfiles, the Kubernetes YAML files and/or the Kubernetes Helm Charts.

2. The URL of the GitHub repository where the source code is hosted. If the project is private, add the teacher to the repository.

I will look at the project in GitHub just to check who committed what in case there is a doubt about a team member's actual contribution.

3. A README with the instructions to run all the commands that you will show in the presentation.