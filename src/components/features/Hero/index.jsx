import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Play, Sparkles, Zap } from 'lucide-react';
import { Heading, Text, Button } from '../../common';
import styles from './Hero.module.css';

import hero1 from '../../../assets/hero/hero-1.jpg';
import hero2 from '../../../assets/hero/hero-2.jpg';
import hero3 from '../../../assets/hero/hero-3.jpg';
import hero4 from '../../../assets/hero/hero-4.jpg';
import hero5 from '../../../assets/hero/hero-5.png';

const Hero = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startSlider, setStartSlider] = useState(false);

  const heroImages = useMemo(
    () => [
      { src: hero1, alt: t('agricultureIntelligente') },
      { src: hero2, alt: t('analyseAgricoleDrone') },
      { src: hero3, alt: t('surveillanceCultures') },
      { src: hero4, alt: t('technologiesAgricolesConnectees') },
      { src: hero5, alt: t('plateformeAgroNoya') },
    ],
    [t]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartSlider(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!startSlider) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [startSlider, heroImages.length]);

  return (
    <section id="accueil" className={styles.hero}>
      <div className={styles.backgroundMedia} aria-hidden="true">
        {heroImages.map((image, index) => (
          <img
            key={image.src}
            src={image.src}
            alt=""
            className={`${styles.heroImage} ${
              index === currentSlide ? styles.heroImageActive : ''
            }`}
            loading={index === 0 ? 'eager' : 'lazy'}
            fetchPriority={index === 0 ? 'high' : 'auto'}
            decoding="async"
          />
        ))}
        <div className={styles.overlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <Sparkles className={styles.badgeIcon} />
            <Text
              size="sm"
              weight="semibold"
              color="accent"
              className={styles.badgeText}
            >
              {t('heroBadge')}
            </Text>
          </div>

          <div className={styles.titleSection}>
            <Heading
              level={1}
              variant="display"
              color="primary"
              align="center"
              spacing="tight"
              className={styles.mainTitle}
            >
              <span className={styles.titleNormal}>Agro</span>
              <span className={styles.titleAccent}>Noya</span>
            </Heading>

            <Heading
              level={2}
              variant="section"
              color="secondary"
              align="center"
              spacing="default"
              className={styles.subtitle}
            >
              {t('heroSubtitle')}
            </Heading>
          </div>

          <Text
            size="lg"
            weight="normal"
            color="tertiary"
            align="center"
            spacing="loose"
            className={styles.description}
          >
            {t('heroDescription')}
          </Text>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <Text size="2xl" weight="bold" color="accent" spacing="none">
                500+
              </Text>
              <Text size="sm" weight="medium" color="muted" spacing="none">
                {t('exploitations')}
              </Text>
            </div>

            <div className={styles.statDivider} />

            <div className={styles.stat}>
              <Text size="2xl" weight="bold" color="accent" spacing="none">
                98%
              </Text>
              <Text size="sm" weight="medium" color="muted" spacing="none">
                {t('satisfaction')}
              </Text>
            </div>

            <div className={styles.statDivider} />

            <div className={styles.stat}>
              <Text size="2xl" weight="bold" color="accent" spacing="none">
                24/7
              </Text>
              <Text size="sm" weight="medium" color="muted" spacing="none">
                {t('support')}
              </Text>
            </div>
          </div>

          <div className={styles.actions}>
            <Button
              variant="primary"
              size="large"
              className={styles.primaryButton}
            >
              <Play className={styles.buttonIcon} />
              {t('decouvrir')}
              <ArrowRight className={styles.buttonIcon} />
            </Button>

            <Button
              variant="outline"
              size="large"
              className={styles.secondaryButton}
            >
              <Zap className={styles.buttonIcon} />
              {t('solutions')}
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.indicators}>
        {heroImages.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={`${styles.indicator} ${
              index === currentSlide ? styles.indicatorActive : ''
            }`}
            aria-label={`${t('allerImage')} ${index + 1}`}
          />
        ))}
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollDot}></div>
      </div>

      <div className={styles.shine} />
    </section>
  );
};

export default Hero;