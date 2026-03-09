import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Users,
  Award,
  Globe,
  Target,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Calendar,
  Trophy,
} from 'lucide-react';

import smartFarmingImg from '../assets/smart_farming_1.jpg';
import kilenyImg from '../assets/kileny_jmaal.jpg';

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
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',
      expertise: [
        t('marieDuboisExpertise1'),
        t('marieDuboisExpertise2'),
        t('marieDuboisExpertise3'),
      ],
    },
    {
      id: 2,
      name: t('thomasMartinName'),
      role: t('thomasMartinRole'),
      description: t('thomasMartinDesc'),
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      expertise: [
        t('thomasMartinExpertise1'),
        t('thomasMartinExpertise2'),
        t('thomasMartinExpertise3'),
      ],
    },
    {
      id: 3,
      name: 'Kileny Jmaal',
      role: 'Validation Technique IA',
      description:
        "Ingénieure agronome spécialisée dans la validation des recommandations IA et l'assurance qualité des systèmes agricoles intelligents",
      image: kilenyImg,
      expertise: ['Validation IA', 'Agronomie de précision', 'Assurance qualité'],
    },
    {
      id: 4,
      name: 'Nasri Ghofran',
      role: 'Chargée de développement agronomique & partenariats communautaires',
      description:
        'Experte en développement agronomique et création de partenariats stratégiques avec les communautés agricoles locales',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      expertise: [
        'Développement agronomique',
        'Partenariats communautaires',
        'Relations agriculteurs',
      ],
    },
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
        t('foundationDetail4'),
      ],
      milestone: t('foundationMilestone'),
    },
    {
      year: 2020,
      title: t('firstProductYear'),
      description: t('firstProductDesc'),
      details: [
        t('firstProductDetail1'),
        t('firstProductDetail2'),
        t('firstProductDetail3'),
        t('firstProductDetail4'),
      ],
      milestone: t('firstProductMilestone'),
    },
    {
      year: 2021,
      title: t('techExpansionYear'),
      description: t('techExpansionDesc'),
      details: [
        t('techExpansionDetail1'),
        t('techExpansionDetail2'),
        t('techExpansionDetail3'),
        t('techExpansionDetail4'),
      ],
      milestone: t('techExpansionMilestone'),
    },
    {
      year: 2022,
      title: t('internationalGrowthYear'),
      description: t('internationalGrowthDesc'),
      details: [
        t('internationalGrowthDetail1'),
        t('internationalGrowthDetail2'),
        t('internationalGrowthDetail3'),
        t('internationalGrowthDetail4'),
      ],
      milestone: t('internationalGrowthMilestone'),
    },
    {
      year: 2023,
      title: t('marketLeadershipYear'),
      description: t('marketLeadershipDesc'),
      details: [
        t('marketLeadershipDetail1'),
        t('marketLeadershipDetail2'),
        t('marketLeadershipDetail3'),
        t('marketLeadershipDetail4'),
      ],
      milestone: t('marketLeadershipMilestone'),
    },
    {
      year: 2024,
      title: t('continuousInnovationYear'),
      description: t('continuousInnovationDesc'),
      details: [
        t('continuousInnovationDetail1'),
        t('continuousInnovationDetail2'),
        t('continuousInnovationDetail3'),
        t('continuousInnovationDetail4'),
      ],
      milestone: t('continuousInnovationMilestone'),
    },
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: t('innovationTitle'),
      description: t('innovationDesc'),
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('sustainabilityTitle'),
      description: t('sustainabilityDesc'),
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t('partnershipTitle'),
      description: t('partnershipDesc'),
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: t('excellenceTitle'),
      description: t('excellenceDesc'),
    },
  ];

  return (
    <section
      id="apropos"
      className="py-20 bg-gradient-to-br from-[#1C191F] via-[#221f26] to-[#1C191F]"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            AgroNoya
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t('aboutAgroNoyaTitle')}
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t('aboutAgroNoyaSubtitle')}
          </p>
        </div>

        {/* Mission / Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              {t('ourMissionTitle')}
            </h3>

            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              {t('ourMissionParagraph1')}
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              {t('ourMissionParagraph2')}
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-3xl transform rotate-2"></div>
            <img
              src={smartFarmingImg}
              alt={t('ourMissionTitle')}
              className="relative w-full h-80 object-cover rounded-3xl shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            {t('ourValuesTitle')}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-7 bg-white/95 dark:bg-white/95 border border-white/20 rounded-3xl shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-5 text-white shadow-lg">
                  {value.icon}
                </div>

                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h4>

                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            {t('ourHistoryTitle')}
          </h3>

          <div className="max-w-5xl mx-auto">
            {timeline.map((item, index) => (
              <div key={item.year} className="relative flex items-start mb-8">
                {/* Timeline line */}
                <div className="flex flex-col items-center mr-8">
                  <div className="w-5 h-5 bg-emerald-500 rounded-full border-4 border-[#1C191F] shadow-lg z-10"></div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-28 bg-white/15 mt-2"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center flex-wrap gap-4">
                      <span className="text-2xl font-bold text-emerald-600">
                        {item.year}
                      </span>

                      <div className="bg-slate-100 px-3 py-1 rounded-full text-sm font-semibold text-slate-700">
                        {item.milestone}
                      </div>
                    </div>

                    <button
                      onClick={() => toggleYear(item.year)}
                      className="text-emerald-600 hover:text-emerald-700 transition-colors duration-300"
                    >
                      {expandedYear === item.year ? (
                        <ChevronUp className="w-6 h-6" />
                      ) : (
                        <ChevronDown className="w-6 h-6" />
                      )}
                    </button>
                  </div>

                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h4>

                  <p className="text-slate-600 mb-4">
                    {item.description}
                  </p>

                  {expandedYear === item.year && (
                    <div className="border-t border-slate-200 pt-4 mt-4">
                      <h5 className="font-semibold text-slate-900 mb-3">
                        {t('keyAchievements')}
                      </h5>

                      <ul className="space-y-2">
                        {item.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="flex items-start text-slate-600"
                          >
                            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
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

        {/* Team */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            {t('ourTeamTitle')}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="text-center bg-white rounded-3xl shadow-xl p-6 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-slate-100 shadow-md"
                  />
                </div>

                <h4 className="text-xl font-bold text-slate-900 mb-1">
                  {member.name}
                </h4>

                <p className="text-emerald-600 font-semibold mb-3">
                  {member.role}
                </p>

                <p className="text-sm text-slate-600 mb-4 leading-relaxed min-h-[90px]">
                  {member.description}
                </p>

                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-[2rem] p-12 text-center shadow-2xl">
          <h3 className="text-3xl font-bold text-slate-900 mb-8">
            {t('agronoyaFiguresTitle')}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">2000+</div>
              <div className="text-slate-500">{t('equippedFarmsCountAbout')}</div>
            </div>

            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">15</div>
              <div className="text-slate-500">{t('countriesPresent')}</div>
            </div>

            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">50+</div>
              <div className="text-slate-500">{t('passionateExperts')}</div>
            </div>

            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">98%</div>
              <div className="text-slate-500">{t('clientSatisfactionAbout')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;