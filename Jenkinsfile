pipeline {
    agent any

    stages {
        stage('setUp') {
            steps {
                git branch:'main', url:'https://github.com/vaseoflcay/teste-e2e-ebac.git'
                bat 'npm install'
            }
            
        stage('test'){
            bat '''set NO_COLOR=1
               npm run cy:run '''            
            
        }   
        
  
        }
    }
}
