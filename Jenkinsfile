pipeline {
    agent any

    environment {
        RENDER_DEPLOY_URL = credentials('render-deploy-hook')
    }

    stages {
        stage('Clone Code') {
            steps {
                git branch: 'master', url: 'https://github.com/Joykinuthia/gallery.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Code') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test Code') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy to Render') {
            steps {
                sh 'curl -X POST $RENDER_DEPLOY_URL'
            }
        }
    }

    post {
        success {
            withCredentials([string(credentialsId: 'slack-webhook', variable: 'SLACK_WEBHOOK_URL')]) {
                sh '''
                  curl -X POST -H 'Content-type: application/json' \
                  --data '{"text":"Success: Jenkins build succeeded for *Gallery App*! 🎉"}' \
                  $SLACK_WEBHOOK_URL
                '''
            }
        }
        failure {
            withCredentials([string(credentialsId: 'slack-webhook', variable: 'SLACK_WEBHOOK_URL')]) {
                sh '''
                  curl -X POST -H 'Content-type: application/json' \
                  --data '{"text":"Failure: Jenkins build FAILED for *Gallery App*! 🚨"}' \
                  $SLACK_WEBHOOK_URL
                '''
            }
        }
    }
}
