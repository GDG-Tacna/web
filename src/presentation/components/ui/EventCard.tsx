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
      className={`rounded-lg bg-white p-6 shadow-sm border-l-4 ${
        isPast ? 'border-neutral-400' : 'border-gdg-blue'
      }`}
    >
      <h3 className="mb-2 text-xl font-semibold text-neutral-900">{title}</h3>
      <div className="flex flex-col gap-2 text-neutral-600">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span className="text-sm">{date}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          <span className="text-sm">
            {count} {participantsLabel}
          </span>
        </div>
      </div>
    </div>
  )
}
