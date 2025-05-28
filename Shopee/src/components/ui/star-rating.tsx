import { useState } from 'react'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Props {
  maxStars?: number
  initialRating?: number
  onRatingChange?: (rating: number) => void
  size?: number
  className?: string
  disabled?: boolean
  showText?: boolean
}

export default function StarRating({
  maxStars = 5,
  initialRating = 0,
  onRatingChange,
  size = 24,
  className = '',
  disabled = false,
  showText = false,
}: Props) {
  const [rating, setRating] = useState<number>(initialRating)
  const [hoverRating, setHoverRating] = useState<number>(0)

  const handleStarClick = (value: number): void => {
    if (disabled) return
    setRating(value)
    onRatingChange?.(value)
  }

  const handleStarHover = (value: number): void => {
    if (disabled) return
    setHoverRating(value)
  }

  const handleMouseLeave = (): void => {
    if (disabled) return
    setHoverRating(0)
  }

  const getRatingText = (rating: number): string => {
    if (rating === 0) return 'Chưa đánh giá'
    if (rating <= 1) return 'Rất tệ'
    if (rating <= 2) return 'Tệ'
    if (rating <= 3) return 'Bình thường'
    if (rating <= 4) return 'Tốt'
    return 'Xuất sắc'
  }

  return (
    <div className={cn('flex flex-col space-y-2', className)}>
      <div className="flex space-x-1" onMouseLeave={handleMouseLeave}>
        {[...Array(maxStars)].map((_, index) => {
          const starValue = index + 1
          const isActive = starValue <= (hoverRating || rating)

          return (
            <button
              key={index}
              type="button"
              className={cn(
                'transition-all duration-200 ease-in-out transform',
                // disabled ? 'cursor-not-allowed' : 'cursor-pointer hover:scale-110',
                // 'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded',
              )}
              onClick={() => handleStarClick(starValue)}
              onMouseEnter={() => handleStarHover(starValue)}
              disabled={disabled}
              aria-label={`Đánh giá ${starValue} sao`}
            >
              <Star
                color="#facc15"
                size={size}
                className={cn(
                  'transition-colors duration-200',
                  isActive
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'fill-gray-200 text-gray-200 hover:fill-yellow-200 hover:text-yellow-200',
                )}
              />
            </button>
          )
        })}
      </div>

      {showText && (
        <div className="text-center">
          <p className="text-sm font-medium text-gray-700">{getRatingText(hoverRating || rating)}</p>
          <p className="text-xs text-gray-500">
            {hoverRating || rating}/{maxStars} sao
          </p>
        </div>
      )}
    </div>
  )
}
