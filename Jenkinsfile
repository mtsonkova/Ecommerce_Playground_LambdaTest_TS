pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.46.0-jammy'  // Official Playwright Docker image
            args '-u root:root'  // Ensures we can install dependencies if needed
        }
    }
    environment {
        NODE_ENV = 'test'
    }
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/mtsonkova/Ecommerce_Playground_LambdaTest_TS.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'  // Use npm ci for clean install
            }
        }
        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright install --with-deps'  // Ensures browsers are installed
                sh 'npx playwright test tests'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
            junit 'playwright-report/*.xml'  // If using JUnit reporter
        }
    }
}
