import React from 'react'
import { Calendar, Users } from 'lucide-react'

interface EventCardProps {
  title: string
  date: string
  count: number
  participantsLabel: string
  type?: 'past' | 'upcoming'
}

export const EventCard = ({
  title,
  date,
  count,
  participantsLabel,
  type = 'upcoming',
}: EventCardProps) => {
  const isPast = type === 'past'

  return (
    <div
      className={`group rounded-lg bg-white p-6 shadow-sm border-l-4
        transition-all duration-300 ease-out
        hover:shadow-lg hover:-translate-y-1 ${
        isPast ? 'border-neutral-400' : 'border-gdg-blue'
      }`}
    >
      <h3 className="mb-2 text-xl font-semibold text-neutral-900 transition-colors duration-300 group-hover:text-gdg-blue">
        {title}
      </h3>
      <div className="flex flex-col gap-2 text-neutral-600">
        <div className="flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
          <Calendar className="h-4 w-4 transition-colors duration-300 group-hover:text-gdg-blue" />
          <span className="text-sm">{date}</span>
        </div>
        <div className="flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
          <Users className="h-4 w-4 transition-colors duration-300 group-hover:text-gdg-blue" />
          <span className="text-sm">
            {count} {participantsLabel}
          </span>
        </div>
      </div>
    </div>
  )
}
