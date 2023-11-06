pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Jenkins, projenizi GitHub reposundan çeker
                checkout scm
            }
        }

        stage('Build and Test Next.js App') {
            steps {
                // Next.js uygulamanızı derleyin ve test edin
                sh 'cd your-nextjs-app-directory && npm install && npm run build && npm test'
            }
        }

        stage('Build and Test .NET Core App') {
            steps {
                // .NET Core uygulamanızı derleyin ve test edin
                sh 'cd your-dotnet-app-directory && dotnet build && dotnet test'
            }
        }

        stage('Build Docker Images') {
            steps {
                // Docker imajlarınızı oluşturun
                sh 'docker build -t my-nextjs-app ./your-nextjs-app-directory'
                sh 'docker build -t my-dotnet-app ./your-dotnet-app-directory'
            }
        }

        stage('Push Docker Images to Docker Hub') {
            steps {
                // Docker Hub kimlik bilgilerini kullanarak imajları Docker Hub'a gönderin
                withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh "docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD"
                    sh 'docker push my-nextjs-app'
                    sh 'docker push my-dotnet-app'
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                // Kubernetes cluster'ına dağıtım yapın (aşağıdaki adımlarla)
                sh 'kubectl config use-context my-k8s-cluster'
                sh 'kubectl apply -f path/to/kubernetes-deployment.yaml'
                sh 'kubectl apply -f path/to/kubernetes-service.yaml'
                sh 'kubectl rollout status deployment/my-app-deployment'
            }
        }
    }

    post {
        success {
            // Pipeline başarılı bir şekilde tamamlandığında yapılacak işlemler
            echo 'CI/CD pipeline succeeded!'
        }
        failure {
            // Pipeline başarısız olduğunda yapılacak işlemler
            echo 'CI/CD pipeline failed!'
        }
    }
}
