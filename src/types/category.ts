import type { Category } from '@prisma/client'

export type CategoryBasic = Category

export type CategoryWithCount = Category & {
    _count: {
        books: number
    }
}

export type CategoriesApiResponse = {
    data: Category[]
}

export type CategoryFilter = {
    categoryId?: string
    name?: string
}
