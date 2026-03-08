import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Users, Award, Globe, Target, ChevronDown, ChevronUp, Calendar, MapPin, Trophy } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();
  const [expandedYear, setExpandedYear] = useState(null);

  const toggleYear = (year) => {
    setExpandedYear(expandedYear === year ? null : year);
  };

  const team = [
    {
      id: 1,
      name: t('marieDuboisName'),
      role: t('marieDuboisRole'),
      description: t('marieDuboisDesc'),
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
      expertise: [t('marieDuboisExpertise1'), t('marieDuboisExpertise2'), t('marieDuboisExpertise3')]
    },
    {
      id: 2,
      name: t('thomasMartinName'),
      role: t('thomasMartinRole'),
      description: t('thomasMartinDesc'),
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      expertise: [t('thomasMartinExpertise1'), t('thomasMartinExpertise2'), t('thomasMartinExpertise3')]
    },
    {
      id: 3,
      name: "Kileny Jmaal",
      role: "Validation Technique IA",
      description: "Ingénieure agronome spécialisée dans la validation des recommandations IA et l'assurance qualité des systèmes agricoles intelligents",
      image: "/src/assets/kileny_jmaal.jpg",
      expertise: ["Validation IA", "Agronomie de précision", "Assurance qualité"]
    },
    {
      id: 4,
      name: "Nasri Ghofran",
      role: "Chargée de développement agronomique & partenariats communautaires",
      description: "Experte en développement agronomique et création de partenariats stratégiques avec les communautés agricoles locales",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      expertise: ["Développement agronomique", "Partenariats communautaires", "Relations agriculteurs"]
    }
  ];

  const timeline = [
    {
      year: 2019,
      title: t('foundationYear'),
      description: t('foundationDesc'),
      details: [
        t('foundationDetail1'),
        t('foundationDetail2'),
        t('foundationDetail3'),
        t('foundationDetail4')
      ],
      milestone: t('foundationMilestone')
    },
    {
      year: 2020,
      title: t('firstProductYear'),
      description: t('firstProductDesc'),
      details: [
        t('firstProductDetail1'),
        t('firstProductDetail2'),
        t('firstProductDetail3'),
        t('firstProductDetail4')
      ],
      milestone: t('firstProductMilestone')
    },
    {
      year: 2021,
      title: t('techExpansionYear'),
      description: t('techExpansionDesc'),
      details: [
        t('techExpansionDetail1'),
        t('techExpansionDetail2'),
        t('techExpansionDetail3'),
        t('techExpansionDetail4')
      ],
      milestone: t('techExpansionMilestone')
    },
    {
      year: 2022,
      title: t('internationalGrowthYear'),
      description: t('internationalGrowthDesc'),
      details: [
        t('internationalGrowthDetail1'),
        t('internationalGrowthDetail2'),
        t('internationalGrowthDetail3'),
        t('internationalGrowthDetail4')
      ],
      milestone: t('internationalGrowthMilestone')
    },
    {
      year: 2023,
      title: t('marketLeadershipYear'),
      description: t('marketLeadershipDesc'),
      details: [
        t('marketLeadershipDetail1'),
        t('marketLeadershipDetail2'),
        t('marketLeadershipDetail3'),
        t('marketLeadershipDetail4')
      ],
      milestone: t('marketLeadershipMilestone')
    },
    {
      year: 2024,
      title: t('continuousInnovationYear'),
      description: t('continuousInnovationDesc'),
      details: [
        t('continuousInnovationDetail1'),
        t('continuousInnovationDetail2'),
        t('continuousInnovationDetail3'),
        t('continuousInnovationDetail4')
      ],
      milestone: t('continuousInnovationMilestone')
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: t('innovationTitle'),
      description: t('innovationDesc')
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('sustainabilityTitle'),
      description: t('sustainabilityDesc')
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t('partnershipTitle'),
      description: t('partnershipDesc')
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: t('excellenceTitle'),
      description: t('excellenceDesc')
    }
  ];

  return (
    <section id="apropos" className="py-20" style={{ backgroundColor: '#1C191F' }}>
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("aboutAgroNoyaTitle")}
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            {t("aboutAgroNoyaSubtitle")}
          </p>
        </div>

        {/* Mission et vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="fade-in">
            <h3 className="text-3xl font-bold text-foreground mb-6">{t("ourMissionTitle")}</h3>
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              {t("ourMissionParagraph1")}
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              {t("ourMissionParagraph2")}
            </p>
          </div>
          
          <div className="slide-up">
            <img 
              src="/src/assets/smart_farming_1.jpg" 
              alt={t('ourMissionTitle')}
              className="w-full h-80 object-cover rounded-3xl shadow-2xl hover-lift"
            />
          </div>
        </div>

        {/* Nos valeurs */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12 fade-in">
            {t("ourValuesTitle")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white dark:bg-agronoya-beige border border-border-default rounded-2xl hover-lift fade-in shadow-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-agronoya-green rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-text-primary mb-3">
                  {value.title}
                </h4>
                <p className="text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section historique */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12 fade-in">
            {t("ourHistoryTitle")}
          </h3>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div 
                key={item.year}
                className={`relative flex items-start mb-8 fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Ligne de temps */}
                <div className="flex flex-col items-center mr-8">
                  <div className="w-4 h-4 bg-agronoya-green rounded-full border-4 border-white shadow-lg z-10"></div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-24 bg-agronoya-gray-light mt-2"></div>
                  )}
                </div>

                {/* Contenu */}
                <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 hover-lift">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl font-bold text-agronoya-green">{item.year}</span>
                      <div className="bg-agronoya-beige px-3 py-1 rounded-full text-sm font-semibold text-agronoya-gray-dark">
                        {item.milestone}
                      </div>
                    </div>
                    <button 
                      onClick={() => toggleYear(item.year)}
                      className="text-agronoya-green hover:text-agronoya-green-dark transition-colors duration-300"
                    >
                      {expandedYear === item.year ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                    </button>
                  </div>
                  
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-foreground mb-4">
                    {item.description}
                  </p>

                  {/* Détails expandables */}
                  {expandedYear === item.year && (
                    <div className="border-t border-agronoya-gray-light pt-4 mt-4">
                      <h5 className="font-semibold text-agronoya-gray-darker mb-3">{t('keyAchievements')}</h5>
                      <ul className="space-y-2">
                        {item.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-agronoya-gray-dark">
                            <div className="w-2 h-2 bg-agronoya-green rounded-full mr-3 flex-shrink-0"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Équipe */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12 fade-in">
            {t("ourTeamTitle")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={member.id}
                className="text-center bg-white rounded-2xl shadow-lg p-6 hover-lift fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h4>
                <p className="text-agronoya-green font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-foreground mb-4 leading-relaxed">
                  {member.description}
                </p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {member.expertise.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-agronoya-beige text-agronoya-gray-dark px-2 py-1 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistiques */}
        <div className="bg-bg-secondary border border-border-default rounded-3xl p-12 text-center fade-in shadow-sm">
          <h3 className="text-3xl font-bold text-text-primary mb-8">
            {t("agronoyaFiguresTitle")}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-agronoya-green mb-2">2000+</div>
              <div className="text-text-secondary">{t("equippedFarmsCountAbout")}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-agronoya-green mb-2">15</div>
              <div className="text-text-secondary">{t("countriesPresent")}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-agronoya-green mb-2">50+</div>
              <div className="text-text-secondary">{t("passionateExperts")}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-agronoya-green mb-2">98%</div>
              <div className="text-text-secondary">{t("clientSatisfactionAbout")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

