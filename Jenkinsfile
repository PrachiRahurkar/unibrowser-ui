pipeline {
  agent {
    docker {
      image 'node:8.12.0-alpine'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }
    stage('Test') {
      steps {
        sh 'docker run --rm -d --name $mongodb_test_name -p 27016:27107 mongo'
        sh 'npm test'
        sh 'docker stop $mongodb_test_name'
      }
    }
  }
  environment {
    mongodb_test_name = 'mongo-unibrowser-ui-test'
  }
}