export type ScriptureReference = {
    citation: string
    text: string
  }
  
export type CatechismItem = {
    number: number
    section: number // New: section identifier for grouping and icon mapping
    question: string
    answer: {
      text: string
      references: ScriptureReference[]
    }[]
    topics: string[]
    originalQuestion: string
    originalAnswer: string
    video?: string
    song?: string
    color?: string
    confession?: string[]
  }

  export type Section = {
    id: number
    title: string
    icon: string
    sectionStart: number
    sectionEnd: number
  }
  