'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Palette, Ruler, Scissors } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import MaxWidthWrapper from '@/components/layouts/max-width-wrapper'

const steps = [
  { icon: Palette, title: "Choose Your Design", description: "Browse our collection and select your favorite style." },
  { icon: Ruler, title: "Select Your Yarn", description: "Pick from our premium yarn selection for your perfect piece." },
  { icon: Scissors, title: "Perfect Fit, Handcrafted for You", description: "We'll create your custom piece with care and precision." },
]

const yarnTypes = [
  { id: 'merino', name: 'Merino Wool', color: 'bg-red-200' },
  { id: 'cotton', name: 'Organic Cotton', color: 'bg-green-200' },
  { id: 'alpaca', name: 'Baby Alpaca', color: 'bg-blue-200' },
  { id: 'bamboo', name: 'Bamboo Silk', color: 'bg-purple-200' },
]

export function TailoredToYouComponent() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedYarn, setSelectedYarn] = useState('')

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length)
  }

  return (
    <MaxWidthWrapper>
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-serif text-center mb-4">Tailored to You</h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          {`At Obikels Creations, we believe that fashion should be personal. That's why we
offer a wide range of made-to-order and customized designs. From classic to
contemporary, our pieces are crafted with meticulous attention to detail to ensure a
perfect fit.`}
        </p>

        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center text-center mb-8 md:mb-0 ${
                index === currentStep ? 'text-primary' : 'text-muted-foreground'
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <step.icon className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-serif font-semibold mb-2">{step.title}</h3>
              <p className="text-sm max-w-[200px]">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <Button onClick={nextStep} className="mx-auto block mb-12">
          Next Step
        </Button>

        <div className="bg-muted p-8 rounded-lg max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-4">Choose Your Yarn</h3>
          <p className="mb-6">Select your favorite yarn type and see how it might look on a product:</p>
          <RadioGroup onValueChange={setSelectedYarn} className="grid grid-cols-2 gap-4">
            {yarnTypes.map((yarn) => (
              <div key={yarn.id} className="flex items-center space-x-2">
                <RadioGroupItem value={yarn.id} id={yarn.id} />
                <Label htmlFor={yarn.id} className="flex items-center cursor-pointer">
                  <span className={`w-6 h-6 rounded-full mr-2 ${yarn.color}`}></span>
                  {yarn.name}
                </Label>
              </div>
            ))}
          </RadioGroup>
          {selectedYarn && (
            <div className="mt-8">
              <h4 className="text-lg font-serif font-semibold mb-2">Your Selection:</h4>
              <div className="bg-background p-4 rounded-lg flex items-center">
                <span className={`w-8 h-8 rounded-full mr-4 ${yarnTypes.find(y => y.id === selectedYarn)?.color}`}></span>
                <span>{yarnTypes.find(y => y.id === selectedYarn)?.name}</span>
              </div>
              <p className="mt-4">
                Imagine your custom piece crafted with this beautiful {yarnTypes.find(y => y.id === selectedYarn)?.name.toLowerCase()}. 
                Our skilled artisans will bring your vision to life with meticulous care and attention to detail.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
    </MaxWidthWrapper>
  )
}