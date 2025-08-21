import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Checkbox } from '@/components/ui/checkbox.jsx'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, User, Mail, Phone, Calendar, MapPin, FileText, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'

function Admission() {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    
    // Address Information
    address: '',
    city: '',
    state: '',
    zipCode: '',
    
    // Program Selection
    program: '',
    skillLevel: '',
    previousExperience: '',
    
    // Emergency Contact
    emergencyName: '',
    emergencyPhone: '',
    emergencyRelation: '',
    
    // Medical Information
    medicalConditions: '',
    medications: '',
    allergies: '',
    
    // Additional Information
    goals: '',
    howHeard: '',
    
    // Agreements
    termsAccepted: false,
    waiverAccepted: false,
    photoConsent: false
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const programs = [
    { value: 'youth-development', label: 'Youth Development Program (Ages 8-14)' },
    { value: 'junior-competitive', label: 'Junior Competitive Program (Ages 15-18)' },
    { value: 'adult-recreation', label: 'Adult Recreation League (Ages 18+)' },
    { value: 'elite-training', label: 'Elite Training Program (Ages 16+)' },
    { value: 'beach-volleyball', label: 'Beach Volleyball Program (Ages 14+)' },
    { value: 'private-coaching', label: 'Private Coaching (All Ages)' }
  ]

  const skillLevels = [
    { value: 'beginner', label: 'Beginner - New to volleyball' },
    { value: 'intermediate', label: 'Intermediate - Some experience' },
    { value: 'advanced', label: 'Advanced - Competitive experience' },
    { value: 'elite', label: 'Elite - High-level competitive experience' }
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Required fields validation
    const requiredFields = [
      'firstName', 'lastName', 'email', 'phone', 'dateOfBirth', 'gender',
      'address', 'city', 'state', 'zipCode', 'program', 'skillLevel',
      'emergencyName', 'emergencyPhone', 'emergencyRelation'
    ]

    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required'
      }
    })

    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Phone validation
    if (formData.phone && !/^\+?[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    // Agreement validation
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = 'You must accept the terms and conditions'
    }

    if (!formData.waiverAccepted) {
      newErrors.waiverAccepted = 'You must accept the liability waiver'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      // In a real application, you would send this data to your backend
      console.log('Form submitted:', formData)
      setIsSubmitted(true)
    } else {
      // Scroll to first error
      const firstErrorField = document.querySelector('.error-field')
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="max-w-md mx-auto text-center">
            <CardHeader>
              <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-green-800">Application Submitted!</CardTitle>
              <CardDescription>
                Thank you for your interest in joining Shahi Bala Volleyball Club.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                We have received your application and will review it within 2-3 business days. 
                You will receive an email confirmation shortly.
              </p>
              <p className="text-gray-700">
                Our team will contact you to schedule a trial session and discuss the next steps.
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                className="w-full"
              >
                Submit Another Application
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Join Our Club</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to start your volleyball journey? Complete our admission form below and take the first step 
              towards becoming part of the Shahi Bala Volleyball Club family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our simple 3-step process to get you started
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                step: "1",
                title: "Complete Application",
                description: "Fill out the form below with your information and program preferences"
              },
              {
                step: "2",
                title: "Review & Contact",
                description: "We'll review your application and contact you within 2-3 business days"
              },
              {
                step: "3",
                title: "Trial Session",
                description: "Attend a trial session to experience our training and meet the team"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mx-auto mb-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Membership Application</CardTitle>
                <CardDescription>
                  Please fill out all required fields marked with an asterisk (*)
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <User className="h-5 w-5 mr-2 text-blue-600" />
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className={errors.firstName ? 'error-field' : ''}>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className={errors.firstName ? 'border-red-500' : ''}
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.firstName}
                          </p>
                        )}
                      </div>
                      
                      <div className={errors.lastName ? 'error-field' : ''}>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className={errors.lastName ? 'border-red-500' : ''}
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.lastName}
                          </p>
                        )}
                      </div>
                      
                      <div className={errors.email ? 'error-field' : ''}>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className={errors.email ? 'border-red-500' : ''}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                      
                      <div className={errors.phone ? 'error-field' : ''}>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className={errors.phone ? 'border-red-500' : ''}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.phone}
                          </p>
                        )}
                      </div>
                      
                      <div className={errors.dateOfBirth ? 'error-field' : ''}>
                        <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                        <Input
                          id="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                          className={errors.dateOfBirth ? 'border-red-500' : ''}
                        />
                        {errors.dateOfBirth && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.dateOfBirth}
                          </p>
                        )}
                      </div>
                      
                      <div className={errors.gender ? 'error-field' : ''}>
                        <Label>Gender *</Label>
                        <RadioGroup
                          value={formData.gender}
                          onValueChange={(value) => handleInputChange('gender', value)}
                          className="flex space-x-4 mt-2"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="male" id="male" />
                            <Label htmlFor="male">Male</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="female" id="female" />
                            <Label htmlFor="female">Female</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="other" id="other" />
                            <Label htmlFor="other">Other</Label>
                          </div>
                        </RadioGroup>
                        {errors.gender && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.gender}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Address Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                      Address Information
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div className={errors.address ? 'error-field' : ''}>
                        <Label htmlFor="address">Street Address *</Label>
                        <Input
                          id="address"
                          value={formData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          className={errors.address ? 'border-red-500' : ''}
                        />
                        {errors.address && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.address}
                          </p>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className={errors.city ? 'error-field' : ''}>
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            value={formData.city}
                            onChange={(e) => handleInputChange('city', e.target.value)}
                            className={errors.city ? 'border-red-500' : ''}
                          />
                          {errors.city && (
                            <p className="text-red-500 text-sm mt-1 flex items-center">
                              <AlertCircle className="h-4 w-4 mr-1" />
                              {errors.city}
                            </p>
                          )}
                        </div>
                        
                        <div className={errors.state ? 'error-field' : ''}>
                          <Label htmlFor="state">State *</Label>
                          <Input
                            id="state"
                            value={formData.state}
                            onChange={(e) => handleInputChange('state', e.target.value)}
                            className={errors.state ? 'border-red-500' : ''}
                          />
                          {errors.state && (
                            <p className="text-red-500 text-sm mt-1 flex items-center">
                              <AlertCircle className="h-4 w-4 mr-1" />
                              {errors.state}
                            </p>
                          )}
                        </div>
                        
                        <div className={errors.zipCode ? 'error-field' : ''}>
                          <Label htmlFor="zipCode">ZIP Code *</Label>
                          <Input
                            id="zipCode"
                            value={formData.zipCode}
                            onChange={(e) => handleInputChange('zipCode', e.target.value)}
                            className={errors.zipCode ? 'border-red-500' : ''}
                          />
                          {errors.zipCode && (
                            <p className="text-red-500 text-sm mt-1 flex items-center">
                              <AlertCircle className="h-4 w-4 mr-1" />
                              {errors.zipCode}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Program Selection */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-blue-600" />
                      Program Selection
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className={errors.program ? 'error-field' : ''}>
                        <Label htmlFor="program">Preferred Program *</Label>
                        <Select value={formData.program} onValueChange={(value) => handleInputChange('program', value)}>
                          <SelectTrigger className={errors.program ? 'border-red-500' : ''}>
                            <SelectValue placeholder="Select a program" />
                          </SelectTrigger>
                          <SelectContent>
                            {programs.map((program) => (
                              <SelectItem key={program.value} value={program.value}>
                                {program.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.program && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.program}
                          </p>
                        )}
                      </div>
                      
                      <div className={errors.skillLevel ? 'error-field' : ''}>
                        <Label htmlFor="skillLevel">Skill Level *</Label>
                        <Select value={formData.skillLevel} onValueChange={(value) => handleInputChange('skillLevel', value)}>
                          <SelectTrigger className={errors.skillLevel ? 'border-red-500' : ''}>
                            <SelectValue placeholder="Select your skill level" />
                          </SelectTrigger>
                          <SelectContent>
                            {skillLevels.map((level) => (
                              <SelectItem key={level.value} value={level.value}>
                                {level.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.skillLevel && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.skillLevel}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <Label htmlFor="previousExperience">Previous Volleyball Experience</Label>
                      <Textarea
                        id="previousExperience"
                        value={formData.previousExperience}
                        onChange={(e) => handleInputChange('previousExperience', e.target.value)}
                        placeholder="Please describe any previous volleyball experience, teams played for, positions, etc."
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Emergency Contact */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Phone className="h-5 w-5 mr-2 text-blue-600" />
                      Emergency Contact
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className={errors.emergencyName ? 'error-field' : ''}>
                        <Label htmlFor="emergencyName">Contact Name *</Label>
                        <Input
                          id="emergencyName"
                          value={formData.emergencyName}
                          onChange={(e) => handleInputChange('emergencyName', e.target.value)}
                          className={errors.emergencyName ? 'border-red-500' : ''}
                        />
                        {errors.emergencyName && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.emergencyName}
                          </p>
                        )}
                      </div>
                      
                      <div className={errors.emergencyPhone ? 'error-field' : ''}>
                        <Label htmlFor="emergencyPhone">Contact Phone *</Label>
                        <Input
                          id="emergencyPhone"
                          value={formData.emergencyPhone}
                          onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                          className={errors.emergencyPhone ? 'border-red-500' : ''}
                        />
                        {errors.emergencyPhone && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.emergencyPhone}
                          </p>
                        )}
                      </div>
                      
                      <div className={errors.emergencyRelation ? 'error-field' : ''}>
                        <Label htmlFor="emergencyRelation">Relationship *</Label>
                        <Input
                          id="emergencyRelation"
                          value={formData.emergencyRelation}
                          onChange={(e) => handleInputChange('emergencyRelation', e.target.value)}
                          placeholder="e.g., Parent, Spouse, Friend"
                          className={errors.emergencyRelation ? 'border-red-500' : ''}
                        />
                        {errors.emergencyRelation && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.emergencyRelation}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Medical Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Medical Information</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="medicalConditions">Medical Conditions</Label>
                        <Textarea
                          id="medicalConditions"
                          value={formData.medicalConditions}
                          onChange={(e) => handleInputChange('medicalConditions', e.target.value)}
                          placeholder="Please list any medical conditions we should be aware of"
                          rows={2}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="medications">Current Medications</Label>
                        <Textarea
                          id="medications"
                          value={formData.medications}
                          onChange={(e) => handleInputChange('medications', e.target.value)}
                          placeholder="Please list any medications you are currently taking"
                          rows={2}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="allergies">Allergies</Label>
                        <Textarea
                          id="allergies"
                          value={formData.allergies}
                          onChange={(e) => handleInputChange('allergies', e.target.value)}
                          placeholder="Please list any allergies (food, medication, environmental, etc.)"
                          rows={2}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="goals">Volleyball Goals</Label>
                        <Textarea
                          id="goals"
                          value={formData.goals}
                          onChange={(e) => handleInputChange('goals', e.target.value)}
                          placeholder="What are your goals for joining our volleyball club?"
                          rows={3}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="howHeard">How did you hear about us?</Label>
                        <Input
                          id="howHeard"
                          value={formData.howHeard}
                          onChange={(e) => handleInputChange('howHeard', e.target.value)}
                          placeholder="e.g., Website, Friend, Social Media, etc."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Agreements */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Agreements & Consent</h3>
                    <div className="space-y-4">
                      <div className={`flex items-start space-x-2 ${errors.termsAccepted ? 'error-field' : ''}`}>
                        <Checkbox
                          id="termsAccepted"
                          checked={formData.termsAccepted}
                          onCheckedChange={(checked) => handleInputChange('termsAccepted', checked)}
                        />
                        <div className="grid gap-1.5 leading-none">
                          <Label htmlFor="termsAccepted" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            I accept the terms and conditions *
                          </Label>
                          <p className="text-xs text-muted-foreground">
                            I agree to abide by the club rules, policies, and code of conduct.
                          </p>
                        </div>
                      </div>
                      {errors.termsAccepted && (
                        <p className="text-red-500 text-sm flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.termsAccepted}
                        </p>
                      )}
                      
                      <div className={`flex items-start space-x-2 ${errors.waiverAccepted ? 'error-field' : ''}`}>
                        <Checkbox
                          id="waiverAccepted"
                          checked={formData.waiverAccepted}
                          onCheckedChange={(checked) => handleInputChange('waiverAccepted', checked)}
                        />
                        <div className="grid gap-1.5 leading-none">
                          <Label htmlFor="waiverAccepted" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            I accept the liability waiver *
                          </Label>
                          <p className="text-xs text-muted-foreground">
                            I understand the risks involved in volleyball activities and release the club from liability.
                          </p>
                        </div>
                      </div>
                      {errors.waiverAccepted && (
                        <p className="text-red-500 text-sm flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.waiverAccepted}
                        </p>
                      )}
                      
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="photoConsent"
                          checked={formData.photoConsent}
                          onCheckedChange={(checked) => handleInputChange('photoConsent', checked)}
                        />
                        <div className="grid gap-1.5 leading-none">
                          <Label htmlFor="photoConsent" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Photo/Video Consent
                          </Label>
                          <p className="text-xs text-muted-foreground">
                            I consent to the use of photos/videos for promotional purposes (optional).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button type="submit" size="lg" className="w-full">
                      Submit Application
                    </Button>
                    <p className="text-sm text-gray-600 mt-2 text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Admission

