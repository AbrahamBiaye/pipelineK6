pipeline {
    stage('run k6 test') {
      steps {
        echo 'Installing k6'
        sh 'brew install k6'
        sh 'k6 run script.js'
      }
    }
  }
}
