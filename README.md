# Cloud-Native E-Commerce Application

A cloud-native e-commerce application built to practice containerization, cloud infrastructure, and DevOps automation.

## Technologies

- **Cloud:** AWS
- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Frontend:** HTML, CSS, JavaScript
- **Containerization:** Docker, Docker Compose
- **Infrastructure as Code:** Terraform
- **Orchestration:** Kubernetes (planned)
- **CI/CD:** GitHub Actions (planned)
- **Container Registry:** Amazon ECR (planned)
- **Monitoring:** Amazon CloudWatch (planned)

## Features

- REST API for product management
- MySQL database integration
- Health-check endpoints
- Dockerized frontend and backend
- Multi-container development environment using Docker Compose

## Project Structure

```text
cloud-ecommerce-devops/
├── backend/
├── database/
├── docs/
├── frontend/
├── terraform/
├── .gitignore
├── docker-compose.yml
└── README.md
```

## Getting Started

1. Install Docker Desktop and Git.
2. Clone this repository.
3. Configure the required environment variables in a local `.env` file.
4. Start the application:

```bash
docker compose up --build
```

5. Open the frontend at `http://localhost:8080`.

## Project Roadmap

- [x] Project structure and GitHub repository
- [x] Backend REST API
- [x] MySQL integration
- [x] Docker configuration
- [ ] Terraform infrastructure
- [ ] AWS ECR image deployment
- [ ] Kubernetes deployment
- [ ] GitHub Actions CI/CD pipeline
- [ ] Monitoring and logging

## Security

Never commit `.env` files, database passwords, AWS credentials, or other secrets to GitHub.

## Author

DevOps and Cloud Computing Project
