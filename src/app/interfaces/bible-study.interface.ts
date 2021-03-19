export interface Lesson {
    id: string,
    title: string,
    passage: string,
    url: string,
    class: string
}

export interface CurrentLessonTheme {
    refPassage: string,
    currLessonSubject: string,
    christConnection: string,
    currLessonSummary: string
}