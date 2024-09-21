'use client'

import { ConstructionIcon } from 'lucide-react'
import { useState, useEffect } from 'react'

export function HomePageComp() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date('2023-12-31T23:59:59').getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })

      if (difference < 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="text-center text-white p-8 rounded-lg shadow-2xl bg-black bg-opacity-50 backdrop-blur-md">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome To Obikels Creations</h1>
        <p className="text-2xl md:text-3xl mb-6">Work In Progress <ConstructionIcon/></p>
        <p className="text-xl md:text-2xl mb-8">We'll Be Live In</p>
        <div className="flex justify-center space-x-4 text-3xl md:text-4xl font-bold">
          <div>
            <span>{timeLeft.days.toString().padStart(2, '0')}</span>
            <p className="text-sm">Days</p>
          </div>
          <div>
            <span>{timeLeft.hours.toString().padStart(2, '0')}</span>
            <p className="text-sm">Hours</p>
          </div>
          <div>
            <span>{timeLeft.minutes.toString().padStart(2, '0')}</span>
            <p className="text-sm">Minutes</p>
          </div>
          <div>
            <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
            <p className="text-sm">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  )
}