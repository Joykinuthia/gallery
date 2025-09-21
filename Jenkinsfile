pipeline {
    agent any
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
}