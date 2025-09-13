pipeline {
    agent any

    tools {
        nodejs 'node18'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                url: 'https://github.com/Manikandarajan-Jegadeshwaran/mfe-host.git',
                credentialsId: 'github-token-0'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

    // stage('Archive Build') {
    //     steps {
    //         archiveArtifacts artifacts: 'build/**', followSymlinks: false
    //     }
    // }
    }
}
