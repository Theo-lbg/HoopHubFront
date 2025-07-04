<template>
  <div class="about">
    <div class="header">
      <button class="back-btn" @click="goBack">← Retour</button>
      <h1>À propos de HoopHub</h1>
    </div>
    
    <div class="container">
      <div class="card">
        <h2>🏀 Notre Mission</h2>
        <p>
          HoopHub est une application mobile conçue pour révolutionner la façon dont 
          les passionnés de basketball gèrent leurs équipes, suivent leurs statistiques 
          et organisent leurs tournois.
        </p>
      </div>

      <div class="card">
        <h2>✨ Fonctionnalités</h2>
        <ul class="features-list">
          <li>🎯 Suivi des statistiques en temps réel</li>
          <li>🏆 Organisation de tournois</li>
          <li>👥 Gestion d'équipes</li>
          <li>📊 Analyses détaillées</li>
          <li>📱 Interface mobile optimisée</li>
          <li>🔄 Synchronisation multi-appareils</li>
        </ul>
      </div>

      <div class="card">
        <h2>🛠️ Technologies</h2>
        <div class="tech-grid">
          <div class="tech-item">
            <span class="tech-icon">⚡</span>
            <span>Vue.js 3</span>
          </div>
          <div class="tech-item">
            <span class="tech-icon">📱</span>
            <span>Capacitor</span>
          </div>
          <div class="tech-item">
            <span class="tech-icon">🎨</span>
            <span>CSS3</span>
          </div>
          <div class="tech-item">
            <span class="tech-icon">🔧</span>
            <span>JavaScript</span>
          </div>
        </div>
      </div>

      <div class="card contact-card">
        <h2>📧 Contact</h2>
        <p>Une question ? Une suggestion ? N'hésitez pas à nous contacter !</p>
        <button class="btn" @click="openContact">Nous contacter</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = (): void => {
  router.push('/')
}

const openContact = (): void => {
  // Ici vous pourriez ouvrir un modal de contact ou rediriger vers un email
  alert('Fonctionnalité de contact à venir !')
}
</script>

<style scoped>
.about {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem 1rem;
  text-align: center;
  position: relative;
}

.back-btn {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.back-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-50%) translateX(-3px);
}

.header h1 {
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
}

.features-list {
  list-style: none;
  padding: 0;
}

.features-list li {
  padding: 0.75rem 0;
  font-size: 1.1rem;
  border-bottom: 1px solid #eee;
  transition: all 0.3s ease;
}

.features-list li:hover {
  padding-left: 1rem;
  color: #667eea;
}

.features-list li:last-child {
  border-bottom: none;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.tech-item:hover {
  background: #e9ecef;
  transform: translateY(-2px);
}

.tech-icon {
  font-size: 1.5rem;
}

.contact-card {
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.contact-card .btn {
  background: white;
  color: #667eea;
  margin-top: 1rem;
}

.contact-card .btn:hover {
  background: #f8f9fa;
}

@media (max-width: 768px) {
  .header {
    padding: 1rem;
  }
  
  .header h1 {
    font-size: 1.5rem;
  }
  
  .back-btn {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
  
  .tech-grid {
    grid-template-columns: 1fr;
  }
}
</style>
