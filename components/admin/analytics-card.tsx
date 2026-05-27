import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface AnalyticsCardProps {
  title: string
  value: number
  subtitle?: string
  icon?: React.ReactNode
}

export function AnalyticsCard({ title, value, subtitle, icon }: AnalyticsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon && <div className="text-2xl">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
      </CardContent>
    </Card>
  )
}
