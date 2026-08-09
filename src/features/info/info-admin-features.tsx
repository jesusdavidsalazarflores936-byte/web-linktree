import { Card, Container, IconBadge } from '@/components/ui'
import { adminFeaturesContent, adminFeaturesHeading } from './content/admin-features.content'

export function InfoAdminFeatures() {
  return (
    <Container className="py-14 lg:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {adminFeaturesHeading.title}
        </h2>
        <p className="text-fg-muted mt-4 text-base leading-relaxed sm:text-lg">
          {adminFeaturesHeading.description}
        </p>
      </div>

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {adminFeaturesContent.map((feature, index) => (
          <li key={feature.title}>
            <Card className="h-full">
              <IconBadge icon={feature.icon} tone={index % 3 === 1 ? 'mint' : 'brand'} />
              <h3 className="mt-5 text-sm font-semibold">{feature.title}</h3>
              <p className="text-fg-muted mt-2 text-xs leading-relaxed">{feature.description}</p>
            </Card>
          </li>
        ))}
      </ul>
    </Container>
  )
}
