node {
    stage('Checkout code') {
    
        git branch: 'master', url: 'https://github.com/lcawkell/cawsp.git'
    }
    stage('Install Dependencies') {
        withNPM(npmrcConfig: 'a042e838-7985-4b86-aa30-86faf8373a14') {
            bat 'npm install'
        }
    }
    stage('Testing') {
        withNPM(npmrcConfig: 'a042e838-7985-4b86-aa30-86faf8373a14') {
            bat 'npm run test'
        }
    }
    stage('Build Release') {
        withNPM(npmrcConfig: 'a042e838-7985-4b86-aa30-86faf8373a14') {
            bat 'npm run release'
        }
    }
    stage('Convert Line Endings') {
        withNPM(npmrcConfig: 'a042e838-7985-4b86-aa30-86faf8373a14') {
            bat 'npm i --save-dev eol-converter-cli'
            bat 'node_modules/.bin/eolConverter "dist/**/*.{js,html,css,map}"'
        }
    }
    stage('Archive Build Artifacts') {
        archiveArtifacts artifacts: 'dist/**'
    }
}