pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/AbrahamBiaye/pipelineK6.git'
            }
        }

        stage('Install K6 (Linux)') {
            steps {
                sh "command -v k6 || echo 'K6 déjà installé'"
            }
        }

        stage('Run K6 Tests') {
            steps {
                sh 'k6 run test.js'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'test.js', fingerprint: true
        }
        success {
            echo "Tests K6 réussis ! 🚀"
        }
        failure {
            echo "Échec des tests K6 ❌"
        }
    }
}
