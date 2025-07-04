<template>
  <div class="home">
    <div class="hero">
      <div class="hero-content">
        <h1 class="hero-title">🏀 HoopHub</h1>
        <p class="hero-subtitle">Votre application basketball favorite</p>
        <div class="hero-buttons">
          <button class="btn" @click="goToAbout">Découvrir</button>
          <button class="btn btn-outline" @click="showStats">Statistiques</button>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="features">
        <div class="card feature-card" v-for="feature in features" :key="feature.id">
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const router = useRouter()
const showStatsCard = ref<boolean>(false)

const features = ref<Feature[]>([
  {
    id: 1,
    icon: '🏆',
    title: 'Compétitions',
    description: 'Organisez et participez aux tournois locaux et régionaux'
  },
  {
    id: 2,
    icon: '📊',
    title: 'Statistiques',
    description: 'Suivez vos performances et progressez dans votre jeu'
  },
  {
    id: 3,
    icon: '👥',
    title: 'Communauté',
    description: 'Connectez-vous avec d\'autres passionnés de basketball'
  }
])

const goToAbout = (): void => {
  router.push('/about')
}

const showStats = (): void => {
  showStatsCard.value = !showStatsCard.value
}
</script>

<style scoped>
.home {
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
}

.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 60vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="2" fill="white" opacity="0.1"/></svg>') repeat;
  animation: float 20s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.hero-content {
  z-index: 1;
  max-width: 600px;
  padding: 2rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); 
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-outline {
  background: transparent;
  border: 2px solid white;
  color: white;
}

.btn-outline:hover {
  background: white;
  color: #667eea;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.feature-card {
  text-align: center;
  transition: all 0.3s ease;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

.stats-card {
  text-align: center;
  margin-top: 2rem;
  animation: slideIn 0.5s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: #667eea;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #666;
  font-weight: 500;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .features {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
