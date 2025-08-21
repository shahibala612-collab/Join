import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Mail, Phone, Award, Users, Clock, Star } from 'lucide-react'
import { motion } from 'framer-motion'

// Import coach images
import coach1 from '../assets/NKxPICIsKMH0.jpg'
import coach2 from '../assets/a2119qbrNuNY.jpg'
import coach3 from '../assets/O7QZocrHmZDO.jpg'
import coach4 from '../assets/LznwksWLMODK.jpg'
import coach5 from '../assets/Jw2pRfqzMS81.jpg'
import coach6 from '../assets/vRuybHHX1bd9.jpg'

function Coaches() {
  const headCoaches = [
    {
      name: "Sarah Johnson",
      title: "Head Coach & Director",
      image: coach1,
      experience: "15 years",
      specialization: "Elite Training & Team Strategy",
      certifications: ["USA Volleyball Certified", "NFHS Certified", "SafeSport Trained"],
      achievements: [
        "Led 5 teams to state championships",
        "Former Division I college player",
        "Coach of the Year 2022, 2023"
      ],
      bio: "Sarah brings over 15 years of coaching experience and a passion for developing both athletic skills and character. She played Division I volleyball at State University and has coached teams to multiple championship victories.",
      email: "sarah@shahibalavolleyball.com",
      phone: "+1 (555) 123-4567",
      programs: ["Elite Training", "Junior Competitive"]
    },
    {
      name: "Michael Chen",
      title: "Assistant Head Coach",
      image: coach2,
      experience: "12 years",
      specialization: "Technical Skills & Player Development",
      certifications: ["USA Volleyball Certified", "IMPACT Certified", "First Aid/CPR"],
      achievements: [
        "Former professional player in Europe",
        "Developed 20+ college scholarship recipients",
        "Regional Coach of the Year 2021"
      ],
      bio: "Michael's technical expertise and international playing experience make him invaluable in developing players' fundamental skills. His patient teaching style helps players of all levels improve rapidly.",
      email: "michael@shahibalavolleyball.com",
      phone: "+1 (555) 123-4568",
      programs: ["Youth Development", "Adult Recreation"]
    }
  ]

  const assistantCoaches = [
    {
      name: "Emily Rodriguez",
      title: "Youth Program Coordinator",
      image: coach3,
      experience: "8 years",
      specialization: "Youth Development & Fundamentals",
      certifications: ["USA Volleyball Certified", "Youth Sports Specialist"],
      bio: "Emily specializes in working with young athletes, creating fun and engaging training environments that build both skills and confidence.",
      programs: ["Youth Development", "Private Coaching"]
    },
    {
      name: "David Thompson",
      title: "Beach Volleyball Coach",
      image: coach4,
      experience: "10 years",
      specialization: "Beach Volleyball & Outdoor Training",
      certifications: ["USA Beach Volleyball Certified", "Strength & Conditioning"],
      bio: "David brings extensive beach volleyball experience, having competed professionally on the AVP tour. He leads our summer beach volleyball programs.",
      programs: ["Beach Volleyball", "Elite Training"]
    },
    {
      name: "Lisa Park",
      title: "Mental Performance Coach",
      image: coach5,
      experience: "6 years",
      specialization: "Sports Psychology & Mental Training",
      certifications: ["Certified Mental Performance Consultant", "Sports Psychology Masters"],
      bio: "Lisa helps our athletes develop mental toughness, focus, and confidence. Her background in sports psychology enhances our comprehensive training approach.",
      programs: ["Elite Training", "Junior Competitive"]
    },
    {
      name: "James Wilson",
      title: "Strength & Conditioning Coach",
      image: coach6,
      experience: "9 years",
      specialization: "Athletic Performance & Injury Prevention",
      certifications: ["NSCA Certified", "Corrective Exercise Specialist", "Volleyball-Specific Training"],
      bio: "James designs and implements strength and conditioning programs specifically tailored for volleyball athletes, focusing on performance enhancement and injury prevention.",
      programs: ["Elite Training", "Junior Competitive", "Adult Recreation"]
    }
  ]

  const coachingPhilosophy = [
    {
      title: "Player-Centered Approach",
      description: "We focus on each individual player's needs, goals, and development path",
      icon: <Users className="h-8 w-8 text-blue-500" />
    },
    {
      title: "Positive Environment",
      description: "Creating a supportive atmosphere where players can learn and grow confidently",
      icon: <Star className="h-8 w-8 text-yellow-500" />
    },
    {
      title: "Continuous Learning",
      description: "Our coaches stay updated with the latest techniques and training methods",
      icon: <Award className="h-8 w-8 text-green-500" />
    },
    {
      title: "Character Development",
      description: "Building not just better players, but better people through volleyball",
      icon: <Clock className="h-8 w-8 text-purple-500" />
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Meet Our Coaches</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our experienced and passionate coaching staff is dedicated to helping every player 
              reach their full potential both on and off the volleyball court.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coaching Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Coaching Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every coach at Shahi Bala Volleyball Club shares these core principles that guide our training approach
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coachingPhilosophy.map((philosophy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-gray-100 rounded-full w-fit">
                      {philosophy.icon}
                    </div>
                    <CardTitle className="text-xl">{philosophy.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {philosophy.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Head Coaches */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Head Coaching Staff</h2>
            <p className="text-xl text-gray-600">
              Meet our experienced head coaches who lead our programs with expertise and passion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {headCoaches.map((coach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center pb-6">
                    <div className="relative mx-auto mb-6">
                      <img
                        src={coach.image}
                        alt={coach.name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-blue-200 shadow-lg"
                      />
                    </div>
                    <CardTitle className="text-2xl">{coach.name}</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600">
                      {coach.title}
                    </CardDescription>
                    <div className="flex justify-center space-x-2 mt-4">
                      <Badge variant="secondary">{coach.experience} Experience</Badge>
                      <Badge variant="outline">{coach.specialization}</Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-gray-700 leading-relaxed">{coach.bio}</p>
                    
                    {/* Certifications */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Certifications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {coach.certifications.map((cert, certIndex) => (
                          <Badge key={certIndex} variant="outline" className="text-xs">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {coach.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-center space-x-2">
                            <Award className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Programs */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Programs:</h4>
                      <div className="flex flex-wrap gap-2">
                        {coach.programs.map((program, progIndex) => (
                          <Badge key={progIndex} className="bg-blue-100 text-blue-800">
                            {program}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="pt-4 border-t">
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-700">{coach.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-700">{coach.phone}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Assistant Coaches */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialized Coaching Staff</h2>
            <p className="text-xl text-gray-600">
              Our specialized coaches bring expertise in specific areas to enhance your training experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {assistantCoaches.map((coach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="relative mx-auto mb-4">
                      <img
                        src={coach.image}
                        alt={coach.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 shadow-md"
                      />
                    </div>
                    <CardTitle className="text-xl">{coach.name}</CardTitle>
                    <CardDescription className="text-blue-600 font-medium">
                      {coach.title}
                    </CardDescription>
                    <div className="flex justify-center mt-3">
                      <Badge variant="secondary">{coach.experience} Experience</Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Specialization:</h4>
                      <p className="text-sm text-blue-600 font-medium">{coach.specialization}</p>
                    </div>

                    <p className="text-gray-700 text-sm leading-relaxed">{coach.bio}</p>
                    
                    {/* Certifications */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Certifications:</h4>
                      <div className="flex flex-wrap gap-1">
                        {coach.certifications.map((cert, certIndex) => (
                          <Badge key={certIndex} variant="outline" className="text-xs">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Programs */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Programs:</h4>
                      <div className="flex flex-wrap gap-1">
                        {coach.programs.map((program, progIndex) => (
                          <Badge key={progIndex} className="bg-blue-100 text-blue-800 text-xs">
                            {program}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Train with the Best Coaches
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Our experienced coaching staff is ready to help you achieve your volleyball goals. 
              Join our programs and experience the difference that expert coaching makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                <a href="/admission">
                  Start Training Today
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-800">
                <a href="/programs">
                  View Our Programs
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Coaches

