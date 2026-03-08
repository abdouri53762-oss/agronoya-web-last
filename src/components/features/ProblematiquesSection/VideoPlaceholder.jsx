import React from 'react';
import PropTypes from 'prop-types';
import { 
  Play, Database, Eye, Satellite, Droplets, Cloud, Stethoscope, 
  BarChart3, Server, Leaf, ShoppingCart, AlertTriangle, Wrench, Award 
} from 'lucide-react';
import styles from './ProblematiquesSection.module.css';

const VideoPlaceholder = ({ index, isLeft = false, className = '' }) => {
  // Couleurs de badges uniques pour chaque problématique
  const badgeColors = [
    'from-red-500 to-pink-600',      // 1 - Données
    'from-blue-500 to-indigo-600',   // 2 - Surveillance  
    'from-purple-500 to-violet-600', // 3 - Satellite
    'from-cyan-500 to-blue-600',     // 4 - Eau
    'from-orange-500 to-red-600',    // 5 - Météo
    'from-green-500 to-emerald-600', // 6 - Diagnostic
    'from-violet-500 to-purple-600', // 7 - Données multiples
    'from-slate-500 to-gray-600',    // 8 - Plateforme
    'from-lime-500 to-green-600',    // 9 - Valorisation
    'from-amber-500 to-orange-600',  // 10 - Commerce
    'from-red-600 to-rose-600',      // 11 - Alerte
    'from-teal-500 to-cyan-600',     // 12 - Irrigation
    'from-emerald-500 to-green-600'  // 13 - Reconnaissance
  ];

  const badgeIcons = [
    Database, Eye, Satellite, Droplets, Cloud, Stethoscope, 
    BarChart3, Server, Leaf, ShoppingCart, AlertTriangle, Wrench, Award
  ];

  const BadgeIcon = badgeIcons[index - 1] || Database;
  const badgeColor = badgeColors[index - 1] || badgeColors[0];

  return (
    <div className={`${styles.videoPlaceholder} ${className}`}>
      <div className={styles.videoContainer}>
        {/* Badge coloré moderne */}
        <div className={`${styles.badge} ${isLeft ? styles.badgeRight : styles.badgeLeft}`}>
          <div className={`${styles.badgeContent} bg-gradient-to-r ${badgeColor}`}>
            <BadgeIcon className={styles.badgeIcon} />
            <span className={styles.badgeNumber}>{index}</span>
          </div>
        </div>

        {/* Contenu vidéo */}
        <div className={styles.videoContent}>
          <div className={styles.videoInner}>
            <div className={styles.playButton}>
              <Play className={styles.playIcon} />
            </div>
            <p className={styles.videoTitle}>Vidéo explicative</p>
            <p className={styles.videoSubtitle}>Problématique {index}</p>
          </div>
        </div>

        {/* Overlay au hover */}
        <div className={styles.videoOverlay}>
          <div className={styles.overlayContent}>
            <Play className={styles.overlayPlayIcon} />
            <span className={styles.overlayText}>Regarder la vidéo</span>
          </div>
        </div>
      </div>
    </div>
  );
};

VideoPlaceholder.propTypes = {
  index: PropTypes.number.isRequired,
  isLeft: PropTypes.bool,
  className: PropTypes.string
};

export default VideoPlaceholder;

