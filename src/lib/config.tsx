export type Sections = {
    name: string
    slug: string
    items: {
        name: string
        slug: string
    }[]
}
export const Section: Sections[] = [
    {
        name: 'Section 1',
        slug: 'section-1',
        items: [
            { name: '1', slug: '1' },
            { name: '2', slug: '2' },
            { name: '3', slug: '3' },
            { name: '4', slug: '4' },
        ],
    },
    {
        name: 'Section 2',
        slug: 'section-2',
        items: [
            { name: '1', slug: '1' },
            { name: '2', slug: '2' },
            { name: '3', slug: '3' },
            { name: '4', slug: '4' },
            { name: '5', slug: '5' },
            { name: '6', slug: '6' },
        ],
    },
]

