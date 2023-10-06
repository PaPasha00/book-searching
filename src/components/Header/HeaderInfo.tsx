type TypesSelect = {
    position: string;
    name: string;
}

export const CATEGORIES: TypesSelect[] = [
    { position: 'all', name: 'Все' },
    { position: 'art', name: 'Искусство' },
    { position: 'biography', name: 'Автобиография' },
    { position: 'computers', name: 'Компьютеры' },
    { position: 'history', name: 'История' },
    { position: 'medical', name: 'Медицина' },
    { position: 'poetry', name: 'Поэзия' },
]
export const SORTED: TypesSelect[] = [
    { position: 'relevance', name: 'актуальность' },
    { position: 'newest', name: 'новейшие' },
]