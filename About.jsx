import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Heart, Target, Users, Award, Clock, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

function About() {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Passion",
      description: "We believe that passion for volleyball drives excellence. Every player, coach, and member of our community shares an unwavering love for the game that motivates us to continuously improve and support each other."
    },
    {
      icon: <Target className="h-8 w-8 text-blue-500" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from training techniques to character development. Our commitment to high standards ensures that every member reaches their full potential both on and off the court."
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: "Teamwork",
      description: "Volleyball is the ultimate team sport, and we emphasize the importance of working together, supporting teammates, and building lasting relationships that extend far beyond the volleyball court."
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: "Integrity",
      description: "We conduct ourselves with honesty, respect, and sportsmanship. Our players learn to compete with honor, accept both victories and defeats gracefully, and always represent our club with pride."
    }
  ]

  const milestones = [
    {
      year: "2009",
      title: "Club Founded",
      description: "Shahi Bala Volleyball Club was established with a vision to create a premier volleyball training facility in our community."
    },
    {
      year: "2012",
      title: "First Championship",
      description: "Our senior team won their first regional championship, marking the beginning of our competitive success."
    },
    {
      year: "2015",
      title: "Youth Program Launch",
      description: "Expanded our offerings to include comprehensive youth development programs for players aged 8-18."
    },
    {
      year: "2018",
      title: "New Facility",
      description: "Opened our state-of-the-art training facility with multiple courts and modern equipment."
    },
    {
      year: "2020",
      title: "Digital Innovation",
      description: "Adapted to challenges by implementing virtual training sessions and online coaching programs."
    },
    {
      year: "2024",
      title: "500+ Members",
      description: "Reached a milestone of over 500 active members across all our programs and age groups."
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
            <h1 className="text-5xl font-bold mb-6">About Our Club</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover the story behind Shahi Bala Volleyball Club and learn about our mission 
              to develop exceptional volleyball players and outstanding individuals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Shahi Bala Volleyball Club, our mission is to provide exceptional volleyball training 
                and development opportunities for players of all ages and skill levels. We are committed 
                to fostering a supportive environment where athletes can grow not only as volleyball 
                players but as confident, disciplined, and well-rounded individuals.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe that volleyball is more than just a sport – it's a vehicle for teaching 
                life skills, building character, and creating lasting friendships. Through our 
                comprehensive programs, we aim to instill values of teamwork, perseverance, 
                respect, and excellence that will serve our members throughout their lives.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-800">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    To be the premier volleyball club in our region, recognized for developing 
                    championship-caliber players while maintaining the highest standards of 
                    sportsmanship, integrity, and community involvement. We envision a future 
                    where every member of our club achieves their personal best and contributes 
                    positively to the volleyball community and society as a whole.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape the culture of our club
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gray-100 rounded-full">
                        {value.icon}
                      </div>
                      <CardTitle className="text-2xl">{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a leading volleyball club, here are the key milestones in our history
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                            {milestone.year}
                          </Badge>
                          <Clock className="h-4 w-4 text-gray-500" />
                        </div>
                        <CardTitle className="text-xl">{milestone.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Club Statistics */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Club by the Numbers</h2>
            <p className="text-xl text-blue-100">
              Our achievements and growth over the years
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Active Members", icon: <Users className="h-8 w-8" /> },
              { number: "50+", label: "Championships", icon: <Award className="h-8 w-8" /> },
              { number: "15", label: "Years of Excellence", icon: <Clock className="h-8 w-8" /> },
              { number: "20+", label: "Professional Coaches", icon: <Target className="h-8 w-8" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4 text-yellow-400">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Facility</h2>
            <p className="text-xl text-gray-600">
              Come see our state-of-the-art training facility and meet our team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    <span>Our Location</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-700">123 Sports Complex Drive<br />City, State 12345</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Training Hours</h4>
                    <p className="text-gray-700">
                      Monday - Friday: 4:00 PM - 10:00 PM<br />
                      Saturday - Sunday: 8:00 AM - 8:00 PM
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Contact</h4>
                    <p className="text-gray-700">
                      Phone: +1 (555) 123-4567<br />
                      Email: info@shahibalavolleyball.com
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Facility Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "4 regulation-size volleyball courts",
                      "Professional-grade flooring and nets",
                      "Modern locker rooms and showers",
                      "Equipment storage and rental",
                      "Spectator seating areas",
                      "Parking for 100+ vehicles",
                      "Air conditioning and heating",
                      "First aid and medical facilities"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

