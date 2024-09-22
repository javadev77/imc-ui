const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/imc': {
        target: 'http://localhost:8080', // URL de votre backend Spring Boot
        changeOrigin: true,              // Nécessaire pour changer l'origine de la requête
        secure: false                   // Si votre backend utilise HTTPS avec un certificat auto-signé
      }
    }
  }
})
