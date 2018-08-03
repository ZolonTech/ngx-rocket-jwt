pipeline {
	agent any
	environment {
		TEST = "None"
	}
	stages {
		stage('deploy-development'){
		  when{
		    branch 'development'
		  }
		  steps {
		    echo 'Deploy Production'
		    sh 'npm install'
		    sh 'npm run build'
		    sh 'aws s3 cp dist $DEVELOPMENT_S3_BUCKET --recursive --acl public-read'
		    sh 'aws cloudfront create-invalidation --distribution-id $DEVELOPMENT_CLOUDFRONT_ID --paths /index.html'
		  }
		}
		stage('deploy-staging'){
		  when{
		    branch 'staging'
		  }
		  steps {
		    echo 'Deploy Staging'
		    sh 'npm install'
		    sh 'npm run build'
		    sh 'aws s3 cp dist $STAGING_S3_BUCKET --recursive --acl public-read'
		    sh 'aws cloudfront create-invalidation --distribution-id $STAGING_CLOUDFRONT_ID --paths /index.html'
		  }
		}
		stage('deploy-master'){
		  when{
		    branch 'master'
		  }
		  steps {
		    echo 'Deploy Development'
		    sh 'npm install'
		    sh 'npm run build'
		    sh 'aws s3 cp dist $PRODUCTION_S3_BUCKET --recursive --acl public-read'
		    sh 'aws cloudfront create-invalidation --distribution-id $PRODUCTION_CLOUDFRONT_ID --paths /index.html'
		  }
		}
	}
}

