export type PageType = {
    id: number;
    image: string;
    text: string;
    date: string;
    lesson_num: number;
    title: string;
    description: string;
    author: number;
}

export type PostPageProps = {
    page:PageType,
}