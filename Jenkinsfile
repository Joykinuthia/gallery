pipeline {
    agent any

    tools {
        nodejs "NodeJS 18"
    }

    environment {
        RENDER_DEPLOY_URL = credentials('render-deploy-url')
        RENDER_DEPLOY_KEY = credentials('render-deploy-hook')
        ENABLE_EMAIL       = "false"
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
                sh 'curl -X POST "$RENDER_DEPLOY_URL?key=$RENDER_DEPLOY_KEY"'
            }
        }
    }

    post {
        success {
            slackSend(
                channel: '#Joyrose_IP1',
                message: "Build #${env.BUILD_ID} succeeded for ${env.JOB_NAME}.\nProject URL: https://gallery-1-odxh.onrender.com/"
            )
        }

        failure {
            slackSend(
                channel: '#Joyrose_IP1',
                message: "Build #${env.BUILD_ID} failed for ${env.JOB_NAME}.\nCheck logs: ${env.BUILD_URL}"
            )

            script {
                if (env.ENABLE_EMAIL == 'true') {
                    emailext(
                        subject: "Build Failed: #${env.BUILD_ID}",
                        body: "The build failed.\nCheck logs: ${env.BUILD_URL}",
                        to: "joyrose.kinuthia@student.moringaschool.com",
                        mimeType: 'text/plain',
                        attachLog: true
                    )
                }
            }
        }
    }
}