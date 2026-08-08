import { Card, Container, IconBadge, RichText } from '@/components/ui'
import { differentiatorsContent, storyContent } from './content/story.content'

export function AboutStory() {
  return (
    <Container className="grid gap-12 py-10 lg:grid-cols-2 lg:py-16">
      <div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{storyContent.title}</h2>

        <div className="mt-6 space-y-4">
          {storyContent.paragraphs.map((paragraph) => (
            <RichText
              key={paragraph.slice(0, 32)}
              text={paragraph}
              className="text-sm leading-relaxed text-fg-muted"
            />
          ))}
        </div>
      </div>

      <ul className="grid gap-5 sm:grid-cols-2">
        {differentiatorsContent.map((item, index) => (
          <li key={item.title}>
            <Card className="h-full">
              <IconBadge
                icon={item.icon}
                tone={index % 2 === 0 ? 'brand' : 'mint'}
                size="sm"
              />
              <h3 className="mt-4 text-sm font-semibold">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-fg-muted">{item.description}</p>
            </Card>
          </li>
        ))}
      </ul>
    </Container>
  )
}
