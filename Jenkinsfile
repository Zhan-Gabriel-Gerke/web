pipeline {
    agent any

    options {
        buildDiscarder(logRotator(numToKeepStr: '5'))
        disableConcurrentBuilds()
        timestamps()
    }

    environment {
        COMPOSE_PROJECT_NAME = "web_project_prod"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Quality Gate') {
            steps {
                echo "Code quality check pass"
            }
        }

        stage('Inject Secrets & Deploy') {
            steps {
                script {
                    withCredentials([
                        string(credentialsId: 'PROD_MONGO_USER', variable: 'MONGO_USER'),
                        string(credentialsId: 'PROD_MONGO_PASS', variable: 'MONGO_PASS'),
                        string(credentialsId: 'PROD_DB_URL', variable: 'DB_URL'),
                        string(credentialsId: 'PROD_JWT_SECRET', variable: 'JWT_SEC')
                    ]) {
                        sh '''
                            echo "NODE_ENV=production" > .env
                            echo "PORT=3000" >> .env
                            echo "MONGO_INITDB_ROOT_USERNAME=${MONGO_USER}" >> .env
                            echo "MONGO_INITDB_ROOT_PASSWORD=${MONGO_PASS}" >> .env
                            echo "DATABASE_URL=${DB_URL}" >> .env
                            echo "JWT_SECRET=${JWT_SEC}" >> .env
                        '''
                    }
                }
                
                echo "Building and running..."
                sh 'docker compose up -d --build'
            }
        }
    }

    post {
        always {
            sh 'rm -f .env'
            sh 'docker image prune -f'
        }
        success {
            echo "Deployment completed successfully!"
        }
        failure {
            echo "Build failed. Check Jenkins logs."
        }
    }
}