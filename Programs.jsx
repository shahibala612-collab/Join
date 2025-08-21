import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Clock, Users, Target, Star, Calendar, DollarSign, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

function Programs() {
  const programs = [
    {
      title: "Youth Development Program",
      ageGroup: "Ages 8-14",
      level: "Beginner to Intermediate",
      duration: "3 months",
      schedule: "Tuesdays & Thursdays, 4:00-5:30 PM",
      price: "$120/month",
      description: "Our youth program focuses on fundamental skills development, teamwork, and fun. Players learn basic techniques including serving, passing, setting, and hitting while developing a love for the game.",
      features: [
        "Basic volleyball fundamentals",
        "Age-appropriate training methods",
        "Character development focus",
        "Small group instruction",
        "Fun games and activities",
        "Parent progress updates"
      ],
      color: "bg-green-500",
      icon: "👶"
    },
    {
      title: "Junior Competitive Program",
      ageGroup: "Ages 15-18",
      level: "Intermediate to Advanced",
      duration: "6 months",
      schedule: "Mon, Wed, Fri, 5:00-7:00 PM",
      price: "$180/month",
      description: "Designed for high school players who want to compete at higher levels. This program emphasizes advanced techniques, tactical understanding, and competitive play preparation.",
      features: [
        "Advanced skill development",
        "Competitive match preparation",
        "Position-specific training",
        "Mental toughness coaching",
        "Tournament participation",
        "College recruitment guidance"
      ],
      color: "bg-blue-500",
      icon: "🏐"
    },
    {
      title: "Adult Recreation League",
      ageGroup: "Ages 18+",
      level: "All Levels",
      duration: "Ongoing",
      schedule: "Evenings & Weekends",
      price: "$100/month",
      description: "Perfect for adults who want to stay active, learn volleyball, or return to the sport. Our recreational league offers a welcoming environment for players of all skill levels.",
      features: [
        "Flexible scheduling options",
        "Mixed skill level teams",
        "Social and competitive play",
        "Equipment provided",
        "Regular league games",
        "Social events and tournaments"
      ],
      color: "bg-purple-500",
      icon: "👥"
    },
    {
      title: "Elite Training Program",
      ageGroup: "Ages 16+",
      level: "Advanced/Elite",
      duration: "12 months",
      schedule: "Daily training available",
      price: "$300/month",
      description: "Our most intensive program for serious athletes aiming for college scholarships or professional play. Includes personalized training plans and advanced performance analysis.",
      features: [
        "Personalized training plans",
        "Video analysis sessions",
        "Strength and conditioning",
        "Mental performance coaching",
        "College showcase events",
        "Professional development pathway"
      ],
      color: "bg-red-500",
      icon: "🏆"
    },
    {
      title: "Beach Volleyball Program",
      ageGroup: "Ages 14+",
      level: "Intermediate to Advanced",
      duration: "4 months (Summer)",
      schedule: "Weekends, 9:00 AM-12:00 PM",
      price: "$150/month",
      description: "Experience the excitement of beach volleyball with specialized training for the sand court. Learn the unique skills and strategies required for this dynamic variant of the sport.",
      features: [
        "Sand court techniques",
        "2v2 gameplay strategies",
        "Outdoor training environment",
        "Tournament preparation",
        "Specialized equipment training",
        "Beach volleyball tournaments"
      ],
      color: "bg-yellow-500",
      icon: "🏖️"
    },
    {
      title: "Private Coaching",
      ageGroup: "All Ages",
      level: "All Levels",
      duration: "Flexible",
      schedule: "By appointment",
      price: "$80/hour",
      description: "One-on-one coaching sessions tailored to individual needs and goals. Perfect for players who want personalized attention and accelerated skill development.",
      features: [
        "Individualized instruction",
        "Flexible scheduling",
        "Customized training plans",
        "Rapid skill improvement",
        "Position-specific coaching",
        "Performance goal setting"
      ],
      color: "bg-indigo-500",
      icon: "🎯"
    }
  ]

  const trainingFocus = [
    {
      title: "Technical Skills",
      description: "Master fundamental and advanced volleyball techniques",
      icon: <Target className="h-8 w-8 text-blue-500" />
    },
    {
      title: "Physical Conditioning",
      description: "Build strength, agility, and endurance specific to volleyball",
      icon: <Star className="h-8 w-8 text-green-500" />
    },
    {
      title: "Mental Toughness",
      description: "Develop focus, confidence, and competitive mindset",
      icon: <Users className="h-8 w-8 text-purple-500" />
    },
    {
      title: "Team Strategy",
      description: "Learn tactical play and team coordination",
      icon: <Clock className="h-8 w-8 text-red-500" />
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
            <h1 className="text-5xl font-bold mb-6">Training Programs</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover our comprehensive range of volleyball programs designed for players of all ages and skill levels. 
              From beginners to elite athletes, we have the perfect program to help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Training Focus Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Training Focus</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every program incorporates these key elements to ensure comprehensive player development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingFocus.map((focus, index) => (
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
                      {focus.icon}
                    </div>
                    <CardTitle className="text-xl">{focus.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {focus.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Program</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the perfect program that matches your age, skill level, and volleyball goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{program.icon}</div>
                      <div className={`px-3 py-1 rounded-full text-white text-sm font-medium ${program.color}`}>
                        {program.level}
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-2">{program.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">{program.ageGroup}</Badge>
                      <Badge variant="outline">{program.duration}</Badge>
                    </div>
                    <CardDescription className="text-gray-700 leading-relaxed">
                      {program.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Schedule and Price */}
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-5 w-5 text-blue-600" />
                        <span className="text-sm text-gray-700">{program.schedule}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-5 w-5 text-green-600" />
                        <span className="text-sm font-semibold text-gray-900">{program.price}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Program Features:</h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <Button asChild className="w-full">
                        <Link to="/admission">
                          Enroll Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Why Choose Our Programs?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Expert Coaching Staff</h4>
                    <p className="text-blue-100">Our certified coaches bring years of playing and coaching experience at all levels.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Progressive Development</h4>
                    <p className="text-blue-100">Structured programs that build skills systematically from fundamentals to advanced techniques.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold mb-1">State-of-the-Art Facilities</h4>
                    <p className="text-blue-100">Train in our modern facility with professional-grade courts and equipment.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Flexible Options</h4>
                    <p className="text-blue-100">Multiple program options and scheduling to fit your lifestyle and commitments.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-blue-100 mb-6">
                Join thousands of players who have improved their skills and achieved their volleyball goals with us. 
                Contact us today to learn more about our programs or to schedule a trial session.
              </p>
              <div className="space-y-4">
                <Button asChild size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  <Link to="/admission">
                    Apply Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full border-white text-white hover:bg-white hover:text-blue-800">
                  <Link to="/coaches">
                    Meet Our Coaches
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Programs

