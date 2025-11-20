# Armand Renoust - Portfolio Professionnel

Code source de mon site personnel et professionnel : [armandrenoust.fr](https://armandrenoust.fr)

Ce projet incarne mon approche du développement web : **Pragmatique, Performant et Durable.**

![Astro](https://img.shields.io/badge/Built_with-Astro-orange?style=for-the-badge&logo=astro)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)
![Status](https://img.shields.io/badge/Status-Production-green?style=for-the-badge)

## 🎯 Philosophie du Projet

L'objectif n'était pas d'utiliser le framework le plus complexe, mais le plus adapté pour un site vitrine professionnel. J'ai choisi une architecture **Jamstack** pour garantir :
1.  **Performance maximale :** Score Lighthouse 100/100.
2.  **Sécurité :** Pas de base de données à maintenir, surface d'attaque réduite.
3.  **Autonomie :** Gestion des contenus via un CMS Headless sans toucher au code.

## 🛠 Stack Technique

* **Framework :** [Astro 4.0](https://astro.build/) (Pour la génération statique et le "Zero JS by default").
* **CMS :** [Decap CMS](https://decapcms.org/) (Gestion de contenu basée sur Git).
* **Styling :** CSS Scoped & Variables CSS modernes (Design System "Midnight").
* **Hébergement :** [Vercel](https://vercel.com/) (CI/CD automatique).
* **Formulaire :** Formspree.

## 📂 Structure du Projet

L'architecture suit les standards Astro :

* `src/pages/` : Routes et templates des pages (Accueil, Blog, Contact).
* `src/content/` : Collections de données (Articles de blog et contenus des pages en Markdown).
* `src/layouts/` : Gabarits globaux (SEO, Header, Footer).
* `src/components/` : Composants UI réutilisables.
* `public/admin/` : Configuration de Decap CMS.

## 🚀 Installation Locale

Si vous souhaitez tester ce projet localement :

1.  Cloner le dépôt :
    ```bash
    git clone [https://github.com/armandrenoust/armandrenoust.fr.git](https://github.com/armandrenoust/armandrenoust.fr.git)
    ```
2.  Installer les dépendances :
    ```bash
    npm install
    ```
3.  Lancer le serveur de développement :
    ```bash
    npm run dev
    ```

## 🎨 Design System

Le design est conçu "Mobile First" avec une palette sombre personnalisée ("Soft Midnight") pour un rendu premium et confortable.

* **Police :** Inter (Corps) & JetBrains Mono (Logo/Tech).
* **Accessibilité :** Contraste élevé et balisage sémantique respecté.

## 📄 Licence

Ce projet est sous copyright © 2025 Armand Renoust.
Le code est public à des fins de démonstration uniquement. Toute reproduction ou déploiement non autorisé est interdit. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

*Développé par Armand Renoust*
