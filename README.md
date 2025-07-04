# 🏀 HoopHub Mobile

Une application mobile moderne développée avec Vue.js et Capacitor pour la communauté basketball.

![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Capacitor](https://img.shields.io/badge/Capacitor-119EFF?style=for-the-badge&logo=Capacitor&logoColor=white)
![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)
![iOS](https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=ios&logoColor=white)

## ✨ Fonctionnalités

- 🏆 **Organisation d'évènements** et compétitions
- 📱 **Interface mobile optimisée** et responsive
- 🔄 **Synchronisation multi-appareils**

## 🚀 Technologies

- **Frontend**: Vue.js 3 avec Composition API et TypeScript
- **Mobile**: Capacitor pour le déploiement natif
- **Build**: Vue CLI Service avec support TypeScript
- **State Management**: Pinia
- **Routing**: Vue Router 4
- **Styling**: CSS3 avec animations modernes
- **Type Safety**: TypeScript pour une meilleure robustesse du code

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** (v16 ou supérieur)
- **npm** ou **yarn**
- **Java 17** (OpenJDK recommandé)
- **Android Studio** (pour le développement Android)
- **Xcode** (pour le développement iOS - macOS uniquement)

### Installation Java 17 (macOS)

```bash
# Via Homebrew
brew install openjdk@17

# Vérifier l'installation
java -version
/usr/libexec/java_home -v 17
```

## 🛠️ Installation

1. **Cloner le projet**
   ```bash
   git clone https://github.com/votre-username/hoophub-mobile.git
   cd HoopHubFront
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Construire l'application web**
   ```bash
   npm run build
   ```

4. **Synchroniser avec Capacitor**
   ```bash
   npx cap sync
   ```

## 🚀 Développement

### Développement Web

```bash
# Serveur de développement
npm run serve

# Accessible sur http://localhost:8080
```

### Développement Mobile

#### Android

```bash
# Première fois : ajouter la plateforme Android
npx cap add android

# Ouvrir dans Android Studio
npx cap open android

# Ou lancer directement sur émulateur/appareil
npx cap run android
```

#### iOS

```bash
# Première fois : ajouter la plateforme iOS
npx cap add ios

# Ouvrir dans Xcode
npx cap open ios

# Ou lancer directement sur simulateur/appareil
npx cap run ios
```

## 📁 Structure du Projet

```
HoopHubFront/
├── src/
│   ├── components/          # Composants réutilisables
│   ├── views/              # Pages de l'application
│   │   ├── Home.vue        # Page d'accueil (TypeScript)
│   │   └── About.vue       # Page À propos (TypeScript)
│   ├── router/             # Configuration des routes
│   │   └── index.ts        # Router TypeScript
│   ├── App.vue             # Composant racine
│   ├── main.ts             # Point d'entrée TypeScript
│   ├── env.d.ts            # Déclarations d'environnement
│   └── shims-vue.d.ts      # Déclarations Vue pour TypeScript
├── public/                 # Fichiers statiques
├── android/                # Projet Android natif
├── ios/                    # Projet iOS natif (après ajout)
├── dist/                   # Build de production
├── tsconfig.json           # Configuration TypeScript
├── capacitor.config.ts     # Configuration Capacitor
├── package.json            # Dépendances et scripts
└── vue.config.js           # Configuration Vue CLI
```

## 🎨 Personnalisation

### TypeScript

L'application utilise TypeScript pour :
- **Type Safety** - Détection d'erreurs à la compilation
- **IntelliSense** - Autocomplétion améliorée dans l'IDE
- **Refactoring sûr** - Renommages et modifications automatiques
- **Interfaces** - Définition claire des structures de données

Exemple d'interface dans `src/views/Home.vue` :
```typescript
interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}
```

### Couleurs de l'application

L'application utilise un thème avec des dégradés modernes :
- **Primaire**: `#667eea` → `#764ba2`
- **Arrière-plan**: `#f5f7fa` → `#c3cfe2`

### Configuration Capacitor

Modifier `capacitor.config.ts` pour personnaliser :

```typescript
const config: CapacitorConfig = {
  appId: 'com.hoophub.fr',
  appName: 'HoopHub',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};
```

## 🔧 Scripts Disponibles

```bash
# Développement
npm run serve              # Serveur de dev Vue.js
npm run build              # Build de production
npm run build:mobile       # Build + sync Capacitor
npm run type-check         # Vérification des types TypeScript
npm run build:ts           # Type-check + build

# Mobile
npm run android            # Lancer sur Android
npm run ios                # Lancer sur iOS
npm run sync               # Synchroniser avec Capacitor
```

## 🐛 Dépannage

### Problèmes courants

1. **Erreur Java "invalid source release: 21"**
   ```bash
   # Vérifier la version Java
   java -version
   
   # Le fichier android/gradle.properties doit contenir :
   org.gradle.java.home=/opt/homebrew/Cellar/openjdk@17/17.0.15/libexec/openjdk.jdk/Contents/Home
   ```

2. **Erreur "Cannot read properties of undefined (reading 'BASE_URL')"**
   - **Cause** : Utilisation de `import.meta.env.BASE_URL` au lieu de `process.env.BASE_URL`
   - **Solution** : Dans `src/router/index.ts`, utiliser `process.env.BASE_URL` pour Vue CLI
   ```typescript
   // ✅ Correct pour Vue CLI + TypeScript
   history: createWebHistory(process.env.BASE_URL)
   
   // ❌ Incorrect (Vite uniquement)
   history: createWebHistory(import.meta.env.BASE_URL)
   ```

3. **Build Android échoue**
   ```bash
   # Nettoyer le cache Gradle
   cd android && ./gradlew clean
   cd .. && npx cap sync android
   ```

4. **Application ne se lance pas**
   ```bash
   # Reconstruire complètement
   npm run build
   npx cap sync
   ```

5. **Dossier public/ supprimé accidentellement**
   - **Cause** : Le dossier `public/` contient `index.html` essentiel
   - **Solution** : Recréer le dossier avec les fichiers nécessaires :
   ```bash
   mkdir public
   # Recreate index.html avec le template Vue.js approprié
   # Voir la structure dans le README ou restaurer depuis Git
   ```

### Logs de débogage

```bash
# Logs Android
npx cap run android --verbose

# Logs iOS
npx cap run ios --verbose
```

## 🚀 Déploiement

### Android (APK)

```bash
# Build de production
npm run build:mobile

# Générer APK depuis Android Studio
# File → Build Bundle(s)/APK(s) → Build APK(s)
```

### iOS (App Store)

```bash
# Build de production
npm run build:mobile

# Ouvrir Xcode et archiver
npx cap open ios
# Product → Archive dans Xcode
```

## 📱 Fonctionnalités Natives

L'application peut facilement intégrer des fonctionnalités natives via Capacitor :

- 📷 **Caméra** - Photos des matchs/équipes
- 📍 **Géolocalisation** - Localisation des terrains
- 💾 **Stockage local** - Données hors ligne

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit les changements (`git commit -am 'Ajout nouvelle fonctionnalité'`)
4. Push la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Créer une Pull Request

## 👨‍💻 Équipe

- **Développeur Principal** - [Votre Nom](https://github.com/votre-username)

## 🆘 Support

Pour toute question ou problème :

- 📧 **Email** : créer une issue github

---

⭐ **Star ce projet si vous l'aimez !** ⭐

Fait avec ❤️ pour la communauté basketball 🏀